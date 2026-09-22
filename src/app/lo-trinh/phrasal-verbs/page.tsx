import type { Metadata } from "next";
import CollectionPageClient from "@/components/collections/CollectionPageClient";
import { phrasalVerbsData } from "@/data/collections";

export const metadata: Metadata = {
  title: `${phrasalVerbsData.title} - VietVia English Practice`,
  description: phrasalVerbsData.subtitle,
};

export default function PhrasalVerbsPage() {
  return <CollectionPageClient data={phrasalVerbsData} />;
}
