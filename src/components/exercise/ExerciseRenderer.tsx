"use client";

import { Exercise } from "@/types/exercise";
import MultipleChoiceExercise from "./MultipleChoiceExercise";
import ImageQuizExercise from "./ImageQuizExercise";
import SentenceBuilderExercise from "./SentenceBuilderExercise";
import SpeakingExercise from "./SpeakingExercise";

interface ExerciseRendererProps {
  exercise: Exercise;
  onAnswered: (correct: boolean) => void;
  onMarkedReview: () => void;
  onAdvance: () => void;
  isLast: boolean;
}

/** Dispatches to the right exercise component by `exercise.type` — the only place that needs to know all 8 types exist. */
export default function ExerciseRenderer(props: ExerciseRendererProps) {
  const { exercise } = props;

  switch (exercise.type) {
    case "image_quiz":
      return <ImageQuizExercise {...props} />;
    case "sentence_builder":
      return <SentenceBuilderExercise {...props} />;
    case "speaking":
      return <SpeakingExercise {...props} />;
    case "multiple_choice":
    case "listening_choice":
    case "fill_blank":
    case "true_false":
    case "situation_choice":
    default:
      return <MultipleChoiceExercise {...props} />;
  }
}
