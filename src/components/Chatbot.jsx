import { useEffect, useRef, useState } from "react";
import { kumaStarterAnswers } from "../data/bio";

const starterQuestions = [
  "Why is Natalie different?",
  "Tell me about her projects",
  "What is she learning in AI/ML?",
  "How can I contact Natalie?",
];

const initialMessage = {
  role: "bot",
  text: "Hey, I am Kuma, Natalie's best friend. Want to know about her projects, her path into AI, or what makes her a great teammate? Ask away.",
};

const CHAT_API_URL =
  import.meta.env.VITE_CHAT_API_URL ||
  "https://portfolio-h4jcv7pxn4-2644s-projects.vercel.app/api/chat";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (question) => {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || isLoading) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: trimmedQuestion },
    ]);
    setInput("");

    const starterAnswer = kumaStarterAnswers[trimmedQuestion];
    if (starterAnswer) {
      setMessages((currentMessages) => [
        ...currentMessages,
        { role: "bot", text: starterAnswer },
      ]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmedQuestion }),
      });
      const data = await response.json();

      if (!response.ok || !data.reply) {
        throw new Error(data.error || "Kuma could not answer right now.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        { role: "bot", text: data.reply },
      ]);
    } catch (error) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "bot",
          text: "I hit a tiny snag. Please try again, or you can reach Natalie directly through the links on this page.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <section
      className="flex h-[min(34rem,calc(100vh-7rem))] w-[min(25rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.75rem] border border-[#e5d8c9] bg-[#fffdf9] shadow-2xl"
      aria-label="Chat with Kuma about Natalie"
    >
      <header className="border-b border-[#eadfce] bg-[#f3ede4] px-5 py-4 text-[#2c3c3b]">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9664f] font-serif text-lg font-bold text-white">
            K
          </span>
          <div>
            <h2 className="font-serif text-xl font-bold">Kuma</h2>
            <p className="text-xs font-medium text-[#64716a]">Natalie&apos;s best friend and guide</p>
          </div>
        </div>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto bg-[radial-gradient(circle_at_top_right,_#f5e5d5,_transparent_38%),linear-gradient(#fffdf9,#faf5ed)] p-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                message.role === "user"
                  ? "rounded-br-md bg-[#2c3c3b] text-white"
                  : "rounded-bl-md border border-[#eadfce] bg-white text-[#35413e]"
              }`}
            >
              {message.text}
            </p>
          </div>
        ))}

        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {starterQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => sendMessage(question)}
                className="rounded-full border border-[#d8c8b6] bg-white px-3 py-2 text-left text-xs font-semibold text-[#9d4c3d] transition hover:border-[#d9664f] hover:bg-[#fff4ec] focus:outline-none focus:ring-2 focus:ring-[#d9664f] focus:ring-offset-2"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        {isLoading && (
          <div className="flex justify-start">
            <p className="rounded-2xl rounded-bl-md border border-[#eadfce] bg-white px-4 py-3 text-xs italic text-[#64716a] shadow-sm">
              Kuma is thinking...
            </p>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form className="flex gap-2 border-t border-[#eadfce] bg-white p-3" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="kuma-question">
          Ask Kuma a question about Natalie
        </label>
        <input
          id="kuma-question"
          className="min-w-0 flex-1 rounded-full border border-[#d8c8b6] px-4 py-2.5 text-sm text-[#35413e] outline-none transition placeholder:text-[#8b948d] focus:border-[#d9664f] focus:ring-2 focus:ring-[#d9664f]/20"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask Kuma about Natalie..."
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="rounded-full bg-[#d9664f] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#bd503e] disabled:cursor-not-allowed disabled:bg-[#d7c5b9] focus:outline-none focus:ring-2 focus:ring-[#d9664f] focus:ring-offset-2"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Chatbot;
