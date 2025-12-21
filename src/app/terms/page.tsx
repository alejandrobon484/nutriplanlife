// app/terms/page.tsx
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Términos y Condiciones de Uso</h1>
        
        <p className="text-slate-600 mb-6">
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Aceptación de los Términos</h2>
          <p className="text-slate-700 mb-4">
            Al acceder y utilizar NutriplanLife ("el Servicio"), usted acepta cumplir y estar sujeto a estos 
            Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar 
            nuestro Servicio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Descripción del Servicio</h2>
          <p className="text-slate-700 mb-4">
            NutriplanLife es una aplicación web que proporciona:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Cálculo de necesidades calóricas personalizadas basadas en la fórmula Harris-Benedict</li>
            <li>Planificación de menús semanales con ingredientes de temporada</li>
            <li>Generación de listas de compra organizadas por categorías</li>
            <li>Información nutricional y sugerencias de alimentación saludable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Disclaimer - Exención de Responsabilidad Médica</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
            <p className="text-amber-900 font-semibold mb-2">AVISO IMPORTANTE:</p>
            <p className="text-amber-800 mb-4">
              NutriplanLife es una herramienta informativa y de planificación nutricional. <strong>NO sustituye 
              el consejo, diagnóstico o tratamiento médico profesional.</strong>
            </p>
            <ul className="list-disc list-inside text-amber-800 space-y-2">
              <li>Los cálculos y recomendaciones proporcionados son orientativos y de carácter general</li>
              <li>No están adaptados a condiciones médicas específicas, alergias o intolerancias individuales</li>
              <li>Antes de realizar cambios significativos en su dieta o régimen de ejercicio, consulte con un 
                profesional de la salud cualificado (médico, nutricionista o dietista)</li>
              <li>Si tiene alguna condición médica preexistente, está embarazada, amamantando, o toma medicación, 
                es especialmente importante consultar con un profesional antes de seguir cualquier plan nutricional</li>
            </ul>
          </div>
          <p className="text-slate-700 mb-4">
            Al utilizar este Servicio, usted reconoce y acepta que:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>La información proporcionada es solo para fines educativos e informativos</li>
            <li>Usted es el único responsable de las decisiones que tome respecto a su nutrición y salud</li>
            <li>NutriplanLife no se hace responsable de ningún daño, lesión o problema de salud que pueda 
              derivarse del uso de la información o planes proporcionados</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Uso Aceptable</h2>
          <p className="text-slate-700 mb-4">
            Al utilizar NutriplanLife, usted se compromete a:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Proporcionar información precisa y veraz en su perfil nutricional</li>
            <li>Utilizar el Servicio únicamente para fines legales y de acuerdo con estos términos</li>
            <li>No intentar acceder a áreas restringidas del sistema</li>
            <li>No interferir con el funcionamiento normal del Servicio</li>
            <li>No utilizar el Servicio para fines comerciales sin autorización previa</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Propiedad Intelectual</h2>
          <p className="text-slate-700 mb-4">
            Todo el contenido de NutriplanLife, incluyendo pero no limitado a:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Diseño, código fuente y estructura del sitio web</li>
            <li>Textos, imágenes, logotipos y gráficos</li>
            <li>Bases de datos de recetas y planes nutricionales</li>
            <li>Algoritmos y fórmulas de cálculo</li>
          </ul>
          <p className="text-slate-700 mb-4">
            son propiedad de NutriplanLife y están protegidos por las leyes de propiedad intelectual aplicables. 
            Está prohibida su reproducción, distribución o modificación sin autorización expresa.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Limitación de Responsabilidad</h2>
          <p className="text-slate-700 mb-4">
            En la máxima medida permitida por la ley aplicable:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>NutriplanLife no garantiza que el Servicio esté libre de errores o interrupciones</li>
            <li>No nos hacemos responsables de pérdidas de datos almacenados localmente en su navegador</li>
            <li>No seremos responsables de daños indirectos, incidentales o consecuentes</li>
            <li>No garantizamos resultados específicos de pérdida o ganancia de peso</li>
            <li>El uso del Servicio es bajo su propio riesgo</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Almacenamiento de Datos Local</h2>
          <p className="text-slate-700 mb-4">
            Actualmente, NutriplanLife almacena toda la información de su perfil nutricional en el almacenamiento 
            local de su navegador (LocalStorage). Esto significa que:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Sus datos permanecen en su dispositivo y no se envían a nuestros servidores</li>
            <li>Si borra los datos de su navegador o utiliza un dispositivo diferente, perderá su información</li>
            <li>Usted es responsable de hacer copias de seguridad de su información si lo desea</li>
            <li>No ofrecemos recuperación de datos eliminados accidentalmente</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Modificaciones del Servicio</h2>
          <p className="text-slate-700 mb-4">
            Nos reservamos el derecho de:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>Modificar, suspender o discontinuar cualquier aspecto del Servicio en cualquier momento</li>
            <li>Cambiar estos Términos y Condiciones ocasionalmente</li>
            <li>Establecer límites en ciertas funcionalidades</li>
          </ul>
          <p className="text-slate-700 mb-4">
            Las modificaciones entrarán en vigor al ser publicadas en el sitio web. El uso continuado del 
            Servicio después de dichas modificaciones constituye su aceptación de los términos actualizados.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Enlaces a Terceros</h2>
          <p className="text-slate-700 mb-4">
            NutriplanLife puede contener enlaces a sitios web de terceros. No somos responsables del contenido, 
            políticas de privacidad o prácticas de sitios de terceros. El acceso a estos sitios es bajo su 
            propio riesgo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Terminación</h2>
          <p className="text-slate-700 mb-4">
            Podemos terminar o suspender su acceso al Servicio inmediatamente, sin previo aviso, por cualquier 
            motivo, incluyendo el incumplimiento de estos Términos y Condiciones.
          </p>
          <p className="text-slate-700 mb-4">
            Usted puede dejar de usar el Servicio en cualquier momento eliminando los datos de su navegador.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Ley Aplicable y Jurisdicción</h2>
          <p className="text-slate-700 mb-4">
            Estos Términos se rigen por las leyes de España. Cualquier disputa relacionada con estos términos 
            o el uso del Servicio se someterá a la jurisdicción exclusiva de los tribunales de Barcelona, España.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Divisibilidad</h2>
          <p className="text-slate-700 mb-4">
            Si alguna disposición de estos Términos se considera inválida o inaplicable, dicha disposición se 
            eliminará o limitará en la mínima medida necesaria, y las disposiciones restantes continuarán en 
            pleno vigor y efecto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Contacto</h2>
          <p className="text-slate-700 mb-4">
            Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos a través del formulario 
            de contacto disponible en nuestro sitio web.
          </p>
          <p className="text-slate-700">
            <strong>NutriPlanLife</strong><br />
            08002 Barcelona, España<br />
         
          </p>
        </section>
      </div>
    </div>
  );
}