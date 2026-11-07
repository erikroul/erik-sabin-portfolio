export interface ProjectItem {
  id: string;
  title: string;
  category: 'Photoshop' | 'Illustrator' | 'Web & UI' | 'Digital Art';
  description: string;
  imageUrl: string;
  year: string;
  tools: string[];
}

export const realProjects: ProjectItem[] = [
  // --- PHOTOSHOP ---
  {
    id: 'ps-deer',
    title: 'Misty Elk Silhouette',
    category: 'Photoshop',
    description: 'Double exposure & atmospheric photo-manipulation seamlessly blending mountain wildlife with mist-veiled evergreen pine forests.',
    imageUrl: './works/ps-elk.jpg',
    year: '2022',
    tools: ['Adobe Photoshop', 'Double Exposure', 'Color Grading']
  },
  {
    id: 'ps-eye',
    title: 'Macro Cosmic Iris',
    category: 'Photoshop',
    description: 'Surreal eye photocompositing where celestial starbursts and nebula clusters replace the ocular pupil and radial fibers.',
    imageUrl: './works/ps-eye.jpg',
    year: '2022',
    tools: ['Adobe Photoshop', 'Matte Painting', 'Lighting FX']
  },
  {
    id: 'ps-whale',
    title: 'Levitating Leviathan',
    category: 'Photoshop',
    description: 'Dreamlike surrealist composition depicting an airborne humpback whale gliding gracefully above sun-baked canyons.',
    imageUrl: './works/ps-whale.jpg',
    year: '2022',
    tools: ['Adobe Photoshop', 'Surrealism', 'Atmospheric Depth']
  },
  {
    id: 'ps-city',
    title: 'Neon Megacity Sprawl',
    category: 'Photoshop',
    description: 'Moody cyberpunk night scene featuring volumetric neon illumination, wet asphalt reflections, and dense skyscraper towers.',
    imageUrl: './works/ps-city.jpg',
    year: '2023',
    tools: ['Adobe Photoshop', 'Cyberpunk', 'Digital Painting']
  },
  {
    id: 'ps-forest-glow',
    title: 'Ethereal Woodland Portal',
    category: 'Photoshop',
    description: 'Enchanted nighttime forest scene illuminated by mystical floating light wisps and contrasting cool and warm rim lighting.',
    imageUrl: './works/ps-forest.jpg',
    year: '2023',
    tools: ['Adobe Photoshop', 'Lighting & Shadow', 'Compositing']
  },
  {
    id: 'ps-cyberpunk',
    title: 'Cyberpunk Portrait Study',
    category: 'Photoshop',
    description: 'Detailed photographic retouching and futuristic augmentation with vibrant magenta and cyan neon rim lighting.',
    imageUrl: './works/ps-cyberpunk.png',
    year: '2023',
    tools: ['Adobe Photoshop', 'Retouching', 'Color Grading']
  },

  // --- ILLUSTRATOR ---
  {
    id: 'ai-owl',
    title: 'Sacred Totem Owl',
    category: 'Illustrator',
    description: 'Highly detailed symmetrical vector line-art engraving inspired by sacred geometry, talismanic motifs, and spiritual totems.',
    imageUrl: './works/ai-owl.png',
    year: '2023',
    tools: ['Adobe Illustrator', 'Vector Line Art', 'Sacred Geometry']
  },
  {
    id: 'ai-stag',
    title: 'Low-Poly Geometric Stag',
    category: 'Illustrator',
    description: 'Precision faceted polygon vector artwork combining geometric structural planes with rich color gradient fills.',
    imageUrl: './works/ai-stag.png',
    year: '2023',
    tools: ['Adobe Illustrator', 'Low-Poly Vector', 'Gradient Mesh']
  },
  {
    id: 'ai-lion',
    title: 'Heraldic Lion Monogram',
    category: 'Illustrator',
    description: 'Minimalist monoline crest vector emblem engineered for high-end luxury branding, hot-foil stamping, and apparel.',
    imageUrl: './works/ai-lion.png',
    year: '2024',
    tools: ['Adobe Illustrator', 'Logomark Design', 'Monoline Vector']
  },
  {
    id: 'ai-skull',
    title: 'Arcane Skull Vinyl Sticker',
    category: 'Illustrator',
    description: 'Bold-stroke graphic character illustration styled with clean contour offsets optimized for custom sticker and patch prints.',
    imageUrl: './works/ai-skull.png',
    year: '2024',
    tools: ['Adobe Illustrator', 'Sticker Art', 'Contour Vector']
  },

  // --- WEB & UI ---
  {
    id: 'web-powerbank',
    title: 'Designer Powerbank — Product UI/UX',
    category: 'Web & UI',
    description: 'High-concept dark mode product landing page designed to highlight premium industrial materials and tactile tech ergonomics.',
    imageUrl: './works/web-powerbank.png',
    year: '2024',
    tools: ['Figma', 'UI/UX Design', 'Photoshop Mockup']
  },
  {
    id: 'web-dashboard',
    title: 'Fintech Analytics Interface',
    category: 'Web & UI',
    description: 'Modern data dashboard with custom widget hierarchies, clean metric typography, and financial charts.',
    imageUrl: './works/web-dashboard.png',
    year: '2024',
    tools: ['Figma', 'Interface Design', 'Design Systems']
  },
  {
    id: 'web-mori',
    title: 'MORI — Packaging & Branding Identity',
    category: 'Web & UI',
    description: 'Sophisticated organic pastel visual branding system, botanical motifs, and clean typography guidelines.',
    imageUrl: './works/web-mori.png',
    year: '2023',
    tools: ['Adobe Illustrator', 'Branding Identity', 'Packaging']
  },

  // --- DIGITAL ART ---
  {
    id: 'art-grimoire',
    title: 'Grimoire of the Ancients',
    category: 'Digital Art',
    description: 'Stylized 2D fantasy game asset illustration featuring an enchanted horned spellbook bound with weathered bronze and glowing stones.',
    imageUrl: './works/art-grimoire.png',
    year: '2023',
    tools: ['Photoshop', 'Digital Painting', 'Game Art']
  },
  {
    id: 'art-citadel',
    title: 'Medieval Watchtower Citadel',
    category: 'Digital Art',
    description: 'Atmospheric fantasy architectural study featuring conical red-tile spires and traditional watercolor texturing.',
    imageUrl: './works/art-citadel.jpg',
    year: '2022',
    tools: ['Digital Painting', 'Watercolor Technique', 'Architecture']
  },
  {
    id: 'art-banner',
    title: 'Drafting Studio & Typography',
    category: 'Digital Art',
    description: 'Mixed-media editorial poster composition showcasing classical graphite pencils, ink tools, and refined serif typography.',
    imageUrl: './works/art-banner.png',
    year: '2022',
    tools: ['Photoshop', 'Typography', 'Mixed Media']
  }
];
