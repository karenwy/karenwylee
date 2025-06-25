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

const TripMakes = () => {
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
            <h1 className='headline-1 mb-2'>Case Study: Trip Mates - Event Planner</h1>
            <div className="flex flex-wrap items-center gap-2 mb-8">
                {
                  works[1].tags.map((label, key) => (
                    <span key={key} className="h-8 text-sm text-zinc-50 bg-violet-300/50 grid items-center px-3 rounded-lg">
                      {label}
                    </span>
                  ))
                }
                <span className="h-8 text-sm ring-1 ring-inset ring-violet-300/50 grid items-center px-3 rounded-lg">
                  <a href="https://tripmates.co.uk/" target='_blank'>Visit site 
                  <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">
                    open_in_new
                  </span>
                  </a>
                </span>
            </div>
            <div className='mb-4'>
              <img src='/images/trip-mates-mockups-devices-mix.png' alt="trip mates mockups devices mix"/>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-2xl md:p-12 mb-4 text-zinc-300 md:text-lg">
              <p className='mb-2'>Trip Mates was created for our client, <a href="https://www.hotukdeals.com/" target='_blank' className='underline'>hotukdeals</a>. It was built to simplify the chaos of group holiday planning. Whether it's a weekend escape, a summer trip abroad, or a team-building retreat, Trip Mates helps users effortlessly align on destinations, dates, duration, activities, and budget. No more endless message threads, miscommunication, or indecision.</p>
              <p>Gathering all the submissions and summarising it, the tool slogan is; “Just tell us what information you need, and we'll handle the rest!”</p>
              <a href="https://tripmates.co.uk/" target="_blank" className='underline'>Visit site <span className="material-symbols-rounded text-lg! leading-5.5 ml-0.5" aria-hidden="true">open_in_new</span></a>    
            </div>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Challenge</h2>
              <p className='mb-2'>Planning a group holiday is often chaotic. Between multiple group chats, spreadsheets, scattered preferences, and indecisiveness, can quickly become a frustrating experience.  </p>
              <p>The challenge was to create a simple and easy to use application that would:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Centralise and concise communication</b>: Only necessary answers recorded all in one place. </li>
                <li><b>Honest answers</b>: All submissions are anonymous and contribute to the final summary. </li>
                <li><b>Event Summary</b>: Show the results of all submitted preferences.</li>
                <li><b>Reminders</b>: Emails sent to organiser and group members to update and remind them of the submission deadline.</li>
                <li><b>Engaging visuals</b>: Planning your trip should feel like part of the adventure — not like doing homework or filling out tax forms.</li>
              </ul>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Solution</h2>
              <p className='mb-2'>The solution was to create a simple and easy to use tool, without dull spreadsheets or endless text threads. Built with usability and responsiveness as the core features, submissions can be made from any device, whether they are in the comfort of their home or on the move.</p>
              <p>With this is mind, here are the key features:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Tailor made event</b>: Organisers can choose what questions to ask and the multiple choice options.</li>
                <li><b>Anonymous submissions</b>: Group members can answer honestly with no judgement, as the summary does not show who has answered what.</li>
                <li><b>Summary</b>: Once the deadline to submit preference has been reached, the application calculates the results by showing either the most popular answers, averages or a list of choices depending on what the questions are.</li>
                <li><b>Admin dashboard</b>: Allows organisers to see who has and hasn't submitted their preference yet, and view event summary once the deadline has been reached.</li>
                <li><b>Member dashboard</b>: Allows members to submit preferences at a later date and view event summary once the deadline has been reached.</li>
                <li><b>Email notifications</b>: Group members receive emails to remind them to submit their entries and the deadline to do so.</li>
                <li><b>Email summaries</b>: Trip organisers are sent emails to inform them how many people have or haven’t submitted entries.</li>
              </ul>
            </div>
            <div className='mb-4 reveal-up'>
              <img src='/images/trip-mates-mockups-devices-1.png' alt="trip mates mockups devices 1"/>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Design & User Experience</h2>
              <p className='mb-2'>Trip Mates was built with a mobile-first, intuitive interface to accommodate users planning on the go. The colour scheme and fonts have been chosen to create a fun atmosphere, for the joyous occasion and not to seem too serious and like a chore.</p>
              <p>Key design elements include:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Trip Creation Wizard</b>: A simple step-by-step flow to help organisers get started quickly.</li>
                <li><b>Multiple choice</b>: Making the process easier to complete and digest the different options.</li>
                <li><b>Colorful and simple illustrations</b>: Keeping the site light-hearted and adding some colour and visual without distracting the users.</li>
              </ul>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Technical Implementation</h2>
              <p className='mb-2'>The website works by gathering each person's preferences — things like trip duration, budgets, preferred activities, and even what they'd rather avoid — and then works out the most popular options, common ground, or a selection of choices that best suit the group's input.</p>
              <p>To bring the project to life, we used the following technologies:</p>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li><b>Frontend Technologies</b>: HTML, CSS, JavaScript and jQuery</li>
                <li><b>Backend Technologies</b>: PHP, MySQL for data gathering and processing</li>
                <li><b>Mobile-Responsive Design</b>: The website is fully responsive, making it acessible for all users  from any device (desktop, tablet, or smartphone).</li>
              </ul>
            </div>
            <div className='mb-4 reveal-up'>
              <img src='/images/trip-mates-mockups-devices-2.png' alt="trip mates mockups devices 1"/>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <div className='reveal-up mb-6'>
              <h2 className='headline-2 mb-4'>Possible improvements/Next stage of project</h2>
              <ul className='list-disc list-inside grid gap-2 mt-2'>
                <li>Native iOS and Android apps</li>
                <li>Integration with flight and hotel booking platforms</li>
                <li>Multi-language support for international users</li>
                <li>Mobile notifications/text for updates and deadline reminders</li>
              </ul>
            </div>
            <hr className="h-px mb-6 bg-zinc-600 border-0"></hr>
            <h3 className='mb-6'>Ready to take the stress out of group travel? Visit <a href="https://tripmates.co.uk" target="_blank" className='underline'>https://tripmates.co.uk</a> and start planning today.</h3>
          </div>
        </section>
      <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default TripMakes