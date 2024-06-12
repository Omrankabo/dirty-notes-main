import { IoMdArrowForward } from "react-icons/io";
import Box from "./Box";

const Card = ({note}) => {
  const {category,title,description} = note
  return (
    // TODO: change into react-router link to this particular topic
      <Box>
        <div className="p-6 bg-background-50 h-full flex flex-col justify-between">
          <h2 className="tracking-widest text-xs title-font font-medium text-accent mb-1 capitalize">#{category}</h2>
          <h1 className="title-font text-lg font-medium text-text-base mb-2">{title}</h1>
          <p className="leading-relaxed mb-2 text-sm text-text-800">{description}</p>
          <div className="flex items-center flex-wrap">
              <a className="text-text-base inline-flex items-center gap-2 md:mb-2 lg:mb-0" href='/note'>Learn More
              <IoMdArrowForward/>
              </a>
          </div>
        </div>
      </Box>
  )
}

export default Card;
