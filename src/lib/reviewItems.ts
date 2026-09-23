"use client";

import { useMemo } from "react";
import { collections } from "@/data/collections";
import { CollectionData, flattenCollection } from "@/types/collection";
import { ItemProgress, useCollectionProgress } from "@/lib/collectionProgress";
import { useGrammarProgress, isRuleNeedsReview } from "@/lib/grammarProgress";
import { PracticeItem } from "@/lib/dailyPronunciation";
import { GrammarReviewEntry } from "@/data/grammar";

/**
 * ONE shared review-item read model spanning every collection that has a
 * real "Cần ôn lại"/"Đã nhớ" toggle: the 4 collectionProgress-backed
 * collections (Từ vựng, Câu nói tự nhiên, Động từ, Phrasal Verbs), the
 * homepage's Tiệm Nails speaking pool (also collectionProgress, key
 * "nails-speaking"), and Grammar (grammarProgress, its own quiz-linked
 * shape — see `isRuleNeedsReview`). No new persisted store: this only reads
 * and re-shapes the existing ones so `/on-tap`, the homepage `ReviewCard`,
 * and the sidebar count all agree with each other and with the collection
 * pages themselves.
 */

export type ReviewContentType = "vocabulary" | "phrase" | "verb" | "phrasal_verb" | "nail_sentence" | "grammar";

export interface ReviewItem {
  /** Stable, unique across all content types. */
  id: string;
  contentType: ReviewContentType;
  english: string;
  vietnamese: string;
  whenToUse?: string;
  sourceRoute: string;
  sourceLabel: string;
  /** "grammar" for grammar items, otherwise the real collectionProgress collectionKey — how to persist a status change. */
  collectionKey: string;
  /** itemId for collectionProgress, ruleId for grammar. */
  itemId: string;
}

export const CONTENT_TYPE_LABELS: Record<ReviewContentType, string> = {
  vocabulary: "Từ vựng",
  phrase: "Câu nói",
  verb: "Động từ",
  phrasal_verb: "Phrasal Verb",
  nail_sentence: "Tiệm Nails",
  grammar: "Ngữ pháp",
};

const COLLECTION_CONTENT_TYPE: Record<CollectionData["key"], ReviewContentType> = {
  "tu-vung": "vocabulary",
  "cau-noi-tu-nhien": "phrase",
  "dong-tu": "verb",
  "phrasal-verbs": "phrasal_verb",
};

const COLLECTION_ROUTE: Record<CollectionData["key"], string> = {
  "tu-vung": "/lo-trinh/tu-vung",
  "cau-noi-tu-nhien": "/lo-trinh/cau-noi-tu-nhien",
  "dong-tu": "/lo-trinh/dong-tu",
  "phrasal-verbs": "/lo-trinh/phrasal-verbs",
};

const COLLECTION_KEYS = Object.keys(collections) as CollectionData["key"][];

function countReview(bucket: Record<string, ItemProgress>): number {
  return Object.values(bucket).filter((p) => p.state === "review").length;
}

/** Cheap, item-detail-free count — safe to use anywhere (e.g. the sidebar) without needing the nails pool. */
export function useReviewCount(): number {
  const tuVung = useCollectionProgress("tu-vung");
  const cauNoi = useCollectionProgress("cau-noi-tu-nhien");
  const dongTu = useCollectionProgress("dong-tu");
  const phrasalVerbs = useCollectionProgress("phrasal-verbs");
  const nails = useCollectionProgress("nails-speaking");
  const grammar = useGrammarProgress();

  return useMemo(() => {
    const collectionsCount =
      countReview(tuVung) + countReview(cauNoi) + countReview(dongTu) + countReview(phrasalVerbs) + countReview(nails);
    const grammarCount = Object.values(grammar).filter((p) => isRuleNeedsReview(p)).length;
    return collectionsCount + grammarCount;
  }, [tuVung, cauNoi, dongTu, phrasalVerbs, nails, grammar]);
}

/** Full item list with display details — needs the (server-built) nails pool and grammar pool passed down as props. */
export function useReviewItems(
  nailsPool: PracticeItem[],
  grammarPool: Record<string, GrammarReviewEntry>,
): ReviewItem[] {
  const tuVung = useCollectionProgress("tu-vung");
  const cauNoi = useCollectionProgress("cau-noi-tu-nhien");
  const dongTu = useCollectionProgress("dong-tu");
  const phrasalVerbs = useCollectionProgress("phrasal-verbs");
  const nails = useCollectionProgress("nails-speaking");
  const grammar = useGrammarProgress();

  const progressByKey: Record<CollectionData["key"], Record<string, ItemProgress>> = {
    "tu-vung": tuVung,
    "cau-noi-tu-nhien": cauNoi,
    "dong-tu": dongTu,
    "phrasal-verbs": phrasalVerbs,
  };

  return useMemo(() => {
    const items: ReviewItem[] = [];

    for (const key of COLLECTION_KEYS) {
      const progress = progressByKey[key];
      const data = collections[key];
      for (const item of flattenCollection(data)) {
        if (progress[item.id]?.state !== "review") continue;
        items.push({
          id: `${key}:${item.id}`,
          contentType: COLLECTION_CONTENT_TYPE[key],
          english: item.english,
          vietnamese: item.vietnamese,
          whenToUse: item.whenToUse,
          sourceRoute: COLLECTION_ROUTE[key],
          sourceLabel: data.title,
          collectionKey: key,
          itemId: item.id,
        });
      }
    }

    for (const item of nailsPool) {
      if (nails[item.itemId]?.state !== "review") continue;
      items.push({
        id: `nails-speaking:${item.itemId}`,
        contentType: "nail_sentence",
        english: item.english,
        vietnamese: item.vietnamese,
        sourceRoute: "/hoi-thoai-nails",
        sourceLabel: "Hội thoại Nails",
        collectionKey: "nails-speaking",
        itemId: item.itemId,
      });
    }

    for (const [ruleId, entry] of Object.entries(grammarPool)) {
      if (!isRuleNeedsReview(grammar[ruleId])) continue;
      items.push({
        id: `grammar:${ruleId}`,
        contentType: "grammar",
        english: entry.targetEnglish,
        vietnamese: entry.vietnameseHint,
        sourceRoute: `/lo-trinh/ngu-phap/rule/${ruleId}`,
        sourceLabel: entry.title,
        collectionKey: "grammar",
        itemId: ruleId,
      });
    }

    return items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tuVung, cauNoi, dongTu, phrasalVerbs, nails, grammar, nailsPool, grammarPool]);
}
