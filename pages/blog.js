import Head from 'next/head'
import { useContext } from 'react';
import BlogCard from '../components/cards/Blog';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import themeContext from '../context/themeContext';

export default function Blog({ blog }) {

    const { darktheme } = useContext(themeContext);

    return (
        <>
            <Head>
                <title>My blogs</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Protfolio website of Mohammad Shaim" />
                <meta name="keywords" content="HTML, CSS, JavaScript , react js , next js , prortfolio website" />
                <meta name="author" content="mohammad shaim" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Navbar />
            <div className={darktheme ? 'bg-slate-900' : 'bg-white'}>
                <div className="max-w-6xl min-h-screen mx-auto pt-24 px-4">
                    <div className={`text-5xl font-bold ${darktheme ? 'text-gray-50' : 'text-slate-900'} underline decoration-pink-500`}>
                        Blog.
                    </div>
                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-12">
                        {blog?.map((elem, index) => {
                            return <BlogCard key={index} title={elem.title} thumbnail={elem.thumbnail} link={elem.link} />
                        })}
                        {!blog.length && <div className={`font-medium text-xl ${darktheme ? 'text-gray-50' : 'text-slate-900'}`}>no blogs yet.</div>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


// fetch my blogs from medium.com's API 
export async function getServerSideProps() {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mohdshaim');
    const data = await res.json();
    const blog = data?.items;
    return { props: { blog } }
}