export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  serviceName: string;
  comment: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Julieta Rinaldi',
    role: 'Socia Fundadora',
    company: 'Café Origen Urbano',
    serviceName: 'Marquesinas y Carteles Luminosos',
    comment: 'La marquesina y el cartel luminoso de doble faz cambiaron totalmente la esquina de nuestro local. Pasamos de ser un café desapercibido a que la gente nos identifique a dos cuadras. La calidad del acabado del composite de aluminio y la prolijidad de la instalación eléctrica nos dejó sumamente conformes. ¡Recomendadísimos!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150'
  },
  {
    id: 'test-2',
    clientName: 'Martín Gómez',
    role: 'Director de Operaciones',
    company: 'Nexus Coworking',
    serviceName: 'Letras Corpóreas Premium',
    comment: 'El trabajo que hicieron en la recepción con las letras de acero inoxidable retroiluminadas es espectacular. Cada persona que entra al coworking se detiene a mirarlo y nos elogia el diseño. El equipo de instalación fue super prolijo, limpio y cumplieron los plazos prometidos a la perfección.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150'
  },
  {
    id: 'test-3',
    clientName: 'Sofía Valenzuela',
    role: 'Dueña',
    company: 'Boutique Aura',
    serviceName: 'Letras Corpóreas Premium y Frente Comercial',
    comment: 'Teníamos miedo de hacer una inversión tan grande en la fachada de la boutique, pero el equipo de Vektor Visual nos asesoró en cada paso, mostrándonos renders digitales muy precisos de cómo quedaría. El resultado con las letras de latón dorado superó nuestras expectativas. Aumentó notablemente el ingreso de clientes.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150'
  },
  {
    id: 'test-4',
    clientName: 'Dr. Alejandro Costas',
    role: 'Director Médico',
    company: 'Clínica Dental Care',
    serviceName: 'Señalética Interior Corporativa',
    comment: 'El sistema de placas de acrílico y señalización para nuestros consultorios quedó sumamente profesional y limpio. Ayudó mucho a ordenar el flujo de pacientes en recepción y pasillos, y le da un aspecto de clínica de primer nivel. La atención de pre-venta y post-venta fue impecable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150'
  },
  {
    id: 'test-5',
    clientName: 'Claudio Peralta',
    role: 'Gerente de Logística',
    company: 'Express Cargo',
    serviceName: 'Ploteo Vehicular Comercial',
    comment: 'Ploteamos 12 camionetas de nuestra flota de distribución y el trabajo quedó excelente. El vinilo fundido es sumamente resistente al lavado diario con hidrolavadora y las terminaciones en los remaches y guardabarros están perfectas. Ya agendamos las próximas unidades para ploteo.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150'
  },
  {
    id: 'test-6',
    clientName: 'Mariano Ferrero',
    role: 'Socio Gerente',
    company: 'Neon Nights Bar',
    serviceName: 'Neón LED de Diseño',
    comment: 'El cartel de Neón LED se convirtió en el punto de fotos preferido del bar. Todos los fines de semana la gente se saca fotos ahí y nos etiqueta en redes sociales, lo que nos trajo muchísima publicidad orgánica y visibilidad. La calidad de la placa de acrílico soporte es excelente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150'
  },
  {
    id: 'test-7',
    clientName: 'Carla Benítez',
    role: 'Directora Creativa',
    company: 'L\'Avenue Moda',
    serviceName: 'Neón LED de Diseño y Letras Corpóreas',
    comment: 'La cartelería interior terminó de unificar el concepto elegante de nuestra tienda boutique. El sector de selfies con la frase en Neón LED es un éxito total entre las clientas, incrementando nuestra presencia en redes sociales desde el primer día.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150'
  }
];
