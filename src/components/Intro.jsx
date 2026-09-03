import { useState } from "react";
import introPic from "../../assets/Intro/introPic.jpg";
import gitLogo from "../../assets/Intro/git.png";
import linkedinLogo from "../../assets/Intro/linkedin.png";
import Chatbot from "./Chatbot";

const Intro = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [isProjectPopupOpen, setIsProjectPopupOpen] = useState(true);

  return (
    <div className="min-h-[calc(100vh-4rem)] relative overflow-hidden">
      {isProjectPopupOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-900/40 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ml-project-title"
        >
          <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl border border-white/70 bg-[#fdf7f2] p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsProjectPopupOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-xl text-zinc-600 transition hover:bg-[#f4dada] hover:text-zinc-900"
              aria-label="Close project announcement"
            >
              x
            </button>
            <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#af4f52]">
              New Project
            </p>
            <h2 id="ml-project-title" className="text-2xl sm:text-3xl font-extrabold text-zinc-700 leading-tight">
              Hey I&rsquo;m working on a new ML project.
              <span className="mt-3 sm:mt-4 block text-base sm:text-lg font-medium leading-relaxed text-zinc-600">
                Take a look{" "}
                <a
                  href="https://github.com/Natkuma01/spaceship-titanic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#af4f52] underline decoration-2 underline-offset-4 transition hover:text-zinc-900"
                >
                  here
                </a>
              </span>
            </h2>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 lg:p-20 gap-8 sm:gap-12">
        <div className="flex-1 flex justify-center w-full">
          <img
            className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px] h-auto origin-bottom -rotate-6 md:-rotate-12 rounded-3xl shadow-2xl object-cover"
            src={introPic}
            alt="Natalie Chan"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-zinc-700 font-extrabold text-3xl sm:text-4xl lg:text-5xl my-2 leading-snug">
            Hi. My name is Natalie Chan
          </h1>
          <p className="text-zinc-600 font-bold text-lg sm:text-xl lg:text-2xl my-4">
            I am a full-stack developer based in New York.
          </p>
          <div className="flex justify-center md:justify-start space-x-5 mt-2">
            <a
              href="https://www.linkedin.com/in/natalie-chan-shimin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <img
                className="h-10 sm:h-12 w-auto rounded-lg hover:scale-105 transition-transform"
                src={linkedinLogo}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/Natkuma01?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <img
                className="h-10 sm:h-12 w-auto rounded-lg hover:scale-105 transition-transform"
                src={gitLogo}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Chat Drawer Container */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
        {chatOpen && <Chatbot />}
        <button
          onClick={() => setChatOpen((prev) => !prev)}
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#d9664f] text-white shadow-lg transition-colors hover:bg-[#bd503e]"
          aria-label={chatOpen ? "Close Kuma chat" : "Open Kuma chat"}
        >
          {chatOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H7l-5 4V5z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Intro;
