// app/cookies/page.tsx
export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Cookies</h1>
        
        <p className="text-slate-600 mb-6">
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. ¿Qué son las Cookies?</h2>
          <p className="text-slate-700 mb-4">
            Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, 
            tableta o móvil) cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen 
            de manera más eficiente, mejorar la experiencia del usuario y proporcionar información a los 
            propietarios del sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. ¿Qué Cookies Utiliza NutriplanLife?</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">2.1 Cookies Estrictamente Necesarias</h3>
          <p className="text-slate-700 mb-4">
            Estas cookies son esenciales para que pueda navegar por el sitio web y utilizar sus funciones.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg mb-4">
            <p className="text-slate-700 mb-2">
              <strong>LocalStorage (Almacenamiento Local)</strong>
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
              <li><strong>Propósito:</strong> Guardar su perfil nutricional (edad, peso, altura, objetivos)</li>
              <li><strong>Tipo:</strong> Almacenamiento persistente del navegador</li>
              <li><strong>Duración:</strong> Hasta que el usuario borre los datos del navegador</li>
              <li><strong>Necesaria:</strong> Sí, para el funcionamiento básico de la aplicación</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">2.2 Cookies Analíticas</h3>
          <p className="text-slate-700 mb-4">
            Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg mb-4">
            <p className="text-slate-700 mb-2">
              <strong>Google Analytics</strong>
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
              <li><strong>Propósito:</strong> Analizar el comportamiento de los usuarios, páginas visitadas, 
                tiempo de permanencia, etc.</li>
              <li><strong>Tipo:</strong> Cookie de terceros</li>
              <li><strong>Cookies específicas:</strong> _ga, _gid, _gat</li>
              <li><strong>Duración:</strong> De 1 día a 2 años</li>
              <li><strong>Más información:</strong> <a href="https://policies.google.com/privacy" 
                target="_blank" rel="noopener noreferrer" 
                className="text-emerald-600 hover:text-emerald-700">Política de privacidad de Google</a></li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Tabla Detallada de Cookies</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-slate-300">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-slate-700 font-semibold border-b">Cookie</th>
                  <th className="px-4 py-3 text-left text-slate-700 font-semibold border-b">Tipo</th>
                  <th className="px-4 py-3 text-left text-slate-700 font-semibold border-b">Propósito</th>
                  <th className="px-4 py-3 text-left text-slate-700 font-semibold border-b">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 text-slate-700">LocalStorage</td>
                  <td className="px-4 py-3 text-slate-700">Necesaria</td>
                  <td className="px-4 py-3 text-slate-700">Almacenar perfil de usuario</td>
                  <td className="px-4 py-3 text-slate-700">Persistente</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-slate-700">_ga</td>
                  <td className="px-4 py-3 text-slate-700">Analítica</td>
                  <td className="px-4 py-3 text-slate-700">Distinguir usuarios</td>
                  <td className="px-4 py-3 text-slate-700">2 años</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-slate-700">_gid</td>
                  <td className="px-4 py-3 text-slate-700">Analítica</td>
                  <td className="px-4 py-3 text-slate-700">Distinguir usuarios</td>
                  <td className="px-4 py-3 text-slate-700">24 horas</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-slate-700">_gat</td>
                  <td className="px-4 py-3 text-slate-700">Analítica</td>
                  <td className="px-4 py-3 text-slate-700">Limitar tasa de peticiones</td>
                  <td className="px-4 py-3 text-slate-700">1 minuto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Base Legal para el Uso de Cookies</h2>
          <p className="text-slate-700 mb-4">
            La base legal para el uso de cookies en NutriplanLife es:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Cookies necesarias:</strong> Interés legítimo para el funcionamiento del sitio web</li>
            <li><strong>Cookies analíticas:</strong> Consentimiento del usuario (implícito al continuar 
              navegando por el sitio)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. ¿Cómo Gestionar las Cookies?</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">5.1 Configuración del Navegador</h3>
          <p className="text-slate-700 mb-4">
            Puede configurar su navegador para aceptar o rechazar cookies. A continuación, le proporcionamos 
            enlaces a las instrucciones de los navegadores más populares:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" 
                className="text-emerald-600 hover:text-emerald-700">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" 
                target="_blank" rel="noopener noreferrer" 
                className="text-emerald-600 hover:text-emerald-700">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
                target="_blank" rel="noopener noreferrer" 
                className="text-emerald-600 hover:text-emerald-700">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                target="_blank" rel="noopener noreferrer" 
                className="text-emerald-600 hover:text-emerald-700">
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">5.2 Desactivar Google Analytics</h3>
          <p className="text-slate-700 mb-4">
            Puede desactivar Google Analytics instalando el complemento de inhabilitación de Google Analytics:
          </p>
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" 
            className="text-emerald-600 hover:text-emerald-700 font-medium">
            Complemento de inhabilitación de Google Analytics
          </a>

          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">5.3 Consecuencias de Deshabilitar Cookies</h3>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
            <p className="text-amber-900 font-semibold mb-2">IMPORTANTE:</p>
            <p className="text-amber-800">
              Si deshabilita las cookies necesarias (especialmente LocalStorage), NutriplanLife no podrá 
              guardar su perfil nutricional y tendrá que volver a introducir sus datos cada vez que visite 
              el sitio.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Cookies de Terceros</h2>
          <p className="text-slate-700 mb-4">
            NutriplanLife utiliza servicios de terceros que pueden establecer sus propias cookies:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Google Analytics:</strong> Para análisis del tráfico web</li>
            <li><strong>Formspree:</strong> Para el procesamiento del formulario de contacto</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Estas empresas tienen sus propias políticas de privacidad y cookies sobre las cuales NutriplanLife 
            no tiene control.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Actualizaciones de esta Política</h2>
          <p className="text-slate-700 mb-4">
            NutriplanLife puede actualizar esta Política de Cookies ocasionalmente para reflejar cambios en 
            las cookies que utilizamos o por otras razones operativas, legales o reglamentarias.
          </p>
          <p className="text-slate-700 mb-4">
            Le recomendamos que revise esta página periódicamente para mantenerse informado sobre nuestro uso 
            de cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Más Información</h2>
          <p className="text-slate-700 mb-4">
            Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos a través del formulario 
            de contacto disponible en nuestro sitio web.
          </p>
          <p className="text-slate-700">
            Para más información sobre cookies en general, puede visitar:
          </p>
          <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
            <li>
              <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" 
                className="text-emerald-600 hover:text-emerald-700">
                Agencia Española de Protección de Datos
              </a>
            </li>
            <li>
              <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" 
                className="text-emerald-600 hover:text-emerald-700">
                All About Cookies
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}