'use client';

import { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, Send, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// 🔧 CONFIGURACIÓN - Cambia esta URL por la tuya
const N8N_WEBHOOK_URL = 'https://n8n.srv887324.hstgr.cloud/webhook/nutriplan-chat';

export default function ChatbotN8N() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! 👋 Soy tu asistente nutricional de NutriPlanLife.\n\n¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Obtener o crear ID de sesión
  const getSessionId = () => {
    if (typeof window === 'undefined') return '';
    
    let sessionId = localStorage.getItem('nutriplan_chat_session');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('nutriplan_chat_session', sessionId);
    }
    return sessionId;
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Añadir mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    try {
      // Llamada a N8N
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage,
          sessionId: getSessionId(),
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Añadir respuesta del bot
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || 'Lo siento, no recibí una respuesta válida.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '❌ Lo siento, hubo un problema de conexión.\n\nPor favor, intenta de nuevo en unos momentos.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Botones de respuesta rápida
  const quickReplies = [
    '¿Cómo funciona?',
    'Crear mi plan',
    'Ingredientes de temporada',
    'Calcular calorías'
  ];

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
  };

  return (
    <>
      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-all hover:scale-110 z-50 group"
          aria-label="Abrir chat nutricional"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Ventana de chat - Fullscreen en móvil, flotante en desktop */}
      {isOpen && (
        <div className="fixed inset-0 md:bottom-6 md:right-6 md:top-auto md:left-auto md:w-[420px] md:h-[650px] bg-white md:rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-200 md:max-h-[90vh]">
          
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 md:rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                🥗
              </div>
              <div>
                <h3 className="font-semibold text-lg">NutriPlanLife</h3>
                <p className="text-xs text-emerald-50 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Asistente disponible 24/7
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 ${
                    message.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-sm'
                      : 'bg-white text-slate-800 shadow-md border border-slate-100 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">
                    {message.text}
                  </p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString('es-ES', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Indicador de escritura */}
            {isLoading && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-white rounded-2xl rounded-bl-sm p-4 shadow-md border border-slate-100">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Respuestas rápidas (solo si no hay loading y es el primer mensaje) */}
          {messages.length <= 1 && !isLoading && (
            <div className="px-4 py-2 flex flex-wrap gap-2 bg-white border-t border-slate-100">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1.5 text-xs bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 transition-colors border border-emerald-200"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input de mensaje */}
          <div className="p-4 border-t border-slate-200 bg-white md:rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center min-w-[52px]"
                aria-label="Enviar mensaje"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">
              Powered by NutriPlanLife AI
            </p>
          </div>
        </div>
      )}

      {/* Estilos de animación */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}