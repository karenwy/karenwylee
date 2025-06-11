/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: 'Project done',
    number: 35
  },
  {
    label: 'Years of experience',
    number: 10
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-9 md:text-xl md:max-w-[60ch]">
            Hello! I&apos;m Karen, a web developer with a passion for building stylish, high-performing websites. By combining creative design with technical expertise, I turn your ideas into modern digital experiences that look great and work seamlessly.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2 ">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-violet-400 font-semibold md:text-3xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }
            {/* <img src="/images/logo-white-text-transparent.png" width={40} height={40} alt="" className="" /> */}
            <p className="ml-auto md:text-xl lg:text-2xl">&lt; karen lee &gt;</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About