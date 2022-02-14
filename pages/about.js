import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head'
import { useContext } from "react";
import themeContext from "../context/themeContext";
import Radarchart from "../components/cards/Radarchart";


export default function About() {

    const { darktheme } = useContext(themeContext);
    return (
        <>
            <Head>
                <title>About me</title>
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


            <div className={`min-h-screen ${darktheme ? 'bg-slate-900' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto pt-24 px-4 ">
                    <div className={`text-5xl text-center sm:text-left font-bold ${darktheme ? 'text-gray-100' : 'text-slate-900'} underline decoration-pink-500`}>
                        About.
                    </div>
                    <div className={`py-12 max-w-4xl mx-auto text-xl font-medium ${darktheme ? 'text-gray-100' : 'text-slate-900'}`}>
                        <div className={`text-center italic text-2xl ${darktheme ? 'text-gray-300' : 'text-gray-500'}`}>“I think that’s the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.” <br />- Elon Musk</div>

                        <br />
                        Hi i am mohammad shaim , a 18 years old web developer and a tech enthusiast . Every day i wake up with the idea to learn something new and keep hustling . <br />
                        I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. This passion led me to challenge myself daily and learn that helped me to do better work.
                    </div>
                </div>

                <div className="max-w-6xl mx-auto flex justify-between pb-12 flex-wrap">
                    {data.map((elem, index) => {
                        return (
                            <Radarchart data={elem} key={index} options={options} />
                        )
                    })}
                </div>
            </div>

            <Footer />
        </>
    )
}


export const data = [
    {
        labels: ['Programming', 'Tech', 'Web3.0', 'Crypto', 'Design'],
        datasets: [
            {
                label: 'Interests',
                data: [9.5, 9, 9.5, 8, 5],
                backgroundColor: 'rgb(236,72,153,0.4)',
                borderColor: 'rgb(236,72,153)',
                borderWidth: 1,
            },
        ],
    },
    {
        labels: ['HTML', 'React', 'CSS', 'Javascript', 'Next js'],
        datasets: [
            {
                label: 'Web experience',
                data: [8.5, 8.7, 5, 8, 7.8],
                backgroundColor: 'rgb(236,72,153,0.4)',
                borderColor: 'rgb(236,72,153)',
                borderWidth: 1,
            },
        ],
    },

]

export const options = {
    scale: {
        ticks: {
            min: 0,
            max: 16,
            stepSize: 2,
            showLabelBackdrop: false,
            backdropColor: "rgba(203, 197, 11, 1)",
        },
        angleLines: {
            color: "rgba(255, 255, 255, .3)",
            lineWidth: 1
        },
        gridLines: {
            color: "rgba(255, 255, 255, .3)",
            circular: true
        },
    }
};
