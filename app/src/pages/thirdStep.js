import React, { useState } from 'react';
import Style from "../style/thirdStep.module.css"

function ThirdStep(){
    const [selectedOption, setSelectedOption] = useState(''); 
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const getDescription = (option) => {
        const descriptions = {
            'Opção 1': 'Foco 1',
            'Opção 2': 'Foco 2',
            'Opção 3': 'Foco 3',
            'Opção 4': 'Foco 4',
            'Opção 5': 'Foco 5',
            'Opção 6': 'Foco 6',
        };

        return descriptions[option] || '';
    };


    return(
        <div className={Style.mainBody}>
            <h1>Agora é hora de escolher o foco do personagem</h1>
                <select onChange={handleSelectChange}>
                    <option value="">Descritor</option>
                    <option value="Opção 1">Opção 1</option>
                    <option value="Opção 2">Opção 2</option>
                    <option value="Opção 3">Opção 3</option>
                    <option value="Opção 4">Opção 4</option>
                    <option value="Opção 5">Opção 5</option>
                    <option value="Opção 6">Opção 6</option>
            </select>
            <p>{getDescription(selectedOption)}</p>
        </div>
    )
}


export default ThirdStep;