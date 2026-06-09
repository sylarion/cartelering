import { Service } from '../types/service';

export const services: Service[] = [
  {
    slug: 'carteles-luminosos-led',
    name: 'Carteles Luminosos LED',
    shortDescription: 'Potencia la visibilidad de tu negocio las 24 horas con tecnología LED de alta eficiencia y estructuras duraderas.',
    detailedDescription: 'Nuestros carteles luminosos combinan ingeniería estructural y diseño estético para captar la atención de tu público objetivo de día y de noche. Utilizamos módulos LED con protección IP65 (resistentes al agua y polvo) montados sobre estructuras de hierro galvanizado pintadas con pintura anticorrosiva. La cara frontal se realiza en acrílico colado o lona backlight tensada, con rotulación en vinilo de corte de alta performance. Esto garantiza un brillo uniforme, bajo consumo de energía y una excelente vida útil a la intemperie.',
    icon: 'Lightbulb',
    category: 'Luminosos',
    recommendedMaterials: [
      'Módulos LED IP65/IP67 de alta luminosidad',
      'Acrílico colado de 3mm o 4mm de espesor',
      'Lona Backlight de alta resistencia',
      'Estructura de hierro con tratamiento anticorrosivo',
      'Vinilo autoadhesivo traslúcido LG o 3M'
    ],
    recommendedUseCases: [
      'Locales comerciales a la calle',
      'Restaurantes y bares nocturnos',
      'Frentes comerciales de farmacias y clínicas',
      'Marquesinas de cines y teatros'
    ],
    estimatedDeliveryTime: '10-15 días hábiles',
    startingPrice: 450,
    priceRange: 'Alto',
    mainImage: '/img-cartel-luminoso.png',
    galleryImages: [
      '/img-marquesina-led.png',
      '/img-neon-led.png'
    ],
    benefits: [
      'Alta visibilidad nocturna a gran distancia',
      'Bajo consumo eléctrico por tecnología LED modular',
      'Larga durabilidad y resistencia al agua y viento (protección IP65)',
      'Uniformidad lumínica sin sombras'
    ],
    productionProcess: [
      {
        title: 'Relevamiento y Diseño',
        description: 'Tomamos medidas exactas de la fachada y creamos renders realistas con propuestas estéticas ajustadas a tu marca.'
      },
      {
        title: 'Soldadura y Pintura',
        description: 'Construimos la estructura portante en hierro estructural con tratamiento anticorrosivo de alto rendimiento.'
      },
      {
        title: 'Iluminación y Ensamblado',
        description: 'Instalamos el circuito de módulos LED sellados IP65 y fijamos la placa difusora de acrílico o lona tensada.'
      },
      {
        title: 'Rotulado y Acabado',
        description: 'Aplicamos el vinilo de corte de alta performance y realizamos pruebas de encendido de 24 horas antes del despacho.'
      }
    ],
    relatedServices: ['marquesinas-fachada', 'letras-corporeas-premium']
  },
  {
    slug: 'letras-corporeas-premium',
    name: 'Letras Corpóreas Premium',
    shortDescription: 'Añade volumen, elegancia y distinción a tu marca con letras en relieve de diversos acabados y texturas.',
    detailedDescription: 'Las letras corpóreas representan el estándar de oro en branding físico. Fabricamos logotipos y textos con volumen tridimensional utilizando tecnología de corte router CNC y corte láser de fibra óptica. Ofrecemos una amplia variedad de materiales: chapa galvanizada pintada al poliuretano, acero inoxidable pulido o esmerilado, acrílico macizo de alto impacto, MDF para interiores y polifan (poliestireno de alta densidad) con frente rígido. Pueden complementarse con iluminación difusa (efecto backlight) mediante módulos LED cálidos o fríos, proyectando una sombra elegante sobre la pared.',
    icon: 'Type',
    category: 'Corpóreos',
    recommendedMaterials: [
      'Acero inoxidable AISI 304 pulido espejo o esmerilado',
      'Chapa galvanizada decapada de 1.2mm de espesor',
      'Acrílico colado de 5mm a 10mm de espesor',
      'Polifan (poliestireno expandido) de alta densidad (20-30mm)',
      'Iluminación LED interna tipo backlight'
    ],
    recommendedUseCases: [
      'Paredes detrás del mostrador de recepción en oficinas',
      'Frentes de locales en shoppings',
      'Showrooms y locales comerciales de indumentaria',
      'Espacios corporativos y salas de reuniones'
    ],
    estimatedDeliveryTime: '7-12 días hábiles',
    startingPrice: 280,
    priceRange: 'Medio',
    mainImage: '/img-letras-corporeas.png',
    galleryImages: [
      '/img-marquesina-led.png',
      '/img-cartel-luminoso.png'
    ],
    benefits: [
      'Estética elegante y corporativa tridimensional',
      'Variedad de acabados (brillante, mate, esmerilado, cepillado)',
      'Luz difusa (retroiluminada) de gran distinción visual',
      'Excelente vida útil en interiores y exteriores'
    ],
    productionProcess: [
      {
        title: 'Corte Vectorial',
        description: 'Procesamos los vectores mediante corte láser de fibra óptica para metales o router CNC para acrílicos y polifan.'
      },
      {
        title: 'Conformado y Soldadura',
        description: 'Soldamos a mano los laterales (canto) de cada letra para otorgar el relieve 3D deseado.'
      },
      {
        title: 'Pintura y Pulido',
        description: 'Aplicamos pintura poliuretánica automotriz en horno o pulimos el acero para acabados perfectos.'
      },
      {
        title: 'Instalación de LEDs',
        description: 'Pegamos las tiras LED en la cara trasera si requiere efecto backlight o difuso.'
      }
    ],
    relatedServices: ['carteles-luminosos-led', 'neon-led-diseno']
  },
  {
    slug: 'vinilos-vidriera-comercial',
    name: 'Vinilos para Vidrieras y Cristales',
    shortDescription: 'Transforma tus vidrieras en el principal canal de ventas con vinilos de corte, esmerilados y microperforados.',
    detailedDescription: 'Las vidrieras son el primer contacto visual de un cliente con tu tienda. Ofrecemos soluciones integrales de rotulación sobre vidrio: vinilo de corte de alta gama para textos y promociones de temporada, vinilo impreso en alta definición para imágenes impactantes, y vinilo esmerilado con corte personalizado para otorgar privacidad a oficinas y consultorios sin perder el paso de la luz natural. También trabajamos con vinilo microperforado (One Way Vision), que permite ver desde el interior hacia el exterior manteniendo la privacidad e impidiendo la visibilidad desde afuera.',
    icon: 'Sparkles',
    category: 'Vinilos',
    recommendedMaterials: [
      'Vinilo calandrado de corte Oracal 651',
      'Vinilo esmerilado de alta cohesión (LG / 3M)',
      'Vinilo microperforado para exteriores',
      'Vinilo impreso con tintas látex ecológicas con laminado UV'
    ],
    recommendedUseCases: [
      'Campañas promocionales temporales (Liquidaciones, Hot Sale)',
      'Decoración y privacidad en mamparas de oficinas y salas de espera',
      'Identidad visual en accesos comerciales (horarios, redes sociales)',
      'Vidrieras completas de locales de retail y estética'
    ],
    estimatedDeliveryTime: '3-5 días hábiles',
    startingPrice: 90,
    priceRange: 'Económico',
    mainImage: '/img-vinilo-vidriera.png',
    galleryImages: [
      '/img-ploteo-vehicular.png',
      '/img-lona-banner.png'
    ],
    benefits: [
      'Renovación rápida y rentable de la fachada de tu local',
      'Control de luz solar y privacidad en oficinas y consultorios',
      'Colores vivos y gran durabilidad frente al desgaste exterior',
      'Fácil remoción y reemplazo para campañas temporales'
    ],
    productionProcess: [
      {
        title: 'Ajuste de Archivos',
        description: 'Revisamos los diseños vectoriales a escala real para que coincidan con los marcos y divisiones de los vidrios.'
      },
      {
        title: 'Impresión y Plotter de Corte',
        description: 'Imprimimos con tintas látex ecológicas y cortamos con plotters de precisión Graphtec.'
      },
      {
        title: 'Depilado y Posicionado',
        description: 'Removemos el excedente de vinilo y colocamos el papel transfer para facilitar la colocación.'
      },
      {
        title: 'Instalación Limpia',
        description: 'Limpiamos los vidrios con alcohol isopropílico e instalamos en seco o húmedo según el tipo de vinilo.'
      }
    ],
    relatedServices: ['impresion-gran-formato-lonas', 'senaletica-interior-corporativa']
  },
  {
    slug: 'marquesinas-fachada',
    name: 'Marquesinas de Fachada',
    shortDescription: 'Renueva por completo la fachada de tu local con revestimientos modernos y duraderos en composite de aluminio.',
    detailedDescription: 'Una marquesina bien estructurada redefine la arquitectura de tu local comercial. Nos especializamos en el diseño, fabricación y montaje de marquesinas estructurales revestidas en paneles de composite de aluminio (ACM / Alucobond), un material liviano, ultra resistente y con una planicidad perfecta. Integramos calados con acrílico y retroiluminación LED, letras corpóreas, o spots LED empotrados para iluminación puntual de la vereda. La estructura interna se calcula con caño estructural de gran espesor para garantizar seguridad ante vientos fuertes y factores climáticos.',
    icon: 'Layers',
    category: 'Marquesinas',
    recommendedMaterials: [
      'Paneles de Composite de Aluminio (ACM) de 4mm',
      'Caños estructurales de hierro (40x40 / 80x40) de 1.6mm de espesor',
      'Acrílico traslúcido para áreas caladas',
      'Módulos de iluminación LED de alta potencia e inductores blindados'
    ],
    recommendedUseCases: [
      'Frentes comerciales completos de alta gama',
      'Sucursales bancarias y edificios corporativos',
      'Fachadas comerciales sobre avenidas transitadas',
      'Restaurantes y concesionarios de vehículos'
    ],
    estimatedDeliveryTime: '15-25 días hábiles',
    startingPrice: 980,
    priceRange: 'Premium',
    mainImage: '/img-marquesina-led.png',
    galleryImages: [
      '/img-cartel-luminoso.png',
      '/img-letras-corporeas.png'
    ],
    benefits: [
      'Transformación completa de la imagen arquitectónica del local',
      'Estructura rígida de planicidad perfecta y alta resistencia al clima',
      'Integración de iluminación empotrada y calados luminosos',
      'Poco mantenimiento y gran longevidad estética'
    ],
    productionProcess: [
      {
        title: 'Relevamiento Técnico y Planos',
        description: 'Realizamos un escaneo de medidas, determinamos los puntos de anclaje de la fachada y dibujamos los planos de ingeniería.'
      },
      {
        title: 'Fabricación Estructural',
        description: 'Soldamos la estructura de hierro y aplicamos pintura epoxi anticorrosiva de dos componentes.'
      },
      {
        title: 'Ruteado del ACM y Plegado',
        description: 'Cortamos y ruteamos los paneles de ACM en router CNC para plegarlos sobre el bastidor.'
      },
      {
        title: 'Instalación y Cableado in situ',
        description: 'Montamos la estructura portante, fijamos los paneles de ACM y realizamos la conexión a la red eléctrica.'
      }
    ],
    relatedServices: ['carteles-luminosos-led', 'totems-publicitarios-exteriores']
  },
  {
    slug: 'senaletica-interior-corporativa',
    name: 'Señalética Interior Corporativa',
    shortDescription: 'Organiza la circulación de tu edificio, clínica u oficina con sistemas de señalización claros, elegantes y normalizados.',
    detailedDescription: 'La señalética interior no solo guía a las personas, sino que refuerza la cultura de marca y el orden corporativo. Diseñamos sistemas de señalización modulares o fijos que incluyen: directorios de recepción, placas identificadoras de oficinas en acrílico o aluminio anodizado, señalización de seguridad bajo normas IRAM (salidas de emergencia, extintores), números de piso e indicativos de sanitarios. El montaje se realiza mediante distanciadores de acero inoxidable (spiders) o adhesivos de alta resistencia para garantizar un acabado limpio y minimalista.',
    icon: 'Minimize2',
    category: 'Señalética',
    recommendedMaterials: [
      'Acrílico cristal de 3mm a 6mm con bordes pulidos a fuego',
      'Aluminio anodizado o cepillado',
      'Distanciadores metálicos cromados o de acero inoxidable',
      'Vinilo impreso de alta resolución con sustrato rígido de PVC espumado'
    ],
    recommendedUseCases: [
      'Clínicas, centros médicos y hospitales',
      'Edificios corporativos y oficinas gubernamentales',
      'Hoteles, universidades e instituciones educativas',
      'Fábricas y plantas industriales (señalética de seguridad)'
    ],
    estimatedDeliveryTime: '5-10 días hábiles',
    startingPrice: 120,
    priceRange: 'Medio',
    mainImage: '/img-senaletica.png',
    galleryImages: [
      '/img-letras-corporeas.png',
      '/img-vinilo-vidriera.png'
    ],
    benefits: [
      'Facilita la orientación y circulación de clientes y empleados',
      'Aspecto institucional sumamente profesional y estético',
      'Diseños modulares fáciles de actualizar en el futuro',
      'Cumplimiento de normativas de evacuación y seguridad civil'
    ],
    productionProcess: [
      {
        title: 'Relevamiento y Mapa de Flujos',
        description: 'Estudiamos el plano del lugar para definir la ubicación estratégica de cada cartel indicador.'
      },
      {
        title: 'Corte Láser de Placas',
        description: 'Cortamos el acrílico o el aluminio con láser para lograr bordes limpios e impecables.'
      },
      {
        title: 'Aplicación Gráfica',
        description: 'Rotulamos los textos por detrás del acrílico para proteger la gráfica del roce y desgaste.'
      },
      {
        title: 'Colocación en Obra',
        description: 'Fijamos las placas a la pared usando distanciadores nivelados por láser o adhesivos especiales.'
      }
    ],
    relatedServices: ['letras-corporeas-premium', 'vinilos-vidriera-comercial']
  },
  {
    slug: 'ploteo-vehicular-comercial',
    name: 'Ploteo Vehicular Comercial',
    shortDescription: 'Convierte tu flota corporativa en carteles móviles y promociona tu marca mientras recorres la ciudad.',
    detailedDescription: 'El ploteo vehicular es una de las inversiones publicitarias de mayor retorno, generando miles de impactos visuales diarios. Realizamos ploteos vehiculares parciales o totales sobre automóviles, camionetas utilitarias, camiones y furgones. Utilizamos vinilos fundidos (cast) especiales para moldearse en las curvas del vehículo (remaches, guardabarros), laminados transparentes con protección UV para resguardar la impresión de la fricción, los rayos solares y los lavados frecuentes. Trabajamos con marcas líderes como 3M, Avery Dennison y LG Hausys.',
    icon: 'Truck',
    category: 'Vehículos',
    recommendedMaterials: [
      'Vinilo vehicular fundido (Cast) de alta performance 3M IJ180 o similar',
      'Laminado protector fundido UV brillante o mate',
      'Vinilo reflectivo de seguridad para vehículos pesados',
      'Vinilo microperforado homologado para lunetas'
    ],
    recommendedUseCases: [
      'Furgones de reparto de logística y distribución',
      'Vehículos de soporte técnico y servicio a domicilio',
      'Flotas corporativas de ejecutivos y preventistas',
      'Vehículos de transporte público y utilitarios comerciales'
    ],
    estimatedDeliveryTime: '5-8 días hábiles',
    startingPrice: 290,
    priceRange: 'Medio',
    mainImage: '/img-ploteo-vehicular.png',
    galleryImages: [
      '/img-vinilo-vidriera.png',
      '/img-lona-banner.png'
    ],
    benefits: [
      'Publicidad móvil de alto impacto sin tasas mensuales',
      'Protección de la pintura original del vehículo frente a rayones leves',
      'Unificación estética de la flota institucional de la empresa',
      'Excelente resistencia al sol y a lavados con hidrolavadora'
    ],
    productionProcess: [
      {
        title: 'Plantilla y Adaptación',
        description: 'Adaptamos el diseño gráfico a la plantilla exacta en 3D de la marca y modelo de tu vehículo.'
      },
      {
        title: 'Impresión y Laminación',
        description: 'Imprimimos sobre vinilo fundido y aplicamos el laminado UV en caliente para mayor flexibilidad y durabilidad.'
      },
      {
        title: 'Limpieza y Preparación',
        description: 'Lavamos el vehículo exhaustivamente para eliminar ceras, grasas y hollín en zonas críticas.'
      },
      {
        title: 'Instalación Térmica',
        description: 'Aplicamos el vinilo con espátulas especiales de fieltro y fijamos con pistola de calor a 90°C para la memoria del material.'
      }
    ],
    relatedServices: ['impresion-gran-formato-lonas', 'vinilos-vidriera-comercial']
  },
  {
    slug: 'totems-publicitarios-exteriores',
    name: 'Tótems Publicitarios Exteriores',
    shortDescription: 'Aumenta el impacto y la visibilidad de tu marca a media y larga distancia con estructuras verticales autoportantes.',
    detailedDescription: 'Los tótems o monolitos publicitarios son estructuras verticales que se fijan al suelo mediante bases de hormigón reforzado. Diseñados para captar la atención de conductores y peatones en entornos urbanos y rutas, se construyen con columnas de acero y chapa de gran resistencia estructural. Pueden ser iluminados por reflectores LED externos o retroiluminados desde el interior, con áreas de cartelería intercambiable, pantallas LED integradas, o letras corpóreas. Son ideales para jerarquizar el ingreso a predios industriales, centros comerciales o estaciones de servicio.',
    icon: 'Construction',
    category: 'Señalética',
    recommendedMaterials: [
      'Estructuras de perfilería doble T y UPN con base de hormigón armado',
      'Chapa de acero galvanizado calibre 14 o 16 revestido en ACM',
      'Luz LED modular inteligente',
      'Placas de acrílico colado o lona backlight en áreas difusoras'
    ],
    recommendedUseCases: [
      'Ingresos a parques industriales y fábricas',
      'Estaciones de servicio y centros logísticos',
      'Patios de comidas y centros de compras exteriores',
      'Concesionarias de autos y grandes superficies comerciales'
    ],
    estimatedDeliveryTime: '20-30 días hábiles',
    startingPrice: 1800,
    priceRange: 'Premium',
    mainImage: '/img-totem.png',
    galleryImages: [
      '/img-marquesina-led.png',
      '/img-cartel-luminoso.png'
    ],
    benefits: [
      'Visibilidad garantizada a media y larga distancia en vías rápidas',
      'Presencia institucional de gran prestigio e imponencia corporativa',
      'Gran resistencia a condiciones climáticas extremas y vientos fuertes',
      'Opción de incorporar pantallas dinámicas o directorios modulares'
    ],
    productionProcess: [
      {
        title: 'Cálculo Civil y Estructural',
        description: 'Calculamos el tamaño de la zapata de hormigón según el peso de la estructura y la fuerza de viento local.'
      },
      {
        title: 'Fabricación del Chasis',
        description: 'Armamos la columna interna con perfiles de acero pesado y soldadura de alta resistencia homologada.'
      },
      {
        title: 'Revestimiento y Gráfica',
        description: 'Forramos el chasis con composite de aluminio y montamos las letras corpóreas e iluminación interna.'
      },
      {
        title: 'Obra Civil y Montaje',
        description: 'Cavamos la base, fundimos el hormigón con pernos de anclaje y montamos el tótem mediante grúas de gran porte.'
      }
    ],
    relatedServices: ['marquesinas-fachada', 'carteles-luminosos-led']
  },
  {
    slug: 'impresion-gran-formato-lonas',
    name: 'Impresión de Gran Formato y Lonas',
    shortDescription: 'Soluciones de impresión de alta definición en materiales flexibles para eventos, promociones y fachadas.',
    detailedDescription: 'Ideal para comunicación de gran impacto visual e instalaciones temporales o semipermanentes. Contamos con plotters de impresión de última tecnología que imprimen en anchos de hasta 3.20 metros sin costuras utilizando tintas eco-solventes o látex de alta durabilidad y sin olores. Imprimimos sobre lona frontlight (para carteles iluminados por delante), lona backlight (traslúcida para cajas de luz), lona mesh (microperforada para soportar fuertes ráfagas de viento en fachadas y andamios), papel fotográfico, y telas canvas para cuadros decorativos.',
    icon: 'Printer',
    category: 'Banners',
    recommendedMaterials: [
      'Lona Frontlight brillante o mate de 13oz de alta tenacidad',
      'Lona Backlight de 15oz traslúcida',
      'Lona Mesh microperforada de 9oz con refuerzo perimetral',
      'Tintas Eco-solventes o Látex con durabilidad exterior de 2+ años'
    ],
    recommendedUseCases: [
      'Banners promocionales con estructuras portabanner (Roll-ups, Araña)',
      'Lonas tensadas en fachadas de edificios en obra o refacción',
      'Fondos de prensa y stands para eventos corporativos y ferias',
      'Lonas para cartelería rutera o marquesinas tradicionales'
    ],
    estimatedDeliveryTime: '2-4 días hábiles',
    startingPrice: 60,
    priceRange: 'Económico',
    mainImage: '/img-lona-banner.png',
    galleryImages: [
      '/img-vinilo-vidriera.png',
      '/img-ploteo-vehicular.png'
    ],
    benefits: [
      'Costos muy competitivos para publicidad de gran formato',
      'Excelente calidad de definición fotográfica e impacto visual inmediato',
      'Alta flexibilidad de uso (estructuras fijas, móviles, colgadas)',
      'Materiales resistentes al sol con refuerzo perimetral y ojales'
    ],
    productionProcess: [
      {
        title: 'Recepción y Control de Calidad',
        description: 'Revisamos que la resolución de la imagen (DPI) sea apta para el tamaño final de impresión.'
      },
      {
        title: 'Impresión Digital',
        description: 'Corremos el archivo en los plotters látex de alta velocidad con calibración de color precisa.'
      },
      {
        title: 'Acabados y Confección',
        description: 'Realizamos las uniones termoselladas, bolsillos porta-caño y colocación de ojales de bronce.'
      },
      {
        title: 'Control y Embalaje',
        description: 'Limpiamos los restos de tinta, enrollamos sobre tubos de cartón rígido para evitar pliegues y despachamos.'
      }
    ],
    relatedServices: ['vinilos-vidriera-comercial', 'ploteo-vehicular-comercial']
  },
  {
    slug: 'neon-led-diseno',
    name: 'Neón LED de Diseño',
    shortDescription: 'Crea ambientes retro y modernos con luces de neón flexibles de bajo consumo y alta seguridad.',
    detailedDescription: 'El Neón LED ha revolucionado el diseño de interiores comerciales y gastronómicos. Reemplaza el antiguo neón de gas de vidrio por mangueras de silicona flexible con tiras de LED de alta densidad en su interior. Esto elimina el riesgo de roturas de vidrio, la toxicidad del gas y el alto consumo eléctrico. Los carteles de Neón LED se montan sobre bases de acrílico cristal de gran espesor cortadas con láser, logrando un acabado elegante e impecable. Ofrecen encendido inmediato, opción de regular intensidad (dimmer) y una amplia gama de colores vibrantes.',
    icon: 'Tv',
    category: 'Neon',
    recommendedMaterials: [
      'Manguera de Neón LED flexible de silicona de 6mm u 8mm',
      'Base de acrílico cristal transparente de 4mm o 5mm de espesor',
      'Fuentes de alimentación de 12V con conector rápido',
      'Controladores con dimmer remoto o Bluetooth'
    ],
    recommendedUseCases: [
      'Zonas de fotos ("Instagrammable spots") en bares y salones de belleza',
      'Decoración interior en locales de indumentaria urbana y showrooms',
      'Señalización llamativa sobre paredes oscuras o de ladrillo visto',
      'Eventos, casamientos y ambientaciones temporarias'
    ],
    estimatedDeliveryTime: '5-9 días hábiles',
    startingPrice: 150,
    priceRange: 'Medio',
    mainImage: '/img-neon-led.png',
    galleryImages: [
      '/img-cartel-luminoso.png',
      '/img-letras-corporeas.png'
    ],
    benefits: [
      'Efecto vintage y moderno sumamente atractivo y fotogénico',
      'Bajísimo consumo eléctrico y nula emisión de calor',
      'Totalmente seguro al tacto (funciona a 12V) y libre de roturas de vidrio',
      'Fácil de colgar y trasladar para eventos temporales'
    ],
    productionProcess: [
      {
        title: 'Trazado Vectorial del Neón',
        description: 'Adaptamos la tipografía o logotipo simplificándolo en curvas continuas viables para el doblado.'
      },
      {
        title: 'Ruteado CNC de la Base',
        description: 'Fresamos la base de acrílico realizando canales de guía para el calce perfecto de la manguera.'
      },
      {
        title: 'Soldadura y Pegado',
        description: 'Cortamos y soldamos los cables de unión y pegamos el Neón LED de silicona sobre los canales.'
      },
      {
        title: 'Prueba de Rendimiento',
        description: 'Dejamos encendido el cartel por un ciclo de 12 horas consecutivas para asegurar el perfecto flujo eléctrico.'
      }
    ],
    relatedServices: ['letras-corporeas-premium', 'carteles-luminosos-led']
  }
];
