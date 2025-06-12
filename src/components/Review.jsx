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
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content: 'Karen and the team at 10Yetis are absolutely fantastic to work with. We worked with them to design and build a market-leading website to improve site navigation for our web users and they smashed the brief, and came up with some great ideas to support our objectives. They seamlessly integrated some third-party tools into the site and were happy to collaborate with our SEO specialist.  I would highly recommend them for any of your digital marketing needs.',
    name: 'Jamie Sansom',
    jobTitle: 'Digital Marketing Manager',
    company: 'Cobalt Health'
  },
  {
    content: 'We asked the team at 10 Yetis to create a new website for us in order to reflect a new strategic direction for our organisation. We are very pleased with what Karen, Geoff and their colleagues have come up with - they delivered a very professional looking and attractive product to a tight deadline and were an absolute pleasure to work with. Their ongoing support is brilliant too and they efficiently and competently deal with any of the more complex needs we have from time to time. No wonder 10 Yetis came highly recommended - brilliant agency!',
    name: 'Pierre du Bois',
    jobTitle: 'Strategic Lead: Communications, Marketing and Income',
    company: 'Paul Strickland Scanner'
  }
];

const Review = () => {
  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide', 
        start: '0 80%',
        end: 'bottom 80%',
        scrub: true,
        markers: true
      }, 
      x: -180
    })
  })

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Testimonials 
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({content, name, jobTitle, company}, key) => (
            <ReviewCard 
              key={key}
              content={content}
              name={name}
              jobTitle={jobTitle}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Review