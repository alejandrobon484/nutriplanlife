// app/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>
        
        <p className="text-slate-600 mb-6">
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Responsable del Tratamiento</h2>
          <p className="text-slate-700 mb-2">
            <strong>Denominación:</strong> NutriPlanLife
          </p>

          <p className="text-slate-700 mb-2">
            <strong>Dirección:</strong> 08002 Barcelona, España
          </p>
          <p className="text-slate-700">
            <strong>Contacto:</strong> Disponible a través del formulario de contacto en el sitio web
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Información que Recopilamos</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">2.1 Datos Personales Introducidos por el Usuario</h3>
          <p className="text-slate-700 mb-4">
            NutriplanLife permite al usuario introducir información personal para calcular planes nutricionales personalizados. 
            Esta información incluye:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Edad</li>
            <li>Género</li>
            <li>Altura</li>
            <li>Peso actual</li>
            <li>Peso objetivo</li>
            <li>Nivel de actividad física</li>
          </ul>
          <p className="text-slate-700 mb-4">
            <strong>Importante:</strong> Actualmente, estos datos se almacenan <strong>únicamente en el navegador local del usuario </strong> 
            mediante LocalStorage. No se envían a nuestros servidores ni se almacenan en bases de datos externas.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">2.2 Datos del Formulario de Contacto</h3>
          <p className="text-slate-700 mb-4">
            Cuando utiliza nuestro formulario de contacto, recopilamos:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Nombre</li>
            <li>Correo electrónico</li>
            <li>Mensaje</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Este formulario está gestionado por Formspree, un servicio de terceros. Los datos enviados a través del formulario 
            se procesan según la política de privacidad de Formspree.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">2.3 Datos de Navegación y Cookies</h3>
          <p className="text-slate-700 mb-4">
            Utilizamos Google Analytics y otras herramientas de análisis web que recopilan información sobre su uso del sitio, incluyendo:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Páginas visitadas</li>
            <li>Tiempo de permanencia</li>
            <li>Navegador y dispositivo utilizado</li>
            <li>Dirección IP (anonimizada)</li>
            <li>Ubicación geográfica aproximada</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Finalidad del Tratamiento</h2>
          <p className="text-slate-700 mb-4">
            Los datos que recopilamos se utilizan para:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Proporcionar cálculos personalizados de planes nutricionales (procesado localmente)</li>
            <li>Responder a sus consultas enviadas a través del formulario de contacto</li>
            <li>Mejorar nuestro servicio mediante análisis de uso del sitio web</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Base Legal para el Tratamiento</h2>
          <p className="text-slate-700 mb-4">
            El tratamiento de sus datos se basa en:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Consentimiento:</strong> Al utilizar nuestro servicio y formulario de contacto</li>
            <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios mediante análisis de uso</li>
            <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por la legislación aplicable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Conservación de Datos</h2>
          <p className="text-slate-700 mb-4">
            <strong>Datos del perfil nutricional:</strong> Se almacenan en su navegador local hasta que usted decida eliminarlos 
            manualmente o borre los datos de su navegador.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Datos del formulario de contacto:</strong> Se conservan durante el tiempo necesario para atender su consulta 
            y un período adicional de hasta 2 años para fines de gestión administrativa.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Datos analíticos:</strong> Los datos de Google Analytics se conservan según la configuración de la herramienta, 
            generalmente 26 meses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Compartir Datos con Terceros</h2>
          <p className="text-slate-700 mb-4">
            NutriplanLife puede compartir datos con los siguientes terceros:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Formspree:</strong> Para la gestión del formulario de contacto</li>
            <li><strong>Google Analytics:</strong> Para análisis de uso del sitio web</li>
            <li><strong>Hostinger:</strong> Proveedor de hosting del sitio web</li>
          </ul>
          <p className="text-slate-700 mb-4">
            No vendemos ni compartimos sus datos personales con fines comerciales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Sus Derechos</h2>
          <p className="text-slate-700 mb-4">
            En virtud del Reglamento General de Protección de Datos (RGPD), usted tiene derecho a:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li><strong>Acceso:</strong> Solicitar información sobre los datos que tenemos sobre usted</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos ("derecho al olvido")</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
            <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
            <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Para ejercer estos derechos, puede contactarnos a través del formulario de contacto del sitio web.
          </p>
          <p className="text-slate-700 mb-4">
            También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) 
            si considera que el tratamiento de sus datos no es conforme a la normativa.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Seguridad</h2>
          <p className="text-slate-700 mb-4">
            Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra 
            acceso no autorizado, pérdida, destrucción o alteración. Sin embargo, ningún método de transmisión 
            por Internet o almacenamiento electrónico es 100% seguro.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Transferencias Internacionales</h2>
          <p className="text-slate-700 mb-4">
            Algunos de nuestros proveedores de servicios (como Google Analytics) pueden procesar datos fuera del 
            Espacio Económico Europeo (EEE). En estos casos, nos aseguramos de que existan garantías adecuadas 
            para la protección de sus datos conforme al RGPD.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Menores de Edad</h2>
          <p className="text-slate-700 mb-4">
            Nuestro servicio no está dirigido a menores de 18 años. No recopilamos intencionadamente información 
            personal de menores. Si tiene conocimiento de que un menor ha proporcionado datos personales, 
            por favor contáctenos para que podamos tomar las medidas apropiadas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Cambios en esta Política</h2>
          <p className="text-slate-700 mb-4">
            Nos reservamos el derecho de actualizar esta Política de Privacidad periódicamente. Le notificaremos 
            cualquier cambio publicando la nueva política en esta página y actualizando la fecha de "Última actualización".
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Contacto</h2>
          <p className="text-slate-700 mb-4">
            Si tiene preguntas sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales, 
            puede contactarnos a través del formulario de contacto disponible en nuestro sitio web.
          </p>
        </section>
      </div>
    </div>
  );
}