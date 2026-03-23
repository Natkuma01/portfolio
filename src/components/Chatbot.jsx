import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Natalie's AI assistant. 🌟 Ask me anything about her projects, her time at CodePath, or even her favorite cooking recipes!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Replace with your actual Vercel URL
      const response = await fetch('https://portfolio-h4jcv7pxn4-2644s-projects.vercel.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'bot', text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'bot', text: "Oh no! My circuits got a bit corny. Try asking again? 🌽" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto border border-pink-200 rounded-2xl shadow-xl bg-white overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-4 text-white">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span>✨</span> Natalie's AI Bestie
        </h3>
        <p className="text-xs opacity-80">Online & ready to chat!</p>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-pink-50/30">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
              m.role === 'user' 
                ? 'bg-purple-600 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 border border-pink-100 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-pink-100 px-4 py-2 rounded-2xl rounded-tl-none shadow-sm text-gray-400 italic text-xs animate-pulse">
              Natalie's bot is thinking...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-pink-100 flex gap-2">
        <input 
          className="flex-1 border border-pink-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask me anything..."
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors shadow-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;