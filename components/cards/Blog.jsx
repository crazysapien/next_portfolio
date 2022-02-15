import { useContext} from "react"
import themeContext from "../../context/themeContext"


export default function BlogCard({ title, thumbnail,date, link }) {

  
  const { darktheme } = useContext(themeContext);
  return (
    <>
      <div className={`max-w-xs p-4 my-4 mx-auto flex flex-col rounded-lg shadow-lg ${darktheme ? 'bg-gray-500 bg-opacity-20 shadow-lg' : 'shadow-lg'} `}>
      <img className="rounded-lg object-cover container max-h-48" src={thumbnail} alt={title} />
      <h5 className={`${darktheme ? 'text-gray-50' : 'text-gray-900'} px-4 my-2 flex-1 text-xl font-medium mb-2`}>{title}</h5>
      <div className={`text-gray-500 px-4 my-1`}>{new Date(date).toDateString()}</div>
      <a target={'_blank'} rel='noreferrer noopener' href={link} className="w-1/2 bg-gradient-to-r from-pink-600  to-rose-400 hover:scale-105 mx-auto px-6 py-2.5 text-center text-white font-medium text-md rounded shadow-lg transition duration-150 ease-in-out">Read</a>
      </div>

    </>
  )
}