export default function Home() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">TRANSFORMERS HUB</div>
        <nav>
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">New Arrivals</a>
          <a href="#">Locations</a>
        </nav>
        <button className="btn-cta">Shop Now</button>
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
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Shop Now
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
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

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">FAN FAVORITES</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              View All Collectibles →
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Fan Favorite</span>
              <img
                src="/optimus-prime.png"
                alt="Optimus Prime"
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
                  <h3>Optimus Prime</h3>
                  <span className="price">$14</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  The iconic Autobot leader collectible, ready to command your collection and lead the battle.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Limited Edition
              </span>
              <img
                src="/bumblebee.png"
                alt="Bumblebee"
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
                  <h3>Bumblebee</h3>
                  <span className="price">$18</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  The legendary yellow Autobot collectible, packed with personality and ready to roll out.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Collector's Pick
              </span>
              <img
                src="/megatron.png"
                alt="Megatron"
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
                  <h3>Megatron</h3>
                  <span className="price">$12</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  The formidable Decepticon leader collectible, forged for fans who choose power over peace.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">CHOOSE YOUR SIDE.</h2>
            <p className="vibe-text">
              Enter the Transformers universe through collectible figures, iconic characters, and legendary battles
              between Autobots and Decepticons. Pick your allegiance, build your collection, and prepare to roll out.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Our Universe
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @TRANSFORMERS.HUB
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="/transformers-gallery-1.png"
                alt="Insta 1"
              />
            </div>
            <div className="social-item">
              <img
                src="/transformers-gallery-2.png"
                alt="Insta 2"
              />
            </div>
            <div className="social-item">
              <img
                src="/transformers-gallery-3.png"
                alt="Insta 3"
              />
            </div>
            <div className="social-item">
              <img
                src="/transformers-hero.png"
                alt="Insta 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
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
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Shop
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Collections
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
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
          <span>© 2025 TRANSFORMERS HUB</span>
          <span>DESIGNED BY 1UI.DEV & BUILT USING v0</span>
          <span>IG / TW / TK</span>
        </div>
      </footer>
    </>
  )
}
