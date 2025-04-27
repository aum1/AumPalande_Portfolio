const Intro = () => {
    return (
        <div className="text-6xl text-center">
            <div className="fade-up text-green-400 animate-fade-up animate-once">
                <h1>
                    Hi.
                </h1>
            </div>
            <div className="fade-up two text-green-400 animate-fade-up animate-once animate-delay-[1500ms]">
                <h2>
                    I'm Aum Palande.
                </h2>
            </div>

            <div className="fade-up three animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[3500ms] flex flex-row w-3/4 h-1/2 space-y-8 mt-8 mx-auto">
                <img className="w-1/2" src="other/self_image.jpg" alt="Temp PFP"/>
                <div className="w-1/2 pl-12 align-text-middle">
                    <p className="text-green-400">
                        Masters Computer Science Student at Texas A&M University
                    </p>
                    <button className="text-2xl bg-white border-4 border-green-400 hover:bg-green-400 text-black font-bold py-2 px-4 rounded transition duration-300">
                        <a href="about">About Me</a>
                    </button>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Intro