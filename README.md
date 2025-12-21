# Cuenta Atrás - Gran Estreno

Una página web elegante con una cuenta atrás hasta el **31 de diciembre de 2025**.
Diseñada para generar expectación antes de un lanzamiento sorpresa.

## Características

- ⏳ **Cuenta atrás en tiempo real**: Días, horas, minutos y segundos.
- 🎨 **Diseño Responsive**: Se adapta perfectamente a móviles y escritorio.
- ✨ **Efectos Visuales**: Fondo animado tipo aurora y diseño glassmorphism.
- 🔒 **Botón Bloqueado**: El botón de acceso permanece desactivado hasta la fecha objetivo.
- 🎉 **Sorpresa**: Al llegar a la fecha (o desbloquear manualmente), el botón se activa con una animación de confeti.

## Tecnologías

- HTML5
- CSS3 (Variables, Flexbox, Grid, Container Queries)
- JavaScript (Vanilla)

## Cómo probar

1. Clona el repositorio.
2. Abre `index.html` en tu navegador.
3. Para probar el desbloqueo inmediato, añade `?unlock=1` a la URL (ej. `index.html?unlock=1`).

## Personalización

- **Fecha objetivo**: Edita `target` en `script.js`.
- **URL destino**: Edita `data-target-url` en el botón de `index.html`.
- **Estilos**: Ajusta colores y fuentes en `styles.css`.
