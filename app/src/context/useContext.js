import { createContext, useState } from "react";

export const SheetContext = createContext();

export const SheetProvider = ({children}) => {
     const [characterName, setCharacterName] = useState("");
     const [playerName, setPlayerName] = useState("");
     
    
    return (
        <SheetContext.Provider value={{characterName, setCharacterName, playerName, setPlayerName}}>
            {children}
        </SheetContext.Provider>
    )
};
