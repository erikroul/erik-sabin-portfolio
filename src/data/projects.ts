export interface ProjectItem {
  id: string;
  title: string;
  category: 'Photoshop' | 'Illustrator' | 'Web Design' | 'Digital Art';
  description: string;
  imageUrl: string;
  year: string;
  tools: string[];
  dimensions?: string;
  aspect?: 'square' | 'portrait' | 'landscape' | 'wide';
}

export const realProjects: ProjectItem[] = [
  {
    id: 'deer-silhouette',
    title: 'Forest Spirit / Deer Silhouette',
    category: 'Photoshop',
    description: 'Double exposure & photo-manipulation blending wildlife silhouette with an atmospheric misty pine forest texture.',
    imageUrl: './works/deer-silhouette.jpg',
    year: '2022',
    tools: ['Adobe Photoshop', 'Double Exposure', 'Color Grading'],
    aspect: 'portrait'
  },
  {
    id: 'owl-vector',
    title: 'Geometric Totem Owl',
    category: 'Illustrator',
    description: 'Intricate symmetrical line-art and ornamental vector illustration with sacred geometry details.',
    imageUrl: './works/owl-vector.png',
    year: '2023',
    tools: ['Adobe Illustrator', 'Vector Line Art', 'Geometric Symmetry'],
    aspect: 'portrait'
  },
  {
    id: 'powerbank-web',
    title: 'Designer Powerbank — UI/UX & Product Concept',
    category: 'Web Design',
    description: 'Minimalist high-tech e-commerce showcase concept for designer charging accessories with dark tactile aesthetics.',
    imageUrl: './works/powerbank-web.png',
    year: '2024',
    tools: ['Web & UI Design', 'Photoshop', 'Product Visuals'],
    aspect: 'wide'
  },
  {
    id: 'mori-branding',
    title: 'MORI — Pastel Cosmetics & Packaging Identity',
    category: 'Illustrator',
    description: 'Delicate organic botanical branding identity, package design mockup, and pastel color palette formulation.',
    imageUrl: './works/mori-branding.png',
    year: '2023',
    tools: ['Adobe Illustrator', 'Branding Identity', 'Packaging'],
    aspect: 'landscape'
  },
  {
    id: 'magic-book-art',
    title: 'Grimoire of Whispers — Fantasy Asset',
    category: 'Digital Art',
    description: 'Stylized 2D game asset illustration of an enchanted arcane book with horned skull relic and glowing crystals.',
    imageUrl: './works/magic-book-art.png',
    year: '2023',
    tools: ['Adobe Photoshop', 'Digital Painting', 'Concept Art'],
    aspect: 'square'
  },
  {
    id: 'artwork-banner',
    title: 'Creative Studio Process & Typography',
    category: 'Photoshop',
    description: 'Mixed media composition highlighting traditional sketchbooks, drafting pencils, and modern editorial serif typography.',
    imageUrl: './works/artwork-banner.png',
    year: '2022',
    tools: ['Photoshop', 'Typography', 'Mixed Media'],
    aspect: 'landscape'
  },
  {
    id: 'castle-illustration',
    title: 'Fairytale Citadel Spire',
    category: 'Digital Art',
    description: 'Atmospheric fantasy landscape featuring medieval red-roofed watchtowers and watercolor-inspired textures.',
    imageUrl: './works/castle-illustration.jpg',
    year: '2022',
    tools: ['Digital Painting', 'Color Concept', 'Photoshop'],
    aspect: 'portrait'
  },
  {
    id: 'additional-work',
    title: 'Explorative Graphic Studies',
    category: 'Illustrator',
    description: 'Graphic experiments combining vector motifs, branding layouts, and decorative patterns.',
    imageUrl: './works/additional-work.png',
    year: '2023',
    tools: ['Adobe Illustrator', 'Layout Design'],
    aspect: 'square'
  }
];
