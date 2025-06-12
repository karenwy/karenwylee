/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

const ReviewCard = ({
  content, 
  name, 
  jobTitle, 
  company
}) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">

      <p className="text-zinc-400 mb-6 md:min-h-[30vh] min-h-[50vh]">{content}</p>

      <div className="">
        <hr className="h-px mb-4 bg-zinc-600 border-0"></hr>
        <p className="">
          <span className="text-xl">{name}</span>
          
        </p>
        <p><span className="text-sm text-zinc-400"> {jobTitle}</span></p>
        <p className="text-violet-300/70 tracking-wider">{company}</p>
      </div>
    </div>
  )
}

ReviewCard.PropTypes = {
  content: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  jobTitle: PropTypes.string, 
  company: PropTypes.string.isRequired, 
  classes: PropTypes.string
}

export default ReviewCard