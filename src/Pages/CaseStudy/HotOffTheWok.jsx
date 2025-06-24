/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */

gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies


/**
 * Components
 */
import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { works } from '../../components/Work';

const HotOffTheWok = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    //console.log(elements);
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-100 bottom',
          end: 'bottom 80%',
          scrub: true, 
          //markers: true
        },
        y: 0,
        opacity: 1, 
        duration:1, 
        ease: 'power2.out'
      })
    });
  })

  return (
    <ReactLenis root>
      <Header />
      <main>
        <section id="CaseStudy" className="section">
          <div className="container">
            <h1 className='headline-1 mb-2'>Case Study: Hot Off the Wok - Lee Kum Kee</h1>
            <div className="flex flex-wrap items-center gap-2 mb-8">
                {
                  works[5].tags.map((label, key) => (
                    <span key={key} className="h-8 text-sm text-zinc-50 bg-violet-300/50 grid items-center px-3 rounded-lg">
                      {label}
                    </span>
                  ))
                }
                <span className="h-8 text-sm ring-1 ring-inset ring-violet-300/50 grid items-center px-3 rounded-lg">
                  <a href="https://hotoffthewok.co.uk/" target='_blank'>Visit site 
                  <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">
                    open_in_new
                  </span>
                  </a>
                </span>
            </div>
            <video className="rounded-xl mb-4 flex justify-center" controls autoPlay muted>
              <source src="/images/hot-off-the-wok-vid-compressed.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="bg-zinc-800/50 p-6 rounded-2xl md:p-12 mb-4 text-zinc-300 md:text-lg">
              <p className='mb-2'>Lee Kum Kee (LKK) is a global sauce brand, focusing heavily on authentic Asian and Chinese sauces. Their are the inventors of Oyster Sauce. LKK sauces are a popular choice and are available in all leading supermarket chains, including Tesco, Sainsbury's, Waitrose, Asda, Morrisons as well as all Chinese grocery shops and cash and carries.</p>
              <p>Hot Off the Wok is a standalone site, focusing on the mini-series with celebrity chef Ching He Huang.</p>
              <a href="https://hotoffthewok.co.uk/" target="_blank" className='underline'>Visit site <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">open_in_new</span></a>
            </div>
            <div className='reveal-up mb-6'>
              <p className='mb-2'>When LKK collaborated with celebrity chef Ching He Huang on a 'Hot Off the Wok' mini-series we helped create a site focusing on this series.</p>
              <p className='mb-2'>This series included video recipes demonstrated by chefs in popular Hong Kong Restaurants, Ching's own recipes and recipes inspired by LKK sauces.</p>
              <p className='mb-2'>For this series we created a landing page with data capture functionality, for a competition campaign to win either plane tickets to Hong Kong, dining experience in London for 2 or exclusive Lee Kum Kee gift sets. This was used to gain more brand awareness in the UK and to increase the size of their mailing list. The website features the form to enter the competition, the video recipes mentioned above and some information about celebrity chef Ching He Huang and LKK as a brand.</p>
              <p>The site can be viewed here: <a href="https://hotoffthewok.co.uk/" target='_blank' className='underline'>https://hotoffthewok.co.uk/</a></p>
            </div>
          </div>
        </section>
      <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default HotOffTheWok