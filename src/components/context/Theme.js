import { createContext, useReducer } from "react";

export const Theme=createContext()
const ThemeReducer=(state,action)=>{
    switch(action.type){
        case 'LIGHT':
            return {...state,theme:'light'}
        case 'DARK':
            return {...state,theme:'dark'}
        default:
            return state
    }
}
export const ThemeContextProvider=({children})=>{
    const [state,dispatch]=useReducer(ThemeReducer,{theme:"light"})
    return(
        <Theme.Provider value={{...state,dispatch}}>
            {children}
        </Theme.Provider>
    )
}