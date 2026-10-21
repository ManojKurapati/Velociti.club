"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AskVelocitiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{role: string; content: string}>>([
    { role: 'assistant', content: 'Hi, I am the Velociti RAG agent. How can I help you understand autonomous enterprise deployment?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    const currentInput = input;
    setInput('');
    
    const formData = new FormData();
    formData.append("Form", "Ask Velociti");
    formData.append("Question", currentInput);
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwSDNTxl5vXT52KCx5Jh6xFRcYkvrAK9nZbCE6VoZ5Y2S_TapBvXTd9bkgmuAd0pSAcNA/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });
    } catch(err) {
      console.error(err);
    }

    // Simulate AI typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "That's a great question. In a production environment, I would retrieve our official methodology from the knowledge base to answer this." 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[calc(100vw-3rem)] sm:w-[400px] h-[500px] mb-4 bg-surface border border-line rounded-lg shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-line flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-raised border border-line flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-cool-gray-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Ask Velociti</h4>
                  <p className="text-xs text-cool-gray-500">Answers from our knowledge base</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-cool-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-md text-sm ${
                    msg.role === 'user' 
                      ? 'bg-white text-black ' 
                      : 'bg-raised text-cool-gray-300 border border-line'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-line bg-surface">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..." 
                  className="w-full h-10 bg-canvas border border-line rounded-md pl-3 pr-11 text-sm text-white focus:outline-none focus:border-white/40"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-[5px] flex items-center justify-center text-black hover:bg-cool-gray-200 transition-colors" aria-label="Send">
                  <Send className="w-4 h-4 ml-[-2px]" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Ask Velociti a question"}
        className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-black transition-colors hover:bg-cool-gray-200 active:scale-95"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
