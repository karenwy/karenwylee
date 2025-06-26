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

const OluOluFoods = () => {
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
            <h1 className='headline-1 mb-2'>Case Study: Olu Olu Foods - Authentic and ethically sourced Afro-Caribbean produce</h1>
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {
                works[4].tags.map((label, key) => (
                  <span key={key} className="h-8 text-sm text-zinc-50 bg-violet-300/50 grid items-center px-3 rounded-lg">
                    {label}
                  </span>
                ))
              }
              <span className="h-8 text-sm ring-1 ring-inset ring-violet-300/50 grid items-center px-3 rounded-lg">
                  <a href="https://oluolufoods.com/" target='_blank'>Visit site 
                  <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">
                    open_in_new
                  </span>
                  </a>
                </span>
            </div>
            <div className='mb-4'>
              <img src='/images/oluolu-mockup-devices-mix.png' alt="Olu Olu site mockups devices mix"/>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-2xl md:p-12 mb-4">
                <p className="text-zinc-300 md:text-lg">
                  Olu Olu Foods is a family-owned business with over 40 years experience supplying authentic Afro-Caribbean food products across the UK and beyond. As the brand grew in both retail and wholesale sectors, their digital presence needed to evolve too. 
                </p>
              <a href="https://oluolufoods.com/" target="_blank" className='underline'>Visit site <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">open_in_new</span></a>
            </div>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Challenge</h2>
              <p className='mb-2'>The existing website was dated, lacked eCommerce functionality, and didn't reflect the vibrant, community-driven ethos of the Olu Olu brand. </p>
              <p>The challenge was to create a modern, accessible online experience that:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li>Showcases their full product range clearly</li>
                <li>Tells the brand's story and heritage</li>
                <li>Offers an online shopping experience for both individual and wholesale customers - with a higher focus on B2C sales</li>
                <li>Promotes ethical sourcing and fair trade</li>
                <li>Feels bold, colourful, and culturally authentic</li>
              </ul>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Solution</h2>
              <p className='mb-2'>We designed and built a responsive, modern website that brings Olu Olu Foods' rich heritage and product offering to life. Using the popular eCommerce platform, Shopify. </p>
              <p>The solution focused on:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li>A newly established user-friendly product catalogue, sorted by snacks, sauces, pantry essentials and vegan options (large coconut range) - to name a few</li>
                <li>A fully integrated eCommerce platform allowing customers to shop online directly</li>
                <li>A visually rich design that reflects Afro-Caribbean culture, with warm colours, lifestyle imagery, and textures inspired by natural ingredients</li>
                <li>Dedicated space for wholesale enquiries and stockist listings</li>
                <li>In addition to the sales-focused pages, the site also features a wealth of content about Olu Olu's story, history, and their values and ethos</li>
                <li>Optimised SEO and content structure to improve discoverability and effectively communicate key information</li>
              </ul>
            </div>
            <div className='mb-4 reveal-up'>
              <img src='/images/oluolu-mockup-devices-1.png' alt="Olu Olu site mockups devices 1"/>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Design & User Experience</h2>
              <p>The new site was built with the following design goals in mind:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Vibrant visual identity</b>: Inspired by the warmth and colour of Afro-Caribbean cuisine and culture</li>
                <li><b>Clean, modern navigation</b>: Easy to browse by category, dietary preferences, or featured products</li>
                <li><b>Storytelling elements</b>: Sections highlighting Olu Olu's family roots, ethical sourcing, and community impact</li>
                <li><b>Ease of purchase</b>: A seamless shopping journey from discovery to checkout</li>
                <li><b>Interactive Elements</b>: Clear call-to-actions and subtle animations keep the user journey dynamic but not overwhelming, maintaining a balance between engagement and functionality</li>
              </ul>
            </div>
            <div className='mb-4 reveal-up'>
              <img src='/images/oluolu-mockup-devices-2.png' alt="Olu Olu site mockups devices 2"/>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Technical Implementation</h2>
              <p className='mb-2'>The website is built around a seamless eCommerce experience, featuring vibrant and authentic Afro-Caribbean produce that highlights the brand's cultural roots, ethical values, and culinary passion.</p>
              <p>The following were used to bring this project to life:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>ECommerce Platform</b>: Shopify integrated with custom storefront elements</li>
                <li><b>Analytics & Optimisation</b>: Google Analytics, Facebook Pixel, and structured metadata for product discovery</li>
                <li><b>Responsive Design</b>: A smooth, user-friendly experience across all devices, ensuring the site is accessible and easy to use for every visitor</li>
                <li><b>Payment gateway</b>: Stripe and PayPal</li>
                <li><b>Newsletter integration</b>: Mailchimp sign-up and campaign tracking</li>
              </ul>
            </div>
            <h3 className='mb-6'>Explore the rich and vibrant Afro-Caribbean culture and produce at <a href="https://oluolufoods.com/" target="_blank" className='underline'>oluolufoods.com</a>.</h3>
          </div>
        </section>
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default OluOluFoods