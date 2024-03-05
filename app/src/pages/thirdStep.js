import React, { useState } from 'react';
import Style from "../style/thirdStep.module.css"

function ThirdStep() {
    const [selectedOption, setSelectedOption] = useState(''); 
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const getDescription = (option) => {
        switch (option) {
            case 'Permance na Pedra':
                return (
                    <>
                        <p>Sua carne é feita de mineral duro, fazendo de você um humanoide corpulento e difícil de ferir.</p>
                        <ul>
                            <li>Tier 1: Corpo de Golem</li>
                            <li>Tier 1: Cura Golem</li>
                            <li>Tier 2: Aperto Golem</li>
                        </ul>
                    </>
                );
            case 'Opção 2':
                return (
                    <>
                        <p>Foco 2 </p>
                    </>
                );
            case 'Opção 3':
                return (
                    <>
                        <p>Foco 3</p>
                    </>
                );
            default:
                return '';
        }
    };

    return (
        <div className={Style.mainBody}>
            <h1>Agora é hora de escolher o foco do personagem</h1>
            <select onChange={handleSelectChange}>
                <option value="">Selecione um foco...</option>
                <option value="Permance na Pedra">Permance na Pedra</option>
                <option value="Opção 2">Opção 2</option>
                <option value="Opção 3">Opção 3</option>
            </select>
            <div>
                {getDescription(selectedOption)}
            </div>
        </div>
    );
}

export default ThirdStep;
