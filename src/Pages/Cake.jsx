/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react'

/**
 * Components
 */
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Cake = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <h1>Work Off Your Cake Case Study</h1>
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default Cake