import { createContext, useState } from "react";

export const SheetContext = createContext();

export const SheetProvider = ({children}) => {
     const [characterName, setCharacterName] = useState("");
     const [playerName, setPlayerName] = useState("");
     const [description, setDescription] = useState("");
     const [backGround, setBackGround] = useState("");
     
    
    return (
        <SheetContext.Provider value={
                {
                    characterName, setCharacterName, 
                    playerName, setPlayerName,
                    description, setDescription,
                    backGround, setBackGround
                }
            }>
            {children}
        </SheetContext.Provider>
    )
};
