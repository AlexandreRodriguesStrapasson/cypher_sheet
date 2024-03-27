import { createContext, useState } from "react";

export const SheetContext = createContext();

export const SheetProvider = ({children}) => {
    const {characterName, setCharacterName} = useState("");
    
    return (
        <SheetContext.Provider value={{characterName, setCharacterName}}>
            {children}
        </SheetContext.Provider>
    )
};
