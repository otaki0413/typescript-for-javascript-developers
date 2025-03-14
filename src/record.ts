export {};

type Prefectures = "Tokyo" | "Chiba" | "Tottori" | "Ishikawa";
type Covid19InfectionInfo = {
  kanjiName: string;
  confirmedCases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanjiName: "東京", confirmedCases: 1960 },
  Chiba: { kanjiName: "千葉", confirmedCases: 399 },
  Tottori: { kanjiName: "鳥取", confirmedCases: 655 },
  Ishikawa: { kanjiName: "石川", confirmedCases: 300 },
};
