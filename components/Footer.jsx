import Github from "../components/logo/Github";
import Twitter from "../components/logo/Twitter";
import Instagram from "../components/logo/Instagram";
import LinkedIn from "../components/logo/LinkedIn";
import { useContext } from "react";
import themeContext from "../context/themeContext";

export default function Footer() {

    const { darktheme } = useContext(themeContext);

    return (
        <>
            <div className={`w-full text-center py-4 ${darktheme ? 'bg-slate-700 text-gray-100' : 'bg-white text-slate-900'} shadow-inner`}>
                Made with &#10084; - by @crazysapien .
            </div>
        </>
    )
}