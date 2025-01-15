# Portafolio Personal

Este repositorio contiene el código fuente de mi portafolio personal, una página web que muestra mi información, habilidades, experiencia y proyectos.

## Tecnologías Utilizadas

*   **Next.js:** Framework de React para la creación de aplicaciones web con renderizado del lado del servidor (SSR), enrutamiento, optimización de rendimiento y otras características.
*   **React:** Librería de JavaScript para la construcción de interfaces de usuario dinámicas e interactivas.
*   **Tailwind CSS:** Framework CSS utility-first para un desarrollo rápido y flexible del diseño. Se utiliza un prefijo `tw-` para evitar colisiones con otros estilos.
*   **CSS Modules:** Se utilizan para el estilado específico de cada componente, encapsulando los estilos y evitando conflictos.
*   **JavaScript (ES6+):** Lenguaje de programación principal.
*   **Font Awesome:** Librería de iconos vectoriales para mejorar la presentación visual, especialmente en la sección de contacto.
*   **Next/Image:** Componente de Next.js para optimizar la carga de imágenes.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

portfolio/ </br>
├── components/           # Componentes reutilizables de React</br>
│   ├── Navbar.js         # Componente de la barra de navegación</br>
│   ├── Footer.js         # Componente del pie de página</br>
│   ├── Profile.js        # Componente de la sección de perfil</br>
│   ├── Summary.js        # Componente de la sección de resumen</br>
│   ├── Education.js      # Componente de la sección de educación</br>
│   ├── Work.js           # Componente de la sección de experiencia laboral</br>
│   └── Contact.js        # Componente de la sección de contacto</br>
├── pages/                # Páginas del proyecto</br>
│   └── index.js          # Página principal del portafolio</br>
├── public/               # Archivos públicos (imágenes, fuentes, etc.)</br>
├── styles/               # Estilos globales y de secciones</br>
│   ├── globals.css       # Estilos globales</br>
│   └── sections.module.css # Estilos para las secciones principales</br>
├── tailwind.config.js    # Configuración de Tailwind CSS</br>
└── package.json          # Archivo de configuración de npm/yarn</br>

## Configuración e Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clonar el repositorio:**

    ```bash
    git clone [https://es.wikipedia.org/wiki/Repositorio_%28contenido_digital%29](https://es.wikipedia.org/wiki/Repositorio_%28contenido_digital%29)
    ```

2.  **Navegar al directorio del proyecto:**

    ```bash
    cd portfolio
    ```

3.  **Instalar las dependencias:**

    ```bash
    npm install  # o yarn install
    ```

4.  **Ejecutar el servidor de desarrollo:**

    ```bash
    npm run dev  # o yarn dev
    ```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el portafolio.

## Despliegue (Deployment)

Para desplegar este proyecto, puedes usar plataformas como Vercel (recomendado para Next.js), Netlify o AWS Amplify, que ofrecen integración sencilla con Next.js.

*   **Vercel:** [https://vercel.com/](https://vercel.com/)
*   **Netlify:** [https://www.netlify.com/](https://www.netlify.com/)
*   **AWS Amplify:** [https://aws.amazon.com/amplify/](https://aws.amazon.com/amplify/)

Sigue la documentación de la plataforma que elijas para configurar el despliegue.

## Estructura de Componentes y Estilos

*   Cada sección del portafolio (Perfil, Resumen, Educación, etc.) está implementada como un componente separado en la carpeta `components`, lo que facilita la organización, el mantenimiento y la reutilización del código.
*   Se utilizan **CSS Modules** para el estilado específico de cada componente (`*.module.css`), lo que encapsula los estilos y evita conflictos.
*   Se utiliza **Tailwind CSS** para estilos generales y utilitarios, con el prefijo `tw-` configurado en `tailwind.config.js` para evitar colisiones. Los estilos globales (si los hay) se encuentran en `styles/globals.css`, y los estilos específicos para las secciones principales se encuentran en `styles/sections.module.css`.

## Navegación

*   La navegación entre las secciones se realiza mediante la barra de navegación (`Navbar`) y el uso de enlaces ancla (`/#seccion`) combinados con scroll suave gestionado en `pages/index.js`.
*   Se utiliza `router.asPath` en el componente `Navbar` para resaltar la sección activa en la barra de navegación, incluyendo el hash de la URL.

## Contacto

*   El formulario de contacto en `Contact.js` incluye validación de campos (Nombre, Correo, Mensaje), mensajes de error dinámicos y un mensaje de confirmación después del envío (simulado).
*   Se han optimizado los estilos del formulario para que los mensajes de error no afecten el diseño y para que los campos "Nombre" y "Correo" se muestren uno al lado del otro en pantallas medianas y grandes, adaptándose a pantallas pequeñas.

## Personalización

Puedes personalizar fácilmente el contenido, los estilos y la estructura del portafolio modificando los componentes en la carpeta `components`, los estilos en los archivos `.module.css` y la configuración de Tailwind en `tailwind.config.js`.