import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useContext } from 'react'
import themeContext from '../context/themeContext'
import { Html, JS, MongoDB, Nxt, Rct, Tailwind } from '../public/language_logo'
import { Navbar, Testimonial, Footer, LanguageCard, Send, Project } from '../components';
import { testimonial } from '../public/data/testimonial'


export default function Home({ projects }) {

  const { darktheme } = useContext(themeContext);

  return (
    <>
      <Head>
        <title>Portfolio</title>
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

      <main className={darktheme ? 'bg-slate-900' : 'bg-white'}>

        <div className='max-w-6xl min-h-screen flex-wrap-reverse px-4 pt-24 mx-auto flex items-center justify-center md:justify-between mb-16'>
          <div className='flex flex-col gap-8'>
            <div className={`text-4xl md:text-6xl font-bold ${darktheme ? 'text-gray-100' : 'text-slate-900'}`}>
              <div className='font-fancy mt-4 text-center sm:text-left'>Mohammad Shaim</div><br />
              <div className='text-center sm:text-left'>I create <br /> <span className='underline decoration-pink-500'>Awesome</span> websites.</div>

            </div>

            <div className='mx-auto sm:mx-0'>
              <Link href={'/contact'}>
                <button className="bg-gradient-to-r from-pink-600 to-rose-400 transition ease-linear duration-100 flex items-center gap-2 hover:scale-105 text-white font-medium py-4 px-8 rounded">
                  <Send className='w-4' fill={'#F9FAFB'} />
                  Say hello
                </button>
              </Link>
            </div>

          </div>
          <div className={`w-56 h-56 text-white text-center rounded-full ${darktheme ? 'bg-gray-50' : 'bg-slate-900'} shadow-lg`}>
            <Image src="/me.png" width={1000} height={1000} />
          </div>
        </div>

        <div className='max-w-6xl mx-auto px-2 mb-16'>
          <div className={`text-4xl md:text-6xl text-center sm:text-left font-bold ${darktheme ? 'text-gray-50' : 'text-slate-900'} underline decoration-pink-500`}>
            Tech I use.
          </div>
          <div className='my-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 items-center gap-4 '>
            <LanguageCard image={Html} name={'HTML'} />
            <LanguageCard image={Tailwind} name={'Tailwind'} />
            <LanguageCard image={JS} name={'Javascript'} />
            <LanguageCard image={Rct} name={'React'} />
            <LanguageCard image={Nxt} name={'Next-js'} />
            <LanguageCard image={MongoDB} name={'MongoDB'} />
          </div>
        </div>

        <div className='max-w-6xl mx-auto px-2 mb-16'>
          <div className={`text-4xl md:text-6xl text-center sm:text-left font-bold ${darktheme ? 'text-gray-50' : 'text-slate-900'} underline decoration-pink-500`}>
            About me.
          </div>
          <div className='my-12 flex flex-wrap items-center justify-between'>
            <div className='w-56 mb-4 mx-auto sm:mx-0 '>
              <Image src={"/undraw_dev_productivity_umsq.svg"} alt='a boy with a laptop' width={700} height={700} />
            </div>
            <div className={`max-w-md text-center sm:text-left font-medium text-lg ${darktheme ? 'text-gray-50' : 'text-slate-900'} `}>I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. This passion led me to challenge myself daily and learn that helped me to do better work.<br /> <Link href={'/about'}><a className="text-pink-500 underline">more...</a></Link></div>
          </div>
        </div>


        <div className='max-w-6xl mx-auto px-2 mb-16'>
          <div className='flex justify-between items-center'>
            <div className={`text-4xl md:text-6xl text-center sm:text-left font-bold ${darktheme ? 'text-gray-50' : 'text-slate-900'} underline decoration-pink-500`}>
              Projects.
            </div>
            <Link href={'/projects'}><a className='transition ease-linear duration-100 flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-400 hover:scale-105 text-white font-bold py-4 px-8 rounded'>show all</a></Link>
          </div>

          <div className='my-12'>
            {projects.length !== 0 && <Splide
              options={{
                rewind: true,
              }}
            >
              {projects?.map((elem, index) => {
                return (
                  <SplideSlide key={index}>
                    <Project title={elem.title} thumbnail={elem.thumbnail} />
                  </SplideSlide>
                )
              })}
            </Splide>}

            {!projects.length && <div className={`font-medium text-xl ${darktheme ? 'text-gray-50' : 'text-slate-900'}`}>no projects yet.</div>}
          </div>
        </div>

        <div className='max-w-6xl mx-auto px-2 pb-16'>
          <div className={`text-4xl md:text-6xl text-center sm:text-left font-bold underline decoration-pink-500 ${darktheme ? 'text-gray-50' : 'text-slate-900'}`}>
            Testimonials.
          </div>
          <div className='my-12'>
            {testimonial.length !== 0 && <Splide options={{ autoplay: true, interval: 4000, type: 'loop' }}>
              {testimonial?.map((elem, index) => {
                return (
                  <SplideSlide key={index}>
                    <Testimonial text={elem.desc} name={elem.name} pos={elem.pos} />
                  </SplideSlide>
                )
              })}
            </Splide>}
          </div>
        </div>

      </main>
      <Footer />
    </>

  )
}

// fetching projects from medium.com's API
export async function getStaticProps() {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mohdshaim48');
  const data = await res.json();
  const projects = data?.items;
  return { props: { projects } }
}