import { useContext, useState } from "react";
import Head from 'next/head';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import themeContext from "../context/themeContext";

// logo 
import Github from "../components/logo/Github";
import Twitter from "../components/logo/Twitter";
import Instagram from "../components/logo/Instagram";
import LinkedIn from "../components/logo/LinkedIn";


export default function Contact() {

    const { darktheme } = useContext(themeContext);

    const [form, setform] = useState({ email: '', name: '', message: '' })


    const onChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Head>
                <title>Contact me</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Portfolio website of Mohammad Shaim" />
                <meta name="keywords" content="HTML, CSS, JavaScript , react js , next js , portfolio website" />
                <meta name="author" content="Mohammad shaim" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Navbar />
            <div className={darktheme ? 'bg-slate-900' : 'bg-white'}>
                <div className="max-w-6xl min-h-screen mx-auto pt-24 px-4 gap-4 flex flex-wrap items-center justify-between">
                    <div>
                        <div className={`text-4xl md:text-6xl font-bold ${darktheme ? 'text-gray-50' : 'text-slate-900'} underline decoration-pink-500`}>
                            Let&apos;s work together.
                        </div>
                        <div className="flex mx-auto max-w-xs my-8 justify-around">
                            <a href="https://github.com/crazysapien" target={'_blank'} rel='noreferrer noopener'>
                                <Github className='w-5' fill={darktheme ? '#F9FAFB' : '#34495E'} />
                            </a>
                            <a href="https://www.instagram.com/crazy.s.apien/" target={'_blank'} rel='noreferrer noopener'>
                                <Instagram className='w-5' fill={darktheme ? '#F9FAFB' : '#34495E'} />
                            </a>
                            <a href="https://www.linkedin.com/in/mohd-shaim-20ms03" target={'_blank'} rel='noreferrer noopener'>
                                <LinkedIn className='w-5' fill={darktheme ? '#F9FAFB' : '#34495E'} />
                            </a>
                            <a href="https://twitter.com/Crazy_sapien_" target={'_blank'} rel='noreferrer noopener'>
                                <Twitter className='w-5' fill={darktheme ? '#F9FAFB' : '#34495E'} />
                            </a>
                        </div>
                    </div>
                    <div className={`max-w-md mb-12 shadow-lg p-8 ${darktheme ? 'bg-gray-500 bg-opacity-10 shadow-lg' : 'shadow-lg'}`}>
                        <form action="https://www.actionforms.io/e/r/mohd-shaim-test" method="POST">
                            <label className={`text-md ${darktheme ? 'text-gray-50' : 'text-slate-900'}`} htmlFor="name">Name</label>
                            <input type="text" className={`${darktheme ? 'bg-gray-400 bg-opacity-30 text-gray-50' : 'text-slate-900 border'} shadow-md appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mb-4`} name="name" id="name" onChange={onChange} value={form.name} placeholder='Enter your name' required />

                            <label className={`text-md ${darktheme ? 'text-gray-50' : 'text-slate-900'}`} htmlFor="email">Email</label>
                            <input type="email" className={`shadow-md ${darktheme ? 'bg-gray-400 bg-opacity-30 text-gray-50' : 'text-slate-900 border'} appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mb-4`} name="email" id="email" onChange={onChange} value={form.email} placeholder="eg: name@mail.com" required />

                            <label className={`text-md ${darktheme ? 'text-gray-50' : 'text-slate-900'}`} htmlFor="message">message</label>
                            <textarea type="text" className={`${darktheme ? 'bg-gray-400 bg-opacity-30 text-gray-50' : 'text-slate-900 border'} shadow-md appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mb-4`} name="message" id="message" onChange={onChange} value={form.message} placeholder="Your message" required />

                            <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
