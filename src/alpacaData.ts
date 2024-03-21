export interface AlpacaItem {
  id: number;
  label: string;
  filename: string;
  selected: boolean;
}

export interface AlpacaCategory {
  id: number;
  label: string;
  directory: string;
  selected: boolean;
  items: AlpacaItem[];
}

const alpacaData: AlpacaCategory[] = [
  {
    id: 0,
    label: "Backgrounds",
    directory: "backgrounds",
    selected: true,
    items: [
      { id: 1, label: "Blue 50", filename: "blue50", selected: true },
      { id: 2, label: "Blue 60", filename: "blue60", selected: false },
      { id: 3, label: "Blue 70", filename: "blue70", selected: false },
      { id: 4, label: "Dark Blue 30", filename: "darkblue30", selected: false },
      { id: 5, label: "Dark Blue 50", filename: "darkblue50", selected: false },
      { id: 6, label: "Dark Blue 70", filename: "darkblue70", selected: false },
      { id: 7, label: "Green 50", filename: "green50", selected: false },
      { id: 8, label: "Green 60", filename: "green60", selected: false },
      { id: 9, label: "Green 70", filename: "green70", selected: false },
      { id: 10, label: "Grey 40", filename: "grey40", selected: false },
      { id: 11, label: "Grey 70", filename: "grey70", selected: false },
      { id: 12, label: "Grey 80", filename: "grey80", selected: false },
      { id: 13, label: "Red 50", filename: "red50", selected: false },
      { id: 14, label: "Red 60", filename: "red60", selected: false },
      { id: 15, label: "Red 70", filename: "red70", selected: false },
      { id: 16, label: "Yellow 50", filename: "yellow50", selected: false },
      { id: 17, label: "Yellow 60", filename: "yellow60", selected: false },
      { id: 18, label: "Yellow 70", filename: "yellow70", selected: false },
    ],
  },
  {
    id: 1,
    label: "Ears",
    directory: "ears",
    selected: false,
    items: [
      { id: 0, label: "Default", filename: "default", selected: true },
      {
        id: 1,
        label: "Tilt Backward",
        filename: "tilt-backward",
        selected: false,
      },
      {
        id: 2,
        label: "Tilt Forward",
        filename: "tilt-forward",
        selected: false,
      },
    ],
  },

  {
    id: 3,
    label: "Hair",
    directory: "hair",
    selected: false,
    items: [
      { id: 0, label: "Default", filename: "default", selected: true },
      { id: 1, label: "Bang", filename: "bang", selected: false },
      { id: 2, label: "Curls", filename: "curls", selected: false },
      { id: 3, label: "Elegant", filename: "elegant", selected: false },
      { id: 4, label: "Fancy", filename: "fancy", selected: false },
      { id: 5, label: "Short", filename: "short", selected: false },
    ],
  },
  {
    id: 4,
    label: "Leg",
    directory: "leg",
    selected: false,
    items: [
      { id: 0, label: "Default", filename: "default", selected: true },
      { id: 1, label: "Bubble Tea", filename: "bubble-tea", selected: false },
      { id: 2, label: "Cookie", filename: "cookie", selected: false },
      {
        id: 3,
        label: "Game Console",
        filename: "game-console",
        selected: false,
      },
      {
        id: 4,
        label: "Tilt Backward",
        filename: "tilt-backward",
        selected: false,
      },
      {
        id: 5,
        label: "Tilt Forward",
        filename: "tilt-forward",
        selected: false,
      },
    ],
  },

  {
    id: 6,
    label: "Neck",
    directory: "neck",
    selected: false,
    items: [
      { id: 0, label: "Default", filename: "default", selected: true },
      {
        id: 1,
        label: "Bend Backward",
        filename: "bend-backward",
        selected: false,
      },
      {
        id: 2,
        label: "Bend Forward",
        filename: "bend-forward",
        selected: false,
      },
      { id: 3, label: "Thick", filename: "thick", selected: false },
    ],
  },
  {
    id: 7,
    label: "Accessories",
    directory: "accessories",
    selected: false,
    items: [
      { id: 0, label: "Default", filename: "headphone", selected: true },
      { id: 1, label: "Earings", filename: "earings", selected: false },
      { id: 2, label: "Flower", filename: "flower", selected: false },
      { id: 3, label: "Glasses", filename: "glasses", selected: false },
    ],
  },
  {
    id: 8,
    label: "Nose",
    directory: "nose",
    selected: false,
    items: [{ id: 0, label: "Default", filename: "nose", selected: true }],
  },
  {
    id: 2,
    label: "Eyes",
    directory: "eyes",
    selected: false,
    items: [
      { id: 0, label: "Default", filename: "default", selected: true },
      { id: 1, label: "Angry", filename: "angry", selected: false },
      { id: 2, label: "Naughty", filename: "naughty", selected: false },
      { id: 3, label: "Panda", filename: "panda", selected: false },
      { id: 4, label: "Smart", filename: "smart", selected: false },
      { id: 5, label: "Star", filename: "star", selected: false },
    ],
  },
  {
    id: 5,
    label: "Mouth",
    directory: "mouth",
    selected: false,
    items: [
      { id: 0, label: "Default", filename: "default", selected: true },
      { id: 1, label: "Astonished", filename: "astonished", selected: false },
      { id: 2, label: "Eating", filename: "eating", selected: false },
      { id: 3, label: "Laugh", filename: "laugh", selected: false },
      { id: 4, label: "Tongue", filename: "tongue", selected: false },
    ],
  },
];

export default alpacaData;
