const themes = {
  default: {
    "--color-primary": "#e30613",
    "--color-secondary": "#ffed00",
    "--color-accent-1": "#f6d365",
    "--color-accent-2": "#fda085",
    "--color-dark": "#3c3c3c",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#2f4f4f",
  },
  hacker: {
    "--color-primary": "#00ff00",
    "--color-secondary": "#ff00ff",
    "--color-accent-1": "#ff0000",
    "--color-accent-2": "#0000ff",
    "--color-dark": "#000000",
    "--color-light": "#ffffff",
    "--color-text-main": "#00ff00",
  },
  l33t: {
    "--color-primary": "#08fdd8",
    "--color-secondary": "#f800ff",
    "--color-accent-1": "#1b1b1b",
    "--color-accent-2": "#333333",
    "--color-dark": "#080808",
    "--color-light": "#f0f0f0",
    "--color-text-main": "#0033FF",
  },
  "dream-pop": {
    "--color-primary": "#ff77aa",
    "--color-secondary": "#cc99ff",
    "--color-accent-1": "#ff99ee",
    "--color-accent-2": "#d1b3ff",
    "--color-dark": "#342a4e",
    "--color-light": "#fff0f5",
    "--color-text-main": "##808080",
  },
  "solar-flare": {
    "--color-primary": "#ffffff",
    "--color-secondary": "#000000",
    "--color-accent-1": "#ff0000",
    "--color-accent-2": "#ffff00",
    "--color-dark": "#000000",
    "--color-light": "#ffffff",
    "--color-text-main": "#282828",
  },
  hippie: {
    "--color-primary": "#fabd2f",
    "--color-secondary": "#d3869b",
    "--color-accent-1": "#83a598",
    "--color-accent-2": "#b8bb26",
    "--color-dark": "#282828",
    "--color-light": "#ebdbb2",
    "--color-text-main": "#996b00",
  },
  "neon-concrete": {
    "--color-primary": "#00D9FF",
    "--color-secondary": "#FF007F",
    "--color-accent-1": "#8C8C8C",
    "--color-accent-2": "#9A9A9A",
    "--color-dark": "#1A1A1A",
    "--color-light": "#E5E5E5",
    "--color-text-main": "#757575",
  },
  solarpunk: {
    "--color-primary": "#ff8c00",
    "--color-secondary": "#7ec850",
    "--color-accent-1": "#ffd700",
    "--color-accent-2": "#40e0d0",
    "--color-dark": "#005a51",
    "--color-light": "#f0f8ff",
    "--color-text-main": "#3c6e71",
  },
  hyperreality: {
    "--color-primary": "#00ff00",
    "--color-secondary": "#000000",
    "--color-accent-1": "#1A1A1A",
    "--color-accent-2": "#333333",
    "--color-dark": "#0a0a0a",
    "--color-light": "#9A9A9A",
    "--color-text-main": "#00ff00",
  },
  "cybernetic-dream": {
    "--color-primary": "#00D1B2",
    "--color-secondary": "#FF3860",
    "--color-accent-1": "#3273DC",
    "--color-accent-2": "#F5F5F5",
    "--color-dark": "#363636",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#4A4A4A",
  },
  steampunk: {
    "--color-primary": "#bca136",
    "--color-secondary": "#7b3f00",
    "--color-accent-1": "#cc7722",
    "--color-accent-2": "#967117",
    "--color-dark": "#3c3022",
    "--color-light": "#f0e68c",
    "--color-text-main": "#5d4c46",
  },
  "petal-dream": {
    "--color-primary": "#F78FB3",
    "--color-secondary": "#CF9FFF",
    "--color-accent-1": "#A4DEFF",
    "--color-accent-2": "#FFD670",
    "--color-dark": "#7E5475",
    "--color-light": "#ffdbe1",
    "--color-text-main": "#e85995",
  },
  "neo-tokyo": {
    "--color-primary": "#DC143C",
    "--color-secondary": "#FFC0CB",
    "--color-accent-1": "#87CEEB",
    "--color-accent-2": "#32CD32",
    "--color-dark": "#00008B",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#2F4F4F",
  },
  china: {
    "--color-primary": "#A80000",
    "--color-secondary": "#FFD700",
    "--color-accent-1": "#00A86B",
    "--color-accent-2": "#8B4513",
    "--color-dark": "#000000",
    "--color-light": "#FFFAF0",
    "--color-text-main": "#363636",
  },
  "sakura-matsuri": {
    "--color-primary": "#FF69B4",
    "--color-secondary": "#FFD700",
    "--color-accent-1": "#FF6347",
    "--color-accent-2": "#FF1493",
    "--color-dark": "#000000",
    "--color-light": "#FFFAF0",
    "--color-text-main": "#363636",
  },
  merc: {
    "--color-primary": "#4B5320",
    "--color-secondary": "#78866B",
    "--color-accent-1": "#6B8E23",
    "--color-accent-2": "#806B2A",
    "--color-dark": "#3C341F",
    "--color-light": "#F0E68C",
    "--color-text-main": "#333333",
  },
  "sao-paulo": {
    "--color-primary": "#FFD700",
    "--color-secondary": "#C0C0C0",
    "--color-accent-1": "#008000",
    "--color-accent-2": "#A52A2A",
    "--color-dark": "#333333",
    "--color-light": "#F0F0F0",
    "--color-text-main": "#000000",
  },
  lagos: {
    "--color-primary": "#4DB848",
    "--color-secondary": "#FFC107",
    "--color-accent-1": "#00ACC1",
    "--color-accent-2": "#E91E63",
    "--color-dark": "#263238",
    "--color-light": "#E0E0E0",
    "--color-text-main": "#2b6b00",
  },
  nyc: {
    "--color-primary": "#4d4d4d",
    "--color-secondary": "#999999",
    "--color-accent-1": "#b3b3b3",
    "--color-accent-2": "#e6e6e6",
    "--color-dark": "#333333",
    "--color-light": "#f2f2f2",
    "--color-text-main": "#1a1a1a",
  },
  greyscale: {
    "--color-primary": "#0a0a0a",
    "--color-secondary": "#bfbfbf",
    "--color-accent-1": "#d9d9d9",
    "--color-accent-2": "#bfbfbf",
    "--color-dark": "#050505",
    "--color-light": "#ffffff",
    "--color-text-main": "#0a0a0a",
  },
  "street-magic": {
    "--color-primary": "#ffcc00",
    "--color-secondary": "#ff6600",
    "--color-accent-1": "#ff0000",
    "--color-accent-2": "#6600ff",
    "--color-dark": "#000000",
    "--color-light": "#ffffff",
    "--color-text-main": "#000000",
  },
  washington: {
    "--color-primary": "#B22234",
    "--color-secondary": "#3C3B6E",
    "--color-accent-1": "#FFFFFF",
    "--color-accent-2": "#F0EDEE",
    "--color-dark": "#212529",
    "--color-light": "#F0E68C",
    "--color-text-main": "#002D62",
  },
  rainbow: {
    "--color-primary": "#FF69B4",
    "--color-secondary": "#00BFFF",
    "--color-accent-1": "#FFD700",
    "--color-accent-2": "#32CD32",
    "--color-dark": "#8B008B",
    "--color-light": "#F0E68C",
    "--color-text-main": "#2F4F4F",
  },
  miami: {
    "--color-primary": "#ff9f1c",
    "--color-secondary": "#2ec4b6",
    "--color-accent-1": "#ffbf69",
    "--color-accent-2": "#cbf3f0",
    "--color-dark": "#011627",
    "--color-light": "#fdfffc",
    "--color-text-main": "#011627",
  },
  "neo-vegas": {
    "--color-primary": "#ff4500",
    "--color-secondary": "#ffd700",
    "--color-accent-1": "#008b8b",
    "--color-accent-2": "#8b4513",
    "--color-dark": "#282828",
    "--color-light": "#f0e68c",
    "--color-text-main": "#5c0075",
  },

  moto: {
    "--color-primary": "#FF0000",
    "--color-secondary": "#211E1E",
    "--color-accent-1": "#087E8B",
    "--color-accent-2": "#F2C641",
    "--color-dark": "#0B3C5D",
    "--color-light": "#E0E1DD",
    "--color-text-main": "#ff0000",
  },
  delhi: {
    "--color-primary": "#C8102E",
    "--color-secondary": "#FFD700",
    "--color-accent-1": "#008000",
    "--color-accent-2": "#FFFFFF",
    "--color-dark": "#4B5320",
    "--color-light": "#FADA5E",
    "--color-text-main": "#000000",
  },
  "cyber-citrus": {
    "--color-primary": "#FF8C00",
    "--color-secondary": "#FFD700",
    "--color-accent-1": "#9C4F00",
    "--color-accent-2": "#FFA500",
    "--color-dark": "#2F4F4F",
    "--color-light": "#fff266",
    "--color-text-main": "#664b00",
  },
  purple: {
    "--color-primary": "#8e44ad",
    "--color-secondary": "#9b59b6",
    "--color-accent-1": "#d2b4de",
    "--color-accent-2": "#f1e3f3",
    "--color-dark": "#2c3e50",
    "--color-light": "#ecf0f1",
    "--color-text-main": "#2c3e50",
  },
  noir: {
    "--color-primary": "#303030",
    "--color-secondary": "#0a0a0a",
    "--color-accent-1": "#262626",
    "--color-accent-2": "#333333",
    "--color-dark": "#000000",
    "--color-light": "#141414",
    "--color-text-main": "#575757",
  },
  vaporwave: {
    "--color-primary": "#ff71ce",
    "--color-secondary": "#01cdfe",
    "--color-accent-1": "#05ffa1",
    "--color-accent-2": "#b967ff",
    "--color-dark": "#21094e",
    "--color-light": "#e0c3fc",
    "--color-text-main": "#ffffff",
  },
  fuji: {
    "--color-primary": "#FFC0CB",
    "--color-secondary": "#ADD8E6",
    "--color-accent-1": "#FFFFFF",
    "--color-accent-2": "#B0E0E6",
    "--color-dark": "#778899",
    "--color-light": "#FFF0F5",
    "--color-text-main": "#2F4F4F",
  },

  y2k: {
    "--color-primary": "#00FF00",
    "--color-secondary": "#FF69B4",
    "--color-accent-1": "#0000FF",
    "--color-accent-2": "#FFD700",
    "--color-dark": "#000080",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#000000",
  },
  "the-spectacle": {
    "--color-primary": "#E03E3E",
    "--color-secondary": "#0A8F08",
    "--color-accent-1": "#FFD700",
    "--color-accent-2": "#6A0DAD",
    "--color-dark": "#212529",
    "--color-light": "#F8F9FA",
    "--color-text-main": "#333333",
  },
  "pastel-goth": {
    "--color-primary": "#8A4F7D",
    "--color-secondary": "#4A4063",
    "--color-accent-1": "#F4BEEE",
    "--color-accent-2": "#9E768F",
    "--color-dark": "#22223B",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#4A4A4A",
  },
  "k-punk": {
    "--color-primary": "#0A0A0A",
    "--color-secondary": "#D32F2F",
    "--color-accent-1": "#303F9F",
    "--color-accent-2": "#FBC02D",
    "--color-dark": "#000000",
    "--color-light": "#F5F5F5",
    "--color-text-main": "#ff0000",
  },
  scene: {
    "--color-primary": "#35465C",
    "--color-secondary": "#A77DC2",
    "--color-accent-1": "#58C9B9",
    "--color-accent-2": "#F4ACB7",
    "--color-dark": "#263238",
    "--color-light": "#ECEFF1",
    "--color-text-main": "#b25ed9",
  },
  sleeze: {
    "--color-primary": "#C2185B",
    "--color-secondary": "#00E5FF",
    "--color-accent-1": "#CDDC39",
    "--color-accent-2": "#FFEB3B",
    "--color-dark": "#212121",
    "--color-light": "#F5F5F5",
    "--color-text-main": "#ad8800",
  }, //
  aero: {
    "--color-primary": "#3C9EE7",
    "--color-secondary": "#EDE9E6",
    "--color-accent-1": "#4CAE50",
    "--color-accent-2": "#FFA500",
    "--color-dark": "#003366",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#4D4D4D",
  },
  valley: {
    "--color-primary": "#FF6600",
    "--color-secondary": "#0A84FF",
    "--color-accent-1": "#FF1744",
    "--color-accent-2": "#FFEA00",
    "--color-dark": "#000000",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#424242",
  },
  plastic: {
    "--color-primary": "#13CA91",
    "--color-secondary": "#FF48C4",
    "--color-accent-1": "#00B2FF",
    "--color-accent-2": "#FFEB3B",
    "--color-dark": "#6A1B9A",
    "--color-light": "#B2F2EF",
    "--color-text-main": "#cc8b00",
  },
  zine: {
    "--color-primary": "#F4D03F",
    "--color-secondary": "#E74C3C",
    "--color-accent-1": "#3498DB",
    "--color-accent-2": "#2ECC71",
    "--color-dark": "#34495E",
    "--color-light": "#ECF0F1",
    "--color-text-main": "#2C3E50",
  },
  bicycle: {
    "--color-primary": "#6495ED",
    "--color-secondary": "#F0F8FF",
    "--color-accent-1": "#FFD700",
    "--color-accent-2": "#D3D3D3",
    "--color-dark": "#000080",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#2F4F4F",
  },
  mp3: {
    "--color-primary": "#4A90E2",
    "--color-secondary": "#AAB8C2",
    "--color-accent-1": "#F8E71C",
    "--color-accent-2": "#D0021B",
    "--color-dark": "#4A4A4A",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#000000",
  },
  away: {
    "--color-primary": "#8A2BE2",
    "--color-secondary": "#DEB887",
    "--color-accent-1": "#FF69B4",
    "--color-accent-2": "#00FF7F",
    "--color-dark": "#000080",
    "--color-light": "#F5F5DC",
    "--color-text-main": "#000000",
  },
  space: {
    "--color-primary": "#3B5998",
    "--color-secondary": "#D9E6F2",
    "--color-accent-1": "#FF4500",
    "--color-accent-2": "#FFD700",
    "--color-dark": "#333333",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#000000",
  },
  irc: {
    "--color-primary": "#0C7BDC",
    "--color-secondary": "#E1E8ED",
    "--color-accent-1": "#F44336",
    "--color-accent-2": "#FFEB3B",
    "--color-dark": "#37474F",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#212121",
  },
  bbs: {
    "--color-primary": "#00FF00",
    "--color-secondary": "#000000",
    "--color-accent-1": "#FFFF00",
    "--color-accent-2": "#FF00FF",
    "--color-dark": "#FFFFFF",
    "--color-light": "#008000",
    "--color-text-main": "#FFFFFF",
  },
  psyc: {
    "--color-primary": "#DF00FF",
    "--color-secondary": "#FFD700",
    "--color-accent-1": "#00FF00",
    "--color-accent-2": "#FF007F",
    "--color-dark": "#0000FF",
    "--color-light": "#FFA500",
    "--color-text-main": "#FFFFFF",
  },
  1984: {
    "--color-primary": "#00A0D6",
    "--color-secondary": "#FF0090",
    "--color-accent-1": "#08F7FE",
    "--color-accent-2": "#FE53BB",
    "--color-dark": "#020122",
    "--color-light": "#F5F5F5",
    "--color-text-main": "#333333",
  },
  board: {
    "--color-primary": "#E94E77",
    "--color-secondary": "#0CDBD3",
    "--color-accent-1": "#FCF300",
    "--color-accent-2": "#66FF00",
    "--color-dark": "#202020",
    "--color-light": "#F8F8F8",
    "--color-text-main": "#202020",
  },
  terminal: {
    "--color-primary": "#FFD700",
    "--color-secondary": "#000000",
    "--color-accent-1": "#FF0000",
    "--color-accent-2": "#00FF00",
    "--color-dark": "#0000FF",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#000000",
  },
  sudo: {
    "--color-primary": "#000000",
    "--color-secondary": "#000000",
    "--color-accent-1": "#000000",
    "--color-accent-2": "#000000",
    "--color-dark": "#000000",
    "--color-light": "#00FF00",
    "--color-text-main": "#000000",
  },
  korea: {
    "--color-primary": "#d22630",
    "--color-secondary": "#003478",
    "--color-accent-1": "#fcc419",
    "--color-accent-2": "#6799ff",
    "--color-dark": "#2e2e2e",
    "--color-light": "#f3f3f3",
    "--color-text-main": "#101010",
  },
  1999: {
    "--color-primary": "#00C3FF",
    "--color-secondary": "#FC28FB",
    "--color-accent-1": "#D0C310",
    "--color-accent-2": "#0CFEFE",
    "--color-dark": "#050505",
    "--color-light": "#F0F0F0",
    "--color-text-main": "#ff47a0;",
  },
  y10k: {
    "--color-primary": "#0a0f0d",
    "--color-secondary": "#1c3b3a",
    "--color-accent-1": "#4a7070",
    "--color-accent-2": "#729595",
    "--color-dark": "#050708",
    "--color-light": "#cfd8dc",
    "--color-text-main": "#00444d",
  },
  spiral: {
    "--color-primary": "#5698c4",
    "--color-secondary": "#7a6fbe",
    "--color-accent-1": "#9ad3de",
    "--color-accent-2": "#ffffff",
    "--color-dark": "#353535",
    "--color-light": "#f4f4f4",
    "--color-text-main": "#353535",
  },
  radio: {
    "--color-primary": "#6D4C41",
    "--color-secondary": "#3E2723",
    "--color-accent-1": "#D7CCC8",
    "--color-accent-2": "#A1887F",
    "--color-dark": "#1B0000",
    "--color-light": "#fbedc1;",
    "--color-text-main": "#01411e",
  },
  nakamoto: {
    "--color-primary": "#f2a900",
    "--color-secondary": "#8a8a8a",
    "--color-accent-1": "#4d4d4d",
    "--color-accent-2": "#ffffff",
    "--color-dark": "#000000",
    "--color-light": "#ffffff",
    "--color-text-main": "#f2a900",
  },
  "space-age": {
    "--color-primary": "#0b3d91",
    "--color-secondary": "#ffffff",
    "--color-accent-1": "#ff6f61",
    "--color-accent-2": "#ffd700",
    "--color-dark": "#000080",
    "--color-light": "#f8f9fa",
    "--color-text-main": "595959;",
  },
  uranium: {
    "--color-primary": "#4F7942",
    "--color-secondary": "#7FFFD4",
    "--color-accent-1": "#A7D30C",
    "--color-accent-2": "#E6E6FA",
    "--color-dark": "#003300",
    "--color-light": "#F0FFF0",
    "--color-text-main": "#4F7942",
  },
  plutonium: {
    "--color-primary": "#A40000",
    "--color-secondary": "#37ff00",
    "--color-accent-1": "#FF4500",
    "--color-accent-2": "#C0C0C0",
    "--color-dark": "#800000",
    "--color-light": "#dedede",
    "--color-text-main": "#730c0c",
  },
  "eliptic-curve": {
    "--color-primary": "#d4d41c",
    "--color-secondary": "#CB99C9",
    "--color-accent-1": "#FFBCD9",
    "--color-accent-2": "#A2A2D0",
    "--color-dark": "#000000",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#4B0082",
  },
  "exit-node": {
    "--color-primary": "#8B0000",
    "--color-secondary": "#FF4500",
    "--color-accent-1": "#ff2600",
    "--color-accent-2": "#ad0000",
    "--color-dark": "#ff0000",
    "--color-light": "#ff0000",
    "--color-text-main": "#ecdfdf",
  },
  "numbers-station": {
    "--color-primary": "#505050",
    "--color-secondary": "#756400",
    "--color-accent-1": "#8B4513",
    "--color-accent-2": "#A9A9A9",
    "--color-dark": "#2F4F4F",
    "--color-light": "#F5F5F5",
    "--color-text-main": "#3d3d3d",
  },
  salmon: {
    "--color-primary": "#FF9A8A",
    "--color-secondary": "#FFD1AC",
    "--color-accent-1": "#FFB4A2",
    "--color-accent-2": "#E29587",
    "--color-dark": "#C6726B",
    "--color-light": "#FFF0E3",
    "--color-text-main": "#5C3A4D",
  },
  qubit: {
    "--color-primary": "#0C7C59",
    "--color-secondary": "#FF6B6B",
    "--color-accent-1": "#FFE66D",
    "--color-accent-2": "#4ECDC4",
    "--color-dark": "#253031",
    "--color-light": "#F7FFF7",
    "--color-text-main": "#00a300",
  },
  "san-francisco": {
    "--color-primary": "#FFA500",
    "--color-secondary": "#FFD700",
    "--color-accent-1": "#008080",
    "--color-accent-2": "#DA70D6",
    "--color-dark": "#696969",
    "--color-light": "#F5F5F5",
    "--color-text-main": "#000000",
  },
  "los-angeles": {
    "--color-primary": "#FFCC00",
    "--color-secondary": "#C0C0C0",
    "--color-accent-1": "#00AEEF",
    "--color-accent-2": "#FF6E4A",
    "--color-dark": "#2D2D2D",
    "--color-light": "#FFFFFF",
    "--color-text-main": "#000000",
  },
  hash: {
    "--color-primary": "#FF00FF",
    "--color-secondary": "#00FF00",
    "--color-accent-1": "#FFFF00",
    "--color-accent-2": "#00FFFF",
    "--color-dark": "#FF4500",
    "--color-light": "#7F00FF",
    "--color-text-main": "#c2c2c2",
  },
  "block-cipher": {
    "--color-primary": "#00FF00",
    "--color-secondary": "#00FF00",
    "--color-accent-1": "#F57C13",
    "--color-accent-2": "#F57C13",
    "--color-dark": "#C0C0C0",
    "--color-light": "#FFFF00",
    "--color-text-main": "#000000",
  },
};


const themeNames = [
    {
        "display": "default",
        "id": "default"
    },
    {
        "display": "H@CK3ᴙ",
        "id": "hacker"
    },
    {
        "display": "l33+",
        "id": "l33t"
    },
    {
        "display": "DrE∀M P♡P",
        "id": "dream-pop"
    },
    {
        "display": "S☉l@r ⒻⓁⒶⓇⒺ",
        "id": "solar-flare"
    },
    {
        "display": "Ħłρρłε",
        "id": "hippie"
    },
    {
        "display": "N3ØN ₵ØN₵RΣTΣ",
        "id": "neon-concrete"
    },
    {
        "display": "S☼LΛRPUNK",
        "id": "solarpunk"
    },
    {
        "display": "H¥P3RR34L!TY",
        "id": "hyperreality"
    },
    {
        "display": "⊂¥βΞ尺ภΞ†เς Ð尺ΞΛⓜ",
        "id": "cybernetic-dream"
    },
    {
        "display": "S†ε@мקцηк",
        "id": "steampunk"
    },
    {
        "display": "✿ Pétäl Drëäm ✿",
        "id": "petal-dream"
    },
    {
        "display": "新しい東京",
        "id": "neo-tokyo"
    },
    {
        "display": "中國龍",
        "id": "china"
    },
    {
        "display": "桜ーまつり",
        "id": "sakura-matsuri"
    },
    {
        "display": "ⓜⓔⓡⓒ",
        "id": "merc"
    },
    {
        "display": "🄼🄴🅃🄾́🄿🄾🄻🄸🅂 🄿🄰🅄🄻🄸🅂🅃🄰",
        "id": "sao-paulo"
    },
    {
        "display": "ḺᾰǤⱺϨ⸚ 𝔽𝕌𝕋𝕌ℝ𝔸",
        "id": "lagos"
    },
    {
        "display": "𝕟𝕪𝕔",
        "id": "nyc"
    },
    {
        "display": "𝔤𝔯𝔢𝔶𝔰𝔠𝔞𝔩𝔢",
        "id": "greyscale"
    },
    {
        "display": "ⓈⓉⓇⒺⒺⓉ ⓂⒶⒼⒾⒸ",
        "id": "street-magic"
    },
    {
        "display": "Ⓦⓐⓢⓗⓘⓝⓖⓣⓞⓝ",
        "id": "washington"
    },
    {
        "display": "✦☾⇢✧⇠☽✦",
        "id": "rainbow"
    },
    {
        "display": "MⓘⒶMⓘ",
        "id": "miami"
    },
    {
        "display": "𝓝𝓮𝓸 𝓥𝓮𝓰𝓪𝓼",
        "id": "neo-vegas"
    },
    {
        "display": "ⓜⓞⓣⓞ",
        "id": "moto"
    },
    {
        "display": "नई नई दिल्ली",
        "id": "delhi"
    },
    {
        "display": "ℂ𝕚𝕥𝕣𝕦𝕤",
        "id": "cyber-citrus"
    },
    {
        "display": "ⓅⓊⓇⓅⓁⒺ",
        "id": "purple"
    },
    {
        "display": "∅byssal Noir",
        "id": "noir"
    },
    {
        "display": "VAPORWAVE",
        "id": "vaporwave"
    },
    {
        "display": "🗻🗻🗻",
        "id": "fuji"
    },
    {
        "display": "ⓨ²ⓚ",
        "id": "y2k"
    },
    {
        "display": "𝕿𝖍𝖊 𝕾𝖕𝖊𝖈𝖙𝖆𝖈𝖑𝖊",
        "id": "the-spectacle"
    },
    {
        "display": "𝔓𝔞𝔰𝔱𝔢𝔩 𝔊𝔬𝔱𝔥",
        "id": "pastel-goth"
    },
    {
        "display": "𝕂𝕡𝕦𝕟𝕜",
        "id": "k-punk"
    },
    {
        "display": "𝚛𝚎𝚜𝚌𝚎𝚗𝚌𝚎",
        "id": "scene"
    },
    {
        "display": "𝕾𝖑𝖊𝖆𝖟𝖊",
        "id": "sleeze"
    },
    {
        "display": "Aҽɾσ",
        "id": "aero"
    },
    {
        "display": "ℙ𝕝𝕒𝕤𝕥𝕚𝕔",
        "id": "plastic"
    },
    {
        "display": "Z̲̅i̲̅n̲̅e̲̅",
        "id": "zine"
    },
    {
        "display": "ßïçÿçlë\"",
        "id": "bicycle"
    },
    {
        "display": "♫ₘₚ₃♫",
        "id": "mp3"
    },
    {
        "display": "✉Away✉",
        "id": "away"
    },
    {
        "display": "IRC₍ᴵₙₜₑᵣₙₑₜ ᴿₑₗₐᵧ ₢ₕₐₜ₎",
        "id": "irc"
    },
    {
        "display": "ßßₛ",
        "id": "bbs"
    },
    {
        "display": "ᑭѕүᴄʜ",
        "id": "psyc"
    },
    {
        "display": "¹⁹⁸⁴",
        "id": "1984"
    },
    {
        "display": "Ｂｏａｒｄ",
        "id": "board"
    },
    {
        "display": "ᐯᗩᒪᒪᕮᎩ",
        "id": "valley"
    },
    {
        "display": "2oo4",
        "id": "space"
    },
    {
        "display": "0DAY",
        "id": "terminal"
    },
    {
        "display": "sudo rm -rf /*",
        "id": "sudo"
    },
    {
        "display": "한국의 빛",
        "id": "korea"
    },
    {
        "display": "1999",
        "id": "1999"
    },
    {
        "display": "Y₁₀ₖ",
        "id": "y10k"
    },
    {
        "display": "Spiral✵Galaxy",
        "id": "spiral"
    },
    {
        "display": "Pïrätë🎙️Rädïo",
        "id": "radio"
    },
    {
        "display": "Genesis₿lock",
        "id": "nakamoto"
    },
    {
        "display": "🛸🛸🛸",
        "id": "space-age"
    },
    {
        "display": "☢️U-235☢️",
        "id": "uranium"
    },
    {
        "display": "☢️Pu-239☢️",
        "id": "plutonium"
    },
    {
        "display": "ɆⱠł₱₮ł₵ ₵ɄⱤVɆ",
        "id": "eliptic-curve"
    },
    {
        "display": "Ξ𝕏ł𝕋 ℕ𝕆𝔻𝔼",
        "id": "exit-node"
    },
    {
        "display": "₦𝕌𝗠𝖡𝖤𝗥$𝕋𝔸𝕋𝕀𝕆ℕ",
        "id": "numbers-station"
    },
    {
        "display": "ℕ๏ภςє",
        "id": "salmon"
    },
    {
        "display": "ҨบᎥƁᎥ†",
        "id": "qubit"
    },
    {
        "display": "S⍺n Fr⍺ncisc0",
        "id": "san-francisco"
    },
    {
        "display": "L0S@NGeLE$",
        "id": "los-angeles"
    },
    {
        "display": "ʜᴀѕн",
        "id": "hash"
    },
    {
        "display": "███ɃŁØ₵ƙ₵ᎥƤђɆя███",
        "id": "block-cipher"
    }
];

const finalThemeFormat = [

]

themeNames.map((namePairing) => {
    const theme = {}

    theme.name = namePairing.id;
    theme.displayName = namePairing.display;

    const themeColors = themes[theme.name];
    for (const color in themeColors) {
        theme[color] = themeColors[color];
    }

    finalThemeFormat.push(theme);
})


// Now write all themes to a file with `theme.name`.json as file name and other 
// data included
const fs = require('fs');

finalThemeFormat.map((theme) => {
    const fileName = `${theme.name}.json`;
    const data = JSON.stringify(theme, null, 2);

    fs.writeFileSync(`./themes/${fileName}`, data);
})

console.log('Themes generated successfully!')

