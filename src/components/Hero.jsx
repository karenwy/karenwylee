/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img src="/images/hero-image.png" alt="avater karen lee" width={40} height={40} className="img-cover" />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide ">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch]! sm:max-w-[20ch]! lg:max-w-[15ch]! mt-5 mb-8 lg:mb-10">
            Developing and Maintaining Engaging and Modern Websites 
          </h2>

          <div className="flex item-center gap-3">
            <ButtonPrimary 
              label="Download CV" icon="download"
            />
            <a href="#about"><ButtonOutline
              label="View more" icon="keyboard_arrow_down"
            />
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-violet-700 via-35% via-violet-700/20 to-80% rounded-[60px] overflow-hidden ">
            <img src="/images/icon-white-square.png" width={656} height={800} alt="illustration" className="w-full" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero