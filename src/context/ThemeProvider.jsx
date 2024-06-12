import { createContext, useContext, useState } from "react"


const themeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(true);
    const handleTheme = ()=>{
        setTheme(!theme);
    }
  return (
    <themeContext.Provider value={{handleTheme,theme}} >
      {children}
    </themeContext.Provider>
  )
}
export const useTheme = ()=> useContext(themeContext)
export default ThemeProvider
