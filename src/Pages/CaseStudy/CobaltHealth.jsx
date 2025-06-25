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

const CobaltHealth = () => {
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
            <h1 className='headline-1 mb-2'>Case Study: Cobalt Health - Diagnostic imaging</h1>
            <div className="flex flex-wrap items-center gap-2 mb-8">
                {
                  works[3].tags.map((label, key) => (
                    <span key={key} className="h-8 text-sm text-zinc-50 bg-violet-300/50 grid items-center px-3 rounded-lg">
                      {label}
                    </span>
                  ))
                }
                <span className="h-8 text-sm ring-1 ring-inset ring-violet-300/50 grid items-center px-3 rounded-lg">
                  <a href="https://www.cobalthealth.co.uk/" target='_blank'>Visit site 
                  <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">
                    open_in_new
                  </span>
                  </a>
                </span>
            </div>
            <div className='mb-4'>
              <img src='/images/cobalt-health-mockups-devices-mix.png' alt="Cobalt Health site mockups devices mix"/>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-2xl md:p-12 mb-4 text-zinc-300 md:text-lg">
              <p>Cobalt Health (Cobalt) is a medical charity providing diagnostic imaging to support the NHS and other healthcare providers, using the very latest state-of-the-art technology. They help 130,000 patients each year through their imaging centres in Cheltenham and Birmingham, using mobile MRI, PET/CT and CT scanners.</p>
              <a href="https://www.cobalthealth.co.uk/" target="_blank" className='underline'>Visit site <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">open_in_new</span></a>
            </div>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Main site</h2>
              <p className='mb-2'>We designed and developed a new website for Cobalt on the WordPress Content Management System (CMS). Using a popular CMS allowed us to include lots of required functionality which could be easily updated over time. It also allows Cobalt's internal team to make edits to the content very simply and quickly.</p>
              <p className='mb-4'>When we started the project we studied the original website's research and statistics, and created a more modern site that improved user experience and made the content easier to digest. To do this we focused on making important CTAs stand out, added user-friendly navigation, included interactive elements such as animation and condensed down the amount of content on the site.</p>
              <p>The site can be viewed here: <a href="https://www.cobalthealth.co.uk/" target='_blank' className='underline'>https://www.cobalthealth.co.uk/</a></p>
            </div>
            <div className='mb-4 reveal-up'>
              <img src='/images/cobalt-health-mockups-devices-1.png' alt="Cobalt Health site mockups devices 1"/>
            </div>
            <div className='mb-4 reveal-up'>
              <img src='/images/cobalt-health-mockups-devices-2.png' alt="Cobalt Health site mockups devices 2"/>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Photo Competition Subdomain</h2>
              <p className='mb-2'>I also built a separate standalone site for Cobalt's charity “Capture a Moment for Cobalt” photography competition on a subdomain. The photo competition raised money to support teenagers and young adults with cancer by providing a specialist nurse.</p>
              <p className='mb-4'>For this project I needed to create different access for different users to enable the submission, approval, and judging process. Firstly, I build a publicly accessible gallery of submissions; these submissions are only visible if an admin user has approved this. Secondly, I developed a password protected page that allows users to upload their photos and information. I needed to make sure the uploaded files were image formats and that each photo had a title to describe the photo. Then, I created another password protected page for the admin dashboard. The admin dashboard includes all the submissions and information, and the admins can approve photos to be added to the public gallery page and the judging page. The admin dashboard also shows how many votes each photo has received, which will be used to announce the winner. Lastly, the judges page - each judge has their own password protected dashboard that allows them to view the photo submissions (no user information) and enables them to make their vote.</p>
              <p>The site can be viewed here: <a href="https://photocompetition.cobalthealth.co.uk/" target='_blank' className='underline'>https://photocompetition.cobalthealth.co.uk/</a></p>
            </div>
          </div>
        </section>
      <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default CobaltHealth