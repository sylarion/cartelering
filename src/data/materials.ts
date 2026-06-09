import { Material } from '../types/material';

export const materials: Material[] = [
  {
    name: 'Acrílico',
    description: 'Polímero plástico transparente, rígido y de gran resistencia al impacto, ideal para frentes de carteles luminosos, letras corpóreas y placas identificadoras de alta gama.',
    recommendedUses: [
      'Frentes de cajas de luz y marquesinas caladas',
      'Letras corpóreas de acrílico macizo pulido',
      'Placas señaléticas institucionales y de consultorio',
      'Exhibidores y mobiliario comercial de diseño'
    ],
    durability: 'Alta (5-8 años en exterior, ilimitada en interior)',
    finish: 'Brillante / Espejo / Satinado',
    indoorOutdoor: 'Ambos'
  },
  {
    name: 'PVC Espumado',
    description: 'Plancha rígida de PVC expandido, de peso muy liviano y estructura celular homogénea. Es impermeable, autoextinguible y fácil de cortar, fresar y rotular.',
    recommendedUses: [
      'Cartelería promocional rígida y displays en puntos de venta',
      'Frentes lisos para letras de polifan',
      'Señalización interior corporativa y comercial',
      'Fondo y soporte de placas de señalética de seguridad'
    ],
    durability: 'Media (3-5 años en exterior, excelente en interior)',
    finish: 'Mate liso',
    indoorOutdoor: 'Ambos'
  },
  {
    name: 'Aluminio Compuesto (ACM)',
    description: 'Panel tipo sándwich compuesto por dos láminas de aluminio y un núcleo de polietileno de baja densidad. Ofrece una rigidez y planicidad excepcionales con un peso reducido.',
    recommendedUses: [
      'Revestimiento integral de marquesinas y fachadas comerciales modernas',
      'Tótems, columnas y monolitos publicitarios de gran escala',
      'Placas base de gran formato para letras corpóreas pesadas'
    ],
    durability: 'Extrema (10-15 años en exterior)',
    finish: 'Satinado, Mate, Cepillado (Silver/Gold), Espejo',
    indoorOutdoor: 'Exterior'
  },
  {
    name: 'Chapa Galvanizada',
    description: 'Lámina de acero sometida a un proceso de galvanizado en caliente para recubrirla de zinc, previniendo la corrosión y el óxido. Es ideal para soldar y pintar con sistemas poliuretánicos.',
    recommendedUses: [
      'Estructura y cantos soldados de letras corpóreas gigantes 3D',
      'Bandejas y chasis para marquesinas de gran envergadura',
      'Cajas de luz estancas y tótems de ruta'
    ],
    durability: 'Alta (8-12 años en exterior pintado al horno)',
    finish: 'Pintura poliuretánica automotriz (Brillante, Mate o Satinado)',
    indoorOutdoor: 'Exterior'
  },
  {
    name: 'Vinilo Adhesivo',
    description: 'Película de PVC flexible con adhesivo acrílico en el reverso. Disponible en versiones de corte (colores puros) o imprimibles mediante plotters de alta definición con tintas UV o látex.',
    recommendedUses: [
      'Ploteo decorativo y publicitario en vidrieras comerciales',
      'Rotulación vehicular de flotas corporativas',
      'Decoración de paredes interiores, murales y cristales esmerilados',
      'Identificación de horarios y redes en accesos'
    ],
    durability: 'Media-Alta (3-7 años según la gama: calandrado o fundido cast)',
    finish: 'Brillante, Mate, Esmerilado, Microperforado, Reflectivo',
    indoorOutdoor: 'Ambos'
  },
  {
    name: 'Lona Backlight/Frontlight',
    description: 'Sustrato de PVC flexible con tejido interno de poliéster de alta tenacidad. La lona Frontlight se usa para carteles iluminados externamente, mientras que la Backlight difunde uniformemente la luz trasera.',
    recommendedUses: [
      'Carteles gigantes frontlight de ruta y de fachada exterior',
      'Cajas de luz tensadas retroiluminadas (backlight)',
      'Banners con portabanners enrollables o tipo araña para eventos',
      'Cerramientos de fachadas de edificios en obra (lona mesh)'
    ],
    durability: 'Media (2-4 años en exterior)',
    finish: 'Mate o Brillante',
    indoorOutdoor: 'Ambos'
  },
  {
    name: 'MDF (Fibrofácil)',
    description: 'Tablero de fibra de madera de densidad media reconstituida de superficie sumamente homogénea. Muy fácil de cortar y calar con router CNC, ideal para pintar o revestir.',
    recommendedUses: [
      'Letras corpóreas económicas para stands e interiores de tiendas',
      'Decoraciones temáticas de pared en showrooms y salas de reunión',
      'Mobiliario comercial y displays rígidos en eventos'
    ],
    durability: 'Baja en exterior, Excelente en interior libre de humedad',
    finish: 'Crudo o pintado con laca, barniz o esmalte',
    indoorOutdoor: 'Interior'
  },
  {
    name: 'Módulos LED',
    description: 'Bloques de iluminación LED integrados con encapsulado de resina plástica estanca (IP65/IP67) y lentes difusoras que amplían el ángulo de haz de luz para evitar puntos oscuros.',
    recommendedUses: [
      'Retroiluminación de letras corpóreas tridimensionales (efecto backlight)',
      'Iluminación interna de cajas de luz y marquesinas comerciales',
      'Tótems, carteles bandera de doble faz y columnas publicitarias'
    ],
    durability: 'Extrema (más de 50.000 horas de uso continuo sin caída de brillo)',
    finish: 'N/A (Luz fría 6500K, cálida 3000K, neutra 4000K o colores RGB)',
    indoorOutdoor: 'Ambos'
  },
  {
    name: 'Neón Flex LED',
    description: 'Manguera flexible de silicona o PVC extrusionado que alberga en su interior una tira LED de alta densidad. Emula el brillo continuo de los tubos de gas neón tradicionales.',
    recommendedUses: [
      'Carteles decorativos modernos para interiores comerciales y gastronómicos',
      'Puntos fotogénicos ("Instagrammable spots") en bares y salones',
      'Señalización interior llamativa sobre paredes de ladrillo o madera'
    ],
    durability: 'Alta (30.000 a 50.000 horas de vida útil)',
    finish: 'Translúcido de color (Rosa, Cian, Amarillo, Verde, Blanco, etc.)',
    indoorOutdoor: 'Ambos'
  },
  {
    name: 'Polifan',
    description: 'Plancha de poliestireno extruido (XPS) de celda cerrada y alta densidad. Es sumamente liviano, fácil de cortar con hilo caliente y no absorbe agua ni humedad.',
    recommendedUses: [
      'Letras corpóreas de gran espesor y bajo peso para interiores',
      'Logotipos volumétricos corporativos de bajo presupuesto',
      'Volúmenes decorativos temporales en vidrieras y eventos'
    ],
    durability: 'Media (2-4 años en exterior con acabado de pintura adecuado)',
    finish: 'Mate liso (ideal para pintar al agua)',
    indoorOutdoor: 'Ambos'
  },
  {
    name: 'Acero Inoxidable',
    description: 'Aleación de acero con un mínimo de 10.5% de cromo, lo que le otorga una resistencia excepcional a la corrosión y oxidación. Es el material premium por excelencia para letras corpóreas.',
    recommendedUses: [
      'Letras corpóreas de altísima gama en recepciones de oficinas y hoteles',
      'Logotipos en frentes comerciales expuestos a climas severos o marinos',
      'Placas identificadoras conmemorativas y señalética premium'
    ],
    durability: 'Extrema (prácticamente ilimitada, libre de corrosión)',
    finish: 'Cepillado / Esmerilado / Pulido espejo brillante',
    indoorOutdoor: 'Ambos'
  },
  {
    name: 'Hierro Estructural',
    description: 'Perfiles, caños y vigas de acero estructural utilizados para fabricar los esqueletos internos, bastidores portantes y soportes de fijación de marquesinas, tótems y carteles colgantes.',
    recommendedUses: [
      'Bastidores internos de marquesinas comerciales pesadas',
      'Estructuras de soporte internas de tótems publicitarios',
      'Soportes bandera para carteles colgantes de doble faz'
    ],
    durability: 'Extrema (requiere tratamiento de pintura anticorrosiva o galvanizado)',
    finish: 'Pintado con esmalte anticorrosivo o galvanizado por inmersión',
    indoorOutdoor: 'Exterior'
  }
];
