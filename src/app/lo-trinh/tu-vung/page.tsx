import type { Metadata } from "next";
import CollectionPageClient from "@/components/collections/CollectionPageClient";
import { tuVungData } from "@/data/collections";

export const metadata: Metadata = {
  title: `${tuVungData.title} - VietVia English Practice`,
  description: tuVungData.subtitle,
};

export default function TuVungPage() {
  return <CollectionPageClient data={tuVungData} />;
}
