import { Link } from 'react-router-dom'
import {FaTelegram, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-text body-font mt-6 container md:mx-auto md:max-w-[700px] lg:max-w-[986px]">
      <div className="container px-5 pb-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link to={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-text">
          <span className="ml-3 text-xl">Dirty Notes</span>
        </Link>
        <p className="text-sm text-text sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Dirty Notes —
          <span className="text-text ml-1 ">@CIVIL-ENG</span>
        </p>
        <span className="inline-flex gap-2 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <FaTelegram className='text-2xl cursor-pointer' />
          <FaWhatsapp className='text-2xl cursor-pointer' />
        </span>
      </div>
    </footer>
  
  )
}

export default Footer
