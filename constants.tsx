
import { GameCardProps, Reward } from './types';

export const GAMES: GameCardProps[] = [
  { title: "GTA 5", imageUrl: "/images/GTA5.jpg" },
  { title: "CALL OF DUTY 3", imageUrl: "/images/call-of-duty copy.jpg" },
  { title: "WWE 2K24", imageUrl: "/images/wwe.jpg" },
  { title: "FIFA 23", imageUrl: "/images/fifa23.jpg" },
  { title: "MORTAL KOMBAT ULTIMATE", imageUrl: "/images/mortal.jpg" },
  { title: "TEKKEN 8", imageUrl: "/images/taken 8.jpg" },
  { title: "GHOST OF TSUSHIMA", imageUrl: "/images/ghost.jpg" },
  { title: "RISE OF THE TOMB RAIDER", imageUrl: "/images/rise-of-thob.jpg" },
  { title: "SPIDERMAN", imageUrl: "/images/spiderman.jpg" },
  { title: "SHADOW OF THE TOMBRAIDER", imageUrl: "/images/shdow-of-thomb-rider.jpg" },
  { title: "CYBERPUNK", imageUrl: "/images/cyberpank.jpg" },
  { title: "CRICKET 24", imageUrl: "/images/cricket 24.jpg" },
  { title: "ASTROBOT", imageUrl: "/images/astrobot.jpg" },

  { title: "GOD OF WAR 3", imageUrl: "/images/god.png" },
  { title: "RYSE SON OF ROME", imageUrl: "/images/ryes-son-of-rome.jpg" },
  { title: "NEED FOR SPEED HEAT", imageUrl: "/images/speed.jpg" },
  { title: "ASSASSIN’S CREED VALHALLA", imageUrl: "/images/assissins creed.jpg" },
  { title: "FORZA HORIZON 5", imageUrl: "/images/forza.jpg" },
  { title: "VR2", imageUrl: "" },
  { title: "NARUTO", imageUrl: "https://picsum.photos/seed/naruto/400/225" },
  { title: "UFC", imageUrl: "https://picsum.photos/seed/ufc/400/225" },
  { title: "NBA NK26", imageUrl: "https://picsum.photos/seed/nba/400/225" },
  { title: "HIT MAN", imageUrl: "https://picsum.photos/seed/hitman/400/225" },
  { title: "HORIZON CALL OF THE MOUNTAIN", imageUrl: "https://picsum.photos/seed/horizon/400/225" },
];

// Added missing COMING_SOON export to fix import error in components/GamesGallery.tsx
export const COMING_SOON: GameCardProps[] = [
  { title: "GTA 6", imageUrl: "https://picsum.photos/seed/gta6/400/225", isComingSoon: true },
  { title: "MARVEL'S WOLVERINE", imageUrl: "https://picsum.photos/seed/wolverine/400/225", isComingSoon: true },
  { title: "DEATH STRANDING 2", imageUrl: "https://picsum.photos/seed/ds2/400/225", isComingSoon: true },
];

export const CASH_REWARDS: Reward[] = [
  { game: "Assassin's Creed", amount: 400 },
  { game: "GTA 5", amount: 300 },
  { game: "God of War Ragnarok", amount: 250 },
  { game: "God of War 4", amount: 200 },
  { game: "Ghost of Tsushima", amount: 200 },
  { game: "Cyberpunk", amount: 200 },
  { game: "Spider Man", amount: 200 },
  { game: "Rise of the T. Raider", amount: 150 },
  { game: "Shadow of the T. Raider", amount: 150 },
  { game: "Resident Evil Village", amount: 100 },
];

export const WHATSAPP_NUMBER = "919253005137";
