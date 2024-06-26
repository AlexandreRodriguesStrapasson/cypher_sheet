import { createContext, useState } from "react";

export const SheetContext = createContext();

export const SheetProvider = ({children}) => {
    const [characterName, setCharacterName] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [description, setDescription] = useState("");
    const [annotation, setAnnotation] = useState("");
    const [backGround, setBackGround] = useState("");
    const [descriptor, setDescriptor] = useState("");
    const [level, setLevel] = useState("");
    const [type, setType] = useState("");
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [focus, setFocus] = useState("");
    const [focusSkills, setFocusSkills] = useState([]);
    const [selectedWeapons, setSelectedWeapons] = useState([]);  
    const [selectedEquipament, setSelectedEquipament] = useState([]);
    const [selectedCypher, setSelectedCypher] = useState([]);

    return (
        <SheetContext.Provider value={{
            characterName, setCharacterName, 
            playerName, setPlayerName,
            description, setDescription,
            backGround, setBackGround,
            annotation, setAnnotation,
            descriptor, setDescriptor,
            level, setLevel,
            type, setType,
            selectedSkills, setSelectedSkills,
            focus, setFocus,
            focusSkills, setFocusSkills,
            selectedWeapons, setSelectedWeapons,
            selectedEquipament, setSelectedEquipament,
            selectedCypher, setSelectedCypher
        }}>
            {children}
        </SheetContext.Provider>
    )
};
