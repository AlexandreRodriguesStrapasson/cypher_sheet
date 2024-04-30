import { createContext, useState } from "react";

export const SheetContext = createContext();

export const SheetProvider = ({children}) => {
    const [characterName, setCharacterName] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [description, setDescription] = useState("");
    const [backGround, setBackGround] = useState("");
    const [descriptor, setDescriptor] = useState("");
    const [level, setLevel] = useState("");
    const [type, setType] = useState("");
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [focus, setFocus] = useState("");
    const [focusSkills, setFocusSkills] = useState([]);
    const [selectedWeapons, setSelectedWeapons] = useState([]);  

    return (
        <SheetContext.Provider value={{
            characterName, setCharacterName, 
            playerName, setPlayerName,
            description, setDescription,
            backGround, setBackGround,
            descriptor, setDescriptor,
            level, setLevel,
            type, setType,
            selectedSkills, setSelectedSkills,
            focus, setFocus,
            focusSkills, setFocusSkills,
            selectedWeapons, setSelectedWeapons  
        }}>
            {children}
        </SheetContext.Provider>
    )
};
