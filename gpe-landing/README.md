# Gerencia de Proyectos Electrónicos — Landing Page

Landing page corporativa de servicios de seguridad electrónica para unidades residenciales y edificios.

## Estructura del proyecto

```
├── index.html        → Estructura de la página
├── css/
│   └── styles.css    → Todos los estilos
├── js/
│   └── script.js      → Menú móvil, formulario a WhatsApp, animación de fondo (malla de sensores)
└── README.md
```

Los estilos y el JavaScript ya están separados del HTML, listos para servirse como sitio estático (sin build, sin dependencias de instalación).

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub y sube estos archivos manteniendo la estructura de carpetas (`css/`, `js/`, `index.html`).
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. GitHub te dará una URL del tipo `https://tu-usuario.github.io/tu-repositorio/`.
5. Espera 1–2 minutos y recarga: la página debe verse igual que en local.

## Cosas para revisar antes de publicar

- **Logo**: actualmente se muestra un wordmark "GPE" generado en CSS. Si tienen el logo en imagen (SVG o PNG), reemplácenlo en el header y el footer de `index.html`.
- **WhatsApp**: el número está en `+57 311 415 2562`, usado en varios lugares de `index.html` y en `js/script.js`. Si cambia, hay que actualizarlo en ambos archivos.
- **Formulario**: no tiene backend — arma el mensaje y lo abre directo en WhatsApp. Si más adelante quieren que también llegue por correo, se puede integrar un servicio como Formspree.
- **Dominio propio**: si más adelante compran un dominio, en Pages se configura en **Settings → Pages → Custom domain**.
