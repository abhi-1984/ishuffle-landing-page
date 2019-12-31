import React from 'react';
import './styles/main.scss';
import { Logo } from './components/Icons';
import ui from './assets/ui.png';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="wrapper">
          <Logo />
          <div className="links">
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/intent/tweet?text=iShuffle%20-%20A%20music%20controller%20for%20Firefox%20by%20%40_abhiii"
            >
              Tweet
            </a>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.origine.tech/"
            >
              About
            </a>
          </div>
        </div>
      </nav>

      <section className="main">
        <div className="wrapper">
          <img className="app-screenshot" src={ui} alt="iShuffle" />
          <div className="copy">
            <h1 className="title">
              Listen to your favorite music, in perfect harmony.
            </h1>
            <p className="description">
              Seamlessly connect with Apple Music, Spotify, SoundCloud or
              YouTube and play your favorite artist’s latest releases,
              playlists, songs and albums from any page.
            </p>
            <motion.a
              className="cta"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.96,
              }}
              href="https://addons.mozilla.org/firefox/downloads/file/3476701/ishuffle-0.0.3-fx.xpi?src=devhub"
            >
              Get iShuffle for Firefox
            </motion.a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrapper">
          <div className="copyright">©2019 iShuffle · All Right Reserved.</div>
          <a className="credit" href="https://www.twitter.com/_abhiii">
            Designed by Abhi
          </a>
        </div>
      </footer>

      <a
        className="product-hunt-link"
        href="https://www.producthunt.com/posts/ishuffle?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ishuffle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=179412&theme=light"
          alt="iShuffle - Listen to your favorite music, in perfect harmony. | Product Hunt Embed"
          style={{ width: '240px', height: '50px' }}
          width="240px"
          height="50px"
        />
      </a>
    </div>
  );
}

export default App;
