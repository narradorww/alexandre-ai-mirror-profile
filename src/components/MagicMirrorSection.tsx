
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessagesSquare, Send, User, Zap } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'mirror';
  timestamp: Date;
}

const MagicMirrorSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm Espelho Mágico, Rodrigo's AI assistant. How can I help you learn more about Rodrigo's work?",
      sender: 'mirror',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      const newUserMessage: Message = {
        id: messages.length + 1,
        content: input.trim(),
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, newUserMessage]);
      setInput('');
      setIsTyping(true);
      
      // Simulate AI response
      setTimeout(() => {
        const response = getMirrorResponse(input.trim());
        const newMirrorMessage: Message = {
          id: messages.length + 2,
          content: response,
          sender: 'mirror',
          timestamp: new Date()
        };
        
        setMessages(prevMessages => [...prevMessages, newMirrorMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  const getMirrorResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return "Rodrigo has over 20 years of experience in technology, with the last 3+ years focused on software development. He specializes in JavaScript/TypeScript, React Native, and has a strong background in building mobile applications and implementing AI solutions.";
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('tech')) {
      return "Rodrigo's technical skills include JavaScript/TypeScript, React Native, React.js, Next.js, Node.js, MongoDB, AWS, and Generative AI. He's also experienced with agile methodologies, Scrum, and using Jira for project management.";
    } else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
      return "Rodrigo has worked on several notable projects: Fretador, a logistics app for TRC Logistics; RecicleLink, which won 1st place at Hack for Change 2023; and 'Scooby-Doo, Where Are You?', which earned 6th place at AI Immersion 2023 among 1200+ projects.";
    } else if (lowerMessage.includes('award') || lowerMessage.includes('achievement')) {
      return "Rodrigo's achievements include: 1st Place at Hack for Change 2023 (Alura + FIAP) for the RecicleLink project and 6th Place at AI Immersion 2023 (Alura + Google) for the 'Scooby-Doo, Where Are You?' project.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
      return "If you're interested in discussing opportunities with Rodrigo, you can reach out through the contact form on this website. He's open to discussing mobile development projects, tech leadership roles, and innovative AI implementations.";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm Espelho Mágico (Magic Mirror), Rodrigo's AI assistant. I can tell you about his experience, skills, projects, and achievements. What would you like to know?";
    } else {
      return "Interesting question! Rodrigo is passionate about mobile development and AI innovation. He combines 20+ years of tech experience with cutting-edge knowledge to create impactful solutions. Is there something specific about his work you'd like to know?";
    }
  };
  
  return (
    <section id="magic-mirror" className="relative py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-title">Espelho <span className="highlight">Mágico</span></h2>
        <p className="text-foreground/80 max-w-2xl mb-8">
          Ask the Magic Mirror about Rodrigo's experience, skills, or projects. This AI-powered assistant can provide insights about his work.
        </p>
        
        {/* Magic Mirror UI */}
        <div className="max-w-2xl mx-auto gradient-border">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <MessagesSquare size={20} className="text-primary" />
                </div>
                <h3 className="font-medium">Magic Mirror Assistant</h3>
              </div>
              <div className="flex items-center space-x-1">
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-xs text-foreground/70">Online</span>
              </div>
            </div>
            
            {/* Messages area */}
            <div className="bg-card/50 rounded-lg p-4 h-80 overflow-y-auto mb-4">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full ${
                      message.sender === 'user' ? 'bg-primary/20 ml-2' : 'bg-secondary/20 mr-2'
                    }`}>
                      {message.sender === 'user' ? (
                        <User size={16} className="text-primary" />
                      ) : (
                        <Zap size={16} className="text-secondary" />
                      )}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.sender === 'user' ? 'bg-primary/20' : 'bg-muted'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="flex items-start max-w-[80%]">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-secondary/20 mr-2">
                      <Zap size={16} className="text-secondary" />
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 bg-foreground/60 rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef}></div>
            </div>
            
            {/* Input area */}
            <div className="flex gap-3">
              <Textarea 
                placeholder="Ask the Magic Mirror about Rodrigo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="resize-none bg-card/50"
              />
              <Button 
                onClick={handleSend} 
                disabled={!input.trim()} 
                className="bg-primary hover:bg-primary/90"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <p className="text-center text-foreground/60 mt-6 text-sm">
          This AI assistant can answer questions about Rodrigo's professional background and projects.
        </p>
      </div>
    </section>
  );
};

export default MagicMirrorSection;
