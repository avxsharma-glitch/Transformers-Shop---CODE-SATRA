"use client"

import { useMemo, useState } from "react"
import { Github, Linkedin } from "lucide-react"

const products = [
  {
    name: "Optimus Prime",
    category: "Autobots",
    tag: "Fan Favorite",
    price: 14,
    image: "/optimus-prime.png",
    alt: "Optimus Prime collectible",
    description: "The iconic Autobot leader collectible, ready to command your collection and lead the battle.",
  },
  {
    name: "Bumblebee",
    category: "Autobots",
    tag: "Limited Edition",
    price: 18,
    image: "/bumblebee.png",
    alt: "Megatron collectible",
    description: "The legendary yellow Autobot collectible, packed with personality and ready to roll out.",
  },
  {
    name: "Megatron",
    category: "Decepticons",
    tag: "Collector's Pick",
    price: 12,
    image: "/megatron.png",
    alt: "Megatron collectible",
    description: "The formidable Decepticon leader collectible, forged for fans who choose power over peace.",
  },
  {
    name: "Starscream",
    category: "Decepticons",
    tag: "New Arrival",
    price: 16,
    image: "/starscream.png",
    alt: "Starscream collectible",
    description: "The ambitious Decepticon seeker collectible, ready to bring aerial power to your lineup.",
  },
  {
    name: "Arcee",
    category: "Autobots",
    tag: "Fan Favorite",
    price: 15,
    image: "/arcee.png",
    alt: "Arcee collectible",
    description: "The fearless Autobot warrior collectible, bringing speed and precision to every mission.",
  },
]

export default function Home() {
  const [category, setCategory] = useState("All")
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState("featured")
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        category === "All" ||
        (category === "Decepticons" ? product.category === "Autobots" : product.category === category)
      const matchesSearch = product.name.toLowerCase().startsWith(query.toLowerCase())
      return matchesCategory && matchesSearch
    })

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price
      if (sort === "price-desc") return a.price - b.price
      return products.indexOf(a) - products.indexOf(b)
    })
  }, [category, query, sort])

  const openProductDetails = (product: (typeof products)[number]) => {
    setSelectedProduct(product.name === "Megatron" ? products[1] : product)
  }

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">TRANSFORMERS HUB</div>
        <nav id="mobile-navigation" className={mobileNavOpen ? "nav-open" : ""}>
          <a href="#collectibles" onClick={() => setMobileNavOpen(false)}>Shop</a>
          <a href="#gallery" onClick={() => setMobileNavOpen(false)}>Collections</a>
          <a href="/new-arrivals" onClick={() => setMobileNavOpen(false)}>New Arrivals</a>
          <a href="#locations" onClick={() => setMobileNavOpen(false)}>Locations</a>
        </nav>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          {mobileNavOpen ? "Close" : "Menu"}
        </button>
        <button
          className="btn-cta"
          onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
        >
          Shop Now
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              MORE THAN
              <br />
              MEETS <span>THE EYE</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Discover action figures, collectibles, and official-style merchandise featuring iconic Autobots and
              Decepticons, built for every true Transformers fan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white" }}
                onClick={() => document.getElementById("collectibles")?.scrollIntoView({ behavior: "smooth" })}
              >
                Shop Now
              </button>
              <button
                className="btn-cta"
                style={{ background: "white" }}
                onClick={() => document.getElementById("collectibles")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Collection
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ROLL OUT!
              <br />
              EVERY DAY
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              AUTOBOTS ASSEMBLE
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              BUILT FOR COLLECTORS
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; ★ MORE THAN MEETS THE EYE ★ COLLECT • TRANSFORM • REPEAT ★ AUTOBOTS & DECEPTICONS ★ ROLL OUT! ★
            MORE THAN MEETS THE EYE ★ COLLECT • TRANSFORM • REPEAT ★ AUTOBOTS & DECEPTICONS ★ ROLL OUT!
          </div>
        </div>

        <section id="collectibles" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">FAN FAVORITES</h2>
            <a
              href="#collectibles"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              View All Collectibles →
            </a>
          </div>

          <div className="shop-controls" aria-label="Product controls">
            <label>
              Search
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search collectibles"
              />
            </label>
            <label>
              Faction
              <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option>All</option>
                <option>Autobots</option>
                <option>Decepticons</option>
              </select>
            </label>
            <label>
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
              </select>
            </label>
          </div>

          <div className="menu-grid">
            {visibleProducts.map((product) => (
              <div
                className="menu-card"
                key={product.name}
                role="button"
                tabIndex={0}
                onClick={() => openProductDetails(product)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") openProductDetails(product)
                }}
              >
                <span
                  className="menu-tag"
                  style={{
                    background: product.name === "Bumblebee" ? "var(--secondary)" : undefined,
                    color: product.name === "Megatron" ? "var(--dark)" : undefined,
                  }}
                >
                  {product.tag}
                </span>
                <img
                  className={product.name === "Optimus Prime" || product.name === "Starscream" ? "portrait-product-image" : undefined}
                  src={product.image}
                  alt={product.alt}
                  decoding="async"
                />
                <div className="menu-card-body">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <h3>{product.name}</h3>
                    <span className="price">${product.price}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#666" }}>{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedProduct && (
            <div className="product-details" role="dialog" aria-label={`${selectedProduct.name} details`}>
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>
              <button className="btn-cta" onClick={() => setSelectedProduct(null)}>
                Close Details
              </button>
            </div>
          )}
        </section>

        <section id="universe" className="retro-vibe">
          <div>
            <h2 className="vibe-title">CHOOSE YOUR SIDE.</h2>
            <p className="vibe-text">
              Enter the Transformers universe through collectible figures, iconic characters, and legendary battles
              between Autobots and Decepticons. Pick your allegiance, build your collection, and prepare to roll out.
            </p>
            <a
              className="btn-cta"
              style={{ background: "var(--dark)", color: "white", borderColor: "white" }}
              href="/universe"
            >
              Our Universe
            </a>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section id="gallery" className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @TRANSFORMERS.HUB
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="/transformers-gallery-1.png"
                alt="Optimus Prime and Bumblebee in battle"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="social-item">
              <img
                src="/transformers-gallery-2.png"
                alt="Optimus Prime in Transformers: Age of Extinction artwork"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="social-item">
              <img
                src="/transformers-gallery-3.png"
                alt="Transformers One character poster"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="social-item">
              <img
                src="/transformers-hero.png"
                alt="Optimus Prime and Megatron facing off"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </main>

      <footer id="locations">
        <div>
          <div className="footer-logo">TRANSFORMERS HUB</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Your destination for Transformers merchandise, action figures, and collectibles for fans of every faction.
          </p>
        </div>
        <div className="footer-links">
          <h4>Nav</h4>
          <ul>
            <li>
              <a               href="#collectibles" style={{ color: "inherit", textDecoration: "none" }}>
                Shop
              </a>
            </li>
            <li>
              <a               href="#universe" style={{ color: "inherit", textDecoration: "none" }}>
                Collections
              </a>
            </li>
            <li>
              <a               href="#gallery" style={{ color: "inherit", textDecoration: "none" }}>
                New Arrivals
              </a>
            </li>
            <li>
              <a               href="#locations" style={{ color: "inherit", textDecoration: "none" }}>
                Locations
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Hours</h4>
          <ul>
            <li>Online: Open 24/7</li>
            <li>New drops: Every week</li>
            <li>Collector support: Always on</li>
            <li>Roll out: Worldwide</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2026 BUG BOUNTY</span>
          <span>DESIGNED BY ARYAN</span>
          <span style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <a
              href="https://github.com/avxsharma-glitch/Transformers-Shop---CODE-SATRA"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{ color: "inherit", display: "inline-flex" }}
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{ color: "inherit", display: "inline-flex" }}
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
          </span>
        </div>
        <form
          className="newsletter-form"
          onSubmit={(event) => {
            event.preventDefault()
            if (email.length > 3) setSubmitted(true)
          }}
        >
          <label htmlFor="collector-email">Get collector updates</label>
          <input
            id="collector-email"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setSubmitted(false)
            }}
            placeholder="Email address"
          />
          <button className="btn-cta" type="submit">
            Subscribe
          </button>
          {submitted && <span role="status">You&apos;re on the list.</span>}
        </form>
      </footer>
    </>
  )
}
