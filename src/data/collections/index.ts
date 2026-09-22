import { CollectionData } from "@/types/collection";
import { dongTuData } from "./dong-tu";
import { cauNoiTuNhienData } from "./cau-noi-tu-nhien";
import { phrasalVerbsData } from "./phrasal-verbs";
import { tuVungData } from "./tu-vung";

export const collections: Record<CollectionData["key"], CollectionData> = {
  "dong-tu": dongTuData,
  "cau-noi-tu-nhien": cauNoiTuNhienData,
  "phrasal-verbs": phrasalVerbsData,
  "tu-vung": tuVungData,
};

export { dongTuData, cauNoiTuNhienData, phrasalVerbsData, tuVungData };
