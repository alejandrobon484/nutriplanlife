'use client';

import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    // Verificar que estamos en el navegador
    if (typeof window !== 'undefined') {
      // Inicializar variables de Tawk
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();

      // Crear elemento script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/692c157f3ec54b197ce29a1a/1jba37ub6'; // ⚠️ REEMPLAZA con tu ID
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      // Insertar en el DOM
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    }
  }, []);

  return null;
}