export interface ProjectItem {
  id: string;
  title: string;
  category: 'Photoshop' | 'Illustrator' | '3D & CG' | 'Digital Art' | 'Other';
  description: string;
  imageUrl: string;
  year?: string;
  tools?: string[];
}

export const initialProjects: ProjectItem[] = [
  {
    id: '1',
    title: 'Neon Cyber Cityscape',
    category: 'Photoshop',
    description: 'Матт-пейнтинг и фотоманипуляция в темной футуристической стилистике.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    tools: ['Adobe Photoshop', 'Wacom tablet']
  },
  {
    id: '2',
    title: 'Minimal Geometric Branding',
    category: 'Illustrator',
    description: 'Векторная графика, логотипы и айдентика бренда с чистой композицией.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    tools: ['Adobe Illustrator']
  },
  {
    id: '3',
    title: 'Sci-Fi Abstract Shapes',
    category: 'Digital Art',
    description: 'Эксперименты с формами, градиентами и композиционным светом.',
    imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    year: '2023',
    tools: ['Photoshop', 'Illustrator']
  },
  {
    id: '4',
    title: 'Fantasy Character Concept',
    category: 'Digital Art',
    description: 'Концепт-арт персонажа с проработкой деталей костюма и текстур.',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    year: '2023',
    tools: ['Adobe Photoshop']
  },
  {
    id: '5',
    title: 'Vector Character & Sticker Pack',
    category: 'Illustrator',
    description: 'Серия ярких стилизованных иллюстраций и векторных стикеров.',
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    tools: ['Adobe Illustrator']
  },
  {
    id: '6',
    title: 'Night Moody Portrait Retouch',
    category: 'Photoshop',
    description: 'Художественная цветокоррекция, ретушь кожи и работа с мягким контровым светом.',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    year: '2023',
    tools: ['Adobe Photoshop', 'Lightroom']
  }
];

