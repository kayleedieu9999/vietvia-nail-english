"use client";

import { useState } from "react";
import { generateRound, RoundQuestion } from "@/lib/quiz-engine";
import HomeScreen from "@/components/HomeScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";

type Screen = "home" | "quiz" | "result";

export default function QuizApp() {
  const [screen, setScreen] = useState<Screen>("home");
  const [round, setRound] = useState<RoundQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  function startNewRound() {
    setRound(generateRound());
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setScreen("quiz");
  }

  function handleSelect(answer: string) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answer);
    if (answer === round[currentIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    const isLastQuestion = currentIndex === round.length - 1;
    if (isLastQuestion) {
      setScreen("result");
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(null);
  }

  function handleRestart() {
    setScreen("home");
  }

  if (screen === "home" || round.length === 0) {
    return <HomeScreen onStart={startNewRound} />;
  }

  if (screen === "quiz") {
    return (
      <QuizScreen
        question={round[currentIndex]}
        questionNumber={currentIndex + 1}
        totalQuestions={round.length}
        selectedAnswer={selectedAnswer}
        onSelect={handleSelect}
        onNext={handleNext}
      />
    );
  }

  return (
    <ResultScreen
      score={score}
      total={round.length}
      onPlayAgain={startNewRound}
      onRestart={handleRestart}
    />
  );
}
