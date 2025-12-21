// app/legal/page.tsx
export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Aviso Legal</h1>
        
        <p className="text-slate-600 mb-6">
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Datos Identificativos</h2>
          <p className="text-slate-700 mb-4">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad 
            de la Información y Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos 
            identificativos del titular de este sitio web:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg mb-4">
            <p className="text-slate-700 mb-2">
              <strong>Denominación:</strong> NutriPlanLife
            </p>
            <p className="text-slate-700 mb-2">
              <strong>Domicilio social:</strong> 08002 Barcelona, España
            </p>
            <p className="text-slate-700 mb-2">
              <strong>Sitio web:</strong> https://nutriplanlife.com
            </p>
            <p className="text-slate-700">
              <strong>Contacto:</strong> Disponible a través del formulario de contacto
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Objeto</h2>
          <p className="text-slate-700 mb-4">
            El titular del sitio web pone a disposición de los usuarios el presente documento con el que 
            pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de Servicios de la 
            Sociedad de la Información y del Comercio Electrónico (LSSI-CE), así como informar a todos los 
            usuarios del sitio web respecto a cuáles son las condiciones de uso del sitio web.
          </p>
          <p className="text-slate-700 mb-4">
            Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la 
            observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier 
            otra disposición legal que fuera de aplicación.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Condiciones de Acceso y Uso del Sitio Web</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">3.1 Carácter Gratuito</h3>
          <p className="text-slate-700 mb-4">
            El acceso y uso de este sitio web tiene carácter gratuito para los usuarios. No obstante, algunos 
            servicios pueden estar sujetos a condiciones especiales o requerir registro.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">3.2 Registro de Usuario</h3>
          <p className="text-slate-700 mb-4">
            Actualmente, NutriplanLife no requiere registro de usuario. Todos los datos se almacenan localmente 
            en el navegador del usuario.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">3.3 Veracidad de la Información</h3>
          <p className="text-slate-700 mb-4">
            El usuario se compromete a proporcionar información veraz y precisa al utilizar los servicios de 
            NutriplanLife, especialmente en lo relativo a su perfil nutricional (edad, peso, altura, etc.).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Propiedad Intelectual e Industrial</h2>
          <p className="text-slate-700 mb-4">
            El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación 
            y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son 
            propiedad de NutriplanLife o, en su caso, dispone de licencia o autorización expresa por parte de los 
            autores.
          </p>
          <p className="text-slate-700 mb-4">
            Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad 
            intelectual e industrial, así como inscritos en los registros públicos correspondientes.
          </p>
          <p className="text-slate-700 mb-4">
            Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, 
            uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita 
            previa por parte de NutriplanLife. Cualquier uso no autorizado previamente se considera un incumplimiento 
            grave de los derechos de propiedad intelectual o industrial del autor.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Exclusión de Garantías y Responsabilidad</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">5.1 Información y Contenidos</h3>
          <p className="text-slate-700 mb-4">
            NutriplanLife no se hace responsable de:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>La continuidad y disponibilidad de los contenidos</li>
            <li>La ausencia de errores en dichos contenidos</li>
            <li>La ausencia de virus y/o demás componentes dañinos</li>
            <li>Los daños que puedan causarse por el uso inadecuado del sitio web</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">5.2 Información Nutricional</h3>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
            <p className="text-amber-900 font-semibold mb-2">DISCLAIMER MÉDICO:</p>
            <p className="text-amber-800">
              La información proporcionada por NutriplanLife tiene únicamente fines informativos y educativos. 
              No constituye asesoramiento médico, diagnóstico o tratamiento profesional. Los usuarios deben 
              consultar a profesionales de la salud cualificados antes de realizar cambios significativos en 
              su dieta o régimen de ejercicio.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">5.3 Enlaces a Terceros</h3>
          <p className="text-slate-700 mb-4">
            El sitio web puede contener enlaces a otros sitios web. NutriplanLife no controla ni es responsable 
            del contenido de estos sitios de terceros.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Política de Cookies</h2>
          <p className="text-slate-700 mb-4">
            NutriplanLife utiliza cookies y tecnologías similares para mejorar la experiencia del usuario y 
            analizar el uso del sitio web. Para más información, consulte nuestra 
            <a href="/cookies" className="text-emerald-600 hover:text-emerald-700 font-medium"> Política de Cookies</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Protección de Datos</h2>
          <p className="text-slate-700 mb-4">
            Para información sobre cómo tratamos sus datos personales, consulte nuestra 
            <a href="/privacy" className="text-emerald-600 hover:text-emerald-700 font-medium"> Política de Privacidad</a>, 
            elaborada conforme al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la 
            Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Legislación Aplicable</h2>
          <p className="text-slate-700 mb-4">
            Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web 
            o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se 
            someten expresamente las partes.
          </p>
          <p className="text-slate-700 mb-4">
            Para cuantas cuestiones se susciten sobre la interpretación, aplicación y cumplimiento de este 
            Aviso Legal, así como de las reclamaciones que puedan derivarse de su uso, todas las partes 
            interesadas se someten a los Jueces y Tribunales de Barcelona, España.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Modificaciones</h2>
          <p className="text-slate-700 mb-4">
            NutriplanLife se reserva el derecho de efectuar sin previo aviso las modificaciones que considere 
            oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios 
            que se presten a través de la misma como la forma en la que estos aparezcan presentados o localizados.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Contacto</h2>
          <p className="text-slate-700 mb-4">
            Para cualquier consulta relacionada con este Aviso Legal, puede contactarnos a través del 
            formulario de contacto disponible en nuestro sitio web.
          </p>
        </section>
      </div>
    </div>
  );
}