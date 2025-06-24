/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Components
 */

import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/codewithsadee-org'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithsadee'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/codewithsadee_'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codewithsadee'
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/codewithsadee'
  }
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">Let&apos;s work together!</h2>
          
            <ButtonPrimary 
              href="mailto:contact@karenwylee.co.uk"
              label="Send me an email"
              icon="send"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {
                  sitemap.map(({label, href}, key) => (
                    <li key={key}>
                      <a href={href} className="block text-sm text-zinc-400 py-0.5 transistion-colors hover:text-zinc-200 reveal-up">{label}</a>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {
                  socials.map(({label, href}, key) => (
                    <li key={key}>
                      <a href={href} target="_blank" className="block text-sm text-zinc-400 py-0.5 transistion-colors hover:text-zinc-200 reveal-up">{label}</a>
                    </li>
                  ))
                }
              </ul>
            </div> */}

          </div>

        </div>

        <div className="flex item-center justify-between pt-10 mb-8">
          <a href="/" className="logo">
            <img src="/images/icon-white-square.png" width={40} height={40} alt="logo kl" />
            {/* <p className="mr-auto md:text-xl lg:text-2xl">&lt; karen lee &gt;</p> */}
          </a>

          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200">karenwylee.co.uk</span>
          </p>
        </div>

      </div>
    </footer>

  )
}

export default Footer