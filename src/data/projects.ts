import { Project } from '../types/project';

export const projects: Project[] = [
  {
    slug: 'cafe-origen-urbano',
    name: 'Café Origen Urbano',
    industry: 'Gastronomía',
    productType: 'Marquesina Exterior y Cartel Luminoso',
    mainMaterial: 'Chapa galvanizada y Acrílico',
    location: 'Exterior',
    impactLevel: 'Alto',
    budgetLevel: 'Alto',
    mainImage: '/img-marquesina-led.png',
    galleryImages: [
      '/img-cartel-luminoso.png',
      '/img-letras-corporeas.png'
    ],
    shortDescription: 'Marquesina moderna con letras caladas retroiluminadas y cartel bandera para esquina gastronómica.',
    detailedDescription: 'Desarrollo e instalación de marquesina frontal en chapa galvanizada plegada con acabado de pintura poliuretánica negra mate. Incorpora el logotipo calado con acrílico blanco traslúcido y retroiluminación LED fría mediante módulos IP65 de 12V. Además, se instaló un cartel bandera circular de doble faz con soportes de hierro forjado, que ayuda a la identificación del local desde ambas esquinas de la calle comercial.',
    completedYear: 2025,
    estimatedBudget: '$2,400 - $3,200 USD',
    materials: ['Chapa galvanizada', 'Acrílico colado traslúcido 3mm', 'Módulos LED IP65', 'Hierro estructural', 'Pintura poliuretánica mate'],
    servicesUsed: ['Carteles Luminosos LED', 'Marquesinas de Fachada'],
    results: 'Aumento del 40% en visitas nocturnas y excelente posicionamiento visual en la esquina comercial.',
    testimonial: {
      clientName: 'Julieta Rinaldi',
      company: 'Café Origen Urbano',
      comment: 'La marquesina y el cartel luminoso cambiaron totalmente la esquina. Pasamos de ser un café desapercibido a que la gente nos identifique a dos cuadras.',
      rating: 5
    }
  },
  {
    slug: 'coworking-nexus-recepcion',
    name: 'Espacio de Coworking Nexus',
    industry: 'Oficinas',
    productType: 'Letras Corpóreas Retroiluminadas',
    mainMaterial: 'Acero inoxidable cepillado',
    location: 'Interior',
    impactLevel: 'Premium',
    budgetLevel: 'Premium',
    mainImage: '/img-letras-corporeas.png',
    galleryImages: [
      '/img-marquesina-led.png',
      '/img-senaletica.png'
    ],
    shortDescription: 'Letras en relieve de acero inoxidable cepillado con efecto de iluminación backlight en recepción.',
    detailedDescription: 'Proyecto de branding corporativo para el área de recepción de un moderno espacio de coworking. Fabricación de letras corpóreas del imagotipo principal en acero inoxidable AISI 304 cepillado, con soldadura oculta de microalambre. Cada letra posee un espaciador de 15mm que proyecta una iluminación backlight LED cálida (3000K) sobre la pared de concreto visto, logrando un contraste elegante, sofisticado y de alto impacto visual.',
    completedYear: 2025,
    estimatedBudget: '$3,500 - $4,800 USD',
    materials: ['Acero inoxidable AISI 304', 'Espaciadores metálicos', 'Tira LED de alta densidad 3000K', 'Fuentes de alimentación 12V'],
    servicesUsed: ['Letras Corpóreas Premium', 'Señalética Interior Corporativa'],
    results: 'El imagotipo se convirtió en el elemento central de la recepción, generando una imagen de marca premium que destaca en fotos corporativas.',
    testimonial: {
      clientName: 'Martín Gómez',
      company: 'Nexus Coworking',
      comment: 'El trabajo que hicieron en la recepción con las letras de acero es espectacular. Cada persona que entra se detiene a mirarlo y nos elogia el diseño.',
      rating: 5
    }
  },
  {
    slug: 'bar-neon-nights',
    name: 'Cocktail Bar Neon Nights',
    industry: 'Gastronomía',
    productType: 'Carteles de Neón LED',
    mainMaterial: 'Neón LED flexible y Acrílico',
    location: 'Interior',
    impactLevel: 'Alto',
    budgetLevel: 'Medio',
    mainImage: '/img-neon-led.png',
    galleryImages: [
      '/img-cartel-luminoso.png',
      '/img-letras-corporeas.png'
    ],
    shortDescription: 'Carteles interactivos de Neón LED flexible sobre bases de acrílico para zona de fotos.',
    detailedDescription: 'Creación de atmósfera nocturna mediante carteles interactivos de Neón LED flexible. El logotipo principal de 1.80 metros se fabricó con neón de silicona de 8mm color rosa y cian sobre una placa soporte de acrílico cristal de 5mm de espesor, cortada con router láser siguiendo la silueta de las letras. La instalación incluye un dimmer digital por radiofrecuencia para regular la intensidad según el horario y el flujo de clientes.',
    completedYear: 2024,
    estimatedBudget: '$800 - $1,300 USD',
    materials: ['Neón LED flexible de silicona', 'Acrílico cristal de 5mm', 'Controlador con dimmer RF', 'Fuente de alimentación 12V 10A'],
    servicesUsed: ['Neón LED de Diseño'],
    results: 'Gran repercusión en redes sociales y generación de contenido orgánico por parte de los clientes en Instagram.',
    testimonial: {
      clientName: 'Mariano Ferrero',
      company: 'Neon Nights Bar',
      comment: 'El cartel de Neón LED se convirtió en el punto de fotos preferido del bar. Todos los fines de semana la gente se saca fotos ahí y nos etiqueta.',
      rating: 5
    }
  },
  {
    slug: 'innova-group-senaletica',
    name: 'Sede Corporativa Innova Group',
    industry: 'Oficinas',
    productType: 'Señalética Interior y Directorios',
    mainMaterial: 'Aluminio anodizado y Acrílico',
    location: 'Interior',
    impactLevel: 'Medio',
    budgetLevel: 'Medio',
    mainImage: '/img-senaletica.png',
    galleryImages: [
      '/img-letras-corporeas.png',
      '/img-vinilo-vidriera.png'
    ],
    shortDescription: 'Sistema integral de señalización, directorios de recepción y vinilos esmerilados para salas de reuniones.',
    detailedDescription: 'Planificación y ejecución de señalética integral para las tres plantas de oficinas centrales de la firma. El proyecto incluyó un tótem directorio principal en la planta baja realizado en chapa de aluminio cepillado, placas de acrílico cristal con distanciadores de acero inoxidable para los despachos ejecutivos, numeración de pisos en relieve, y rotulación de salas de reuniones con vinilos esmerilados calados con diseños geométricos.',
    completedYear: 2025,
    estimatedBudget: '$1,500 - $2,200 USD',
    materials: ['Aluminio anodizado', 'Acrílico cristal de 4mm', 'Vinilo esmerilado LG', 'Distanciadores cromados', 'PVC espumado 3mm'],
    servicesUsed: ['Señalética Interior Corporativa', 'Vinilos para Vidrieras y Cristales'],
    results: 'Mejora del 95% en la orientación de visitas externas y unificación visual en todas las salas de reuniones.',
    testimonial: {
      clientName: 'Diana Torres',
      company: 'Innova Group',
      comment: 'El sistema de señalética resolvió nuestro problema de tránsito interno y le dio un toque corporativo formal e impecable a las oficinas.',
      rating: 5
    }
  },
  {
    slug: 'boutique-aura-fachada',
    name: 'Boutique de Lujo Aura',
    industry: 'Moda',
    productType: 'Frente Comercial y Corpóreos',
    mainMaterial: 'Alucobond y Latón pulido',
    location: 'Exterior',
    impactLevel: 'Premium',
    budgetLevel: 'Premium',
    mainImage: '/img-marquesina-led.png',
    galleryImages: [
      '/img-letras-corporeas.png',
      '/img-cartel-luminoso.png'
    ],
    shortDescription: 'Revestimiento de fachada en aluminio compuesto negro mate y letras corpóreas de latón pulido espejo con iluminación perimetral.',
    detailedDescription: 'Revestimiento completo de la fachada exterior de la boutique de indumentaria fina Aura empleando paneles composite de aluminio (ACM) tono negro mate texturado. Sobre este fondo se fijaron letras corpóreas del logotipo con frentes de latón pulido espejo y cantos soldados a mano. La iluminación perimetral se resuelve con tira LED oculta en el dintel de la marquesina, logrando una estética sumamente refinada y premium.',
    completedYear: 2025,
    estimatedBudget: '$5,000 - $7,000 USD',
    materials: ['Paneles composite de aluminio (ACM)', 'Chapa de latón pulido', 'Tira LED IP67 blanca cálida', 'Estructura tubular de acero', 'Fijaciones invisibles'],
    servicesUsed: ['Marquesinas de Fachada', 'Letras Corpóreas Premium'],
    results: 'Incremento del 35% en tráfico peatonal calificado que ingresa por el atractivo visual de la fachada.',
    testimonial: {
      clientName: 'Sofía Valenzuela',
      company: 'Boutique Aura',
      comment: 'Teníamos miedo de hacer una inversión tan grande en la fachada, pero el resultado con las letras de latón dorado superó nuestras expectativas. Aumentó notablemente el ingreso de clientes.',
      rating: 5
    }
  },
  {
    slug: 'urban-chic-vidrieras',
    name: 'Zapatería Urban Chic',
    industry: 'Retail',
    productType: 'Vinilos de Corte e Impresos',
    mainMaterial: 'Vinilo Oracal y Película esmerilada',
    location: 'Exterior',
    impactLevel: 'Medio',
    budgetLevel: 'Económico',
    mainImage: '/img-vinilo-vidriera.png',
    galleryImages: [
      '/img-lona-banner.png',
      '/img-ploteo-vehicular.png'
    ],
    shortDescription: 'Intervención gráfica de temporada invernal en vidrieras con combinación de vinilos impresos y de corte.',
    detailedDescription: 'Intervención de temporada otoño-invierno sobre los ventanales de vidrio de la sucursal de calzados. Se aplicó una composición artística combinando vinilo impreso translúcido de gran formato con cortes geométricos y vinilos de corte Oracal 651 en colores mate para anunciar los nuevos lanzamientos. Se agregaron logotipos en vinilo de corte blanco sobre los vidrios laterales para reforzar la presencia de marca.',
    completedYear: 2024,
    estimatedBudget: '$350 - $600 USD',
    materials: ['Vinilo Oracal 651 de corte', 'Vinilo impreso base solvente', 'Laminado UV mate', 'Película esmerilada decorativa'],
    servicesUsed: ['Vinilos para Vidrieras y Cristales'],
    results: 'Gran visibilidad de la campaña de rebajas y alta efectividad en la conversión de transeúntes.',
    testimonial: {
      clientName: 'Patricia Sosa',
      company: 'Urban Chic Calzados',
      comment: 'Los vinilos duraron toda la temporada intactos sin levantarse en las esquinas. Excelente definición de color y calidad de colocación.',
      rating: 5
    }
  },
  {
    slug: 'sabores-de-campo-retroiluminado',
    name: 'Bistró Sabores de Campo',
    industry: 'Gastronomía',
    productType: 'Letras Corpóreas Backlight',
    mainMaterial: 'Madera tratada y Acero corten',
    location: 'Exterior',
    impactLevel: 'Alto',
    budgetLevel: 'Alto',
    mainImage: '/img-cartel-luminoso.png',
    galleryImages: [
      '/img-marquesina-led.png',
      '/img-letras-corporeas.png'
    ],
    shortDescription: 'Letras corpóreas de chapa con óxido controlado tipo acero corten e iluminación LED extra cálida en halo trasero.',
    detailedDescription: 'Un cartel corporativo exterior que se fusiona perfectamente con el diseño de ladrillo visto y vigas rústicas del bistró. Se fabricaron letras corpóreas de chapa decapada oxidada artificialmente con ácido y selladas con laca poliuretánica (efecto acero corten). Estas se instalaron separadas de la pared mediante espárragos metálicos y se iluminaron con módulos LED de tonalidad extra cálida (2700K) para generar un halo de luz muy acogedor.',
    completedYear: 2024,
    estimatedBudget: '$1,800 - $2,500 USD',
    materials: ['Chapa de hierro decapada', 'Líquido oxidante', 'Laca poliuretánica mate exterior', 'Módulos LED 2700K IP67', 'Espárragos roscados'],
    servicesUsed: ['Letras Corpóreas Premium', 'Carteles Luminosos LED'],
    results: 'Perfecta integración estética con la decoración del restaurante y gran elegancia acogedora por las noches.',
    testimonial: {
      clientName: 'Fernando Vaca',
      company: 'Bistró Sabores de Campo',
      comment: 'El efecto oxidado y la luz cálida posterior le dan un carácter único a nuestra fachada. Altamente conformes con la terminación artesanal.',
      rating: 5
    }
  },
  {
    slug: 'express-cargo-ploteo',
    name: 'Logística Express Cargo',
    industry: 'Logística',
    productType: 'Ploteo Vehicular Comercial',
    mainMaterial: 'Vinilo Fundido Cast Vehicular',
    location: 'Exterior',
    impactLevel: 'Medio',
    budgetLevel: 'Medio',
    mainImage: '/img-ploteo-vehicular.png',
    galleryImages: [
      '/img-vinilo-vidriera.png',
      '/img-lona-banner.png'
    ],
    shortDescription: 'Ploteo corporativo de flota de vehículos de reparto utilizando vinilo fundido laminado de alta duración.',
    detailedDescription: 'Ploteo corporativo de una flota de 12 furgones utilitarios. Se utilizó vinilo fundido cast Avery Dennison de alta performance con adhesivo Easy Apply (antiburbujas), garantizando una colocación perfecta en las curvaturas más complejas del vehículo. La impresión digital se realizó con tintas látex de alta durabilidad y se le aplicó un laminado protector brillante UV para resistir lavados con hidrolavadora e inclemencias climáticas diarias.',
    completedYear: 2023,
    estimatedBudget: '$1,200 - $1,800 USD',
    materials: ['Vinilo Cast Avery MPI 1105', 'Laminado DOL 1360 brillante', 'Vinilo microperforado de luneta', 'Tintas Látex ecológicas'],
    servicesUsed: ['Ploteo Vehicular Comercial'],
    results: 'Posicionamiento de marca móvil continuo y uniformidad profesional en toda la flota de distribución.',
    testimonial: {
      clientName: 'Claudio Peralta',
      company: 'Express Cargo',
      comment: 'Ploteamos 12 camionetas de nuestra flota y el trabajo quedó excelente. El vinilo es sumamente resistente al lavado diario y las terminaciones en curvas están perfectas.',
      rating: 5
    }
  },
  {
    slug: 'dental-care-placas',
    name: 'Consultorios Dental Care',
    industry: 'Salud',
    productType: 'Placas de Acrílico y Directorios',
    mainMaterial: 'Acrílico cristal y Aluminio',
    location: 'Interior',
    impactLevel: 'Bajo',
    budgetLevel: 'Económico',
    mainImage: '/img-senaletica.png',
    galleryImages: [
      '/img-letras-corporeas.png',
      '/img-vinilo-vidriera.png'
    ],
    shortDescription: 'Placas de acrílico cristal pulido con logos rotulados por el reverso y fijación mediante distanciadores de acero.',
    detailedDescription: 'Suministro e instalación de placas identificadoras en la recepción y puertas de consultorios de una clínica odontológica. Se emplearon placas de acrílico cristal importado de 6mm con cantos pulidos a fuego por CNC láser. Los logotipos y textos se rotularon en vinilo vehicular negro y gris por el reverso de la placa para otorgar un efecto de profundidad de espejo. El montaje se realizó con distanciadores cromados de 19x25mm.',
    completedYear: 2024,
    estimatedBudget: '$400 - $650 USD',
    materials: ['Acrílico cristal 6mm', 'Vinilo de corte Oracal', 'Distanciadores de acero cromado', 'Tornillos y tacos Fischer'],
    servicesUsed: ['Señalética Interior Corporativa'],
    results: 'Excelente apariencia higiénica y profesional en consultorios, mejorando la experiencia de orientación del paciente.',
    testimonial: {
      clientName: 'Dr. Alejandro Costas',
      company: 'Clínica Dental Care',
      comment: 'El sistema de placas de acrílico para nuestros consultorios quedó sumamente profesional y limpio. Ayudó mucho a ordenar el flujo de pacientes.',
      rating: 5
    }
  },
  {
    slug: 'el-grano-dorado-cafe',
    name: 'Café Boutique El Grano Dorado',
    industry: 'Gastronomía',
    productType: 'Marquesina y Cartel Exterior',
    mainMaterial: 'Madera de Kiri y Hierro pintado',
    location: 'Exterior',
    impactLevel: 'Alto',
    budgetLevel: 'Medio',
    mainImage: '/img-cartel-luminoso.png',
    galleryImages: [
      '/img-marquesina-led.png',
      '/img-neon-led.png'
    ],
    shortDescription: 'Cartel rústico-moderno en madera de Kiri protegida y letras en acrílico con reflectores LED.',
    detailedDescription: 'Desarrollo de fachada rústica-moderna para una cafetería de especialidad. Incluye una estructura principal suspendida de hierro negro mate y un cartel de madera maciza de Kiri protegida contra la intemperie con impregnantes de primera marca. Las letras de la marca fueron cortadas en acrílico blanco brillante de 5mm de espesor y pegadas con resina epoxi de alta resistencia. Cuenta con dos reflectores LED de luz cálida tipo luz de día focalizados.',
    completedYear: 2025,
    estimatedBudget: '$1,100 - $1,600 USD',
    materials: ['Madera de Kiri maciza', 'Esmalte poliuretánico negro', 'Acrílico blanco brillante 5mm', 'Reflectores LED cálidos 20W IP65', 'Resina epoxi industrial'],
    servicesUsed: ['Letras Corpóreas Premium', 'Marquesinas de Fachada'],
    results: 'Logró una identidad visual única y natural, en sintonía con la propuesta de café orgánico y de especialidad.',
    testimonial: {
      clientName: 'Gonzalo Ruiz',
      company: 'El Grano Dorado',
      comment: 'La combinación de madera y letras de acrílico resalta muchísimo de día. Y los focos de noche le dan una calidez espectacular.',
      rating: 5
    }
  },
  {
    slug: 'zenith-tech-corporativo',
    name: 'Tecnología Zenith Tech',
    industry: 'Oficinas',
    productType: 'Letras Corpóreas de Polifan',
    mainMaterial: 'Polifan de alta densidad',
    location: 'Interior',
    impactLevel: 'Alto',
    budgetLevel: 'Económico',
    mainImage: '/img-letras-corporeas.png',
    galleryImages: [
      '/img-senaletica.png',
      '/img-marquesina-led.png'
    ],
    shortDescription: 'Letras de polifan pintadas al poliuretano con frente rígido de PVC en pared interna corporativa.',
    detailedDescription: 'Solución corporativa de bajo costo pero alto impacto visual para las nuevas oficinas de Zenith Tech. Se instalaron letras corpóreas del logotipo fabricadas en polifan (poliestireno expandido) de alta densidad (30mm de espesor) con frente rígido de PVC espumado de 2mm para un acabado perfectamente liso. Todo el conjunto fue pintado al poliuretano respetando los colores corporativos exactos de la marca y se instaló con cinta doble faz 3M VHB de alto agarre.',
    completedYear: 2025,
    estimatedBudget: '$250 - $450 USD',
    materials: ['Polifan de alta densidad 30mm', 'PVC espumado 2mm', 'Pintura poliuretánica color corporativo', 'Cinta doble faz 3M VHB'],
    servicesUsed: ['Letras Corpóreas Premium'],
    results: 'Se logró un isotipo volumétrico de alta fidelidad y terminación lisa a una fracción del costo de otros materiales.',
    testimonial: {
      clientName: 'Esteban Ortiz',
      company: 'Zenith Tech',
      comment: 'Buscábamos algo económico para iniciar, pero la terminación de las letras con frente rígido de PVC parece metal pintado. Superó las expectativas.',
      rating: 5
    }
  },
  {
    slug: 'showroom-l-avenue',
    name: 'Showroom de Moda L\'Avenue',
    industry: 'Moda',
    productType: 'Letras Corpóreas LED y Vinilos',
    mainMaterial: 'Acero inoxidable y Neón LED',
    location: 'Interior',
    impactLevel: 'Premium',
    budgetLevel: 'Alto',
    mainImage: '/img-neon-led.png',
    galleryImages: [
      '/img-letras-corporeas.png',
      '/img-cartel-luminoso.png'
    ],
    shortDescription: 'Letras de acero inoxidable retroiluminadas y detalles de neón decorativos para showroom exclusivo de alta costura.',
    detailedDescription: 'Desarrollo de branding interior para el showroom insignia de L\'Avenue. El proyecto constó de un isotipo principal en acero inoxidable pulido espejo retroiluminado con LEDs de color blanco neutro (4000K) en el sector de caja, complementado por un cartel de Neón LED decorativo rosa con la frase insignia de la marca ("Be Unique") para la zona de probadores y selfies de clientes.',
    completedYear: 2025,
    estimatedBudget: '$2,200 - $3,000 USD',
    materials: ['Acero inoxidable pulido espejo', 'Neón LED de silicona 6mm', 'Acrílico cristal de soporte 4mm', 'Tiras LED 4000K IP20', 'Fuentes de alimentación ultra delgadas'],
    servicesUsed: ['Letras Corpóreas Premium', 'Neón LED de Diseño', 'Vinilos para Vidrieras y Cristales'],
    results: 'Se transformó el showroom en una experiencia inmersiva para los compradores, aumentando el tiempo de permanencia un 25%.',
    testimonial: {
      clientName: 'Carla Benítez',
      company: 'L\'Avenue Moda',
      comment: 'La cartelería interior terminó de unificar el concepto elegante de la tienda. El sector de selfies con el neón es un éxito total.',
      rating: 5
    }
  }
];
