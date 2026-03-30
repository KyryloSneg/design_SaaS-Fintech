import type { Config } from "tailwindcss";

interface TypographyInfo {
  lineHeight: string;
  letterSpacing: string;
}

interface FontSizePxToTypographyInfo {
  [key: string]: TypographyInfo;
}

const defaultLineHeight = "normal";
const defaultLetterSpacing = "0em";
const defaultTypographyInfo: TypographyInfo = {
  lineHeight: defaultLineHeight,
  letterSpacing: defaultLetterSpacing,
};

const baseFontSizePx = 16;
const fontSizeArray = [
  "3",
  "9",
  "10",
  "12",
  "13",
  "14",
  "16",
  "18",
  "20",
  "21",
  "22",
  "24",
  "26",
  "30",
  "33",
  "40",
  "46",
  "56",
  "60",
  "64",
];

const baseFontSizePxToTypographyInfo: FontSizePxToTypographyInfo =
  Object.fromEntries(fontSizeArray.map(size => [size, defaultTypographyInfo]));

function generateModifiedFontSizePxToTypographyInfo(
  key: keyof TypographyInfo,
  value: string,
  prefix: string,
): FontSizePxToTypographyInfo {
  return Object.fromEntries(
    Object.entries(baseFontSizePxToTypographyInfo).map(
      ([iterKey, iterValue]) => [
        `${iterKey}-${prefix}`,
        { ...iterValue, [key]: value },
      ],
    ),
  );
}

const tightFontSizePxToTypographyInfo =
  generateModifiedFontSizePxToTypographyInfo(
    "letterSpacing",
    "-0.02em",
    "tight",
  );

const tighterFontSizePxToTypographyInfo =
  generateModifiedFontSizePxToTypographyInfo(
    "letterSpacing",
    "-0.05em",
    "tighter",
  );

const fontSizePxToTypographyInfo: FontSizePxToTypographyInfo = {
  ...baseFontSizePxToTypographyInfo,
  ...tightFontSizePxToTypographyInfo,
  ...tighterFontSizePxToTypographyInfo,
};

interface FontSizeObject {
  [key: string]: [string, TypographyInfo];
}

const fontSizeObj: FontSizeObject = Object.fromEntries(
  Object.entries(fontSizePxToTypographyInfo).map(([key, value]) => [
    key,
    [`${(parseInt(key.split("-")[0]) / baseFontSizePx).toFixed(3)}rem`, value],
  ]),
);

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: fontSizeObj,
    },
  },
  plugins: [],
} satisfies Config;

export default config;
