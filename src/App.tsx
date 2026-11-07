import { useState } from 'react';
import { initialProjects, type ProjectItem } from './data/projects';
import { 
  Sparkles, 
  Layers, 
  X, 
  Mail, 
  Send, 
  Palette, 
  ArrowUpRight,
  User,
  BookOpen,
  Award,
  PenTool,
  Sliders,
  Camera,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['Все', 'Photoshop', 'Illustrator', 'Digital Art'];

  const filteredProjects = selectedCategory === 'Все' 
    ? initialProjects 
    : initialProjects.filter(p => p.category === selectedCategory);

  const skills = [
    {
      name: 'Adobe Photoshop',
      level: 'Продвинутый',
      desc: 'Коллажирование, ретушь, цветокоррекция, работа с масками и сложными эффектами света.',
      icon: Palette,
      tags: ['Photo Manipulation', 'Ретушь', 'Matte Painting', 'Цветокоррекция']
    },
    {
      name: 'Adobe Illustrator',
      level: 'Уверенный',
      desc: 'Векторная графика, логотипы, стикеры, иконки, разработка векторных персонажей и принтов.',
      icon: PenTool,
      tags: ['Вектор', 'Логотипы', 'Иллюстрации', 'SVG']
    },
    {
      name: 'Композиция & Цвет',
      level: 'Хорошая база',
      desc: 'Понимание законов перспективы, фокусных точек, цветового круга, контраста и светотени.',
      icon: Sliders,
      tags: ['Теория цвета', 'Композиция', 'Светотень']
    },
    {
      name: 'Работа с референсами & Идеями',
      level: 'Постоянная практика',
      desc: 'Быстрый поиск концепций, генерация эскизов, создание настроенческих мудбордов (moodboards).',
      icon: Camera,
      tags: ['Moodboards', 'Концепт-арт', 'Эскизирование']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Мягкие световые акценты (slate/indigo/cyan) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-b from-indigo-500/15 via-sky-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Навигация */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-900/85 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              ES
            </div>
            <span className="font-semibold text-slate-100 group-hover:text-white transition-colors">
              Erik Sabin <span className="text-slate-400 font-normal">/ Портфолио</span>
            </span>
          </a>

          <nav className="flex items-center gap-5 sm:gap-7 text-sm font-medium">
            <a href="#works" className="text-slate-300 hover:text-white transition-colors">Работы</a>
            <a href="#bio" className="text-slate-300 hover:text-white transition-colors">Биография</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">О себе</a>
            <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Навыки</a>
            <a 
              href="#contact" 
              className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-500/20 transition-all text-xs font-semibold"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Главный экран (Hero) */}
      <section className="relative pt-16 pb-14 px-6 max-w-6xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700/80 text-slate-300 text-xs mb-6">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Photoshop • Illustrator • Цифровая графика & Арт</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15]">
          Визуальное творчество, иллюстрации и цифровой дизайн.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Добро пожаловать в моё обновленное портфолио! Здесь собраны мои работы, сделанные в Photoshop, Illustrator и других редакторах: от концептов и фотоманипуляций до векторной графики.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#works"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/25"
          >
            Смотреть работы <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#bio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-all"
          >
            Биография и О себе
          </a>
        </div>
      </section>

      {/* Секция: Галерея работ */}
      <section id="works" className="py-12 px-6 max-w-6xl mx-auto w-full border-t border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-indigo-400" />
              Галерея работ
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Фильтруйте по инструментам или нажмите на работу, чтобы рассмотреть в деталях
            </p>
          </div>

          {/* Фильтры категорий */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col shadow-lg shadow-black/20"
            >
              {/* Превью картинки */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 shadow-md">
                    Открыть в полном размере <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
                  </span>
                </div>
              </div>

              {/* Описание под картинкой */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-indigo-400 font-semibold tracking-wide uppercase">{project.category}</span>
                    {project.year && <span className="text-slate-400">{project.year}</span>}
                  </div>
                  <h3 className="font-semibold text-lg text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.tools && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-700/60">
                    {project.tools.map((t, idx) => (
                      <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-700/70 text-slate-200 border border-slate-600/50">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Секция: Биография */}
      <section id="bio" className="py-14 px-6 max-w-6xl mx-auto w-full border-t border-slate-800">
        <div className="flex items-center gap-2.5 mb-6">
          <BookOpen className="w-6 h-6 text-sky-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Биография</h2>
        </div>

        <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 p-6 sm:p-8">
          <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              Привет! Меня зовут <strong className="text-white">Erik Sabin</strong>. Мой путь в творчестве начался с увлечения визуальным искусством, иллюстрацией и обработкой изображений. 
            </p>
            <p>
              Я долгое время экспериментировал с различными техниками — от цифровой живописи и композитинга в Photoshop до точной векторной графики и разработки иллюстраций в Adobe Illustrator.
            </p>
            <p>
              Для меня творчество — это способ передавать эмоции, визуализировать сложные идеи и делать окружающий мир красивее и интереснее. Я стремлюсь к тому, чтобы каждая работа была не просто набором пикселей, а имела законченную атмосферу и характер.
            </p>
          </div>

          {/* Таймлайн вех */}
          <div className="mt-8 pt-6 border-t border-slate-700/70 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Начало пути</span>
              </div>
              <div className="text-sm font-bold text-white">Освоение Photoshop & графики</div>
              <p className="text-xs text-slate-400 mt-1">Первые арт-эксперименты, ретушь, манипуляции со снимками.</p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Развитие стиля</span>
              </div>
              <div className="text-sm font-bold text-white">Вектор & Adobe Illustrator</div>
              <p className="text-xs text-slate-400 mt-1">Создание векторных паттернов, стикеров, логотипов и иконок.</p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Сейчас</span>
              </div>
              <div className="text-sm font-bold text-white">Собственное портфолио</div>
              <p className="text-xs text-slate-400 mt-1">Отказ от Wix, свой сайт на GitHub, новые проекты и арт.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция: О себе */}
      <section id="about" className="py-14 px-6 max-w-6xl mx-auto w-full border-t border-slate-800">
        <div className="flex items-center gap-2.5 mb-6">
          <User className="w-6 h-6 text-indigo-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">О себе</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/80 p-6 sm:p-7 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Мой подход к работе</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Я люблю уделять внимание мелочам: аккуратности слоёв, чистым кривым в векторе, естественному свету в коллажах и общей гармонии цветов. Не боюсь пробовать новое и постоянно совершенствую свои навыки.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Открыт к интересным предложениям и коллаборациям
            </div>
          </div>

          <div className="bg-slate-800/80 p-6 sm:p-7 rounded-2xl border border-slate-700/80">
            <h3 className="text-lg font-bold text-white mb-3">Интересы и вдохновение</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>Фотография природы, городские пейзажи и архитектурные контрасты.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>Кинематографичный свет, неон, киберпанк и фэнтези стилистика.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>Современный веб-дизайн, чистая минималистичная верстка и типографика.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Секция: Навыки */}
      <section id="skills" className="py-14 px-6 max-w-6xl mx-auto w-full border-t border-slate-800">
        <div className="flex items-center gap-2.5 mb-6">
          <Award className="w-6 h-6 text-indigo-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Навыки & Инструменты</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{skill.name}</h3>
                      <span className="text-xs text-sky-400 font-medium">{skill.level}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {skill.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/60">
                  {skill.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Секция: Контакты */}
      <section id="contact" className="py-16 px-6 max-w-6xl mx-auto w-full border-t border-slate-800">
        <div className="bg-gradient-to-br from-slate-800 to-slate-850 p-8 sm:p-12 rounded-3xl border border-slate-700 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Связь со мной</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Контакты
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Если у вас есть проект, идея для коллаборации или вопрос по работам — пишите, я всегда на связи:
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:eriksabin@example.com"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30"
              >
                <Mail className="w-4 h-4" /> Написать на Email
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-all border border-slate-600 shadow-md"
              >
                <Send className="w-4 h-4" /> Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="mt-auto py-8 border-t border-slate-800 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Erik Sabin. Все права защищены.</p>
          <p className="text-slate-400">
            Собственный проект на React + Vite без конструкторов
          </p>
        </div>
      </footer>

      {/* Модальное окно (Просмотр полноразмерного изображения) */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative bg-slate-800 border border-slate-700 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            <div className="p-4 sm:px-6 border-b border-slate-700 flex items-center justify-between bg-slate-800">
              <div>
                <span className="text-xs text-indigo-400 uppercase tracking-wider font-semibold">{activeProject.category}</span>
                <h3 className="text-lg font-bold text-white">{activeProject.title}</h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors"
                title="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6 flex-1 flex flex-col items-center bg-slate-900/60">
              <img
                src={activeProject.imageUrl}
                alt={activeProject.title}
                className="max-h-[60vh] object-contain rounded-xl w-auto max-w-full shadow-lg"
              />
              <div className="w-full mt-4 text-left">
                <p className="text-sm text-slate-200 leading-relaxed">{activeProject.description}</p>
                {activeProject.tools && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {activeProject.tools.map((tool, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-md bg-slate-700/80 border border-slate-600 text-slate-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
