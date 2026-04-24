# TourDeLiteraeHumaniores

A React Native (Expo) app that brings classical history to life by notifying users of major historical anniversaries from the classical period (3000 BCE – 323 CE), and lets you explore key locations and figures in philosophy and history.

---

## Features

- **Anniversary Notifications:**
  - On app startup, checks for major historical events whose anniversary is today and sends a push notification (Expo Notifications + SQLite).
- **Historical Database:**
  - Local SQLite database of classical events, including only those with known dates (e.g., Battle of Marathon, Death of Socrates, Eruption of Vesuvius).
- **Philosophy & History Explorer:**
  - Browse locations and people by area of interest (e.g., Philosophy, Classics) with expandable blurbs.
- **Modern UI:**
  - Themed with blues and neutrals for a clean, readable look.

---

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the app**
   ```bash
   npx expo
   ```
3. **Test notifications**
   - Make sure to allow notification permissions when prompted.

---

## Project Structure

- `app/` — Main screens and navigation
- `data/` — Data for locations and people
- `services/database.ts` — SQLite setup and event seeding
- `services/notifications.ts` — Notification logic

---

## Customization

- **Add events:** Edit `services/database.ts` and add to the `SEED_EVENTS` array.
- **Change theme:** Update colors in your StyleSheet (see `philosophy.tsx` for an example).

---
