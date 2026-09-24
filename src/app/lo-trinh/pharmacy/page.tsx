import type { Metadata } from "next";
import CollectionPageClient from "@/components/collections/CollectionPageClient";
import { pharmacyData } from "@/data/collections";

export const metadata: Metadata = {
  title: `${pharmacyData.title} - VietVia English Practice`,
  description: pharmacyData.subtitle,
};

export default function PharmacyPage() {
  return <CollectionPageClient data={pharmacyData} />;
}
