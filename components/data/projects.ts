// components/data/projects.ts
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: 'industrial' | 'prototipo' | 'software' | 'mejora';
  year: string;
  image: string;                // obligatoria (fallback)
  images?: string[];            // opcional para múltiples imágenes
  links?: { label: string; url: string }[]; // opcional
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
    images: ['/images/projects/weigher.jpg','/images/projects/Ajuste_Simulado.png','/images/projects/Error_de_medida.png','/images/projects/Masa_probable.png'],
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
    type: 'mejora',
    year: '2017-Presente',
    image: '/images/projects/CBCV.GIF', // <-- Un .gif queda muy bien aquí
    kpis: [
      { value: 'Real-time', label: 'Procesamiento' },
      { value: 'IoT', label: 'Conectividad' },
    ],
    highlight: true,
  },
  {
    id: 'montaje-infraestructura-industrial',
    title: 'Montaje de Infraestructura Productiva',
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
  },{
  id: 'simulacion-cfd-mezclado',
  title: 'Simulación CFD para Mezclado Industrial',
  subtitle: 'Análisis de Capacidad de Equipos para Nueva Tecnología',
  description:
    'Se realiza una simulación de dinámica de fluidos computacional (CFD) para determinar si la capacidad de los equipos de mezclado es suficiente para implementar una nueva tecnología en Argentina. El estudio evalúa patrones de flujo, tiempos de mezcla y zonas muertas, permitiendo validar la viabilidad técnica antes de la inversión en equipamiento.',
  tags: ['CFD', 'Dinámica de Fluidos', 'Simulación', 'Validación Tecnológica'],
  type: 'software',
  year: '2013',
  image: '/images/projects/Mixer_0.png',
  images: ['/images/projects/Mixer_0.png','/images/projects/Mixer_1.png','/images/projects/Mixer_2.png'],
  kpis: [
    { value: 'Viabilidad', label: 'Tecnología Validada' },
    { value: 'CFD', label: 'Análisis Predictivo' },
  ],
  highlight: true,
},
  {
    id: 'optimizador-vacaciones-restricciones',
    title: 'Sistema de Optimización de Vacaciones',
    subtitle: 'Algoritmo de Permutaciones con Restricciones Críticas',
    description:
      'Desarrollo de una herramienta lógica para la asignación automatizada de licencias anuales. El sistema utiliza algoritmos de permutación optimizada para evaluar millones de combinaciones posibles, garantizando el cumplimiento de la Ley de Contrato de Trabajo (LCT) y asegurando que los niveles de operatividad y "headcount" técnico mínimo nunca se vean comprometidos.',
    tags: ['Algoritmos', 'Lógica de Programación', 'Gestión Operativa', 'Compliance'],
    type: 'software',
    year: '2025',
    image: '/images/projects/calendario.jpg', // Sugerencia: una captura de una matriz de datos o un dashboard de calendario
    kpis: [
      { value: '100%', label: 'Operatividad Garantizada' },
      { value: 'Legal', label: 'Validación LCT' },
    ],
    highlight: false,
  }, {
  id: 'cnc-etching-scanner-printer',
  title: 'CNC de grabado de placas con Hardware Reciclado',
  subtitle: 'Reproposicionamiento de Scanner AGFA y Impresora Olivetti JP192',
  description:
    'Máquina CNC para grabado (etching) construida completamente con componentes reciclados: un antiguo escáner AGFA y una impresora Olivetti JP192. El sistema aprovecha los mecanismos de movimiento lineal del escáner y la impresora para lograr un eje de coordenadas funcional. La resolución alcanzada es de aproximadamente 0.2 mm, permitiendo grabados de precisión sobre diferentes materiales. Proyecto de electrónica, mecánica y firmware open-source.',
  tags: ['CNC', 'Hardware Reciclado', 'Electrónica', 'Firmware', 'Grabado', 'DIY'],
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
},{
  id: 'bluetooth-balanza-precision-pic',
  title: 'Interfaz Bluetooth para Balanza de Precisión',
  subtitle: 'Adaptador bidireccional con PIC 12F629 y HC-06',
  description:
    'Desarrollo de una interfaz inalámbrica Bluetooth para una balanza de precisión de laboratorio (resolución de miligramos). El sistema se implementó con un módulo HC-06 y un microcontrolador PIC 12F629, aprovechando al máximo sus escasos recursos. Se diseñó un convertidor de datos en tiempo real que transforma el formato nativo de 7 bits de la balanza a 8 bits y viceversa, permitiendo una transmisión bidireccional completa. La principal dificultad fue gestionar la conversión y el buffer de comunicación en un microcontrolador de bajo costo y memoria limitada, resolviéndose con optimización bit a bit y rutinas en ensamblador.',
  tags: ['Bluetooth', 'PIC', 'Embedded Systems', 'Protocolo Serial', 'Instrumentación', 'Low-Level'],
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
  highlight: true, // opcional, por la complejidad
},{
  id: 'calibre-digital-bluetooth-pic',
  title: 'Interfaz Bluetooth para Calibre Digital',
  subtitle: 'Adaptador Inalámbrico con PIC12F629 y Módulo HC-05/HC-06',
  description:
    'Desarrollo de una interfaz plug-in para transmitir datos de un calibre digital chino vía Bluetooth a un PC o dispositivo móvil en tiempo real. El proyecto requirió ingeniería inversa de la comunicación del calibre, portando el algoritmo a un microcontrolador PIC12F629. Incluye el diseño de un PCB fino y un innovador conector de circuito flexible (flex) fabricado artesanalmente con láminas de latón de 0.05mm, para acoplarse al calibre sin necesidad de soldaduras invasivas. El firmware permite seleccionar entre modos de transmisión (por cambio de valor, por botón, por comando serie o continua) y el tipo de dato enviado (mm, pulgadas, datos raw o HEX).',
  tags: ['PIC', 'Bluetooth', 'Embedded', 'PCB Design', 'Ingeniería Inversa', 'C++', 'Hardware'],
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
},{
  id: 'vision-computada-seguimiento-hormigas',
  title: 'Sistema de Visión Computada para Seguimiento de Hormigas',
  subtitle: 'Evaluación de Sustancias Atrayentes y Repelentes (CONICET)',
  description:
    'Desarrollo de un sistema de visión por computadora para el seguimiento automatizado de hormigas en ensayos de laboratorio, en colaboración con CONICET y la investigadora adjunta María Laura Peschiuta. El sistema se implementó en Python utilizando la librería Computer Vision 2 (CV2), permitiendo detectar y rastrear múltiples individuos en tiempo real. El objetivo es evaluar cuantitativamente el poder atrayente o repelente de distintas sustancias químicas sobre el comportamiento de las hormigas, generando trayectorias, mapas de calor y métricas de permanencia en zonas de interés.',
  tags: ['Computer Vision', 'Python', 'OpenCV', 'Tracking', 'Análisis de Comportamiento', 'CONICET'],
  type: 'software',
  year: '2024',
  image: '/images/projects/hormigas.gif',
  kpis: [
    { value: 'Python + CV2', label: 'Librerías' },
    { value: 'Multi-individuo', label: 'Tracking en Tiempo Real' },
    { value: 'CONICET', label: 'Colaboración Científica' }
  ],
  links: [
    { label: 'Publicación / Repositorio', url: 'https://github.com/tuusuario/ant-tracking' } // Si tenés link público
  ],
  highlight: true,
},{
  id: 'cnc-reciclado-impresoras-a3',
  title: 'Sistema CNC con Impresoras A3 Recicladas',
  subtitle: 'Aprovechamiento de Conectores Flexibles y Electrónica Recuperada',
  description:
    'Desarrollo de una máquina CNC construida a partir de impresoras A3 recicladas, reutilizando componentes como conectores flexibles (cintas planas) y parte de la electrónica original. El sistema utiliza el stack tecnológico compuesto por Marlin como firmware de control, Inkscape para el diseño vectorial y Gcodetools para la generación de rutas de corte y grabado. Este enfoque permite reducir costos y fomentar la economía circular en el ámbito del prototipado y la fabricación digital.',
  tags: ['CNC', 'Reciclaje', 'Impresoras A3', 'Marlin', 'Inkscape', 'Gcodetools', 'Electrónica', 'Economía Circular'],
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
},{
  id: 'camara-reflectancia-espectrometro-ocean-optics',
  title: 'Cámara de Reflectancia con Espectrómetro Ocean Optics 2000',
  subtitle: 'Sistema de Medición para Ecofisiología Vegetal (CONICET)',
  description:
    'Desarrollo de una cámara para la medición de reflectancia mediante la implementación práctica de un barrido espectral con un espectrómetro visible Ocean Optics 2000. Se diseñó y generó por precipitación un estándar de bicarbonato de bario de alta reflectancia, asegurando valores de reflectancia máximos para la calibración del sistema. Este dispositivo fue utilizado por el CONICET y la investigadora María Laura Peschiuta en diversas investigaciones en el campo de la ecofisiología vegetal, permitiendo la caracterización óptica de tejidos vegetales y el monitoreo de parámetros fisiológicos.',
  tags: ['Espectroscopía', 'Reflectancia', 'Ocean Optics', 'Instrumentación', 'Ecofisiología Vegetal', 'CONICET', 'Calibración Óptica'],
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
  links: [],
  highlight: true,
},{
  id: 'diseno-interiores-relevamiento-3d',
  title: 'Diseño de Interiores: Relevamiento, Modelado 3D y Optimización',
  subtitle: 'Planificación Integral de Espacios y Materiales',
  description:
    'Desarrollo de proyectos integrales de diseño de interiores que abarcan desde el relevamiento preciso de espacios existentes hasta el modelado 3D detallado, la elaboración de presupuestos de materiales y la optimización de recursos. Se implementan metodologías para maximizar la eficiencia en el uso de materiales, reducir desperdicios y ajustar los diseños a las necesidades funcionales y estéticas del cliente. El proceso incluye escaneo o medición manual, modelado paramétrico y simulación de iluminación y texturas para la toma de decisiones informadas.',
  tags: ['Diseño de Interiores', 'Relevamiento', 'Modelado 3D', 'Presupuesto', 'Optimización', 'Planificación'],
  type: 'industrial', // o 'prototipo' dependiendo del enfoque
  year: '2025',
  image: '/images/projects/design.png',
  kpis: [
    { value: 'Precisión milimétrica', label: 'Relevamiento' },
    { value: 'Reducción de desperdicios', label: 'Optimización' },
    { value: '3D + Render', label: 'Visualización' }
  ],
  links: [], // Podés agregar portfolio o demo
  highlight: false,
},{
  id: 'temporizador-viscoso-aeronautica',
  title: 'Temporizador Viscoso de Ultra Bajo Peso',
  subtitle: 'Modelado 3D, Diseño Mecánico y Simulación de Fluido de Retardo',
  description:
    'Desarrollo completo de un temporizador viscoso de ultra bajo peso destinado a actividades experimentales en el ámbito aeronáutico. El proyecto incluyó el modelado 3D de conjuntos de piezas mecánicas, el diseño del circuito de fluido de retardo y la simulación de su dinámica de fluidos computacional (CFD). Se optimizó la geometría interna para lograr tiempos de retardo precisos bajo condiciones de vibración y aceleración propias del entorno aeroespacial, utilizando materiales ultraligeros sin comprometer la robustez mecánica.',
  tags: ['Modelado 3D', 'CFD', 'Dinámica de Fluidos', 'Temporizador Mecánico', 'Aeronáutica', 'Diseño Mecánico', 'Ultraligero'],
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
},{
  id: 'estudio-prefactibilidad-silicato-sodio',
  title: 'Estudio de Prefactibilidad: Planta de Silicato de Sodio',
  subtitle: 'Producción Conjunta de Silicato de Sodio y Derivados',
  description:
    'Estudio integral de prefactibilidad para la instalación de una planta de manufactura de silicato de sodio y sus principales derivados (sílice precipitada, sílice coloidal y gel de sílice) en Argentina. El proyecto incluyó estudios de mercado nacional e internacional, análisis de disponibilidad de materias primas, selección de tecnologías de producción con criterios de eficiencia energética y compatibilidad ambiental, balance de masa y energía, dimensionamiento de equipos, layout de planta de más de 16000 toneladas anuales de capacidad, tratamiento de efluentes con cero emisiones líquidas, estructura organizacional, análisis de costos de inversión y operación, y evaluación económico-financiera (VAN, TIR, punto de equilibrio). El trabajo fue desarrollado en la Cátedra de Organización y Proyecto Industrial de la Universidad Nacional de Córdoba (UNC).',
  tags: ['Estudio de Factibilidad', 'Ingeniería de Proyectos', 'Procesos Químicos', 'Silicato de Sodio', 'Diseño de Plantas', 'Evaluación Económica', 'Balance de Masa y Energía', 'Tratamiento de Efluentes'],
  type: 'industrial', // Es un estudio de ingeniería industrial
  year: '2007', // Febrero de 2007
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
  highlight: true,
},{
  id: 'pasimetro-alta-precision-helices',
  title: 'Pasímetro de Alta Precisión para Caracterización Aerodinámica',
  subtitle: 'Diseño e Impresión 3D con Estructura de Aluminio',
  description:
    'Desarrollo y construcción de un pasímetro (banco de pruebas de paso de hélice) de alta precisión, destinado a la caracterización aerodinámica de hélices a escala. El dispositivo combina partes impresas en 3D para componentes complejos y una estructura estructural de aluminio para garantizar rigidez y estabilidad dimensional. Permite medir con exactitud el paso geométrico y aerodinámico de hélices de diferentes diámetros y configuraciones, facilitando la validación de diseños experimentales para aplicaciones de aeromodelismo, drones y vehículos aéreos no tripulados. El sistema incluye sensores de ángulo y desplazamiento lineal, interfaz de adquisición de datos y software de procesamiento para curvas de paso por estación radial.',
  tags: ['Pasímetro', 'Hélices', 'Aerodinámica', 'Impresión 3D', 'Mecánica de Precisión', 'Medición', 'Ingeniería Inversa'],
  type: 'prototipo',
  year: '2022',
  image: '/images/projects/pasimetro1.jpg',
    images: [
    '/images/projects/pasimetro1.jpg',
    '/images/projects/pasimetro2.jpg'
  ],
  kpis: [
    { value: '1º', label: 'Medición de Paso' },
    { value: 'Partes impresas 3D', label: 'Fabricación Ágil' },
    { value: 'Estructura Aluminio', label: 'Rigidez Mecánica' }
  ],
  links: [],
  highlight: true,
},
];
