import { useState } from "react";
import introPic from "../../assets/Intro/introPic.jpg";
import gitLogo from "../../assets/Intro/git.png";
import linkedinLogo from "../../assets/Intro/linkedin.png";
import Chatbot from "./Chatbot";

const Intro = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [isProjectPopupOpen, setIsProjectPopupOpen] = useState(true);

  return (
    <>
    {isProjectPopupOpen && (
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-900/40 p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ml-project-title"
      >
        <div className="relative w-full max-w-md rounded-3xl border border-white/70 bg-[#fdf7f2] p-8 shadow-2xl">
          <button
            type="button"
            onClick={() => setIsProjectPopupOpen(false)}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-xl text-zinc-600 transition hover:bg-[#f4dada] hover:text-zinc-900"
            aria-label="Close project announcement"
          >
            x
          </button>
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#af4f52]">
            New Project
          </p>
          <h2 id="ml-project-title" className="text-3xl font-extrabold text-zinc-700">
            Hey I&rsquo;m working on a new ML project.
            <span className="mt-4 block text-lg font-medium leading-relaxed text-zinc-600">
              Take a look
              {" "}
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
    <div className="flex flex-col md:flex-row p-6 md:p-24">
      <div className="flex-1">
        <img
          className="max-h-[400px] md:max-h-[600px] origin-bottom -rotate-12 mx-auto md:ml-0 rounded-3xl shadow-2xl"
          src={introPic}
          alt="Intro"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center md:ml-8 my-8 md:my-0">
        <p className="text-zinc-600 font-bold text-3xl md:text-5xl my-2 text-center md:text-left">
          Hi. My name is Natalie Chan
        </p>
        <p className="text-zinc-600 font-bold text-lg md:text-xl my-5 text-center md:text-left">
          I am a full-stack developer based in New York.
        </p>
        <div className="flex justify-center md:justify-start space-x-5">
          <a
            href="https://www.linkedin.com/in/natalie-chan-shimin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-h-10 md:max-h-12 my-5 rounded-lg"
              src={linkedinLogo}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Natkuma01?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-h-10 md:max-h-12 my-5 rounded-lg"
              src={gitLogo}
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {chatOpen && <Chatbot />}
      <button
        onClick={() => setChatOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d9664f] text-white shadow-lg transition-colors hover:bg-[#bd503e]"
        aria-label={chatOpen ? "Close Kuma chat" : "Open Kuma chat"}
      >
        {chatOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H7l-5 4V5z" />
          </svg>
        )}
      </button>
    </div>
    </>
  );
};
export default Intro;
