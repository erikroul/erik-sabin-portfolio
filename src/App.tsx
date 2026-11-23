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
  const worksRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLElement>(null)

  const images = page === 'home' || page === 'about' || page === 'contact' ? [] : (works[page] ?? [])

  useEffect(() => {
    const sync = () => {
      setPage(readPage())
      setWorksOpen(false)
      setNavOpen(false)
      setActive(null)
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
        setActive(null)
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

  const covers = workPages.flatMap((item) => {
    const src = works[item.id]?.[0]
    return src ? [{ ...item, src }] : []
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
                <p>I'm Eric Sabin, I am 30 years old. Originally from Estonia.</p>
                <p>I graduated from Eesti Ettevõtluskõrgkool Mainor.</p>
                <p>I'm study web design.</p>
              </div>
            </section>

            <section className="catalogue">
              <div className="wrap">
                <h2>Works</h2>
                <div className="covers">
                  {covers.map((item) => (
                    <a key={item.id} className="cover" href={`#/${item.id}`}>
                      <span className="cover-frame">
                        <img src={item.src} alt="" />
                      </span>
                      <span className="cover-label">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="wrap">
            <h1 className="page-title">{pageLabel(page)}</h1>
            {images.length > 0 && (
              <div className="gallery">
                {images.map((src, index) => (
                  <button
                    key={src}
                    className="frame"
                    type="button"
                    aria-label={`View work ${index + 1}`}
                    onClick={() => setActive(index)}
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
          onClick={() => setActive(null)}
        >
          <button className="lightbox-close" type="button" onClick={() => setActive(null)}>
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
