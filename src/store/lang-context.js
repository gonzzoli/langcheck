import React, { createContext, useState } from "react";


export const LangContext = createContext({
    selectedLang: 'spanish',
    changeLang: (lang) => {}
})

export function LangContextProvider (props) {
    const [selectedLang, setSelectedLang] = useState('spanish')

    function changeLang(lang) {
        setSelectedLang(lang)
    }
    
    return (
        <LangContext.Provider value={{
            selectedLang,
            changeLang
        }}>
            {props.children}
        </LangContext.Provider>
    )
}