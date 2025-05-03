'use client';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
    return (
        <div className="no_scroll text-6xl text-center">
            <div className=" text-green-400">
                <h1>
                    Hi.
                </h1>
            </div>
            <div className=" text-green-400 text-6xl">
                <h2>
                    <TypeAnimation repeat={Infinity} sequence={[`I'm Aum Palande`, 2000, `I'm a Developer`, 1500, `I'm a Designer`, 1500, `I'm a Learner`, 1500]} speed={30} className="text-6xl text-green-400"/>
                </h2>
            </div>

            <div className="flex flex-row w-3/4 h-1/2 space-y-8 mt-8 mx-auto mb-0 pb-0">
                <img className="w-1/2" src="other/self_image.jpg" alt="Temp PFP"/>
                <div className="w-1/2 pl-12 align-text-middle">
                    <p className="text-green-400">
                        Masters Computer Science Student at Texas A&M University
                    </p>
                    <a href="/about">
                        <button className="text-2xl bg-white border-4 border-green-400 hover:bg-green-400 text-black font-bold py-2 px-4 rounded transition duration-300">
                            About Me
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro