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
import { ButtonOutline } from '../../components/Button';

const Cake = () => {
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
            <h1 className='headline-1 mb-2'>Case Study: Cake Calorie Calculator - "Work Your Cake Off"</h1>
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {
                works[0].tags.map((label, key) => (
                  <span key={key} className="h-8 text-sm text-zinc-50 bg-violet-300/50 grid items-center px-3 rounded-lg">
                    {label}
                  </span>
                ))
              }
              <span className="h-8 text-sm ring-1 ring-inset ring-violet-300/50 grid items-center px-3 rounded-lg">
                <a href="https://workyourcakeoff.co.uk/" target='_blank'>Visit site 
                <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">
                  open_in_new
                </span>
                </a>
              </span>
            </div>
            
            <div className='grid place-items-center md:grid-cols-2 gap-2'>
              <video className='w-[450px] rounded-xl mb-4' controls autoPlay muted playsInline>
                <source src="/images/cake-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video className='w-[450px] rounded-xl mb-4 hidden md:block' controls autoPlay muted loop playsInline>
                <source src="/images/cake-load-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-2xl md:p-12 mb-4 reveal-up">
                <p className="text-zinc-300 md:text-lg mb-2">
                  The "Cake Calorie Calculator" website is a playful yet insightful tool designed to help users estimate how long they would need to type to burn off the calories from a variety of snacks that may be consumed at the office (or home office). 
                </p>
                <a href="https://workyourcakeoff.co.uk/" target="_blank" className='underline'>Visit site <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">open_in_new</span></a>
            </div>
            <div className='mb-6 reveal-up'>
              <p>This was created in response to a current topic of interest and needed to be developed swiftly as a reactive project in collaboration with the PR team. The site was completed in just two days, which included design prototypes and development. I worked closely with the designer to ensure that both the visual design and functionality met a high standard.</p>
            </div>
          <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Challenge</h2>
              <p className='mb-2'>In today's fast-paced office environments, many people indulge in sugary snacks during the work day. </p>
              <p>The challenge was to create an interactive platform that would:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Raise Awareness</b>: Show users how many calories these snacks have.</li>
                <li><b>Fun results</b>: Show how long you'll have to type for on a keyboard to burn this off.</li>
                <li><b>Provide Entertainment</b>: Make the experience of calculating and burning calories fun and engaging, so users are more likely to return to the site.</li>
                <li><b>Educate in an Easy-to-Understand Way</b>: Avoid overwhelming users with technical information, and instead use simple, relatable terms.</li>
              </ul>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Solution</h2>
              <p className='mb-2'>The solution came in the form of an interactive web-based calculator that allows users to input the type of cake or snack they've consumed and receive an estimated calculation of how long they'd need to type to burn those calories off. </p>
              <p>Key features of the solution:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Snack Selection</b>: A list of cakes and snacks commonly found in office environments, such as a victoria sponge (there's at least one birthday each month!), cheeky weekend brownie from the office baker, or a simple all-round favourite; chocolate digestive biscuit.</li>
                <li><b>Typing Speed</b>: The results show three speed variations to accommodate for different levels of typing (calculated using standard typing metrics), to estimate how long they would need to type to work off the snack.</li>
                <li><b>Tongue and cheek</b>: The fun element comes through in the form of engaging illustrations and informal language. For instance, the typing speed/level of expertise is denoted as sloth, basis b*tch and fast af.</li>
              </ul>
            </div>
            
            <div className='mb-4 reveal-up'>
              <img src='/images/cake-mockups-devices-1.png' alt="Cake calculator site mockups devices 1"/>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Design & User Experience</h2>
              <p className='mb-2'>The design of the website is simple, clean, and fun, incorporating bright colors and playful fonts that reflect the lighthearted nature of the site. A user-friendly interface ensures that visitors don't have to scroll or click through too many pages to get to the results.</p>
              <p>Key design elements include:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Minimalist Interface</b>: A single page design where users can easily access the calculator and its features. Snack selection is in the center of the homepage and with one click you are taken to the results page.</li>
                <li><b>Visual Feedback</b>: Once the user has selected the snack of choice, a short loading animation is presented to show the calculations are being processed, the animation is a cake getting eaten to fit the theme of the site.</li>
                <li><b>Engaging Graphics</b>: Visuals of different cakes and snack items create an immersive and fun atmosphere, making the user experience more enjoyable.</li>
              </ul>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Technical Implementation</h2>
              <p className='mb-2'>The website's core function relies on a straightforward calculation mechanism based on calories, typing speed, and snack type.</p>
              <p>The following were used to bring this project to life:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Frontend Technologies</b>: HTML, CSS, JavaScript for smooth interaction and animations.</li>
                <li><b>Backend Technologies</b>: Basic calculations were handled through JavaScript functions, ensuring fast responses.</li>
                <li><b>Mobile-Responsive Design</b>: The website is fully responsive, making it easy for users to calculate their typing time from any device (desktop, tablet, or smartphone).</li>
              </ul>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Possible improvements/Next stage of project</h2>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li>Store snack selection and attributes in a database table, this will allow developers to make updates and add more options easier and quicker in the future.</li>
              </ul>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <h3 className='mb-6'>If you want to learn more or give it a try, visit <a href="https://workyourcakeoff.co.uk/" target="_blank" className='underline'>https://workyourcakeoff.co.uk/</a>.</h3>
          </div>
        </section>
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default Cake