import { useContext } from "react"
import themeContext from "../../context/themeContext"
import Quote from '../logo/Quote'

export default function Testimonial({ text, name, pos }) {

    const { darktheme } = useContext(themeContext);
    return (
        <>
            <div className={`max-w-xs my-4 mx-auto flex-col p-4 shadow-lg rounded-lg ${darktheme ? 'bg-gray-500 bg-opacity-10' : 'shadow-lg'}`}>

                <div className="w-12">
                    <Quote fill={darktheme ? '#F9FAFB' : '#34495E'} />
                </div>

                <div className={`${darktheme ? 'text-gray-50' : 'text-gray-900'} font-medium border-b-2 py-2 my-4`}>
                    {text}
                </div>

                <div>
                    <div className={`text-xl font-semibold ${darktheme ? 'text-gray-200' : 'text-gray-900'} `}>
                        {name}
                    </div>
                    <div className={`${darktheme ? 'text-gray-200' : 'text-gray-900'} `} >{pos}</div>
                </div>

            </div>
        </>
    )
}