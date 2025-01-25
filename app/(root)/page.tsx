"use client";
import Game from "@/components/molecules/game";
import MaxWidthWrapper from "@/components/atoms/max-width-wrapper";
import Score from "@/components/atoms/score";
import Subjects from "@/components/atoms/subjects";
import { useQuestionStore } from "@/store/quiz-store";
import { useEffect } from "react";
import { MotionDiv } from "@/components/animated/motion-div";
import { cn } from "@/lib/utils";
import { FaFacebook, FaLinkedin, FaDiscord, FaYoutube, FaGithub } from "react-icons/fa";
import Image from "next/image";

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
      className="flex flex-col gap-1 md:gap-1 lg:gap-0"
    >
      <div className="w-full max-w-[70px] md:max-w-[90px] lg:max-w-[100px] mb-1 md:mb-2">
        <Image
          src="/assets/images/logo.gif"
          alt="Quizverse Logo"
          width={100}
          height={100}
          className="w-full h-auto"
          priority
        />
      </div>

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

      <footer className="col-span-full text-center py-6 mt-8 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-center gap-4 md:gap-3">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="https://www.facebook.com/magiciansheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mshsheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://discordapp.com/user/1228891042787627070"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple transition-colors"
              aria-label="Discord"
            >
              <FaDiscord className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.youtube.com/c/@SalmanSheikhOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://github.com/mshsheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl md:text-3xl" />
            </a>
          </div>
          <div className="mt-2 md:mt-0">
            &copy; 2025 <strong>Quizverse</strong> by Muhammad Salman Hussain.
            <br />
            All Rights Reserved.
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
}
