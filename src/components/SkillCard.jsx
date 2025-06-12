/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

const SkillCard = ({
  imgSrc, 
  label, 
  desc, 
  classes
}) => {
  return (
    <div className={"flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transistion-colors group " + classes}>
      <figure className="bg-violet-300/60 rounded-xl overflow-hidden w-12 h-12 p-2 group-hover:bg-violet-300 transistion-colors">
        <img src={imgSrc} alt={label} width={32} height={32}/>
      </figure>

      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">
          {desc}
        </p>
      </div>
    </div>
  )
}

SkillCard.PropTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default SkillCard