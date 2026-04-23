export interface Locations {
  id: number;
  // aoi = area of interest
  aoi: string;
  name: string;
  latitude: number;
  longitude: number;
  blurb: string;
}

export const locations_for_use: Locations[] = [
  {
    id: 1,
    aoi: "Classics",
    name: "The Colchis, the land of the Golden Fleece and Medea",
    latitude: 42.2774,
    longitude: 42.7054,
    blurb:"In Mythology the Colchis is best known from the story of Jason and the Argonauts. During Jason's travels, he was to retrieve the Golden Fleece from the divine ram that lived in the Colchis and guarded by a serpent. The Colchis is also home to the Greek witch Medea, who assisted Jason in his task by betraying her father. After Jason completed his task, Medea fled her homeland with him, killing her brother to ensure their getaway.",
  },
  {
    id: 2,
    aoi: "Classics",
    name: "The Temple of Delphi",
    latitude: 38.4822,
    longitude: 22.5011,
    blurb: "In mythology and Greek history, the Temple of Delphi was the location of the most prominent Oracle of Apollo. Headed by the Pythia, the oracle would receive Heroes and Kings asking for knowledge, and she would give them prophecies of the future. The most famous prophecy comes from Herodotus’ History and was given to King Croesus of Lydia seeking to secure his reign and protect his kingdom from the Persians and the oracle stated “If you cross the Halys River, a great empire will fall.” He interpreted the oracle as the Persian empire will fall, but tragically, it was his kingdom that fell in the end.",
  },
  {
    id: 3,
    aoi: "Classics",
    name: "The River Styx",
    latitude: 37.9837,
    longitude: 22.2025,
    blurb: "One of the five rivers to the underworld, and the most famous, is the River Styx. Also known as the river of Hate, it separates the living from the dead, and the Gods swear binding oath upon its water. The goddess of the river, known by the same name, Styx, is a daughter of the Titans and sided with the Olympians in the war her parents generation, and because of this Zeus honored her by allowing the oaths of the gods to be sworn by her water. The most prominent myth involving the river comes from Statius' Achilleid, which involves the Greek hero Achilles and his mother. In the story Achilles is taken to the river by his mother as an infant, and is dipped into the river in attempts to make him immortal, however, being held by her thumb and forefinger, his heel remained vulnerable.",
  },
  {
    id: 4,
    aoi: "Classics",
    name: "The Battle of Marathon",
    latitude: 38.118,
    longitude: 23.9783,
    blurb:
      "The Battle of Marathon was fought in 490 BCE between the Athenians and the Persians during the First Persian War. The Athenians employed a strategic formation that allowed them to outflank the larger Persian army and despite being outnumbered, the Athenians achieved a decisive victory, with only 192 dead on the Athenian side and 6,400 on the Persian side, marking a significant turning point in the War. The battle is famously associated with the legend of Pheidippides, who is said to have run from Marathon to Athens to deliver news of the victory, inspiring the modern marathon",
  },
  {
    id: 5,
    aoi: "Classics",
    name: "The Sicilian Expedition",
    latitude: 37.0833,
    longitude: 15.2833,
    blurb: "The Sicilian Expedition was a disastrous Athenian military campaign during the Peloponnesian War, launched in 415 BCE with the aim of conquering the city-state of Syracuse. The expedition ended in a catastrophic defeat for Athens, with the entire Athenian fleet destroyed and thousands of soldiers killed or captured, marking a significant turning point in the war and contributing to Athens' eventual downfall.",
  },
  {
    id: 6,
    aoi: "Classics",
    name: "The City of Carthage",
    latitude: 36.8528,
    longitude: 10.3233,
    blurb: "Carthage was an ancient city located in present-day Tunisia, founded by Phoenician settlers. It grew to become a powerful maritime empire and a major rival to Rome, engaging in a series of conflicts known as the Punic Wars. Carthage was renowned for its wealth, naval prowess, and strategic location, but it ultimately fell to Rome in 146 BCE after a brutal siege, leading to the city's destruction and the end of Carthaginian civilization.",

  },
  {
    id: 7,
    aoi: "Philosophy",
    name: "The Lyceum",
    latitude: 37.9711,
    longitude: 23.7394,
    blurb: "",
  },
  {
    id: 8,
    aoi: "Philosophy",
    name: "The Prison of Socrates",
    latitude: 37.9694,
    longitude: 23.721,
    blurb: "",
  },
  {
    id: 9,
    aoi: "Philosophy",
    name: "Florence, Home of Machiavelli",
    latitude: 43.77,
    longitude: 11.2577,
    blurb: "",
  },
  {
    id: 10,
    aoi: "Classics",
    name: "Teutoburg Forest",
    latitude: 51.9,
    longitude: 8.8167,
    blurb:
      "The Teutoburg Forest is the location of a major battle in Roman history, where in 9 CE, three Roman legions, betweem 15-20,000 soldiers, were ambushed by Germanic tribes. The battle was a devastating loss for the Romans, with nearly the entire force being wiped out. The defeat halted Roman expansion into Germania and lead to a more defensive position along the Rhine River and is considered one of the greatest military disasters in Roman history.",
  },
  {
    id: 11,
    aoi: "Philosophers",
    name: "Socarates/Plato",
    latitude: 37.9694,
    longitude: 23.721,
    blurb: "Socrates and Plato are one of the most influential and studied philosophers of all time. Their influence on critical thinking and philosophy can be seen throughout society and other works by philosophers. While it is unknown which works are Socarates's thinking or Plato's thinking, it is confirmed that both existed and that Plato was the student who took notes during Socarates's classes",
  },
  {
    id: 12,
    aoi: "Philosophers",
    name: "Aristotle",
    latitude: 37.9694,
    longitude: 23.721,
    blurb: "Lived around the same time as Plato and Socarates, yet have very different view points and founded an entirly different school of thought.",
  },
  {
    id: 13,
    aoi: "Philosophers",
    name: "machiavelli",
    latitude: 37.9694,
    longitude: 23.721,
    blurb: "A promenit itailian philosopher. His most influental work, the Prince, can be seen as either a guidebook on how to rule or a critque of monarchy and the status quo, how you read it is up to you.",
  },
  {
    id: 14,
    aoi: "Philosophers",
    name: "Cicero",
    latitude: 37.9694,
    longitude: 23.721,
    blurb: "Marcus Tullius Cicero (106-43 BCE) is best known to posterity as a prominent statesman and orator in the tumultuous period of the late Roman republic. As well as being a leading political actor of his time, he also wrote voluminously.",
  },
  {
    id: 15,
    aoi: "Philosophers",
    name: "Thomas Aquinas",
    latitude: 37.9694,
    longitude: 23.721,
    blurb: "Between antiquity and modernity stands Thomas Aquinas (ca. 1225-1274). The greatest figure of thirteenth-century Europe in the two preeminent sciences of the era, philosophy and theology, he epitomizes the scholastic method of the newly founded universities.",
  },
  {
    id: 16,
    aoi: "Philosophers",
    name: "Marcus Aurelius",
    latitude: 37.9694,
    longitude: 23.721,
    blurb: "The second century CE Roman emperor Marcus Aurelius was also a Stoic philosopher, and his Meditations, written to and for himself, offers readers a unique opportunity to see how an ancient person (indeed an emperor) might try to live a Stoic life," 
    + 
    " according to which only virtue is good, only vice is bad, and the things about which we normally concern ourselves are all indifferent to our happiness, as our lives are not made good or bad by our having or lacking them. The difficulties Marcus faces putting Stoicism into practice are philosophical as well as practical, and understanding his efforts improves our philosophical appreciation of Stoicism.",
  },
];
