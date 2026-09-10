# Sistema de Gestión de Cursos

Aplicación React (Vite + Tailwind CSS v4) conectada a Supabase para gestionar estudiantes, cursos e inscripciones.

## Configuración

Crea un archivo `.env` en la raíz con las credenciales de Supabase:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
```

## Scripts disponibles

- `npm run dev` — inicia el servidor de desarrollo.
- `npm run build` — genera el build de producción en `dist/`.
- `npm run preview` — sirve el build de producción localmente.
- `npm run lint` — corre ESLint.

## Estructura

- `.config/supabase.js` — cliente de Supabase.
- `src/components/` — componentes de UI reutilizables.
- `src/pages/` — páginas por ruta (Dashboard, Students, Courses, Enrollments).
- `src/routes/` — definición de rutas (`react-router-dom`).
- `src/services/` — acceso a datos vía Supabase (uno por entidad).
