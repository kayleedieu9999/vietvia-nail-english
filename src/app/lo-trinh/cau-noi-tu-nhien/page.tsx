import type { Metadata } from "next";
import CollectionPageClient from "@/components/collections/CollectionPageClient";
import { cauNoiTuNhienData } from "@/data/collections";

export const metadata: Metadata = {
  title: `${cauNoiTuNhienData.title} - VietVia English Practice`,
  description: cauNoiTuNhienData.subtitle,
};

export default function CauNoiTuNhienPage() {
  return <CollectionPageClient data={cauNoiTuNhienData} />;
}
