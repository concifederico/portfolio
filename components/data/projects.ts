// Define o importa la interfaz Project si la tienes
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: 'industrial' | 'prototipo' | 'software' | 'mejora';
  year: string;
  image: string; // <-- Añadimos esta propiedad obligatoria
  kpis?: { value: string; label: string }[];
  highlight?: boolean;
}



export const projects: Project[] = [
  {
    id: 'simulacion-estadistica-pesaje',
    title: 'Simulación Estadística: Pesaje Multicabezal',
    subtitle: 'Optimización de Distribución de Peso en R',
    description:
      'Desarrollo de un modelo estocástico en lenguaje R para simular el comportamiento de balanzas multicabezal. El algoritmo permitió predecir las combinaciones óptimas de carga y reducir la variabilidad del peso final, minimizando el desperdicio de producto (giveaway) y asegurando el cumplimiento de normativas de peso neto.',
    tags: ['Lenguaje R', 'Estadística Aplicada', 'Data Science', 'Optimización'],
    type: 'software',
    year: '2016',
    image: '/images/projects/weigher.jpg', // Recuerda subir una captura de un gráfico de R (ej. un histograma o densidad)
    kpis: [
      { value: 'Sigma', label: 'Reducción Variabilidad' },
      { value: 'R', label: 'Análisis Computacional' },
    ],
    highlight: true,
  },
  {
    id: 'prototipado-agile-3d',
    title: 'Prototipado Rápido y Metodologías Ágiles',
    subtitle: 'Manufactura Aditiva aplicada a la Mejora Enfocada',
    description:
      'Implementación de un ecosistema de impresión 3D (FDM) para la creación de repuestos críticos...',
    tags: ['Impresión 3D', 'Agile', 'Prototipado', 'SolidWorks/FreeCAD'],
    type: 'prototipo',
    year: '2022–Presente',
    image: '/images/projects/PWM.png', // <-- Ruta a la imagen
    kpis: [
      { value: '-70%', label: 'Lead-Time de piezas' },
      { value: 'FDM', label: 'Tecnología' },
    ],
    highlight: true,
  },
  {
    id: 'vision-artificial-calidad',
    title: 'Visión Artificial para Control de Calidad',
    subtitle: 'Automatización con Python y OpenCV',
    description:
      'Desarrollo de un sistema prototipo de visión computarizada para la detección de anomalías...',
    tags: ['Python', 'OpenCV', 'Visión Artificial', 'Automatización'],
    type: 'software',
    year: '2023',
    image: '/images/projects/CBCV.GIF', // <-- Un .gif queda muy bien aquí
    kpis: [
      { value: 'Real-time', label: 'Procesamiento' },
      { value: 'IoT', label: 'Conectividad' },
    ],
    highlight: true,
  },
  {
    id: 'montaje-infraestructura-industrial',
    title: 'Comisionado de Infraestructura Productiva',
    subtitle: 'Dirección de Montaje y Coordinación de Activos',
    description:
      'Liderazgo técnico en el montaje e instalación de 3 líneas completas de final de línea (End-of-Line) y más de 30 equipos periféricos. Coordinación integral de equipos multidisciplinarios, incluyendo personal de planta y contratistas externos, garantizando el cumplimiento de cronogramas críticos de obra, normativas de seguridad y estándares de ingeniería de procesos.',
    tags: ['Montaje Industrial', 'Project Management', 'Coordinación de Contratistas', 'Puesta en Marcha'],
    type: 'industrial',
    year: '2022–2024',
    image: '/images/projects/montaje.jpeg', // Sugerencia: Una foto de obra o de equipos en proceso de instalación
    kpis: [
      { value: '3', label: 'Líneas Completas' },
      { value: '+30', label: 'Equipos Instalados' },
    ],
    highlight: true,
  },
  {
    id: 'optimizador-vacaciones-restricciones',
    title: 'Sistema de Optimización de Vacaciones',
    subtitle: 'Algoritmo de Permutaciones con Restricciones Críticas',
    description:
      'Desarrollo de una herramienta lógica para la asignación automatizada de licencias anuales. El sistema utiliza algoritmos de permutación para evaluar miles de combinaciones posibles, garantizando el cumplimiento de la Ley de Contrato de Trabajo (LCT) y asegurando que los niveles de operatividad y "headcount" técnico mínimo nunca se vean comprometidos.',
    tags: ['Algoritmos', 'Lógica de Programación', 'Gestión Operativa', 'Compliance'],
    type: 'software',
    year: '2023',
    image: '/images/projects/calendario.jpg', // Sugerencia: una captura de una matriz de datos o un dashboard de calendario
    kpis: [
      { value: '100%', label: 'Operatividad Garantizada' },
      { value: 'Legal', label: 'Validación LCT' },
    ],
    highlight: false,
  }
];
