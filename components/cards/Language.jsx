import { useContext } from "react"
import themeContext from "../../context/themeContext"
import Image from "next/image";

export default function LanguageCard({ image, name }) {

    const { darktheme } = useContext(themeContext);
    return (
        <>
            <div className={`max-w-xs p-2 flex flex-col shadow-lg rounded-lg ${darktheme ? 'bg-gray-200 bg-opacity-50' : 'bg-white'}`}>
                <img src={image} alt="" className="mt-4 h-12" />
                <div className={`text-xl text-center my-4  ${darktheme ? 'text-gray-50' : 'text-slate-900'}`}>{name}</div>
            </div>
        </>
    )
}