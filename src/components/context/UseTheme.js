import { useContext } from "react"
import { Theme } from "./Theme"


export const UseTheme=()=>{
    const themes=useContext(Theme)
    if (themes === undefined) {
        throw new Error("Theme error pls find")
    }
    return themes
}