export interface Locations {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export const locations_for_use: Locations[] = [
  {
    id: 1,
    name: "The Colchis, the land of the Golden Fleece and Medea",
    latitude: 42.2774,
    longitude: 42.7054,
  },
  {
    id: 2,
    name: "The Temple of Delphi",
    latitude: 38.4822,
    longitude: 22.5011,
  },
  { 
    id: 3, 
    name: "The River Styx", 
    latitude: 37.9837, 
    longitude: 22.2025 
  },
  {
    id: 4,
    name: "The Battle of Marathon",
    latitude: 38.118,
    longitude: 23.9783,
  },
  {
    id: 5,
    name: "The Scicilian Expedition",
    latitude: 37.0833,
    longitude: 15.2833,
  },
  {
    id: 6,
    name: "The City of Carthage",
    latitude: 36.8528,
    longitude: 10.3233,
  },
  { 
    id: 7, 
    name: "The Lyceum", 
    latitude: 37.9711, 
    longitude: 23.7394 
  },
  {
    id: 8,
    name: "The Prison of Socrates",
    latitude: 37.9694,
    longitude: 23.721,
  },
  {
    id: 9,
    name: "Florence, Home of Machiavelli",
    latitude: 43.77,
    longitude: 11.2577,
  },
];
