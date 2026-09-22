import type { Metadata } from "next";
import CollectionPageClient from "@/components/collections/CollectionPageClient";
import { dongTuData } from "@/data/collections";

export const metadata: Metadata = {
  title: `${dongTuData.title} - VietVia English Practice`,
  description: dongTuData.subtitle,
};

export default function DongTuPage() {
  return <CollectionPageClient data={dongTuData} />;
}
