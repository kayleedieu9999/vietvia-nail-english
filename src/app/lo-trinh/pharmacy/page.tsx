import type { Metadata } from "next";
import CollectionPageClient from "@/components/collections/CollectionPageClient";
import { pharmacyData } from "@/data/collections";

export const metadata: Metadata = {
  title: `${pharmacyData.title} - VietVia English Practice`,
  description: pharmacyData.subtitle,
};

export default function PharmacyPage() {
  return <CollectionPageClient
      data={pharmacyData}
      practice={{ href: "/lesson/pharmacy-batch-2026-10/luyen-tap", label: "Luyện tập 50 câu mới" }}
    />;
}
