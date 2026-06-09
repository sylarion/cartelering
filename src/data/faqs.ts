export interface FAQ {
  question: string;
  answer: string;
  category: 'Proceso' | 'Técnico' | 'Precios y Pago' | 'Instalación y Envíos';
}

export const faqs: FAQ[] = [
  {
    question: '¿Cómo es el proceso de diseño y relevamiento de medidas?',
    answer: 'Para proyectos de mediana y gran envergadura (como marquesinas o carteles de fachada), enviamos a nuestro equipo técnico a realizar un relevamiento de medidas in situ sin cargo (dentro de nuestra zona de cobertura). Analizamos la pared o estructura de soporte, la toma de corriente y el ángulo de visión de la vereda. Luego, te presentamos un render fotográfico para que veas exactamente cómo lucirá tu fachada antes de comenzar la producción.',
    category: 'Proceso'
  },
  {
    question: '¿Qué materiales me conviene elegir para un cartel de exterior duradero?',
    answer: 'Para exteriores, recomendamos materiales que no sufran corrosión ni decoloración por el sol. La opción premium y más moderna es el Composite de Aluminio (ACM) para el revestimiento de fondo, combinado con letras de chapa galvanizada pintada al poliuretano o acero inoxidable AISI 304. Para la iluminación, empleamos exclusivamente módulos LED con encapsulado estanco IP65 o IP67, lo que previene cortocircuitos por humedad y lluvia.',
    category: 'Técnico'
  },
  {
    question: '¿Cuál es la diferencia entre el Neón de Vidrio tradicional y el Neón LED?',
    answer: 'El Neón LED es una alternativa ecológica y segura al neón tradicional de vidrio. Funciona con mangueras de silicona flexible que no se rompen, no emiten calor, no contienen gases tóxicos y consumen hasta un 80% menos de electricidad. Además, al funcionar a 12V no hay riesgo de descargas eléctricas y permiten regular su intensidad mediante controladores (dimmers).',
    category: 'Técnico'
  },
  {
    question: '¿Hacen colocación de los carteles o debo contratar a un instalador externo?',
    answer: 'Contamos con un equipo propio de instaladores altamente capacitados, con seguros de trabajo vigentes (ART) y herramientas de elevación adecuadas para trabajar en altura de forma segura. Realizamos instalaciones en locales comerciales, oficinas y vía pública. Si te encuentras fuera de nuestra zona de cobertura directa, te entregamos el cartel con plantillas de colocación a escala real y un kit de instalación detallado.',
    category: 'Instalación y Envíos'
  },
  {
    question: '¿Realizan envíos al interior del país? ¿Cómo protegen los carteles?',
    answer: 'Sí, realizamos envíos a todo el país. Diseñamos cajas de madera reforzadas a medida y embalamos los carteles con múltiples capas de film alveolar (pluriball) y esquineros de espuma de alta densidad para evitar golpes en el transporte. Trabajamos con empresas de transporte expreso de confianza y aseguramos la mercadería por el valor total del proyecto.',
    category: 'Instalación y Envíos'
  },
  {
    question: '¿Cuáles son los plazos promedio de entrega?',
    answer: 'Los plazos varían según la complejidad del proyecto. Los trabajos sencillos como vinilos de vidriera o placas identificadoras se entregan en 3 a 5 días hábiles. Los carteles corpóreos y de neón LED suelen demorar entre 7 y 12 días hábiles. Los proyectos de gran formato como marquesinas estructurales o tótems exteriores tienen un plazo de 15 a 25 días hábiles a partir de la firma del presupuesto y aprobación de los planos de diseño.',
    category: 'Proceso'
  },
  {
    question: '¿Los carteles y la iluminación LED tienen garantía?',
    answer: 'Todos nuestros carteles e instalaciones cuentan con una garantía escrita de 1 año contra defectos de fabricación. En el caso de componentes eléctricos y módulos LED, utilizamos marcas de primera línea que tienen una vida útil estimada superior a las 50.000 horas, y los transformadores o fuentes de alimentación quedan protegidos en cajas estancas con ventilación.',
    category: 'Precios y Pago'
  },
  {
    question: '¿Cómo se calcula el presupuesto y cuáles son los medios de pago disponibles?',
    answer: 'Los presupuestos se cotizan a medida según los materiales elegidos, las dimensiones exactas y la complejidad del montaje. Solicitamos un anticipo del 50% para dar inicio al diseño técnico y compra de materiales, y el 50% restante al momento de la entrega o finalización de la instalación. Aceptamos transferencias bancarias, cheques (sujeto a aprobación), efectivo y pagos con tarjeta mediante plataformas electrónicas.',
    category: 'Precios y Pago'
  },
  {
    question: '¿Qué tipo de mantenimiento requieren los carteles luminosos?',
    answer: 'El mantenimiento es muy bajo. Recomendamos una limpieza anual de la cara frontal con agua y detergente neutro suave (sin solventes) para remover el hollín del ambiente. Cada 2 o 3 años aconsejamos una revisión técnica preventiva de las fuentes de alimentación y conexiones eléctricas para asegurar el máximo rendimiento y brillo de los LEDs.',
    category: 'Técnico'
  },
  {
    question: '¿Se encargan de los permisos municipales y normativas de seguridad?',
    answer: 'Proporcionamos toda la documentación técnica firmada por nuestros ingenieros (planos a escala, diagramas eléctricos e informe de resistencia al viento) requerida por los municipios para tramitar la habilitación del cartel. Además, todos nuestros desarrollos respetan las normativas de seguridad eléctrica y constructivas locales para evitar infracciones.',
    category: 'Proceso'
  }
];
