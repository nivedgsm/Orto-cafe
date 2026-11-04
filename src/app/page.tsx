'use client';

import { useState } from 'react';
import { ArrowDownRight, ArrowRight, Instagram, MapPin, Menu as MenuIcon, Phone, X } from 'lucide-react';

const MAPS = 'https://www.google.com/maps/place/Orto+cafe/@25.1950095,55.2357981,17z';
const PHONE = '+97143455060';
const INSTAGRAM = 'https://www.instagram.com/ortodubai/';
const photos = [
  { src: 'https://thehuntr-prod.s3.me-central-1.amazonaws.com/places/632/gallery/orto-l8-22283.jpg', alt: 'Sculptural lounge seating and floor-to-ceiling windows at Orto' },
  { src: 'https://www.citysearch.ae/UF/Albums/40615/orto-cafe-dubai_29.jpg', alt: 'Orto iced coffee and matcha served on a branded tray' },
  { src: 'https://www.citysearch.ae/uf/albums/40615/orto-cafe-dubai_19.jpg', alt: 'Warm minimal lounge seating beside the canal' },
  { src: 'https://www.citysearch.ae/UF/Albums/40615/orto-cafe-dubai_9.jpg', alt: 'Outdoor terrace surrounded by greenery' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <div className="announcement"><span>JUMEIRAH, DUBAI</span><span>DAILY · 7:00 AM — 12:00 AM</span></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Orto Café home"><img src="/orto-wordmark.svg" alt="Orto" /></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#story" onClick={closeMenu}>OUR STORY</a><a href="#menu" onClick={closeMenu}>THE MENU</a><a href="#space" onClick={closeMenu}>THE SPACE</a><a href="#visit" onClick={closeMenu}>FIND US</a>
          <a className="nav-cta" href={MAPS} target="_blank" rel="noreferrer" onClick={closeMenu}>GET DIRECTIONS <ArrowRight size={14}/></a>
        </nav>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <MenuIcon/>}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">YOUR CORNER OF THE CITY</p>
          <h1>Coffee, made<br/><em>for lingering.</em> moments.</h1>
          <p className="hero-copy">A neighbourhood café by the water, made for your everyday pause.</p>
          <a className="button button-light" href="#story">STEP INSIDE <ArrowDownRight size={16}/></a>
        </div>
        <div className="hero-bottom"><span>25°11'42.0"N&nbsp; 55°14'08.9"E</span><span>JUMEIRAH · DUBAI</span></div>
        <div className="hero-index">01 <i/> 04</div>
      </section>

      <section className="intro section-pad" id="story">
        <div className="intro-label"><span className="eyebrow">A TABLE FOR EVERY DAY</span><span className="small-index">01 / YOUR DAILY LITTLE ESCAPE</span></div>
        <div className="intro-main"><h2>Make yourself<br/><em>at home.</em></h2><div className="intro-text"><p>Settle into a sunlit seat, order something you love and let the day find its own pace.</p><p>From the first pour to the last bite, we make room for the moments that make an ordinary day feel special.</p><a className="text-link" href={INSTAGRAM} target="_blank" rel="noreferrer">A LITTLE MORE ORTO <ArrowRight size={15}/></a></div></div>
        <div className="intro-image-wrap"><img src="https://www.citysearch.ae/uf/albums/40615/orto-cafe-dubai_17.jpg" alt="The Orto coffee bar and pastry counter"/><span>YOUR SEAT IN THE SUN</span></div>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="section-heading"><div><span className="eyebrow">FRESH FROM OUR KITCHEN</span><h2>A little something<br/><em>for every mood.</em></h2></div><p>Find your morning pick-me-up, a generous brunch or a sweet reason to stay.</p></div>
        <div className="menu-grid">
          <article className="menu-card menu-card-large"><div className="menu-photo coffee-photo"/><div className="menu-card-bottom"><span>01 — THE COFFEE BAR</span><h3>Your usual,<br/>done beautifully.</h3><p>Bold espresso, silky milk and chilled favourites, made just the way you like.</p></div></article>
          <article className="menu-card"><div className="menu-photo brunch-photo"/><div className="menu-card-bottom"><span>02 — BRUNCH & BITES</span><h3>Brunch is<br/>better together.</h3><p>Fresh, feel-good plates for long breakfasts and unhurried catch-ups.</p></div></article>
          <article className="menu-card"><div className="menu-photo sweet-photo"/><div className="menu-card-bottom"><span>03 — SOMETHING SWEET</span><h3>Save room<br/>for something sweet.</h3><p>A little indulgence to pair with your next coffee.</p></div></article>
        </div>
        <p className="menu-note">Our menu changes with the day. Ask our team what is fresh and in season.</p>
      </section>

      <section className="quote-band"><div className="quote-mark">“</div><p>Good things happen<br/><em>when you slow down.</em></p><span>COFFEE · COMPANY · CANAL VIEWS</span></section>

      <section className="space-section section-pad" id="space">
        <div className="space-heading"><span className="eyebrow">TAKE IN THE SURROUNDINGS</span><h2>Settle in<br/><em>and stay awhile.</em></h2><p>A favourite corner, a little greenery and the easy hum of the neighbourhood. There is always room to linger.</p></div>
        <div className="gallery-grid">
          {photos.map((photo, i) => <div className={`gallery-item gallery-${i+1}`} key={photo.src}><img src={photo.src} alt={photo.alt}/><span>0{i+1}</span></div>)}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-image" />
        <div className="visit-content"><span className="eyebrow light">COME ON IN</span><h2>Your next coffee<br/><em>is right here.</em></h2><p>395 Al Athar Street<br/>Jumeirah 2, Dubai, UAE</p><div className="visit-actions"><a className="button button-light" href={MAPS} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowRight size={16}/></a><a className="visit-phone" href={`tel:${PHONE}`}><Phone size={15}/> +971 4 345 5060</a></div><div className="hours"><span>EVERY DAY</span><strong>7:00 AM — 12:00 AM</strong></div></div>
      </section>

      <footer className="footer">
        <div className="footer-top"><img src="/orto-wordmark.svg" alt="Orto"/><p>Come for the coffee.<br/>Stay for the feeling.</p><a className="instagram-link" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={17}/> FOLLOW ALONG <ArrowUpRightFallback/></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} ORTO CAFÉ</span><span>JUMEIRAH, DUBAI</span><a href={MAPS} target="_blank" rel="noreferrer"><MapPin size={13}/> OPEN IN MAPS</a><a className="developer-credit" href="https://lightseagreen-raven-843615.hostingersite.com/" target="_blank" rel="noreferrer">DESIGNED &amp; DEVELOPED BY NIVED <ArrowRight size={12}/></a></div>
      </footer>
    </main>
  );
}
function ArrowUpRightFallback() { return <span aria-hidden="true">↗</span>; }
