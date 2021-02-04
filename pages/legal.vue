<template>
  <main :class="$route.name">
    <SectionHero :hero="hero" :page="$route.name" />
    <section class="tabs-wrapper">
      <!-- 00 :: scroll navigation sticky bar -->
      <div class="tabs is-centered">
        <ul>
          <li
            :class="{ 'is-active': showLink(index) }"
            v-for="(section, index) in sections"
            :key="index"
            @click="toggleClick(index)"
          >
            <a href="" v-scroll-to="{ el: '#section-'+section.link, offset: -120 }">
              <b>{{ section.name }}</b>
            </a>
          </li>
        </ul>
      </div>
      <div class="section">
        <!-- 01 :: PRESTADOR Y RESPONSABILIDAD -->
        <article id="section-responsability" class="container responsability mb-6">
          <div class="content">
            <TitleItem :title="sections[0].name" />
            <p class="block">
              <span class="has-text-primary">{{ owner.copyright }}</span> es una marca comercial propiedad de <em>{{ owner.name }} García</em> 
              que a su vez es responsable del sitio web, pone a disposición de los usuarios el presente documento con el que pretende:
            </p>
            <p class="block">
              <b>1.</b> Dar cumplimiento a las obligaciones dispuestas en las Leyes:
            </p>
            <nav class="level">
              <a
                class="level-item has-text-centered has-text-link"
                href="https://www.boe.es/doue/2016/119/L00001-00088.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Reglamento 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas con esta plantilla de política de privacidad"
              >
                <span>
                  <b>RGPD</b>
                  <p><small>www.boe.es</small></p>
                </span>
              </a>
              <a
                class="level-item has-text-centered has-text-link"
                href="https://boe.es/boe/dias/2018/12/06/pdfs/BOE-A-2018-16673.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales"
              >
                <span>
                  <b>LOPDGDD</b>
                  <p><small>www.boe.es</small></p>
                </span>
              </a>
              <a
                class="level-item has-text-centered has-text-link"
                href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-13758"
                target="_blank"
                rel="noopener noreferrer"
                title="Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico en el blog"
              >
                <span>
                  <b>LSSI</b>
                  <p><small>www.boe.es</small></p>
                </span>
              </a>
            </nav>
            <p class="block">
              <b>2.</b> Informar a todos los usuarios del sitio web respecto a cuáles son sus condiciones de uso.
            </p>
            <p class="block">
              A continucación exponemos los datos identificativos del "prestador" del presente sitio web, <span class="has-text-primary">{{ owner.url }}</span>, 
              y todos sus servicios asociados:
            </p>
            <blockquote class="quote">
              <p><b class="pr-1">Prestador:</b> {{ owner.name }} García ( Canessa )</p>
              <p><b class="pr-1">DNI:</b> 70057608E</p>
              <!-- <p class="is-size-7-mobile">
                <b>Registro mercantil:</b> ¿?
              </p>-->
              <p>
                <b class="pr-1">Domicilio:</b> Calle Hierro, nº6, escalera 3 2º2, 28343,
                Valdemoro, Madrid.
              </p>
              <p>
                <b class="pr-1">Correo electrónico:</b>
                <a
                  :href="`mailto:${owner.email}`"
                  class="has-text-link"
                  :title="`Contactar vía correo electrónico con ${owner.copyright} en: ${owner.email}`"
                >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
              </p>
            </blockquote>
            <p class="block"></p>
              Por entrar y navegar por este sitio web ya adquieres la condición de "usuario".
            </p>
            <p class="block">
              Además <span class="has-text-primary">{{ owner.copyright }}</span>, osea el "prestador" (nosotros), 
              somos proveedores de servicios y productos relacionados con el ámbito de la peluquería y estética
              canina / felina conocida también como <em>dog grooming</em>.
            </p>
          </div>
        </article>

        <!-- 02 :: POLÍTICA DE PRIVACIDAD -->
        <article id="section-privacy" class="container privacy mb-6">
          <div class="content">
            <TitleItem :title="sections[1].name" />
            <p class="block">
              Cualquier dato que tú como "usuario" nos facilites a través de las vías de contacto actualmente existentes:
              WhatsApp, teléfono, correo electrónico o redes sociales, serán
              tratados anónimamente. Podrás ejercer tus derechos legales de: acceso a estos datos, su rectificación, su cancelación y 
              la oposición a los mismos tal y como te explicaremos un poco más adelante.
            </p>
            <!-- <p class="block">
              Cualquier dato que tú como "usuario" nos facilites a través de las vías de contacto actualmente existentes:
              WhatsApp, teléfono, correo electrónico o redes sociales, serán incorporados a un fichero automatizado convenientemente registrado ante la
              <em>Agencia Española de Protección de Datos (AGPD)</em> y sobre el que podrá ejercer sus derechos
              reconocidos legalmente como son el acceso a estos datos, su rectificación, su cancelación y la oposición a los
              mismos escribiendo un correo electrónico a: tratados anónimamente. Podrás ejercer tus derechos legales de: acceso a estos datos, su rectificación, su cancelación y 
              la oposición a los mismos tal y como te explicaremos un poco más adelante.
            </p> -->
            <p class="block">
              Estos datos son necesarios para:
            </p>
            <blockquote class="quote">
              <p class="block">
                Asegurar una gestión óptima de los <b>servicios y productos</b> aquí ofertados y/o solicitados por el "usuario".
              </p>
              <p class="block">
                Comunicación y resolución de <b>consultas</b>. 
              </p>
              <p class="block">
                Envío de <b>publicidad</b> e información comercial por medios digitales (email, WhatsApp...), acerca de los 
                productos y servicios de <span class="has-text-primary">{{ owner.copyright }}</span>.
              </p>
              <p class="block">
                Mejorar la <b>experiencia de Usuario</b> (UX) analizando cómo navegas por este sitio web mediante herramientas como 
                <a
                  href="https://analytics.google.com/analytics/web/provision/#/provision"
                  class="has-text-link has-underline"
                  title="Ir al website de Google Analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Google Analytics</span>
                </a>. Todo ello a través de <em>cookies</em> descritas en la
                <a
                  href="#"
                  class="has-text-link has-underline"
                  title="Ir a la sección de Política de Cookies en #HazTuNegocioDigital"
                  v-scroll-to="{ el: '#section-cookies', offset: -120 }"
                >
                  <span>política de cookies</span>
                </a> descrita más adelante.
              </p>
            </blockquote>
            <!-- <p class="block">
              En la <b>recogida y el tratamiento de los datos de carácter personal</b> se han adoptado las
              <b>medidas de seguridad</b> adecuadas para evitar la pérdida, el acceso no autorizado o la manipulación de los
              mismos, de acuerdo con lo establecido en el <em>Real Decreto 1720/2007, de 21 de diciembre</em>.
            </p> -->
            <p class="block">
              Como "prestador" nos comprometemos a <b>no exponer públicamente la información confidencial</b>
              facilitada por el "usuario", usted, y nunca serán utilizados para prestar servicios a terceros 
              que NO estén especificados en este <em>Aviso Legal</em>.
            </p>
            <p class="block">
              Como "usuario" certificas que eres <b>mayor de 14 años</b> poseyendo la capacidad legal necesaria 
              para la prestación del consentimiento al tratamiento de tus datos de carácter personal y todo ello,
              de conformidad con lo establecido en la presente <em>Política de Privacidad</em>. En caso contrario 
              contacta con tu tutor o un adulto mayor de edad para que te valide o cierra esta pestaña del navegador 
              y abre Twitch o TikTok 🤔
            </p>
            <p class="block">
              Como "usuario" tienes derecho y puedes ejercitar los <b>derechos de acceso</b>, <b>rectificación</b>, 
              <b>cancelación</b> y <b>oposición</b> sobre <b>tus datos personales</b> así como el de
              <b>revocación del consentimiento</b> para cualquiera de las finalidades que hemos descrito, enviando un
              correo electrónico a
              <a
                :href="`mailto:${owner.email}?subject=Sobre%20el%20tratamiento%20de%20mis%20datos`"
                class="has-text-link"
                :title="`Tratamiento de datos personales en ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>.
              No olvides indentificarte e indicarnos el derecho que deseas ejercitar.
            </p>
            <p class="block">
              Como "prestador" cumplimos la
              <em>Ley 34/2002 de 11 de julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico</em>
              así que en caso de querer remitirte infomación comercial vía correo electrónico solicitaremos previamente tu aprobación
              para el tratamiento de tu correo electrónico con fines comerciales. Siempre podrás <em>"darte de baja"</em> de manera automática en los distintos
              correos electrónicos que recibas como suscriptor de nuestra lista de correo o enviándonos un email a:
              <a
                :href="`mailto:${owner.email}?subject=Solicitud%20de%20baja%20en%20listade%20%20correo`"
                class="has-text-link"
                :title="`Solicitud de baja de correos publicitarios de ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
            </p>
            <p class="block">
              Ademnás, como "usuario" <b>responderás de la autenticidad de los datos que nos facilites</b> y nosotros, como responsables
              de <span class="has-text-primary">{{ owner.copyright }}</span>, nos reservamos el derecho a excluir de los
              servicios prestados en este sitio web a todo "usuario" que haya mentido facilitando datos falsos o suplantaciones indebidas.
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Finalidades, tratamiento y conservación
            </h3>
            <p class="block">
              Este sitio web, <span class="has-text-primary">{{ owner.copyright }}</span>, no recaba datos de caracter personal a parte de los
              proporcionados directamente por el propio "usuario". Como ya mencianamos anteriormente, cualquier dato de carácter personal 
              proporcionados por el "usuario" a través de Whatsapp, teléfono, correo electrónico o redes sociales serán tratados por el "prestador", 
              como responsables del tratamiento, para las <b>siguientes finalidades</b> desglosadas en la siguiente tabla que especifica el <b>motivo</b> 
              por el que tratamos tus datos y <b>durante cuánto tiempo</b> los conservaremos:
            </p>
            <div class="table-container">
              <table class="table is-bordered is-narrow is-fullwidth is-size-6 is-size-7-mobile">
                <thead>
                  <tr>
                    <th>Finalidad</th>
                    <th>Base jurídica</th>
                    <th>Plazos de conservación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Comprobar la identidad y garantizar la seguridad de los Usuarios así como facilitar la gestión de
                      nuestro servicio.
                    </td>
                    <td>Interés legítimo del responsable del tratamiento.</td>
                    <td>
                      Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                      Puedes darte de baja por teléfono: +34 248 04 30
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Gestionar y responder las solicitudes de información realizadas telefónicamente, a través de email o
                      de cualquiera de nuestras redes sociales o Whatsapp.
                    </td>
                    <td>Interés legítimo del responsable del tratamiento.</td>
                    <td>
                      Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                      Puedes darte de baja por teléfono: +34 248 04 30
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Para la gestión de la seguridad de la información y del ejercicio de los derechos en materia de
                      privacidad en cumplimiento del RGPD.
                    </td>
                    <td>Cumplimiento del RGPD.</td>
                    <td>
                      Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                      Puedes darte de baja por teléfono: +34 248 04 30
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Transferencias internacionales
            </h3>
            <p class="block">
              Informarte que, por seguridad, tus datos son tratados en España y las aplicaciones son realizadas por
              proveedores de desarrollo de software certificados, por todos conocidos y con seguridad garantizada.
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Derechos de los usuarios
            </h3>
            <p class="block">
              Como "usuario" puedes ejercer los derechos que se detallan a continuación ante el "prestador" a través de la
              <NuxtLink to="/contacto" class="has-underline pr-1" :title="`Ir a la página de contacto de #${owner.name}`">
                <span>página de contacto</span> </NuxtLink>
              o bien a la dirección de correo electrónico:
              <a
                class="has-text-link"
                :href="`mailto:${owner.email}?subject=Solicitud%20de%20baja%20en%20listade%20%20correo`"
                :title="`Solicitud de baja de correos publicitarios de ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
              a la atención de <span>{{ owner.name }}</span>. La solicitud deberá contener copia de un documento identificativo 
              legal como DNI, pasaporte o permiso de conducción. Si como solicitante no estás convenientemente identificado tal y 
              como acabamos de indicar, <span class="has-text-primary">{{ owner.copyright }}</span> podrá requerir su subsanación. 
              No se exigirá contraprestación ni cobro alguno por el ejercicio de tus derechos.
            </p>
            <div class="table-container">
              <table class="table is-bordered is-narrow is-fullwidth is-size-6 is-size-7-mobile">
                <thead>
                  <tr>
                    <th>Derecho</th>
                    <th>¿En qué consiste?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Derecho de acceso</td>
                    <td>Consultar qué datos personales tenemos sobre Usted.</td>
                  </tr>
                  <tr>
                    <td>Derecho de rectificación</td>
                    <td>Modificar los datos personales que tenemos sobre Usted cuando sean inexactos.</td>
                  </tr>
                  <tr>
                    <td>Derecho de oposición</td>
                    <td>Solicitar que no tratemos tus datos personales para algunas finalidades concretas.</td>
                  </tr>
                  <tr>
                    <td>Derecho de supresión</td>
                    <td>Solicitar que eliminemos sus datos personales.</td>
                  </tr>
                  <tr>
                    <td>Derecho de limitación</td>
                    <td>Solicitar que limitemos el tratamiento de sus datos personales.</td>
                  </tr>
                  <tr>
                    <td>Derecho de portabilidad</td>
                    <td>
                      Obtener en un formato electrónico los datos personales que nos haya suministrado y los que se hayan
                      generado en el contexto del servicio.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              En caso de no quedar conforme en el ejercicio de sus derechos, podrá presentar una reclamación ante la
              autoridad de control en materia de protección de datos, <em>la Agencia Española de Protección de Datos</em>, 
              cuya página web es:
              <a
                class="has-text-link"
                href="https://www.aepd.es/es"
                title="Ir al website de la Agencia Española de Protección de Datos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">www.agpd.es</span>
              </a>
            </p>
          </div>
        </article>

        <!-- 03 :: CONDICIONES DE USO -->
        <article id="section-terms" class="container terms mb-6">
          <div class="content">
            <TitleItem :title="sections[2].name" />
            <p class="block">
              La utilización de este sitio web, <span class="has-text-primary">{{ owner.copyright }}</span>, te otorga la condición de
              "usuario" implicando la <b>aceptación completa de todas las cláusulas y condiciones de uso</b> incluidas en la esta página
              de <em>aviso legal</em> así como las condiciones particulares que pudieran establecerse entre las dos partes, "prestador" 
              (<em>nosotros</em>) y Usuario (<em>tú</em>), en relación con la prestación de los servicios previamente acordados.
            </p>
            <p class="block">
              Si no estuvieras de acuerdo con todas y cada una de estas cláusulas y condiciones, por favor, deja de utilizar este
              sitio web 🙀
            </p>
            <p class="block">
              El acceso y navegación por este sitio web es libre y gratuito. 🤟
            </p>
            <p class="block">
              Eso sí, como "usuario" estás obligado a NO utilizar cualquiera de los contenidos de este sitio web con fines o efectos ilícitos, 
              prohibidos en este <em>aviso legal</em> o por la legislación española / europea vigente, que perjudiquen los derechos e intereses 
              de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los
              contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático 
              propios o contratados por el "prestador", de otros usuarios o de cualquier "usuario" de Internet.
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Responsabilidad
            </h3>
            <p class="block">
              El "prestador" NO será responsable de los comentarios y opiniones vertidas por los "usuarios" o terceras personas ajenas a 
              <span class="has-text-primary">{{ owner.copyright }}</span> a través de redes sociales, blog u otras herramientas de participación.
            </p>
            <p class="block">
              El "prestador" se reserva el derecho de retirar todos aquellos comentarios, opiniones o contenido fraudulento y/o
              manipulado que vulneren la legislación vigente, que perjudiquen los derechos o intereses de terceros, o que, a 
              nuestro juicio, no resulten adecuados para su publicación. Si como "usuario" consideras que existe en el
              sitio web algún contenido que pudiera estar sujeto a esta clasificación, pedimos nos lo notifiques escribiéndonos un
              correo electrónico a la siguiente dirección de email:
              <a
                :href="`mailto:${owner.email}?subject=Denuncia%20de%20contenido`"
                class="has-text-link"
                :title="`Denunciar contenido inapropiado en la web de ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
            </p>
            <p class="block">
              El "prestador" se reserva el derecho a modificar, cancelar, restringir o suspender el contenido del sitio web,
              los links y vínculos o la información obtenida a través del sitio web, sin necesidad de previo aviso.
            </p>
            <p class="block">
              Este sitio web, <span class="has-text-primary">{{ owner.copyright }}</span>, ha sido diseñado, desarrollado, 
              revisado y testeado por 
              <a
                :class="`author ${owner.author}`"
                :href="`https://${owner.author}.com`"
                :title="`@${owner.author}: diseñador gráfico y desarrollador web / frontend`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">{{ owner.author }}.com</span>
              </a> en colaboración con 
              <a
                :class="`author ${owner.partner}`"
                :href="`https://${owner.partner}.com`"
                :title="`${owner.partner}: únete a la transformación digital y aumenta las ventas con tu negocio en internet`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><b class="has-underline">{{ owner.partner }}.com</b></span>
              </a>
              para que funcione perfecta y correctamente. En principio, puede garantizarse el correcto funcionamiento los 
              365 días del año, 24 horas al día. No obstante, el "prestador" no descarta la posibilidad de que acontezcan 
              causas de fuerza mayor como: catástrofes naturales, huelgas, pandemias o circunstancias ajenas a nuestra 
              organización que imposibiliten el acceso a este sitio web.
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Medidas de seguridad
            </h3>
            <p class="block">
              Cualquier dato personal que facilites al "prestador" puede ser almacenado en bases de datos, cuya titularidad
              corresponde en exclusiva al "prestador" pero que se prestan a través de un tercero, siempre un proveedor de servicios
              de intenet reputado y homologado, que asume todas las medidas de índole técnica, organizativa y de
              seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las
              mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.
            </p>
            <p class="block">
              Matizaremos que las medidas de seguridad de los sistemas informáticos en Internet
              aunque son extremadamente fiables no son infalibles y que el "prestador" no puede garantizar al 100%
              la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos 
              (<em>software y hardware</em>) del "usuario" o en tus documentos electrónicos y ficheros contenidos en los
              mismos. Dicho esto, el "prestador" pone todos los medios necesarios y toma las medidas de seguridad oportunas para
              evitar la presencia de estos elementos dañinos.
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Enlaces de interés a otros sitios Web
            </h3>
            <p class="block">
              El "prestador" puede proporcionarle acceso a sitios web de terceros mediante enlaces con la finalidad de
              informar sobre la existencia de otras fuentes de información en Internet en las que podrá ampliar los datos o servicios ofrecidos en el sitio web.
            </p>
            <p class="block">
              Estos enlaces a otros sitios web no suponen en ningún caso una sugerencia o recomendación para que visites las
              páginas web de destino. Estas están fuera del control del "prestador", por lo que
              "prestador" no es responsable del contenido de los sitios web vinculados, ni de los links o enlaces ubicados en él,
              ni del resultado que obtenga al seguir los enlaces.
            </p>
            <p class="block">
              La existencia de enlaces no implica la existencia de relaciones entre "prestador" y el
              propietario/s del sitio en el que se establezca el enlace/s, ni la aceptación o aprobación por parte del "prestador"
              de sus contenidos o servicios.
            </p>
            <p class="block">
              Si accedes a un sitio web externo desde un enlace que encuentres en <span class="has-text-primary">{{ owner.copyright }}</span> deberás leer la propia
              <em>política de privacidad</em> propia del otro sitio web que visite pudiendo ser esta muy diferente a la de este sitio web.
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Contratación de terceros
            </h3>
            <p class="block">
              El "prestador" podrá
              <b>contratar y/o subcontratar con terceras entidades</b> todo lo que estime oportuno en relación con la
              realización de cualesquiera o todas las actividades necesarias para la gestión, mantenimiento, actualización
              y/o mejora de los Servicios. Dichas entidades podrían tener la facultad de desactivar los servicios y, en
              consecuencia, interrumpir el acceso al mismo para realizar las tareas contratadas.
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Propiedad intelectual
            </h3>
            <p class="block">
              Este sitio web, <span class="has-text-primary">{{ owner.copyright }}</span>, incluyendo a título enunciativo pero no limitativo su codificación, edición,
              compilación y demás elementos necesarios para su funcionamiento, así como los diseños, logotipos, imagen corporativa, fotografías, vídeos, textos y gráfismos
              son <b>propiedad de</b> <span class="has-text-primary">{{ owner.name }}</span> y
              <a
                :class="`author ${owner.author}`"
                :href="`https://${owner.author}.com`"
                :title="`@${owner.author}: diseñador gráfico y desarrollador web / frontend`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">{{ owner.author }}.com</span>
              </a>. Les corresponde a ambos la explotación en exclusividad de los mismos en cualquier forma y, en especial, los derechos de reproducción, distribución, 
              comunicación pública y transformación, de acuerdo con la legislación española y de la Unión Europea aplicable.
            </p>
            <p class="block">
              NO está permitida la reproducción total o parcial, uso, explotación y distribución con fines comerciales de cualquiera de los recursos materiales, 
              artículos o programación incluida en el presente sitio web, <span class="has-text-primary">{{ owner.copyright }}</span>.
            </p>
            <p class="block">
              El "prestador" como titular de <span class="has-text-primary">{{ owner.copyright }}</span> autoriza expresamente a que terceros puedan redirigir 
              directamente a los contenidosnconcretos de sitio web: <span class="has-text-primary">{{ owner.copyright }}</span>.
            </p>
            <p class="block">
              Para realizar cualquier tipo de observación como posibles incumplimientos de los derechos de propiedad
              intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puedes hacerlo a través
              de nuestra dirección de correo electrónico:
              <a
                :href="`mailto:${owner.email}?subject=Denuncia%20incumplimiento%20derechos%20de%20propiedad%20intelectual`"
                class="has-text-link"
                :title="`Escríbenos para denunciar incumplimientos de los derechos de propiedad intelectual en la web de ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Derecho de exclusión
            </h3>
            <p class="block">
              El "prestador" se reserva el derecho a impedir o denegar el acceso a <span class="has-text-primary">{{ owner.copyright }}</span>, este sitio web
              y los porductos y servicios ofrecidos en ambos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos "usuarios"
              que incumplan cualquiera de las condiciones del presente <em>aviso legal</em>.
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Jurisdicción
            </h3>
            <p class="block">
              Este <em>aviso legal</em> se rige íntegramente por la <b>legislación española</b>.
            </p>
            <p class="block">
              Siempre que no haya una norma que obligue a otra cosa, para cuantas cuestiones se susciten sobre la interpretación, aplicación y cumplimiento 
              de este <em>aviso legal</em>, así como de las reclamaciones que puedan derivarse de su uso, las partes acuerdan someterse a los <b>jueces</b> 
              y <b>tribunales</b> de la <b>Comunidad Autónoma de Madrid</b>, con renuncia expresa de cualquier otra jurisdicción que pudiera corresponderles.
            </p>

            <!-- INFO: incorporar cuando haya productos o servicios por los que cobrar €!!
            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Condiciones de Venta
            </h3>
            <p class="block">
              En este apartado detallarás los pasos que debe realizar el "usuario" para completar una compra y las condiciones a las que ha de someterse.
            </p>-->

            <!-- INFO: incorporar cuando haya programas de afiliación, y/o anuncios patrocinados €!!
            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Enlaces de Afiliados y anuncios patrocinados
            </h3>
            <p class="block">
              El sitio Web ofrece contenidos patrocinados, anuncios y/o enlaces de afiliados.
            </p>
            <p class="block">
              La información que aparece en estos enlaces de afiliados o los anuncios insertados, son facilitados por los propios anunciantes, por lo que "prestador" no se hace responsable de posibles inexactitudes o errores que pudieran contener los anuncios, ni garantiza en modo alguno la experiencia, integridad o responsabilidad de los anunciantes o la calidad de sus productos y/o servicios.
            </p>-->

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Contacto
            </h3>
            <p class="block">
              Si quieres realizar cualquier comentario o consulta sobre sobre este sitio web, puedes enviar un mensaje de correo electrónico a:
              <a
                :href="`mailto:${owner.email}`"
                class="has-text-link"
                :title="`Escríbenos un email al departamento legal de ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
            </p>

          </div>
        </article>

        <!-- 04 :: POLÍTICA DE COOKIES -->
        <article id="section-cookies" class="container cookies mb-6">
          <div class="content">
            <TitleItem :title="sections[3].name" />
            <h3 class="subtitle is-size-5 is-size-6-mobile mt-3">
              Es necesario informar sobre las cookies porque...
            </h3>
            <p class="block">
              ...El reglamento LSSI-CE,
              <a
                class="has-text-link"
                href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-13758"
                title="Publicación oficial del BOE sobre la Ley de la sociedad de la información y del comercio electrónico"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">Ley de la sociedad de la información y del comercio electrónico</span>
              </a>,
              obliga los porpietarios de sitios web, blogs o cualquier aplicación que descargue en tu navegador
              cookies de terceros a informar al "usuario" sobre <b>el tipo de cookies, la duración y la
              finalidad</b> de cada una de ellas.
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Las cookies son...
            </h3>
            <p class="block">
              ...Un pequeño fichero que permite que el sitio web por el que está navegando recuerde información sobre su visita. 
              Estas cookies son instaladas en su navegador por cada web con la única finalidad de facilitar su próxima visita y 
              hacer que el sitio web resulte más útil.
            </p>
            <p class="block">
              Las cookies <b>NO almacenan información sensible sobre ti</b> como tarjetas de crédito o datos bancarios,
              fotografías o información personal. Los datos que guardan son de carácter técnico, estadísticos,
              personalización de contenidos, etc. La información recogida por las cookies es anónima.
            </p>
            <p class="block">
              Las cookies <b>NO son virus</b>, ni troyanos, ni spam, ni spyware, ni abren molestas ventanas emergentes
              (pop-ups)... Sólo contribuyen a tener una mejor experiencia de navegación para el "usuario".
            </p>
            <p class="block">
              La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten
              o impiden en los ajustes de seguridad las cookies temporales o memorizadas. Más adelante explicaremos cómo
              gestionarlas.
            </p>
            <p class="block">
              Informarte que si continuas navegando y/o pulsas el botón "aceptar" del banner de aviso de Cookies,
              <b>estás consintiendo el empleo de estas cookies</b> 
              (<small><em>artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico</em></small>).
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Existen 3 clasificaciones por tipo de cookies:
            </h3>
            <p class="is-size-6">
              1. Según <b>quién las gestione</b>:
            </p>
            <blockquote class="quote">
              <p class="block">
                Cookies <b>propias</b> o aquellas generadas y gestionadas por la propia página o dominio que está visitando.
              </p>
              <p class="block">
                Cookies <b>de terceros</b> o aquellas generadas por servicios o proveedores externos como las que generará
                un chatbot, una herramienta de analítica web o las redes sociales de turno.
              </p>
            </blockquote>
            <p class="is-size-6">
              2. Según <b>el tiempo que permanezcan almacenadas</b>:
            </p>
            <blockquote class="quote">
              <p class="block">
                Cookies <b>sesión</b> o aquellas que se generarán y almacenarán tu información de navegación, permaneciendo
                activas hasta que abandones la página y cierres el navegador.
              </p>
              <p class="block">
                Cookies <b>persistentes</b> o aquellas cuyos datos siguen almacenados aunque abandones la página y pueden
                ser tratados durante un periodo de tiempo que puede ir de unos minutos a varios años según haya definido
                previamente el responsable de la cookie.
              </p>
            </blockquote>
            <p class="is-size-6">
              3. Según <b>la finalidad de los datos obtenidos</b>:
            </p>
            <blockquote class="quote">
              <p class="block">
                Cookies
                <b>técnicas</b> o aquéllas que permiten al "usuario" la utilización de las diferentes opciones o servicios que
                existan en la web como: identificar la sesión, acceder a partes de acceso restringido, recordar los
                elementos que integran un pedido, realizar el proceso de compra de un pedido...
              </p>
              <p class="block">
                Cookies de
                <b>personalización</b> o aquéllas que permiten recordar las preferencias del "usuario" como: el idioma, el
                tipo de navegador a través del cual accede al servicio, etc.
              </p>
              <p class="block">
                Cookies de
                <b>análisis</b> o aquéllas que permiten la medición y análisis estadístico de la utilización que hacen los
                usuarios del servicio con el fin de mejorar la oferta de productos o servicios que se le ofrecen.
              </p>
              <p class="block">
                Cookies
                <b>publicitarias</b> o aquéllas que permiten gestionar de forma eficaz la oferta de los espacios
                publicitarios para así encajar el contenido del anuncio al contenido de la página web.
              </p>
              <p class="block">
                Cookies de
                <b>publicidad comportamental</b> o aquéllas que muestran publicidad en función de tus hábitos de navegación,
                tu país de procedencia, idioma, etc.
              </p>
            </blockquote>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Aquí sólo utilizamos cookies...
            </h3>
            <p class="block">
              ...Para analizar el tráfico y establecer estadísticas de uso. Además, compartimos información sobre el uso que haga del
              sitio web con nuestros partners de redes sociales y análisis web, todos ellos de más que conocidos (Google,
              LinkedIn...) quienes pueden combinarla con otra información que ellos hayan recopilado a partir del uso que tú
              hayas hecho de sus servicios (con tu cuenta personal de LinkedIn, por ejemplo).
            </p>
            <p class="block">
              Eso sí, en ningún caso se van a utilizar cookies que comprometan tu privacidad.
            </p>
            <p class="block">
              Esta es la <b>relación de cookies</b> que usa <span class="has-text-primary">{{ owner.copyright }}</span>:
            </p>
            <div class="table-container">
              <table class="table is-bordered is-narrow is-fullwidth is-size-7">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Temporalidad</th>
                    <th>Titularidad</th>
                    <th>Finalidad</th>
                    <th>Dominio</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr>
                    <td>__cfduid</td>
                    <td>Técnica de terceros</td>
                    <td>Persistente</td>
                    <td>CloudFlare, Inc.</td>
                    <td>
                      Identificar tráfico web de confianza. No corresponde a ningún id de "usuario" en la aplicación web, ni
                      guarda ningún dato personal identificable.
                    </td>
                    <td>cloudfare.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>__hstc</td>
                    <td>Técnica de terceros</td>
                    <td>Persistente</td>
                    <td>HubSpot, Inc.</td>
                    <td>
                      La cookie principal para seguimiento de los visitantes. Contiene el dominio, utk, marca de tiempo
                      inicial (primera visita), marca de tiempo más reciente (última visita), marca de tiempo actual (esta
                      visita) y número de sesión (aumenta para cada sesión posterior).
                    </td>
                    <td>hubspot.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>hubspotutk</td>
                    <td>Estrictamente necesaria de terceros</td>
                    <td>13 meses</td>
                    <td>HubSpot, Inc.</td>
                    <td>
                      se usa para hacer seguimiento de la identidad de un visitante. Se pasa a HubSpot en el envío de
                      formularios y se usa al eliminar la duplicación de contactos.
                    </td>
                    <td>hubspot.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>__hssrc</td>
                    <td>Estrictamente necesaria de terceros</td>
                    <td>Sesión</td>
                    <td>HubSpot, Inc.</td>
                    <td>
                      Determinar si el visitante ha reiniciado su navegador. Si esta cookie no existe cuando HubSpot
                      administra cookies, se considera una nueva sesión.
                    </td>
                    <td>hubspot.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>__hssc</td>
                    <td>Estrictamente necesaria de terceros</td>
                    <td>30 minutos</td>
                    <td>HubSpot, Inc.</td>
                    <td>
                      Seguimiento de las sesiones. Esto se utiliza para determinar si HubSpot debería aumentar el número de
                      sesión y las marcas de tiempo en la cookie __hstc. Contiene el dominio, el conteo de vistas viewCount
                      (se incrementa con cada vista de página en una sesión) y la marca de tiempo de inicio de una sesión.
                    </td>
                    <td>hubspot.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>messagesUtk</td>
                    <td>Estrictamente necesaria de terceros</td>
                    <td>13 meses</td>
                    <td>HubSpot, Inc.</td>
                    <td>
                      Para reconocer a los visitantes que chatean contigo utilizando la herramienta de mensajes. Si el
                      visitante deja tu sitio antes de que se agregue como un contacto, esta cookies se asociará con su
                      navegador. Si chateas con un visitante que luego regresa a tu sitio en el mismo navegador que ya tiene
                      cookies, la herramienta de mensajes cargará su historial de conversaciones.
                    </td>
                    <td>hubspot.com</td>
                  </tr> -->
                  <tr>
                    <td>_ga</td>
                    <td>Análisis de terceros</td>
                    <td>2 años</td>
                    <td>Google Analytics</td>
                    <td>Se usa para distinguir <em class="has-text-weight-medium">Usuarios</em>.</td>
                    <td>google.com</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>Análisis de terceros</td>
                    <td>24 horas</td>
                    <td>Google Analytics</td>
                    <td>Se usa para distinguir <em class="has-text-weight-medium">Usuarios</em>.</td>
                    <td>google.com</td>
                  </tr>
                  <tr>
                    <td>_gat</td>
                    <td>Análisis de terceros</td>
                    <td>1 minuto</td>
                    <td>Google Analytics</td>
                    <td>Se usa para limitar el porcentaje de solicitudes.</td>
                    <td>google.com</td>
                  </tr>
                  <!-- <tr>
                    <td>i18n_redirected</td>
                    <td>Técnica propia</td>
                    <td>Persistente</td>
                    <td>@jalofernandez</td>
                    <td>Mantener idioma elegido por el ususario.</td>
                    <td>haztunegociodigital.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>cookiesConsent</td>
                    <td>Técnica propia</td>
                    <td>Persistente</td>
                    <td>@jalofernandez</td>
                    <td>
                      Guardar el consentimiento y aceptación de la política de cookies por parte del "usuario" y no volver a
                      mostrar el banner de alerta sobre las cookies.
                    </td>
                    <td>haztunegociodigital.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>auth.*</td>
                    <td>Técnicas propias</td>
                    <td>Sesión</td>
                    <td>@jalofernandez</td>
                    <td>Para identificar de manera unitaria al "usuario" respecto a otros.</td>
                    <td>haztunegociodigital.com</td>
                  </tr> -->
                </tbody>
              </table>
            </div>
            <p class="block">
              Aquí está la relación completa de <b>cookies de terceros</b>:
            </p>
            <nav class="level">
              <a
                href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                title="Qué cookies usa Google Analytics en el navegador del visitante"
                class="level-item analytics"
              >
                <span class="icon-text">
                  <span class="icon">
                    <i class="mdi mdi-google-analytics"></i>
                  </span>
                  Google <b>Analytics</b>
                </span>
              </a>
              <a
                href="https://www.facebook.com/policies/cookies/"
                target="_blank"
                rel="noopener noreferrer"
                title="Qué cookies usa Facebook en el navegador del visitante"
                class="level-item facebook"
              >
                <span class="icon-text">
                  <span class="icon">
                    <i class="mdi mdi-facebook"></i>
                  </span>
                  <b>Facebook</b> Pixel
                </span>
              </a>
              <!-- <a
                href="https://help.fullstory.com/hc/en-us/articles/360020829513-Why-FullStory-uses-First-Party-Cookies"
                target="_blank"
                rel="noopener noreferrer"
                title="Qué cookies usa Fullstory en el navegador del visitante"
                class="level-item fullstory"
              >
                <span class="icon-text">
                  <span class="icon">
                    <i class="mdi mdi-open-in-new"></i>
                  </span>
                  <b>Fullstory</b>
                </span>
              </a> -->
              <!-- <a
                href="https://knowledge.hubspot.com/es/reports/what-cookies-does-hubspot-set-in-a-visitor-s-browser"
                target="_blank"
                rel="noopener noreferrer"
                title="Qué cookies usa Hubspot en el navegador del visitante"
                class="level-item hubspot"
              >
                <span>
                  <span class="icon">
                    <i class="mdi mdi-hubspot"></i>
                  </span>
                  <b>Hubspot</b>
                </span>
              </a> -->
            </nav>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Puedes gestionar las cookies...
            </h3>
            <p class="block">
              ...En la configuración del navegador de modo que este te notifique antes de que se descargue cookie
              en tu equipo o también puedes adaptar la configuración de forma que el navegador rechace todas las cookies o
              sólo las cookies de terceros. Además puedes eliminar cualquiera de las cookies que ya se encuentren en tu
              equipo.
            </p>
            <p class="block">
              El único problema es que cada navegador lo gestiona a su manera y tendrás que adaptar por separado la
              configuración de cada navegador y equipo que utilices pero aquí te dejamos una relación de enlaces a la
              documentación de gestión de cookies de los navegadores más utilizados para que sepas como hacerlo:
            </p>
            <nav class="level">
              <a
                href="https://support.google.com/chrome/answer/95647?hl=es&hlrm=en"
                class="level-item chrome"
                title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Chrome"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span class="icon">
                    <i class="mdi mdi-google-chrome"></i>
                  </span>
                  Google <b>Chrome</b>
                </span>
              </a>
              <a
                href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10"
                class="level-item explorer"
                title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Explorer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span class="icon">
                    <i class="mdi mdi-microsoft-internet-explorer"></i>
                  </span>
                  Internet <b>Explorer</b>
                </span>
              </a>
              <a
                href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-US&redirectslug=Cookies"
                class="level-item firefox"
                title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Firefox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span class="icon">
                    <i class="mdi mdi-firefox"></i>
                  </span>
                  Mozilla <b>Firefox</b>
                </span>
              </a>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                class="level-item safari"
                title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Safari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span class="icon">
                    <i class="mdi mdi-apple-safari"></i>
                  </span>
                  Apple <b>Safari</b>
                </span>
              </a>
              <a
                href="https://help.opera.com/en/latest/web-preferences/#cookies"
                class="level-item opera"
                title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Opera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span class="icon">
                    <i class="mdi mdi-opera"></i>
                  </span>
                  <b>Opera</b>
                </span>
              </a>
            </nav>
            <p class="block">
              Ten en cuenta que si eliges bloquear las cookies esto puede afectar al correcto funcionamiento de este sitio web.
            </p>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Cookies en los dispositivos móviles
            </h3>
            <p class="block">
              En <span class="has-text-primary">{{ owner.copyright }}</span> también usamos cookies en dispositivos móviles. En este caso los navegadores de
              los dispositivos móviles permiten configurar las opciones o ajustes de privacidad para desactivar o eliminar las cookies.
              Aquí te dejamos una relación de enlaces a la documentación de gestión de cookies de los navegadores móviles más utilizados:
            </p>
            <nav class="level">
              <a
                href="https://support.google.com/chrome/answer/114662?hl=es&visit_id=637387185293136031-776021146&rd=1"
                class="level-item chrome"
                title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Chrome Mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <!-- <span class="icon">
                    <i class="mdi mdi-google-chrome"></i>
                  </span> -->
                  <b>Chrome</b> Mobile
                </span>
              </a>
              <a
                href="https://support.apple.com/es-es/HT201265"
                class="level-item ios"
                title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Apple iOS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <!-- <span class="icon">
                    <i class="mdi mdi-google-ios"></i>
                  </span> -->
                  <b>iPhone</b> Safari
                </span>
              </a>
              <a
                href="https://support.microsoft.com/es-es/help/4036480/windows-phone-8-1-end-of-support-faq"
                class="level-item windows"
                title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Windows Phone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <!-- <span class="icon">
                    <i class="mdi mdi-microsoft-windows"></i>
                  </span> -->
                  <b>Windows</b> Phone
                </span>
              </a>
              <a
                href="https://help.opera.com/en/latest/web-preferences/"
                class="level-item opera"
                title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Opera Mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <!-- <span class="icon">
                    <i class="mdi mdi-google-opera"></i>
                  </span> -->
                  <b>Opera</b> Mobile
                </span>
              </a>
            </nav>

            <h3 class="subtitle is-size-5 is-size-6-mobile mt-5">
              Aceptación de la política de cookies
            </h3>
            <p class="block">
              El "usuario", osea usted, <b class="has-text-primary">acepta expresamente</b>,
              por la utilización de este sitio web, el tratamiento de la información
              recabada en la forma y con los fines mencionados a lo largo de esta <em>política de cookies</em>. Reconoce
              conocer la posibilidad de rechazar el tratamiento de tales datos o información rechazando el uso de cookies
              mediante la selección de la configuración apropiada a tal fin en su navegador. Si bien esta opción de bloqueo
              de cookies en su navegador puede no permitirle el uso pleno de todas las funcionalidades del sitio web.
            </p>
          </div>
        </article>
      </div>
    </section>
    <TheFooter />
  </main>
</template>

<script>
export default {
  data() {
    return {
      bannerShow: null,
      currentLink: 0,
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      hero: {
        title: 'Aviso legal',
        subtitle: 
          'El siguiente aviso legal informa sobre <span class="has-text-weight-bold">las condiciones de uso del presente sitio web</span>. <br class="is-hidden-touch" />Léelos detenidamente, por favor. Intentaremos ser breves y usar un lenguaje claro.',
        img: {
          src: 'dog-judge.svg',
          width: 200,
          height: 200
        }
      },
      sections: [
        { name: 'Responsable', link: 'responsability' },
        { name: 'Política de Privacidad', link: 'privacy' },
        { name: 'Condiciones de uso', link: 'terms' },
        { name: 'Política de Cookies', link: 'cookies' }
      ]
    }
  },
  head() {
    const title = this.hero.title + ' de'
    const description =
      'Aviso legal: condiciones de uso y términos legales del website de ' + this.owner.copyright + ', Valdemoro, Madrid. Cita por teléfono y Whatsapp: 91 248 04 30'
    const canonical = 'https://' + this.owner.url + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' },
      ],
      link: [
        { rel: 'canonical', hid: 'canonical', href: canonical },
        { rel: 'alternate', hid: 'alternate', href: canonical+'/#!' },
        { rel: 'alternate', hid: 'alternate', href: canonical+'#!' },
      ]
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    console.log("bannerShow: " + this.bannerShow)
  },
  methods: {
    showLink(id) {
      return this.currentLink === id
    },
    toggleClick(id) {
      if(this.currentLink !== 0) {
        this.currentLink = 0
        return false
      }
      this.currentLink = id
    }
  }
}
</script>
