import React, {useState } from "react";
import themeContext from "./themeContext";


// creating a state darktheme to provide is as a context to all pages and components 
const ThemeState=(props)=> {
    
    const [darktheme, setdarktheme] = useState(false);

    // toggletheme function to toggle between darktheme and lighttheme 
    const toggleTheme =()=> {
    setdarktheme(!darktheme);
    }
    
    return(
    <themeContext.Provider value={{darktheme,toggleTheme}} >
    {props.children}
    </themeContext.Provider>
    )
}

export default ThemeState;