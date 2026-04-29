// components/data/projects.ts
// Este archivo solo define IDs y metadata técnica
// Los textos (título, descripción, etc) vienen de las traducciones en i18n

export interface Project {
  id: string;
  type: 'industrial' | 'prototipo' | 'software' | 'mejora';
  year: string;
  image: string;
  images?: string[];
  links?: { label: string; url: string }[];
  kpis?: { value: string; label: string }[];
  featured?: boolean;
  highlight?: boolean;
  // Datos traducibles (vienen del JSON)
  title?: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
}

export interface LocalizedProjectData {
  title?: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  kpis?: { value: string; label: string }[];
  links?: { label: string; url: string }[];
}

// Array de IDs y metadata en orden
// Los textos se cargan dinámicamente desde messages/[locale].json -> proyectos.projectsData
export const projectIds: Project[] = [
  {
    id: 'simulacion-estadistica-pesaje',
    type: 'software',
    year: '2016',
    image: '/images/projects/weigher.jpg',
    images: ['/images/projects/weigher.jpg','/images/projects/Ajuste_Simulado.png','/images/projects/Error_de_medida.png','/images/projects/Masa_probable.png'],
    kpis: [
      { value: 'Sigma', label: 'Reducción Variabilidad' },
      { value: 'R', label: 'Análisis Computacional' },
    ],
    featured: true,
    highlight: true,
  },
  {
    id: 'prototipado-agile-3d',
    type: 'prototipo',
    year: '2022-2026',
    image: '/images/projects/PWM.png',
    kpis: [
      { value: '-70%', label: 'Lead-Time de piezas' },
      { value: 'FDM', label: 'Tecnología' },
    ],
    highlight: true,
  },
  {
    id: 'vision-artificial-calidad',
    type: 'mejora',
    year: '2017-2026',
    image: '/images/projects/CBCV.GIF',
    kpis: [
      { value: 'Real-time', label: 'Procesamiento' },
      { value: 'IoT', label: 'Conectividad' },
    ],
    featured: true,
    highlight: true,
  },
  {
    id: 'montaje-infraestructura-industrial',
    type: 'industrial',
    year: '2022–2024',
    image: '/images/projects/montaje.jpeg',
    kpis: [
      { value: '3', label: 'Líneas Completas' },
      { value: '+30', label: 'Equipos Instalados' },
    ],
    featured: true,
    highlight: true,
  },
  {
    id: 'simulacion-cfd-mezclado',
    type: 'software',
    year: '2013',
    image: '/images/projects/Mixer_0.png',
    images: ['/images/projects/Mixer_0.png','/images/projects/Mixer_1.png','/images/projects/Mixer_2.png'],
    kpis: [
      { value: 'Viabilidad', label: 'Tecnología Validada' },
      { value: 'CFD', label: 'Análisis Predictivo' },
    ],
    featured: true,
    highlight: true,
  },
  {
    id: 'optimizador-vacaciones-restricciones',
    type: 'software',
    year: '2025',
    image: '/images/projects/calendario.jpg',
    kpis: [
      { value: '100%', label: 'Operatividad Garantizada' },
      { value: 'Legal', label: 'Validación LCT' },
    ],
    featured: true,
    highlight: false,
  },
  {
    id: 'cnc-etching-scanner-printer',
    type: 'prototipo',
    year: '2024',
    image: '/images/projects/cnc.png',
    kpis: [
      { value: '0.2 mm', label: 'Resolución' },
      { value: 'Reciclado', label: 'AGFA + Olivetti' },
      { value: 'DIY', label: 'Open Source' }
    ],
    links: [
      { label: 'Video de funcionamiento', url: 'https://youtube.com/watch?v=InIKEu35ieA' }
    ],
    highlight: true,
  },
  {
    id: 'bluetooth-balanza-precision-pic',
    type: 'prototipo',
    year: '2012',
    image: '/images/projects/scale.jpeg',
    kpis: [
      { value: '7→8 bits', label: 'Conversión Bidireccional' },
      { value: 'PIC 12F629', label: '1KB Flash, 64B RAM' },
      { value: 'HC-06', label: 'Bluetooth SPP' }
    ],
    links: [
      { label: 'Repositorio', url: 'https://concifederico.blogspot.com/2012/10/construccion-de-una-plaqueta-pcb.html' }
    ],
    highlight: true,
  },
  {
    id: 'calibre-digital-bluetooth-pic',
    type: 'prototipo',
    year: '2013',
    image: '/images/projects/caliper1.jpg',
    images: [
      '/images/projects/caliper1.jpg',
      '/images/projects/caliper2.jpg'
    ],
    kpis: [
      { value: '9600-8-N-1', label: 'Transmisión Serie' },
      { value: 'PIC12F629', label: 'uC Central' },
      { value: '1.8V-3.3V', label: 'Alimentación Flexible' }
    ],
    links: [
      { label: 'Ver proyecto en Blog', url: 'http://concifederico.blogspot.com/2013/05/digital-caliper-to-bluetooth-interface.html' },
      { label: 'Repositorio (Firmware/PCB)', url: 'http://concifederico.blogspot.com/2013/05/digital-caliper-to-bluetooth-interface.html#downloads' }
    ],
    highlight: true,
  },
  {
    id: 'vision-computada-seguimiento-hormigas',
    type: 'software',
    year: '2024',
    image: '/images/projects/hormigas.gif',
    kpis: [
      { value: 'Python + CV2', label: 'Librerías' },
      { value: 'Multi-individuo', label: 'Tracking en Tiempo Real' },
      { value: 'CONICET', label: 'Colaboración Científica' }
    ],
    links: [
      { label: 'Publicación / Repositorio', url: 'https://github.com/tuusuario/ant-tracking' }
    ],
    highlight: true,
  },
  {
    id: 'cnc-reciclado-impresoras-a3',
    type: 'prototipo',
    year: '2020',
    image: '/images/projects/cnc1.gif',
    images: [
      '/images/projects/cnc1.gif',
      '/images/projects/cnc2.jpg'
    ],
    kpis: [
      { value: 'Marlin', label: 'Firmware' },
      { value: 'Inkscape + Gcodetools', label: 'CAD/CAM' },
      { value: 'Reciclaje', label: 'Electrónica y Mecánica' }
    ],
    links: [
      { label: 'Repositorio / Documentación', url: 'https://github.com/tuusuario/cnc-reciclado' }
    ],
    highlight: true,
  },
  {
    id: 'camara-reflectancia-espectrometro-ocean-optics',
    type: 'prototipo',
    year: '2010',
    image: '/images/projects/camara1.png',
    images: [
      '/images/projects/camera1.png',
      '/images/projects/camera2.png'
    ],
    kpis: [
      { value: 'Ocean Optics 2000', label: 'Espectrómetro Visible' },
      { value: 'Ba(HCO₃)₂', label: 'Estándar de Alta Reflectancia' },
      { value: 'CONICET', label: 'Validación Científica' }
    ],
    highlight: true,
  },
  {
    id: 'diseno-interiores-relevamiento-3d',
    type: 'industrial',
    year: '2025',
    image: '/images/projects/design.png',
    kpis: [
      { value: 'Precisión milimétrica', label: 'Relevamiento' },
      { value: 'Reducción de desperdicios', label: 'Optimización' },
      { value: '3D + Render', label: 'Visualización' }
    ],
    highlight: false,
  },
  {
    id: 'temporizador-viscoso-aeronautica',
    type: 'prototipo',
    year: '2021',
    image: '/images/projects/rtd1.png',
    kpis: [
      { value: 'Ultra bajo peso', label: 'Optimización Masiva' },
      { value: 'CFD', label: 'Simulación de Fluido' },
      { value: 'Aeronáutica', label: 'Validación Experimental' }
    ],
    links: [ { label: 'Repositorio / Documentación', url: 'https://www.thingiverse.com/thing:4761649' } ],
    highlight: true,
  },
  {
    id: 'estudio-prefactibilidad-silicato-sodio',
    type: 'industrial',
    year: '2007',
    image: '/images/projects/silex1.png',
    images: [
      '/images/projects/silex1.png',
      '/images/projects/silex2.png'
    ],
    kpis: [
      { value: '>16.000 tn/año', label: 'Capacidad de Planta' },
      { value: 'VAN + TIR', label: 'Rentabilidad Asegurada' },
      { value: 'Cero efluentes', label: 'RSE' }
    ],
    links: [
      { label: 'Ver documento PDF', url: 'https://www.edutecne.utn.edu.ar/PPI-CAI/ppi2006.pdf' }
    ],
    featured: true,
    highlight: true,
  },
  {
    id: 'pasimetro-alta-precision-helices',
    type: 'prototipo',
    year: '2014',
    image: '/images/projects/pasimetro1.jpg',
    images: [
      '/images/projects/pasimetro1.jpg',
      '/images/projects/pasimetro2.jpg'
    ],
    kpis: [
      { value: '+0.01°', label: 'Precisión Angular' },
      { value: 'Paso Geométrico', label: 'Medición Exacta' },
      { value: 'Drones/Aeromodelismo', label: 'Aplicaciones' }
    ],
    highlight: true,
  },
];

// Para la página: usa esto para cargar datos con traducciones
export const projects = projectIds;

export function mergeProjectTranslations(
  localizedData: Record<string, LocalizedProjectData> = {}
): Project[] {
  return projectIds.map((project) => ({
    ...project,
    ...(localizedData[project.id] ?? {}),
  }));
}

export function getFeaturedProjects(projects: Project[], limit = 6): Project[] {
  return projects.filter((project) => project.featured).slice(0, limit);
}
