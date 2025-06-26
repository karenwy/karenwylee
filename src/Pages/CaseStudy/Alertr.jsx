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

const Alertr = () => {
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
            <h1 className='headline-1 mb-2'>Case Study: Alertr - Revolutionising Product Tracking and Sale Alerts</h1>
            <div className="flex flex-wrap items-center gap-2 mb-8">
                {
                  works[2].tags.map((label, key) => (
                    <span key={key} className="h-8 text-sm text-zinc-50 bg-violet-300/50 grid items-center px-3 rounded-lg">
                      {label}
                    </span>
                  ))
                }
                <span className="h-8 text-sm ring-1 ring-inset ring-violet-300/50 grid items-center px-3 rounded-lg">
                  <a href="https://alertr.co.uk/" target='_blank'>Visit site 
                  <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">
                    open_in_new
                  </span>
                  </a>
                </span>
            </div>
                     
            <div className='grid place-items-center md:grid-cols-2 gap-2'>
              <video className='w-[450px] rounded-xl mb-4' controls autoPlay muted playsInline>
                <source src="/images/alertr-howto-web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img className='w-[450px] rounded-xl mb-4' src="/images/alertr-mockups-devices-mix-square.png" alt="alertr site mockup devices mix" />
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-2xl md:p-12 mb-4 text-zinc-300 md:text-lg">
              <p>Alertr aims to make online shopping smarter, more convenient, and cost-effective. By offering users an easy-to-use tool to track products and get real-time alerts when prices drop.</p>
              <a href="https://alertr.co.uk/" target="_blank" className='underline'>Visit site <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">open_in_new</span></a>
            </div>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Challenge</h2>
              <p className='mb-2'>With a growing number of online stores and fluctuating prices, consumers face the challenge of finding the best deals on products they want to purchase. Many shoppers often waste time checking websites for price updates or miss out on discounts altogether.</p>
              <p>Key challenges:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Manual Price Monitoring</b>: Consumers often need to monitor prices across multiple websites, which can be time-consuming and inefficient. </li>
                <li><b>Missed Sales</b>: Users risk missing out on significant price drops or limited-time offers.</li>
              </ul>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6' id="solution">
              <h2 className='headline-2 mb-4'>Solution</h2>
              <p className='mb-2'>Alertr addresses these challenges by providing an intuitive platform that tracks products and alerts users when prices drop. The system is designed to make the shopping process more efficient and user-friendly, ensuring that customers never miss out on the best deals again.</p>
              <p>Core features:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Effortless Product Tracking</b>: Users can add any product they're interested in, and Alertr will automatically track it.</li>
                <li><b>Real-Time Sale Alerts</b>: When the price of a tracked product drops, Alertr notifies users instantly, via email.</li>
                <li><b>Customisable Alerts</b>: Alertr allows users to set personalised thresholds, so they only receive alerts when a product reaches a price they're willing to pay.</li>
              </ul>
            </div>
            <div className='mb-4 reveal-up'>
              <img src="/images/alertr-mockups-devices-1.png" alt="alertr site mockup devices 1" />
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Design & User Experience</h2>
              <p className='mb-2'>The front-end of Alertr is designed to be as intuitive and responsive as possible, offering users an easy way to manage their watchlist, view price history, and customise their alerts.</p>
              <p>Key design elements include:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Dashboard</b>: Users can view a list of all tracked products, see the latest price changes, and configure their alert preferences from the dashboard.</li>
                <li><b>Price History</b>: Users can view historical price trends (from when the product was first added either by another user or the current user),helping them make informed decisions about when to purchase.</li>
                <li><b>Responsive Design</b>: The platform is optimised for all devices (desktop, table or mobile), ensuring that the experience is seamless for all users.</li>
              </ul>
              <p className='mt-4 mb-2'><b>User Authentication & Security</b></p>
              <p>Alert employs OAuth 2.0 for secure user authentication and SSL encryption to protect user data. All sensitive information, such as account details and tracking preferences, is stored securely in the backend.</p>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Technical Implementation</h2>
              <p className='mb-2'>Alertr isn't just an easy-to-use platform for consumers; it also boasts a sophisticated technical infrastructure that ensures accurate tracking and seamless alerts for users. Below is an overview of the technical implementation that powers Alertr's innovative product tracking and price alert system.</p>
              <p className='mb-2'>Alertr's product tracking system is the heart of its functionality. To ensure accurate price monitoring across a wide variety of online retailers, Alertr uses advanced web scraping and API integrations.</p>
              <p>Price Comparison Algorithm: When a price drop is detected, Alertr compares it to the last known price. If the new price meets the user's alert price, the system triggers a notification.</p>
              <p>To bring the project to life, we used the following technologies:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Frontend Technologies</b>: HTML, CSS, JavaScript and jQuery</li>
                <li><b>Backend Technologies</b>: PHP, MySQL for data gathering and processing</li>
                <li><b>Mobile-Responsive Design</b>: The website is fully responsive, making it acessible for all users  from any device (desktop, tablet, or smartphone).</li>
              </ul>
            </div>
            <div className='mb-4 reveal-up'>
              <img src="/images/alertr-mockups-devices-2.png" alt="alertr site mockup devices 2" />
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Possible improvements/Next stage of project</h2>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li>Broader Retailer Integration: Expand its partnerships with more online retailers, providing even more product tracking options and better price coverage.</li>
                <li>Mobile App: Provide an even more accessible and convenient shopping experience for users on the go.</li>
              </ul>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <h3 className='mb-6'>Start tracking and get the best deals now on <a href="https://alertr.co.uk" target="_blank" className='underline'>https://alertr.co.uk</a>.</h3>
          </div>
        </section>
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default Alertr