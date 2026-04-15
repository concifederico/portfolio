# Portfolio Profesional – Next.js 14

Portafolio de Ingeniería para postulación a **Ingeniero de Desarrollo de Nuevos Productos – Bagley Argentina**.

## Stack
- **Next.js 14** (App Router + Static Export)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** – animaciones
- **Lucide React** – iconografía

## Estructura de rutas
```
/              → Portada con Hero + Proyectos destacados + About
/proyectos     → Grid completo de proyectos con filtros por tipo
/cv            → Versión web interactiva del currículum
```

## Cómo correr en local
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy en Vercel (recomendado)
```bash
npm install -g vercel
vercel
```
O conectá el repo a vercel.com y se deploya automático en cada push.

## Personalizar
1. **Datos personales**: buscá `[Tu Nombre]`, `[tu@email.com]`, `[TUPERFIL]` y reemplazá en todos los archivos.
2. **Proyectos**: editá `components/data/projects.ts` para agregar/modificar proyectos.
3. **CV PDF**: reemplazá `public/cv_bagley.html` con tu CV actualizado.
4. **Foto**: agregá tu foto en `public/foto.jpg` e incorporála en el Hero o página CV.

## Completar placeholders
- [ ] Nombre y apellido completo
- [ ] Email de contacto
- [ ] Teléfono
- [ ] LinkedIn URL
- [ ] Título universitario y universidad
- [ ] Año de egreso
- [ ] Roles anteriores a abril 2022
- [ ] Cursos y certificaciones con fechas
- [ ] Foto profesional
- [ ] Proyectos adicionales (3D, PLC, mejoras específicas)
