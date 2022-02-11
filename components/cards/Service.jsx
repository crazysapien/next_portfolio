import { useContext } from "react"
import themeContext from "../../context/themeContext"

export default function ServiceCard({ title }) {

  const { darktheme } = useContext(themeContext);
  return (
    <>
      <div className="flex justify-center ">
        <div className={`block p-6 rounded-lg shadow-lg ${darktheme ? 'bg-gray-500 bg-opacity-10' : 'shadow-lg'} max-w-xs `}>
          <h5 className={`${darktheme ? 'text-gray-50' : 'text-gray-900'} text-xl pb-4 leading-tight font-medium`}>{title}</h5>
        </div>
      </div>
    </>
  )
}