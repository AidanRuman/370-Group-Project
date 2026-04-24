import * as SQLite from "expo-sqlite";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface HistoricalEvent {
  title: string;
  description: string;
  month: number; // 1-12
  day: number;   // 1-31
  year: number;  // negative = BCE, positive = CE
}

// ─── Seed Data ────────────────────────────────────────────────────────────────

const SEED_EVENTS = [
 
  // Bronze Age Greece
  { title: "Fall of Troy (Traditional)", description: "Greek forces sack Troy with the legendary wooden horse, ending the Trojan War.", month: 4, day: 24, year: -1184 },
  // Archaic & Classical Greece
  { title: "Founding of Rome (Traditional)", description: "According to Roman tradition, Romulus founds the city of Rome on the Palatine Hill.", month: 4, day: 21, year: -753 },
  { title: "Battle of Marathon", description: "Athenian forces defeat the Persian army at Marathon, halting the first Persian invasion of Greece.", month: 9, day: 12, year: -490 },
  { title: "Battle of Thermopylae", description: "King Leonidas and 300 Spartans hold the pass against the Persian army.", month: 8, day: 11, year: -480 },
  { title: "Trial and Death of Socrates", description: "Socrates is tried for impiety and corrupting the youth of Athens, found guilty, and executed by hemlock.", month: 2, day: 15, year: -399 },
  { title: "Battle of Chaeronea", description: "Philip II of Macedon defeats a Greek alliance at Chaeronea, ending Greek city-state independence.", month: 8, day: 2, year: -338 },
  // Roman Republic
  { title: "Assassination of Julius Caesar", description: "Roman dictator Julius Caesar is stabbed 23 times on the Ides of March in the Senate.", month: 3, day: 15, year: -44 },
  // Roman Empire
  { title: "Augustus Becomes First Roman Emperor", description: "The Senate grants Octavian the title Augustus, beginning the Roman Principate and the Pax Romana, signifying the end of the Roman Republic.", month: 1, day: 16, year: -27 },
  { title: "Battle of Teutoburg Forest", description: "Germanic tribes under Arminius destroy three Roman legions, halting Roman expansion east of the Rhine, the greatest loss in Roman military history.", month: 9, day: 9, year: 9 },
  { title: "Eruption of Vesuvius", description: "Mount Vesuvius erupts catastrophically, burying Pompeii and Herculaneum under volcanic ash.", month: 8, day: 24, year: 79 },
];


let db: SQLite.SQLiteDatabase | null = null;

export async function getDatabase(): Promise<SQLite.SQLiteDatabase> {
  if (!db) {
    db = await SQLite.openDatabaseAsync("tourDeLH.db");

    await db.execAsync(`

      CREATE TABLE IF NOT EXISTS historical_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        month INTEGER NOT NULL,
        day INTEGER NOT NULL,
        year INTEGER NOT NULL
      );
    `);

    // Seed events only once
    const count = await db.getFirstAsync<{ total: number }>(
      "SELECT COUNT(*) as total FROM historical_events;"
    );
    if (count && count.total === 0) {
      for (const event of SEED_EVENTS) {
        await db.runAsync(
          "INSERT INTO historical_events (title, description, month, day, year) VALUES (?, ?, ?, ?, ?);",
          [event.title, event.description, event.month, event.day, event.year]
        );
      }
    }
  }
  return db;
}

// ─── Historical Event Helpers ─────────────────────────────────────────────────

/** Returns all events whose month/day match today's date. */
export async function getTodaysAnniversaryEvents(): Promise<HistoricalEvent[]> {
  const database = await getDatabase();
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return database.getAllAsync<HistoricalEvent>(
    "SELECT * FROM historical_events WHERE month = ? AND day = ?;",
    [month, day]
  );
}

/** Returns every historical event sorted chronologically. */
export async function getAllHistoricalEvents(): Promise<HistoricalEvent[]> {
  const database = await getDatabase();
  return database.getAllAsync<HistoricalEvent>(
    "SELECT * FROM historical_events ORDER BY year ASC, month ASC, day ASC;"
  );
}
