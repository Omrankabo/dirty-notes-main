
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const Home = () => {
  
  
  return (
    <main>
      <div className="flex flex-col md:items-center justify-center gap-2 my-8 h-[75vh] md:max-w-[584px] mx-auto  ">
        <h2 className="py-2 px-4 rounded-md bg-background-50 text-text-base uppercase text-sm w-3/4">new study approach 0.01V 😆</h2>
        <h1 className="sm:text-6xl md:text-7xl text-5xl my-2 font-medium md:text-center uppercase ">
        Tired of taking <span className="text-accent">
          notes
          </span>?
        or doesn't have enough <span className="text-accent">
          time
          </span>?
  
        </h1>
        <p className="mb-4 text-sm md:text-center">
          Our civil engineering department coordinating office has taken the the mission to help you study, and review faster.
        </p>
        <div className="flex flex-col items-center justify-center w-full gap-6 md:flex-row">
          <Link 
          to='/notes' 
          className="w-full px-2 py-2 text-center uppercase rounded-md bg-accent text-text-100" 
          role="button" >
              Study now 😏
          </Link>
          <a 
          // href="https://t.me/CIVIL_ENG_022_UofK_BOT"
          href="/"
          onClick={(e)=>{
            e.preventDefault()
            toast.error('لسه بدري ما تستعجل البل راجيك',{icon:'💙🙈'})
          }} 
          role="button" 
          // target="_blank" 
          rel="noreferrer" 
          className="w-full px-2 py-2 text-sm text-center uppercase rounded-md text-text-100 bg-secondary-base">access our telegram bot</a>
        </div>
      </div>
      <Toaster/>
    </main>
  )
}

export default Home
