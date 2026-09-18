import type { Metadata } from "next";
import { grammarPhases } from "@/data/grammar/phases";
import { getAllGrammarRuleSummaries } from "@/data/grammar";
import GrammarProgramView from "@/components/grammar/GrammarProgramView";

export const metadata: Metadata = {
  title: "100 Quy tắc ngữ pháp cần thiết - VietVia English Practice",
  description: "Không cần học ngữ pháp quá khó. Mình đi từng phần ngắn và dùng ngay trong giao tiếp.",
};

export default function GrammarProgramPage() {
  const ruleSummaries = getAllGrammarRuleSummaries();
  return <GrammarProgramView phases={grammarPhases} ruleSummaries={ruleSummaries} />;
}
