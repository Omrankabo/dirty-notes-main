import toast, { Toaster } from "react-hot-toast"
import Box from "../components/Box"

const Contact = () => {
    return ( 
        <Box className='container w-full lg:max-w-[875px] mx-auto border-none'>
        <div 
        onFocus={
            ()=> toast.error('معليش ما شغالة لسه',
            {
            icon:'😅'
        })} 
        className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-background-50  text-text-base rounded-lg">
            <div className="flex flex-col justify-center">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Feel free to send us your opinon. 
                    </h2>
                    <div className="text-text-base mt-8">
                        Hate forms? Send us an&nbsp;<a className="underline" href="mailto:omrankabo@gmail.com">
                        email 
                        </a> instead.
                    </div>
                </div>
            </div>
            <form> 
                <div>
                    <span className="uppercase text-sm text-accent font-bold">
                        Full Name
                    </span>
                    <input
                        className="w-full bg-transparent border-2 border-secondary-base text-text-base mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-accent focus:border-accent"
                        type="text"
                        placeholder="Enter your Name"
                        required
                    />
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-accent font-bold">
                        Email
                    </span>
                    <input
                        className="w-full bg-transparent border-2 border-secondary-base text-text-base mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-accent focus:border-accent"
                        type="email"
                        placeholder="Enter your email address"
                        required
                    />
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-accent font-bold">
                        Message
                    </span>
                    <textarea
                        className="w-full h-32 bg-transparent border-2 border-secondary-base text-text-base mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-accent focus:border-accent"
                        placeholder="Enter your Message"
                        required
                    ></textarea>
                </div>
                <div 
                className="mt-8"
                >
                    <button
                        className="uppercase text-sm font-bold tracking-wide bg-secondary-base text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-accent"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            <Toaster/>
        </div>
        </Box>
)
}

export default Contact
