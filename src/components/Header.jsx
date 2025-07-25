/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState } from "react"

/**
 * Components
 */
import Navbar from "./Navbar"

const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center lg:px-6 lg:grid lg:grid-cols-[1fr_max-content_1fr]">
        <h1>
          <a href="/" className="logo">
            {/* <img src="/images/icon-bg-black.png" width={40} height={40} alt="Karen Lee"></img> */}
            &lt; karen lee &gt;
          </a>
        </h1>
        <div className="relative lg:justify-self-center">
          {/* On click toggle between states (open and close navbar) */}
          <button className="menu-btn lg:hidden!" onClick={() => setNavOpen((prev) => !prev)}>
            <span className="material-symbols-rounded">
              {/* switch between close and menu icons when navbar open and closed */}
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Navbar NavOpen={navOpen} />
        </div>
        <a href='#footer' className="btn btn-secondary max-lg:hidden! lg:justify-self-end">
          Contact Me
        </a>
      </div>
    </header>
  )
}

export default Header