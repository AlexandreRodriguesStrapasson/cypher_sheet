import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SheetContext } from '../context/useContext'; 
import Style from "../style/thirdStep.module.css";

function ThirdStep() {
    const {
        setFocus, setFocusSkills, setSelectedWeapons, selectedWeapons, selectedEquipament, setSelectedEquipament,
        selectedCypher, setSelectedCypher
    } = useContext(SheetContext); 
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const option = event.target.value;
        setSelectedOption(option);
        updateFocusAndSkills(option); 
    };

    const updateFocusAndSkills = (option) => {
        setFocus(option); 
        switch(option) {
            case 'Permanece na Pedra':
                setFocusSkills(['Corpo de Golem', 'Cura Golem', 'Aperto Golem']);
                break;
            default:
                setFocusSkills([]);
        }
    };

    const handleWeaponChange = (event) => {
        const weapon = event.target.value;
        if (event.target.checked) {
            setSelectedWeapons([...selectedWeapons, weapon]);
        } else {
            setSelectedWeapons(selectedWeapons.filter(item => item !== weapon));
        }
    };

    const handleEquipamentChange = (event) => {
        const equipament = event.target.value;
        if(event.target.checked) {
            setSelectedEquipament([...selectedEquipament, equipament]);
        }else{
            setSelectedEquipament(selectedEquipament.filter(item => item !== equipament));
        }
    }

    const handleCypherChange = (event) => {
        const cypher = event.target.value;
        if (event.target.checked) {
            setSelectedCypher([...selectedCypher, cypher]);
        }else{
            setSelectedCypher(selectedCypher.filter(item => item !== cypher));
        }
    }

    const getDescription = (option) => {
        switch(option) {
            case 'Permanece na Pedra':
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
            default:
                return '';
        }
    };

    const goToSheet = () => {
        navigate('/Sheet');
    };

    const goToBack = () => {
        navigate('/SecondStep');
    };

    const weapons = ["Espada", "Adaga", "Lança", "Arco Longo", "Besta de Mão"];
    const equipament = ["Saco de junta", "mochila", "barraca", "roupas nobres", "roupas de inverno"];
    const cyphers = ["Lança de Leônidas", "Excalibur", "Mjonir", "Standarte da Joanna D'arc"];

    return (
        <div className={Style.mainBody}>
            <h1>Agora é hora de escolher o foco do personagem</h1>
            <select onChange={handleSelectChange} value={selectedOption}>
                <option value="">Selecione um foco...</option>
                <option value="Permanece na Pedra">Permanece na Pedra</option>
            </select>
            <div>
                {getDescription(selectedOption)}
            </div>

            <h2>Escolha suas armas</h2>
            {weapons.map(weapon => (
                <div key={weapon}>
                    <label>
                        <input
                            type="checkbox"
                            value={weapon}
                            onChange={handleWeaponChange}
                            checked={selectedWeapons.includes(weapon)}
                        />
                        {weapon}
                    </label>
                </div>
            ))}


            <h2>Escolha seu equipamento</h2>
            {equipament.map(equipament => (
                <div kay={equipament}>
                    <label>
                        <input
                            type='checkbox'
                            value={equipament}
                            onChange={handleEquipamentChange}
                            checked={selectedEquipament.includes(equipament)}
                        />
                        {equipament}
                    </label>
                </div>
            ))}

            <h2>Selecione as Cifras</h2>
            {cyphers.map(cyphers => (
                <div key={cyphers}>
                    <label>
                        <input
                            type='checkbox'
                            value={cyphers}
                            onChange={handleCypherChange}
                            checked={selectedCypher.includes(cyphers)}
                        />
                        {cyphers}
                    </label>
                </div>
            ))}
            

            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToSheet}>Ficha</button>
        </div>
    );
}

export default ThirdStep;
