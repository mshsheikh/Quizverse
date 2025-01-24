"use client";
import Game from "@/components/molecules/game";
import MaxWidthWrapper from "@/components/atoms/max-width-wrapper";
import Score from "@/components/atoms/score";
import Subjects from "@/components/atoms/subjects";
import { useQuestionStore } from "@/store/quiz-store";
import { useEffect } from "react";
import { MotionDiv } from "@/components/animated/motion-div";
import { cn } from "@/lib/utils";

export default function Home() {
  const { fetchQuizzes, quizzes, selectedQuizz, hasCompleteAll, reset } =
    useQuestionStore();

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  return (
    <MaxWidthWrapper
      className={cn(
        selectedQuizz && "xl:place-content-center",
        "grid px-6 sm:px-8 lg:px-10 xl:px-0 grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 relative z-50 h-full"
      )}
    >
      {!selectedQuizz && (
        <>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mt-16 xl:mt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-dark-blue dark:text-white">
              <span className="text-sm md:text-lg lg:text-xl block overflow-hidden whitespace-nowrap animate-typing">
                Welcome to
              </span>
              <span className="font-bold block text-4xl sm:text-5xl md:text-6xl lg:text-7xl overflow-hidden whitespace-nowrap animate-typing">
                Quizverse!
              </span>
            </h1>
            <p className="text-gray-navy italic dark:text-light-blue text-sm sm:text-base md:text-lg lg:text-2xl">
              Learn. Play. Level up!
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 justify-center w-full"
          >
            <Subjects data={quizzes} />
          </MotionDiv>
        </>
      )}
      {selectedQuizz && hasCompleteAll === false && <Game />}
      {hasCompleteAll && (
        <>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3 md:gap-4 lg:gap-6 h-full mt-10"
          >
            <h1 className="text-4xl md:text-5xl font-normal text-dark-blue dark:text-white lg:text-6xl">
              Quiz Completed!
            </h1>
            <p className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-white lg:text-6xl">
              You scored:
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col justify-center gap-4 lg:gap-6"
          >
            <Score />
            <button
              className="w-full bg-purple py-3 md:py-4 px-4 md:px-5 rounded-xl shadow-lg text-white font-semibold text-base md:text-lg text-center"
              onClick={reset}
            >
              Play Again
            </button>
          </MotionDiv>
        </>
      )}
    </MaxWidthWrapper>
  );
}
