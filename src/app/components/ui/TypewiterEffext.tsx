"use client";

import { cn } from "@/lib/utils";
import { animate, inView, stagger } from "motion";
import { useEffect, useRef } from "react";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scope.current) {
      inView(scope.current, () => {
        animate(
          scope.current!.querySelectorAll("span"),
          { opacity: 1 },
          { delay: stagger(0.025), duration: 0.1, easing: "ease-in-out" }
        );
      });
    }
  }, []);

  return (
    <div
      ref={scope}
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      <div className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn(
                  `dark:text-white text-black opacity-0`,
                  word.className
                )}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scope.current) {
      animate(scope.current, { width: "fit-content" }, { duration: 1.5, delay: 1, easing: "linear" });
    }
  }, []);

  return (
    <div className={cn("typewriter", className)}>
      <div ref={scope} className="overflow-hidden pb-2 w-0">
        <div className="typewriter-inner">
          {wordsArray.map((word, idx) => (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn("text-white", word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};