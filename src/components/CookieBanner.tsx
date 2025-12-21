// components/CookieBanner.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      setTimeout(() => {
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100);
      }, 1000);
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    
    // Activar Google Analytics si está instalado
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    
    closeBanner();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    
    // Desactivar Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    
    closeBanner();
  };

  if (!showBanner) return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 transform transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Barra superior de color */}
        <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-600" />
        
        <div className="p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-emerald-600" />
              <h3 className="font-semibold text-slate-900">Cookies</h3>
            </div>
            <button
              onClick={handleReject}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contenido */}
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Usamos cookies para mejorar tu experiencia. Consulta nuestra{' '}
            <Link href="/cookies" className="text-emerald-600 hover:text-emerald-700 font-medium">
              política de cookies
            </Link>
            {' '}para más información.
          </p>

          {/* Botones */}
          <div className="flex gap-2">
            <button
              onClick={handleReject}
              className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}