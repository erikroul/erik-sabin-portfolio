import { useState } from 'react';
import { realProjects, type ProjectItem } from './data/projects';
import { 
  X, 
  Mail, 
  ArrowUpRight,
  Maximize2,
  Terminal,
  Grid3X3,
  Columns3,
  Sparkles,
  Command,
  ArrowRight,
  Eye,
  SlidersHorizontal
} from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [layoutMode, setLayoutMode] = useState<'editorial' | 'masonry'>('editorial');

  const categories = ['ALL', 'Photoshop', 'Illustrator', 'Web Design', 'Digital Art'];

  const filteredProjects = activeCategory === 'ALL'
    ? realProjects
    : realProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#111215] text-[#e2e5eb] relative bg-noise selection:bg-[#f43f5e] selection:text-white">
      {/* Editorial top ticker / system tape */}
      <div className="border-b border-[#22242c] bg-[#16181f]/80 text-[#8b92a5] text-[11px] font-mono-custom px-6 py-1.5 flex items-center justify-between tracking-wider uppercase">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>INDEX // ERIK SABIN ARCHIVE — 2026 EDITION</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>LAT: 59°56' N // VISUAL DESIGNER</span>
          <span>AUTONOMOUS CODEBASE [NO WIX // PURE REACT]</span>
        </div>
      </div>

      {/* Main Masthead / Brutalist Editorial Header */}
      <header className="border-b border-[#22242c] sticky top-0 z-30 bg-[#111215]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-3">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em] text-white uppercase font-display">
                ERIK SABIN
              </h1>
              <span className="text-[11px] font-mono-custom text-[#ff3366] font-bold px-1.5 py-0.5 border border-[#ff3366]/40 rounded">
                STUDIO
              </span>
            </div>
            <p className="text-xs text-[#8f96a8] font-mono-custom tracking-tight mt-0.5">
              GRAPHIC DESIGNER • DIGITAL ARTIST • VISUAL ARCHITECT
            </p>
          </div>

          <nav className="flex items-center gap-6 text-xs font-mono-custom tracking-wider uppercase">
            <a href="#works" className="text-[#a4abc1] hover:text-white transition-colors flex items-center gap-1">
              <span>01.</span> Works
            </a>
            <a href="#bio" className="text-[#a4abc1] hover:text-white transition-colors flex items-center gap-1">
              <span>02.</span> Bio
            </a>
            <a href="#about" className="text-[#a4abc1] hover:text-white transition-colors flex items-center gap-1">
              <span>03.</span> About
            </a>
            <a href="#skills" className="text-[#a4abc1] hover:text-white transition-colors flex items-center gap-1">
              <span>04.</span> Skills
            </a>
            <a 
              href="#contact" 
              className="px-3.5 py-1.5 bg-[#20232c] hover:bg-[#ff3366] hover:text-white text-white border border-[#2d313d] transition-all rounded"
            >
              Contact // Init →
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Showcase: Asymmetric Assembled Statement */}
      <section className="border-b border-[#22242c] py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1c1e26] border border-[#2c303c] text-xs font-mono-custom text-[#a9b2c7]">
              <Sparkles className="w-3.5 h-3.5 text-[#ff3366]" />
              <span>CRAFTING VISUAL ARTIFACTS THROUGH PIXELS & VECTORS</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-white leading-[1.05]">
              Form over templates. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] via-[#ff7854] to-[#fbcfe8]">
                Imagination in every layer.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#959dae] max-w-2xl font-light leading-relaxed">
              Curated portfolio of digital works, matte painting, intricate vector geometry, and tactile identity systems. Independent, fast, and engineered without restrictive site builders.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a 
                href="#works" 
                className="px-6 py-3 bg-[#e2e5eb] text-[#111215] font-bold text-sm tracking-wide rounded hover:bg-[#ff3366] hover:text-white transition-colors flex items-center gap-2 shadow-lg"
              >
                EXPLORE WORKS <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-[#2f3340] bg-[#171921] hover:bg-[#20232c] text-[#c7cbd6] text-sm font-mono-custom rounded transition-colors"
              >
                REQUEST COLLAB // GET IN TOUCH
              </a>
            </div>
          </div>

          {/* Right Hero Badge / Spec panel */}
          <div className="lg:col-span-4 bg-[#161820] border border-[#272a36] p-6 rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3366]/10 blur-2xl rounded-full pointer-events-none" />
            <div className="flex items-center justify-between border-b border-[#272a36] pb-3 mb-4 text-xs font-mono-custom text-[#757d92]">
              <span className="flex items-center gap-1.5 text-white">
                <Command className="w-3.5 h-3.5 text-[#ff3366]" /> SPECIFICATIONS
              </span>
              <span>VER 2.6.0</span>
            </div>

            <ul className="space-y-3.5 text-xs font-mono-custom">
              <li className="flex justify-between items-center py-1 border-b border-[#222430]">
                <span className="text-[#8b93a8]">CORE FOCUS</span>
                <span className="text-white font-medium">Photoshop / Illustrator</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-[#222430]">
                <span className="text-[#8b93a8]">ORIGIN HOSTING</span>
                <span className="text-rose-400 font-medium">100% De-Wixed / GitHub</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-[#222430]">
                <span className="text-[#8b93a8]">TECHNIQUES</span>
                <span className="text-white">Matte, Vector, Identity</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span className="text-[#8b93a8]">STATUS</span>
                <span className="text-emerald-400 flex items-center gap-1">● Available for commission</span>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded bg-[#101116] border border-[#222430] text-[11px] text-[#788196] leading-relaxed">
              "Every pixel placed deliberately. No generic pre-packaged layouts."
            </div>
          </div>
        </div>
      </section>

      {/* WORK ARCHIVE & GALLERY */}
      <section id="works" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="border-b border-[#242733] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-custom text-[#ff3366] uppercase tracking-wider mb-1">
              <SlidersHorizontal className="w-3.5 h-3.5" /> ARCHIVE CATALOGUE
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              CURATED PROJECTS
            </h3>
          </div>

          {/* Controls: Filter tags + View switch */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-[#181a22] border border-[#282b37]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded text-xs font-mono-custom transition-all ${
                    activeCategory === cat
                      ? 'bg-[#ff3366] text-white font-bold shadow-md shadow-[#ff3366]/20'
                      : 'text-[#9299ad] hover:text-white hover:bg-[#222530]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-1 border border-[#282b37] rounded-lg p-1 bg-[#181a22]">
              <button
                onClick={() => setLayoutMode('editorial')}
                className={`p-1.5 rounded ${layoutMode === 'editorial' ? 'bg-[#292c3a] text-white' : 'text-[#70778c] hover:text-white'}`}
                title="Editorial Asymmetric Grid"
              >
                <Columns3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('masonry')}
                className={`p-1.5 rounded ${layoutMode === 'masonry' ? 'bg-[#292c3a] text-white' : 'text-[#70778c] hover:text-white'}`}
                title="Regular Grid"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className={`grid gap-6 ${layoutMode === 'editorial' ? 'grid-cols-1 md:grid-cols-12' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {filteredProjects.map((project, idx) => {
            // Give projects unique editorial spans when in editorial mode
            const colSpan = layoutMode === 'editorial'
              ? (idx % 5 === 0 ? 'md:col-span-8' : idx % 5 === 1 ? 'md:col-span-4' : idx % 5 === 2 ? 'md:col-span-4' : idx % 5 === 3 ? 'md:col-span-4' : 'md:col-span-4')
              : 'col-span-1';

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`${colSpan} group relative bg-[#171922] rounded-2xl border border-[#272a38] overflow-hidden hover:border-[#ff3366]/70 transition-all duration-300 cursor-pointer flex flex-col`}
              >
                {/* Artwork display container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#0d0e12]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-transparent to-black/20 opacity-40 group-hover:opacity-80 transition-opacity" />

                  {/* Corner tag */}
                  <div className="absolute top-3 left-3">
                    <span className="font-mono-custom text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#101115]/90 backdrop-blur-md text-[#ff3366] border border-[#2b2e3c]">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 rounded bg-white text-black hover:bg-[#ff3366] hover:text-white transition-colors flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity font-mono-custom">
                    <span className="flex items-center gap-1 bg-[#111215]/80 px-2 py-1 rounded">
                      <Eye className="w-3 h-3 text-[#ff3366]" /> Inspect Artifact
                    </span>
                    <span className="text-[#a0a8be]">{project.year}</span>
                  </div>
                </div>

                {/* Card Meta Description */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#ff3366] transition-colors leading-snug">
                      {project.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-[#8d94a8] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#222532] flex items-center justify-between text-[11px] font-mono-custom text-[#6f768b]">
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 2).map((t, i) => (
                        <span key={i} className="text-[#9ea6bd] bg-[#1f222e] px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#ff3366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BIOGRAPHY & MANIFESTO */}
      <section id="bio" className="py-16 px-6 max-w-7xl mx-auto border-t border-[#22242c]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono-custom text-[#ff3366] uppercase tracking-wider">
              02 // BACKGROUND
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              BIOGRAPHY & CREATIVE PATH
            </h3>
            <p className="text-sm text-[#8c94a7] font-mono-custom leading-relaxed">
              Moving beyond standardized web layouts toward authentic visual experiments.
            </p>
          </div>

          <div className="lg:col-span-8 bg-[#171922] border border-[#272a38] p-8 rounded-3xl space-y-6">
            <p className="text-base sm:text-lg text-[#d3d8e5] leading-relaxed font-light">
              I am <strong className="text-white font-semibold">Erik Sabin</strong>, a digital designer exploring the intersection between raster manipulation and vector precision. My journey started with a fascination for surreal photo-compositing, evolving into deliberate visual identity design, branding, and concept illustration.
            </p>
            <p className="text-sm sm:text-base text-[#9199ae] leading-relaxed">
              Rather than assembling cookie-cutter templates on web constructors, I view each canvas as an individual design problem. Whether it's crafting intricate geometric sacred line-art in Illustrator or creating multi-layer double-exposure atmospheres in Photoshop, the objective is always singular: distinctive character with surgical execution.
            </p>

            <div className="pt-6 border-t border-[#252836] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom">
              <div className="border-l-2 border-[#ff3366] pl-4">
                <div className="text-xs text-[#7c849b]">DISCIPLINE</div>
                <div className="text-sm font-bold text-white mt-1">Computer Graphics & Web</div>
              </div>
              <div className="border-l-2 border-[#38bdf8] pl-4">
                <div className="text-xs text-[#7c849b]">LOCATION / REACH</div>
                <div className="text-sm font-bold text-white mt-1">Worldwide (Remote)</div>
              </div>
              <div className="border-l-2 border-[#4ade80] pl-4">
                <div className="text-xs text-[#7c849b]">INFRASTRUCTURE</div>
                <div className="text-sm font-bold text-white mt-1">Zero Wix / Static React</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME & PHILOSOPHY */}
      <section id="about" className="py-16 px-6 max-w-7xl mx-auto border-t border-[#22242c]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <div className="text-xs font-mono-custom text-[#ff3366] uppercase tracking-wider mb-2">
              03 // ABOUT ME
            </div>
            <h3 className="text-3xl font-extrabold text-white font-display">
              AESTHETICS & WORK ETHIC
            </h3>
            <p className="mt-4 text-sm text-[#8c94a7] leading-relaxed">
              Design is more than decoration; it is structure, emotional resonance, and hierarchy.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-[#161821] border border-[#272a38] rounded-2xl">
              <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366]" /> Uncompromising Precision
              </h4>
              <p className="text-xs text-[#8e96ab] leading-relaxed">
                Tidy smart objects, labeled layers, mathematically exact bezier curves, and harmonious color spaces.
              </p>
            </div>

            <div className="p-6 bg-[#161821] border border-[#272a38] rounded-2xl">
              <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Stylistic Versatility
              </h4>
              <p className="text-xs text-[#8e96ab] leading-relaxed">
                Fluidly pivoting from clean corporate minimalism to dark gothic fantasy assets and geometric emblems.
              </p>
            </div>

            <div className="p-6 bg-[#161821] border border-[#272a38] rounded-2xl">
              <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Digital Autonomy
              </h4>
              <p className="text-xs text-[#8e96ab] leading-relaxed">
                No third-party branding overlays, zero slow tracker payloads. A pure standalone showcase hosted on GitHub.
              </p>
            </div>

            <div className="p-6 bg-[#161821] border border-[#272a38] rounded-2xl">
              <h4 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Ongoing Evolution
              </h4>
              <p className="text-xs text-[#8e96ab] leading-relaxed">
                Constantly refining workflows, exploring new visual engines, typography pairings, and digital painting methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & TOOLSET MATRIX */}
      <section id="skills" className="py-16 px-6 max-w-7xl mx-auto border-t border-[#22242c]">
        <div className="text-xs font-mono-custom text-[#ff3366] uppercase tracking-wider mb-2">
          04 // CAPABILITIES
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            SKILLS & ARSENAL
          </h3>
          <p className="text-xs font-mono-custom text-[#7b8399]">
            HARDWARE & SOFTWARE MASTERY
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#171922] border border-[#282b3a] rounded-2xl relative">
            <div className="text-xs font-mono-custom text-[#ff3366] mb-1">RASTER & EDITING</div>
            <h4 className="text-xl font-bold text-white mb-2">Adobe Photoshop</h4>
            <p className="text-xs text-[#8a92a5] leading-relaxed mb-4">
              Advanced photo manipulation, matte painting, frequency separation retouching, and lighting FX.
            </p>
            <div className="space-y-2 text-xs font-mono-custom">
              <div className="flex justify-between text-[#a0a8be]">
                <span>Photo Compositing</span> <span>95%</span>
              </div>
              <div className="h-1 bg-[#232634] rounded-full overflow-hidden">
                <div className="w-[95%] h-full bg-[#ff3366]" />
              </div>
              <div className="flex justify-between text-[#a0a8be] pt-2">
                <span>Color Grading</span> <span>90%</span>
              </div>
              <div className="h-1 bg-[#232634] rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-[#ff3366]" />
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#171922] border border-[#282b3a] rounded-2xl relative">
            <div className="text-xs font-mono-custom text-sky-400 mb-1">VECTOR & SYMBOLICS</div>
            <h4 className="text-xl font-bold text-white mb-2">Adobe Illustrator</h4>
            <p className="text-xs text-[#8a92a5] leading-relaxed mb-4">
              Vector symmetry, geometric logomarks, merchandise graphics, icons, and packaging layouts.
            </p>
            <div className="space-y-2 text-xs font-mono-custom">
              <div className="flex justify-between text-[#a0a8be]">
                <span>Vector Line Art</span> <span>92%</span>
              </div>
              <div className="h-1 bg-[#232634] rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-sky-400" />
              </div>
              <div className="flex justify-between text-[#a0a8be] pt-2">
                <span>Brand Marks & Badges</span> <span>88%</span>
              </div>
              <div className="h-1 bg-[#232634] rounded-full overflow-hidden">
                <div className="w-[88%] h-full bg-sky-400" />
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#171922] border border-[#282b3a] rounded-2xl relative">
            <div className="text-xs font-mono-custom text-emerald-400 mb-1">COMPOSITION & WEB</div>
            <h4 className="text-xl font-bold text-white mb-2">Layout & Visual Design</h4>
            <p className="text-xs text-[#8a92a5] leading-relaxed mb-4">
              Understanding grid rhythms, typography scales, contrast ratios, and modern responsive presentation.
            </p>
            <div className="space-y-2 text-xs font-mono-custom">
              <div className="flex justify-between text-[#a0a8be]">
                <span>Typography & Layout</span> <span>90%</span>
              </div>
              <div className="h-1 bg-[#232634] rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-emerald-400" />
              </div>
              <div className="flex justify-between text-[#a0a8be] pt-2">
                <span>Digital Asset Prep</span> <span>95%</span>
              </div>
              <div className="h-1 bg-[#232634] rounded-full overflow-hidden">
                <div className="w-[95%] h-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT // TERMINAL DOSSIER */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-[#22242c]">
        <div className="bg-gradient-to-b from-[#181a24] to-[#121319] border border-[#292c3a] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-[#ff3366] uppercase mb-3">
              <Terminal className="w-4 h-4" /> TRANSMISSION CHANNEL
            </div>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              INITIATE CONTACT
            </h3>
            <p className="mt-4 text-sm sm:text-base text-[#9199ae] leading-relaxed">
              Available for freelance commissions, creative direction, vector art, and digital asset production. Let's create something non-conventional.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 font-mono-custom text-xs">
              <a
                href="mailto:krokoba4ka@gmail.com"
                className="px-6 py-3.5 bg-white text-black font-bold rounded-lg hover:bg-[#ff3366] hover:text-white transition-colors flex items-center gap-2 shadow-lg"
              >
                <Mail className="w-4 h-4" /> SEND EMAIL // DIRECT
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-[#20232e] text-white border border-[#313545] rounded-lg hover:bg-[#2b2f3f] transition-colors flex items-center gap-2"
              >
                TELEGRAM CHANNEL →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1f212a] py-8 px-6 text-xs font-mono-custom text-[#6f7587]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} ERIK SABIN. ALL WORKS COPYRIGHTED.
          </div>
          <div className="text-[#8e95ab] flex items-center gap-2">
            <span>SELF-HOSTED // GITHUB PAGES</span>
            <span>•</span>
            <span className="text-[#ff3366]">NO WIX DEPENDENCY</span>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX / FULLSCREEN INSPECT */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative bg-[#161821] border border-[#2d3141] max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            <div className="p-4 sm:px-6 border-b border-[#282b3a] flex items-center justify-between bg-[#121319]">
              <div>
                <span className="text-xs font-mono-custom text-[#ff3366] uppercase tracking-wider font-bold">
                  {activeProject.category} // {activeProject.year}
                </span>
                <h4 className="text-xl font-bold text-white font-display mt-0.5">{activeProject.title}</h4>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-lg bg-[#222430] hover:bg-[#ff3366] text-[#9ca3ba] hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6 flex-1 flex flex-col items-center bg-[#0d0e13]">
              <img
                src={activeProject.imageUrl}
                alt={activeProject.title}
                className="max-h-[62vh] object-contain rounded-lg w-auto max-w-full shadow-2xl border border-[#222430]"
              />
              <div className="w-full mt-6 text-left max-w-3xl">
                <div className="text-xs font-mono-custom text-[#788096] mb-1">DESCRIPTION & SPEC</div>
                <p className="text-sm text-[#cbd1e1] leading-relaxed">{activeProject.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeProject.tools.map((tool, idx) => (
                    <span key={idx} className="text-xs font-mono-custom px-3 py-1 rounded bg-[#1e202b] border border-[#2d3040] text-[#a9b1c7]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
