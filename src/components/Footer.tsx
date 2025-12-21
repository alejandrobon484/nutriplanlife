// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Sobre Nosotros */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">NutriplanLife</h3>
            <p className="text-slate-400 text-sm">
              Tu compañero para una alimentación saludable y planificada según la temporada.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Inicio
                </Link>
              </li>
              {/*----------
			  <li>
                <Link href="/plan" className="hover:text-emerald-400 transition-colors">
                  Planificador
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-emerald-400 transition-colors">
                  Mi Perfil
                </Link>
              </li>
			       ---------*/}
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-emerald-400 transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-emerald-400 transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <p className="text-slate-400 text-sm mb-2">
              Barcelona, España
            </p>
            <Link 
              href="/contact" 
              className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
            >
              Formulario de contacto
            </Link>
          </div>
        </div>

        {/* Disclaimer Médico */}
        <div className="border-t border-slate-800 pt-6 mb-6">
          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-slate-400 text-xs leading-relaxed">
              <strong className="text-slate-300">Aviso Médico:</strong> La información proporcionada por NutriplanLife 
              tiene únicamente fines informativos y educativos. No constituye asesoramiento médico, diagnóstico o 
              tratamiento profesional. Consulte siempre a un profesional de la salud cualificado antes de realizar 
              cambios significativos en su dieta o régimen de ejercicio.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} NutriplanLife. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}