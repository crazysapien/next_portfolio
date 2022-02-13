import { useContext } from "react"
import themeContext from "../../context/themeContext"


export default function BlogCard({ title, thumbnail, link, isproject }) {

  const { darktheme } = useContext(themeContext);
  return (
    <>
      <div className="flex justify-center min-h-[26rem] my-4">
        <div className={`rounded-lg shadow-lg ${darktheme ? 'bg-gray-500 bg-opacity-10 shadow-lg' : 'shadow-lg'} max-w-xs `}>
          <img className="rounded-t-lg object-cover container max-h-48" src={thumbnail} alt="" />
          <div className="p-6">
            <h5 className={`${darktheme ? 'text-gray-50' : 'text-gray-900'} text-xl font-medium mb-2`}>{title}</h5>
            <p class="text-gray-700 text-base line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            {!isproject && <a target={'_blank'} rel='noreferrer noopener' href={link} className=" inline-block px-6 py-2.5 bg-pink-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg transition duration-150 ease-in-out">Read</a>}
          </div>
        </div>
      </div>
    </>
  )
}