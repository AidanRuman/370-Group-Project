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
    blurb: "In mythology and Greek history, the Temple of Delphi was the location of the most prominent Oracle of Apollo. Headed by the Pythia, the oracle would receive Heroes and Kings asking for knowledge, and she would give them prophecies of the future. The most famous prophecy comes from Herodotus' History and was given to King Croesus of Lydia seeking to secure his reign and protect his kingdom from the Persians and the oracle stated “If you cross the Halys River, a great empire will fall.” He interpreted the oracle as the Persian empire will fall, but tragically, it was his kingdom that fell in the end.",
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
    blurb: "The Battle of Marathon was fought in 490 BCE between the Athenians and the Persians during the First Persian War. The Athenians employed a strategic formation that allowed them to outflank the larger Persian army and despite being outnumbered, the Athenians achieved a decisive victory, with only 192 dead on the Athenian side and 6,400 on the Persian side, marking a significant turning point in the War. The battle is famously associated with the legend of Pheidippides, who is said to have run from Marathon to Athens to deliver news of the victory, inspiring the modern marathon",
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
    blurb: "The Lyceum was a temple located in Athens dedicated to Apollo Lyceus. It was best known for being the location of Aristotle's school of philosphy. The Lyceum operated as a school starting in 334 BCE, until 86 BCE when the Roman general Sulla destroyed the school during his assault on Athens.",
  },
  {
    id: 8,
    aoi: "Philosophy",
    name: "The Prison of Socrates",
    latitude: 37.9694,
    longitude: 23.721,
    blurb: "As the name entails, the Prison of Socrates is the location where the Greek philosopher Socrates was imprisoned and executed. After being found guilty of impiety and corrupting the youth of Athens, Socrates was sentenced to death by hemlock poisoning. The prison is located in Athens, near the Agora, and is a significant historical site.",
  },
  {
    id: 9,
    aoi: "Philosophy",
    name: "Florence, Home of Machiavelli",
    latitude: 43.77,
    longitude: 11.2577,
    blurb: "Florence is the birthplace and home of the Italian philosopher Niccolò Machiavelli. Florence was a center of art, culture, and intellectual activity during Machiavelli's time, and his experiences in the city greatly influenced his writings on politics and human nature.",
  },
  {
    id: 10,
    aoi: "Classics",
    name: "Teutoburg Forest",
    latitude: 51.9,
    longitude: 8.8167,
    blurb: "The Teutoburg Forest is the location of a major battle in Roman history, where in 9 CE, three Roman legions, betweem 15-20,000 soldiers, were ambushed by Germanic tribes. The battle was a devastating loss for the Romans, with nearly the entire force being wiped out. The defeat halted Roman expansion into Germania and lead to a more defensive position along the Rhine River and is considered one of the greatest military disasters in Roman history.",
  },
  

];

export interface People {
  id: number;
  // aoi = area of interest
  aoi: string;
  name: string;
  blurb: string;
}

export const people_for_use: People[] = [
    {
    id: 1,
    aoi: "Philosophers",
    name: "Socarates/Plato",
    blurb: "Socrates and Plato are one of the most influential and studied philosophers of all time. Their influence on critical thinking and philosophy can be seen throughout society and other works by philosophers. While it is unknown which works are Socarates's thinking or Plato's thinking, it is confirmed that both existed and that Plato was the student who took notes during Socarates's classes",
  },
  {
    id: 2,
    aoi: "Philosophers",
    name: "Aristotle",
    blurb: "Lived around the same time as Plato and Socarates, yet have very different view points and founded an entirly different school of thought.",
  },
  {
    id: 3,
    aoi: "Philosophers",
    name: "machiavelli",
    blurb: "A promenit itailian philosopher. His most influental work, the Prince, can be seen as either a guidebook on how to rule or a critque of monarchy and the status quo, how you read it is up to you.",
  },
  {
    id: 4,
    aoi: "Philosophers",
    name: "Cicero",
    blurb: "Marcus Tullius Cicero (106-43 BCE) is best known to posterity as a prominent statesman and orator in the tumultuous period of the late Roman republic. As well as being a leading political actor of his time, he also wrote voluminously.",
  },
  {
    id: 5,
    aoi: "Philosophers",
    name: "Thomas Aquinas",
    blurb: "Between antiquity and modernity stands Thomas Aquinas (ca. 1225-1274). The greatest figure of thirteenth-century Europe in the two preeminent sciences of the era, philosophy and theology, he epitomizes the scholastic method of the newly founded universities.",
  },
  {
    id: 6,
    aoi: "Philosophers",
    name: "Marcus Aurelius",
    blurb: "The second century CE Roman emperor Marcus Aurelius was also a Stoic philosopher, and his Meditations, written to and for himself, offers readers a unique opportunity to see how an ancient person (indeed an emperor) might try to live a Stoic life, according to which only virtue is good, only vice is bad, and the things about which we normally concern ourselves are all indifferent to our happiness, as our lives are not made good or bad by our having or lacking them. The difficulties Marcus faces putting Stoicism into practice are philosophical as well as practical, and understanding his efforts improves our philosophical appreciation of Stoicism.",
  },
  {
    id: 7,
    aoi: "Classics",
    name: "Sallust",
    blurb: "A Roman historian and politician, best known for his works on the history of the late Roman Republic, including 'The Conspiracy of Catiline' and 'The Jugurthine War,' which provide valuable insights into the political and social dynamics of his time.",
  },
  {
    id: 8,
    aoi: "Classics",
    name: "Alexander the Great",
    blurb: "Alexander the Great was a king of Macedon and one of history's greatest military commanders. He created one of the largest empires in ancient history, stretching from Greece to Egypt and into northwest India. His conquests spread Greek culture and influence throughout the known world, leading to the Hellenistic period, which saw a fusion of Greek and Eastern cultures."
  },
  {
    id: 9,
    aoi: "Classics",
    name: "Julius Caesar",
    blurb: "Gaius Julius Caesar was a Roman general, statesman, and given the title dictator for life whose actions and reforms significantly shaped the course of Roman history. He played a critical role in the events leading to the demise of the Roman Republic and the rise of the Roman Empire. His assassination on the Ides of March in 44 BCE marked a turning point in Roman history, leading to a series of civil wars that ultimately resulted in the establishment of the Roman Empire under his adopted heir, Augustus.",
  },
  {
    id: 10,
    aoi: "Classics",
    name: "Augustus",
    blurb: "Gaius Octavius, later known as Augustus, was the first Roman emperor and the founder of the Roman Empire. He was the adopted son and heir of Julius Caesar, and after Caesar's assassination, Augustus emerged victorious in the ensuing power struggles. His reign marked the beginning of a period of relative peace and stability known as the Pax Romana, during which he implemented significant political, social, and economic reforms that laid the foundation for the empire's long-lasting success.",
  },
  {
    id: 11,
    aoi: "Classics",
    name: "Catullus",
    blurb: "Gaius Valerius Catullus was a Roman poet of the late Roman Republic, known for his passionate and often explicit poetry that explores themes of love, friendship, and personal relationships. His works, which include both lyric poetry and epigrams, have had a lasting influence on Western literature and continue to be studied for their emotional intensity and stylistic innovation.",
  },
  {
    id: 12,
    aoi: "Classics",
    name: "Cleopatra",
    blurb: "Cleopatra VII was the last active ruler of the Ptolemaic Kingdom of Egypt, known for her intelligence, political acumen, and romantic relationships with Julius Caesar and Mark Antony. Her reign was marked by efforts to maintain Egypt's independence in the face of Roman expansion, and her tragic end following the defeat of Mark Antony by Octavian (later Augustus) has made her a legendary figure in history and popular culture.",
  },
  {
    id: 13,
    aoi: "Classics",
    name: "Cornelia",
    blurb: "Cornelia was a prominent Roman matron of the late Republic, known for her intelligence, virtue, and dedication to her family. She was the daughter of Scipio Africanus and the mother of the Gracchi brothers, Tiberius and Gaius, who were notable reformers. Cornelia's life and values have been idealized in Roman culture, and she is often cited as a model of Roman womanhood."
  },
  {
    id: 14,
    aoi: "Classics",
    name: "Alcibiades",
    blurb: "Alcibiades was a controversial Athenian statesman, orator, and general during the Peloponnesian War. Known for his charisma, intelligence, and shifting allegiances, Alcibiades played a significant role in Athenian politics and military campaigns. He was involved in several key events, including the Sicilian Expedition, and his actions often had profound consequences for Athens. His life was marked by both great successes and dramatic downfalls, making him one of the most fascinating figures of ancient Greek history."
  },
  {
    id: 15,
    aoi: "Classics",
    name: "Agrippina the Younger",
    blurb: "Agrippina the Younger was a powerful Roman empress and the mother of Emperor Nero. She was known for her ambition, political savvy, and influence over her son. Agrippina played a crucial role in Nero's rise to power and was involved in various political intrigues during her lifetime. Her relationship with Nero eventually deteriorated, leading to her downfall and death, which has been the subject of much historical speculation and intrigue."
  }

];