import { useEffect, useRef, useState } from 'react'
import works from 'virtual:works'

const pages = [
  { id: 'photoshop', label: 'Photoshop' },
  { id: 'illustrator', label: 'Illustrator' },
  { id: 'figma', label: 'Figma' },
  { id: 'work-process', label: 'Work process' },
  { id: 'project', label: 'Project' },
  { id: 'web', label: 'Web' },
  { id: 'traditional-artwork', label: 'Traditional artwork' },
  { id: 'orders', label: 'Orders' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const

type PageId = (typeof pages)[number]['id'] | 'home'

const workPages = pages.filter((page) => page.id !== 'about' && page.id !== 'contact')

const education = [
  { years: '2006–2011', place: 'Tallinna vanalinna kunstikeskus', note: 'TVLKEK' },
  { years: '2013–2016', place: 'Informaatika ja Arvutustehnika Instituudi OÜ', note: 'IATI' },
  { years: '2016–2021', place: 'Eesti Ettevõtluskõrgkool Mainor', note: 'Applied higher education' },
  { years: '2020', place: 'Smirnov School', note: 'Basics of CG Drawing' },
]

const skills = [
  'User Experience Design',
  'User Interface Design',
  'Web Design',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Figma',
  'HTML5',
  'CSS',
  'Python',
  'AutoCAD',
]

const diplomas = [
  {
    src: './about/education-2.jpg',
    title: 'Art school diploma',
    detail: 'Tallinna vanalinna kunstikeskus, 2011',
  },
  {
    src: './about/education-1.jpg',
    title: 'Vocational certificate',
    detail: 'Software and database administration, 2016',
  },
]

const competitions = [
  {
    src: './about/competition-1.jpg',
    title: 'Linnalaps 2006',
    detail: 'Tubli laps, Linnaleht',
  },
  {
    src: './about/competition-2.jpg',
    title: 'Honorable mention',
    detail: 'International Environmental Children’s Drawing Contest, 2006',
  },
]

function About({ onOpen }: { onOpen: (sources: string[], index: number) => void }) {
  return (
    <div className="wrap story">
      <section className="profile">
        <figure className="portrait">
          <img src="./about/portrait.jpg" alt="Erik Sabin" />
        </figure>
        <div>
          <p className="kicker">About</p>
          <h1>Erik Sabin</h1>
          <p className="lede">I'm Erik Sabin, I am 30 years old. Originally from Estonia.</p>
          <p>I graduated from Eesti Ettevõtluskõrgkool Mainor.</p>
          <p>I'm study web design.</p>
        </div>
      </section>

      <section className="split">
        <div>
          <h2>Education</h2>
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.years + item.place}>
                <span className="years">{item.years}</span>
                <span>
                  <strong>{item.place}</strong>
                  <span className="note">{item.note}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2>Skills</h2>
          <ul className="skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <RecordGroup title="My education" items={diplomas} onOpen={onOpen} />
      <RecordGroup title="Participation in competitions" items={competitions} onOpen={onOpen} />
    </div>
  )
}

function RecordGroup({
  title,
  items,
  onOpen,
}: {
  title: string
  items: { src: string; title: string; detail: string }[]
  onOpen: (sources: string[], index: number) => void
}) {
  const sources = items.map((item) => item.src)
  return (
    <section className="records">
      <h2>{title}</h2>
      <div className="record-grid">
        {items.map((item, index) => (
          <figure className="record" key={item.src}>
            <button type="button" aria-label={item.title} onClick={() => onOpen(sources, index)}>
              <img src={item.src} alt={`${item.title}. ${item.detail}`} />
            </button>
            <figcaption>
              <span>{item.title}</span>
              {item.detail}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [ready, setReady] = useState(false)

  return (
    <div className="wrap contact-page">
      <div className="contact-grid">
        <div>
          <p className="kicker">Contact</p>
          <h1>Let’s work together.</h1>
          <p className="contact-lead">
            For a commission, a collaboration, or a question about the work.
          </p>
          <a className="contact-mail" href="mailto:krokoba4ka@gmail.com">
            krokoba4ka@gmail.com
          </a>
          <div className="contact-links">
            <a href="https://www.facebook.com/roy.krontju/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/erik-sabin-990b0312b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault()
            const subject = encodeURIComponent(`Portfolio message from ${name}`)
            const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
            window.location.href = `mailto:krokoba4ka@gmail.com?subject=${subject}&body=${body}`
            setReady(true)
          }}
        >
          <label className="field">
            <span>Your name</span>
            <input
              name="name"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="field">
            <span>Your email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="field">
            <span>Your message</span>
            <textarea
              name="message"
              required
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <button className="send" type="submit">
            Send message
          </button>
          {ready && (
            <p className="form-note" role="status">
              The message is ready in your email app. Send it from there.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

function readPage(): PageId {
  const id = window.location.hash.replace(/^#\/?/, '')
  return pages.some((page) => page.id === id) ? (id as PageId) : 'home'
}

function pageLabel(id: PageId) {
  return pages.find((page) => page.id === id)?.label ?? 'Works'
}

export default function App() {
  const [page, setPage] = useState<PageId>(readPage)
  const [worksOpen, setWorksOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const [viewer, setViewer] = useState<string[]>([])
  const worksRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLElement>(null)

  const pageImages =
    page === 'home' || page === 'about' || page === 'contact' ? [] : (works[page] ?? [])
  const images = viewer.length > 0 ? viewer : pageImages

  const openViewer = (sources: string[], index: number) => {
    setViewer(sources)
    setActive(index)
  }

  const closeViewer = () => {
    setActive(null)
    setViewer([])
  }

  useEffect(() => {
    const sync = () => {
      setPage(readPage())
      setWorksOpen(false)
      setNavOpen(false)
      setActive(null)
      setViewer([])
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (page !== 'home') {
      root.style.setProperty('--fade', '1')
      return
    }

    const update = () => {
      const intro = introRef.current
      if (!intro) return
      const header = document.querySelector('.header')
      if (header instanceof HTMLElement) {
        root.style.setProperty('--header-space', `${header.offsetHeight}px`)
      }
      const distance = intro.offsetHeight - window.innerHeight
      const start = Math.max(0, intro.offsetTop)
      const linear =
        distance <= 0 ? 0 : Math.min(1, Math.max(0, (window.scrollY - start) / distance))
      const held = Math.min(1, Math.max(0, (linear - 0.42) / 0.58))
      const eased = held * held * (3 - 2 * held)
      root.style.setProperty('--fade', eased.toFixed(3))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [page])

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!worksRef.current?.contains(event.target as Node)) setWorksOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setWorksOpen(false)
        setNavOpen(false)
        closeViewer()
      }
      if (event.key === 'ArrowRight') {
        setActive((index) => (index === null ? index : (index + 1) % images.length))
      }
      if (event.key === 'ArrowLeft') {
        setActive((index) =>
          index === null ? index : (index - 1 + images.length) % images.length,
        )
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length])

  useEffect(() => {
    document.body.style.overflow = active === null ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  const lead = [
    'ps-elk.jpg',
    'ai-owl.png',
    'web-powerbank.png',
    'web-mori.png',
    'art-banner.png',
    'art-grimoire.png',
    'art-citadel.jpg',
  ]
  const widePieces = new Set([
    'web-powerbank.png',
    'web-mori.png',
    'web-dashboard.png',
    'art-banner.png',
    'art-grimoire.png',
    'art-citadel.jpg',
    'ps-city.jpg',
    'ps-whale.jpg',
    'ps-forest.jpg',
  ])
  const tallPieces = new Set(['ps-elk.jpg', 'ai-owl.png', 'ai-lion.png', 'ai-stag.png', 'ai-skull.png'])
  const seen = new Set<string>()
  const pieceOrder = [
    'photoshop',
    'illustrator',
    'web',
    'traditional-artwork',
    'figma',
    'work-process',
    'project',
    'orders',
  ]
  const pieces = pieceOrder.flatMap((id) => {
    const item = workPages.find((page) => page.id === id)
    if (!item) return []
    return (works[item.id] ?? []).flatMap((src) => {
      const name = decodeURIComponent(src.split('/').pop() ?? src)
      if (seen.has(name)) return []
      seen.add(name)
      const shape = widePieces.has(name) ? 'is-wide' : tallPieces.has(name) ? 'is-tall' : ''
      return [{ ...item, src, name, shape }]
    })
  })
  pieces.sort((a, b) => {
    const aIndex = lead.indexOf(a.name)
    const bIndex = lead.indexOf(b.name)
    if (aIndex === -1 && bIndex === -1) return 0
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  })

  return (
    <div className="site">
      <header className="header">
        <div className="wrap header-bar">
          <a className="brand" href="#/">
            <p className="brand-name">Erik Sabin</p>
            <p className="brand-role">Web designer, computer graphic designer</p>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            {navOpen ? 'Close' : 'Menu'}
          </button>

          <nav className={navOpen ? 'nav is-open' : 'nav'} aria-label="Site">
            <div className="works" ref={worksRef}>
              <button
                className="works-button"
                type="button"
                aria-expanded={worksOpen}
                aria-current={page !== 'about' && page !== 'contact' ? 'page' : undefined}
                onClick={() => setWorksOpen((open) => !open)}
              >
                Works
                <span className="caret" aria-hidden="true" />
              </button>
              {worksOpen && (
                <ul className="works-menu">
                  {workPages.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#/${item.id}`}
                        aria-current={page === item.id ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <a
              className="nav-link"
              href="#/about"
              aria-current={page === 'about' ? 'page' : undefined}
            >
              About
            </a>
            <a
              className="nav-link"
              href="#/contact"
              aria-current={page === 'contact' ? 'page' : undefined}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="stage">
        {page === 'home' ? (
          <>
            <section className="intro" ref={introRef}>
              <img className="hero-art" src="./hero-crocodile.jpg" alt="" />
              <div className="wrap intro-copy">
                <p>I'm Erik Sabin, I am 30 years old. Originally from Estonia.</p>
                <p>I graduated from Eesti Ettevõtluskõrgkool Mainor.</p>
                <p>I'm study web design.</p>
              </div>
            </section>

            <section className="catalogue">
              <div className="wrap">
                <h2>Works</h2>
                <div className="collage">
                  {pieces.map((item) => (
                    <a
                      key={item.src}
                      className={item.shape ? `piece ${item.shape}` : 'piece'}
                      href={`#/${item.id}`}
                    >
                      <img src={item.src} alt="" />
                      <span className="piece-label">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : page === 'about' ? (
          <About onOpen={openViewer} />
        ) : page === 'contact' ? (
          <Contact />
        ) : (
          <div className="wrap">
            <h1 className="page-title">{pageLabel(page)}</h1>
            {pageImages.length > 0 && (
              <div className="gallery">
                {pageImages.map((src, index) => (
                  <button
                    key={src}
                    className="frame"
                    type="button"
                    aria-label={`View work ${index + 1}`}
                    onClick={() => openViewer(pageImages, index)}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="wrap footer-bar">
          <div>Copyright © 2020–2026 Erik Sabin</div>
          <div className="socials">
            <a href="https://www.facebook.com/roy.krontju/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/erik-sabin-990b0312b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {active !== null && images[active] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Work"
          onClick={closeViewer}
        >
          <button className="lightbox-close" type="button" onClick={closeViewer}>
            Close
          </button>
          {images.length > 1 && (
            <button
              className="lightbox-nav prev"
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                setActive((index) =>
                  index === null ? index : (index - 1 + images.length) % images.length,
                )
              }}
            >
              Prev
            </button>
          )}
          <img src={images[active]} alt="" onClick={(event) => event.stopPropagation()} />
          {images.length > 1 && (
            <button
              className="lightbox-nav next"
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                setActive((index) => (index === null ? index : (index + 1) % images.length))
              }}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  )
}
