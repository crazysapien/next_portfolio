import Image from "next/image"
import { useContext } from 'react'
import themeContext from '../../context/themeContext'
export default function LanguageCard({ image, name }) {

    const { darktheme } = useContext(themeContext);

    return (
        <>
            <div className={`max-w-xs hover:scale-105 transition ease-linear p-1 flex flex-col shadow-lg rounded-lg bg-gradient-to-br from-pink-600 to-rose-400`}>
                <div className={`w-full ${darktheme?'bg-slate-900':'bg-white'} rounded-lg`}>
                <div className={`mt-4 w-full flex justify-center`}><Image src={image} alt={`${name} logo`} width={60} height={60} /></div>
                <div className={`text-center ${darktheme?'text-gray-50':'text-slate-900'} my-4 font-medium`}>{name}</div>
                </div>
            </div>
        </>
    )
}
