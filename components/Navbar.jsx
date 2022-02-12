import Link from "next/link";
import { useContext, useState } from "react";
import Dark from '../components/logo/Dark'
import Bars from '../components/logo/Bars'
import Light from '../components/logo/Light'
import themeContext from "../context/themeContext";

export default function Navbar() {

    const { darktheme, toggleTheme } = useContext(themeContext);
    const [mobilenav, setmobilenav] = useState(false);

    return (
        <>
            <nav className="w-screen py-2 fixed top-0 z-10 bg-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg">

                <div className="max-w-6xl px-2 gap-4 mx-auto h-full flex items-center justify-between">
                    <div className={`text-2xl font-bold ${darktheme ? 'text-gray-50' : 'text-slate-900'}`}><Link href={'/'}>Portfolio</Link></div>

                    <div className={`flex-1 font-medium hidden md:flex gap-4 ${darktheme ? 'text-gray-50' : 'text-slate-900'}`}>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/about"><a>About</a></Link>
                        <Link href="/projects"><a>Projects</a></Link>
                        <Link href="/blog"><a>Blog</a></Link>
                        <Link href="/contact"><a>Contact</a></Link>
                    </div>

                    <div className="flex">
                        <button onClick={toggleTheme} className="w-10 flex items-center justify-center h-10 shadow-lg rounded-lg">
                            {!darktheme ? <Dark className='w-5' fill='#34495E' /> : <Light className='w-5' fill='#F9FAFB' />}
                        </button>
                        
                        <button onClick={() => { setmobilenav(!mobilenav) }} className="w-10 h-10 ml-2 flex items-center justify-center rounded-lg md:hidden shadow-lg">
                            <Bars className='w-5 transition duration-300' fill={darktheme ? '#F9FAFB' : '#34495E'} />
                        </button>
                    </div >

                </div >

        { mobilenav && <div className={`flex flex-col font-medium py-2 px-4 gap-2 ${darktheme ? 'text-gray-50' : 'text-slate-900'}`}>

            <Link href="/"><a onClick={() => { setmobilenav(!mobilenav) }} className={`p-2 `}>Home</a></Link>
            <Link href="/about"><a onClick={() => { setmobilenav(!mobilenav) }} className={`p-2 `}>About</a></Link>
            <Link href="/projects"><a onClick={() => { setmobilenav(!mobilenav) }} className={`p-2 `}>Projects</a></Link>
            <Link href="/blog"><a onClick={() => { setmobilenav(!mobilenav) }} className={`p-2 `}>Blog</a></Link>
            <Link href="/contact"><a onClick={() => { setmobilenav(!mobilenav) }} className={`p-2`}>Contact</a></Link>
        </div>
}
            </nav >
        </>
    )
}