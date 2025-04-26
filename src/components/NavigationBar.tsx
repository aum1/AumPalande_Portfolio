'use client';
import Link from 'next/link';


const NavigationBar = () => {
    return (
        <div className="bg-opacity-0 max-w-screen-xl flex flex-row justify-between mx-auto p-4 font-mono">
            <nav>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse mr-10">
                        <span className="self-center text-2xl whitespace-nowrap text-green-400">Aum Palande</span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="text-green-400 flex flex-col p-4 md:p-0 items-center border rounded-l md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="/" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <Link href="/about" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:bg-transparent">About</Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:bg-transparent">Portfolio</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:bg-transparent">Resume</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar;