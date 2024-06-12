
const SingleNote = () => {
  return (
    <section className='min-h-screen'>
      <div className="md:max-w-[640px] mx-auto">
        {/* title */}
        <h1 className="text-3xl mb-3">General rules of copy writing!📝</h1>
        {/* subtitle or a random qoute*/}
        <h2 className="text-gray-400 text-md">what rules you need to follow to make greatness a live?</h2>
        {/* date of update - author */}
        <div className="flex items-center justify-between text-gray-300 my-4">
          <span className="block text-text-base">Civil Broadcast</span>
          <span className="block">01/01/2024</span>
        </div>
        {/* sub heading */}
        <p className="text-gray-400 mt-8">
          You start writing but you don't know what to write?
        </p>
        <h3 className="text-lg my-1">First attempt 🤔:</h3>
        <p className="text-gray-400">
          When it's your first time writing about any topic you shoud do some type of brain storimg in order to get ideas, and do some free writing!.
          what is free writing? it's to write whatever comes to your mind without any fear or thinking about the flow of the text and ideas.
        </p>
        <p className="text-gray-400 mt-4">
          <span className="text-red-400">SO</span> keep in your mind not to delete anything of your draft. Whether it's related to the topic or not. <span className="text-red-400"> Stay focus</span> and write try not to be driven by your imagination and forget about writing.
        </p>
        <p className="text-gray-400">
          Try to grab your <span className="text-red-400">audience attention</span> 👀, with stories, questions, suprise, examples, and ...etc.
        </p>
        {/* paragraph */}
        <h3 className="text-lg mt-4 mb-1">Some structure tips to make your writing looks more appealing 😎</h3>
        <p className="text-gray-400">
          - Firstly, try to use active voice it's enough of 'Some people..'.<br/>
          - your world line shoud not exceed 10 to 15 words.<br/>
          - your paragraphs should be in range of 4 to 6. <br/>
          - use bullets and numbers. <br/>
          and make sure that one paragraph is consisting of one idea.
        </p>
        <p className="text-gray-400 mt-4">
          when writing there is a lot of things to consider if you want to produce a masterpiece.Try to paly with factors like practicing and it's a vital factor, and a lot of other factors.<br/>
          we may discuss in coming days 🙈💙.
        </p>
      </div>
      
    </section>
  )
}

export default SingleNote
