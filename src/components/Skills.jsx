/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/php.svg',
    label: 'PHP',
    desc: '10+ years'
  },
  {
    imgSrc: '/images/html5.svg',
    label: 'HTML',
    desc: '10+ years'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: '10+ years'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: '10+ years'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: '10+ years'
  },
  {
    imgSrc: '/images/wordpress.svg',
    label: 'WordPress',
    desc: '10+ years'
  },
  {
    imgSrc: '/images/shopify.svg',
    label: 'Shopify',
    desc: '6+ years'
  },
  {
    imgSrc: '/images/jquery.svg',
    label: 'jQuery',
    desc: '10+ years'
  },
  {
    imgSrc: '/images/laravel.svg',
    label: 'Laravel',
    desc: 'Early-stage experience'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Early-stage experience'
  },
  {
    imgSrc: '/images/codeigniter.svg',
    label: 'CodeIgniter',
    desc: '10+ years'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'Early-stage experience'
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Tools I've used so far</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">Discover the powerful tools and technologies I use to create eye-catching, highly functional websites & applications.</p>
        
        {/* responsive grids, auto fill with 250px min width  */}
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => 
              (
                <SkillCard 
                  key={key}
                  imgSrc={imgSrc} 
                  label={label}
                  desc={desc}
                  classes="reveal-up"
                />
              )
            )
          }
        </div>

      </div>
    </section>
  )
}

export default Skills