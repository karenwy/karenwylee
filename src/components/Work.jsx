/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Components
 */
import PortfolioCard from "./PortfolioCard";

export const works = [
  {
    imgSrc: '/images/work-off-your-cake-image.jpg',
    title: 'Cake Calculator',
    tags: ['HTML', 'CSS', 'Javascript', 'jQuery'],
    projectLink: '/case-study/cake'
  },
  {
    imgSrc: '/images/trip-mates-image.png',
    title: 'Trip Mates',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'jQuery'],
    projectLink: '/case-study/trip-mates'
  },
  {
    imgSrc: '/images/alertr-image.jpg',
    title: 'Alertr',
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'HTML', 'CSS'],
    projectLink: '/case-study/alertr'
  },
  {
    imgSrc: '/images/cobalt-health-image.png',
    title: 'Cobalt Health',
    tags: ['WordPress', 'Elementor', 'PHP', 'HTML', 'CSS'],
    projectLink: '/case-study/cobalt-health'
  },
  {
    imgSrc: '/images/oluolu-image.jpg',
    title: 'Olu Olu Foods',
    tags: ['Shopify', 'CSS'],
    projectLink: '/case-study/olu-olu-foods'
  },
  {
    imgSrc: '/images/hot-off-the-wok-image.png',
    title: 'Hot Off The Wok',
    tags: ['PHP', 'HTML', 'CSS', 'Javascript', 'jQuery'],
    projectLink: '/case-study/hot-of-the-wok'
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
          {
            works.map(({imgSrc, title, tags, projectLink}, key) => 
              (
                <PortfolioCard 
                  key={key}
                  imgSrc={imgSrc}
                  title={title}
                  tags={tags}
                  projectLink={projectLink}
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

export default Work