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
                setFocusSkills([
                    'Corpo de Golem',    // Tier 1
                    'Cura Golem',        // Tier 1
                    'Aperto Golem',      // Tier 2
                    'Resistência de Pedra', // Tier 4
                    'Força de Golem',    // Tier 5
                    'Invocação de Golem' // Tier 6
                ]);
                break;
            case 'Mestre das Sombras':
                setFocusSkills([
                    'Sombra Passiva',     // Tier 1
                    'Passos Silenciosos', // Tier 1
                    'Ataque Surpresa',    // Tier 2
                    'Invisibilidade',     // Tier 4
                    'Sombra Assassinato', // Tier 5
                    'Controle das Sombras' // Tier 6
                ]);
                break;
            case 'Senhor das Feras':
                setFocusSkills([
                    'Empatia Animal',    // Tier 1
                    'Chamado das Feras', // Tier 1
                    'Domínio Animal',    // Tier 2
                    'Amigo dos Animais', // Tier 4
                    'Invocação de Besta', // Tier 5
                    'Mestre das Feras'   // Tier 6
                ]);
                break;
            case 'Mente Brilhante':
                setFocusSkills([
                    'Memória Fotográfica', // Tier 1
                    'Análise Rápida',      // Tier 1
                    'Manipulação Mental',  // Tier 2
                    'Telepatia',           // Tier 4
                    'Ilusão Mental',       // Tier 5
                    'Controle Mental'      // Tier 6
                ]);
                break;
            case 'Mestre do Tempo':
                setFocusSkills([
                    'Reflexos Rápidos',    // Tier 1
                    'Vislumbre do Futuro', // Tier 1
                    'Aceleração Temporal', // Tier 2
                    'Reversão Temporal',   // Tier 4
                    'Parada Temporal',     // Tier 5
                    'Controle Total do Tempo' // Tier 6
                ]);
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
                            <li>Tier 4: Resistência de Pedra</li>
                            <li>Tier 5: Força de Golem</li>
                            <li>Tier 6: Invocação de Golem</li>
                        </ul>
                    </>
                );
            case 'Mestre das Sombras':
                return (
                    <>
                        <p>Você é um mestre das sombras, capaz de se mover silenciosamente e atacar sem ser visto.</p>
                        <ul>
                            <li>Tier 1: Sombra Passiva</li>
                            <li>Tier 1: Passos Silenciosos</li>
                            <li>Tier 2: Ataque Surpresa</li>
                            <li>Tier 4: Invisibilidade</li>
                            <li>Tier 5: Sombra Assassinato</li>
                            <li>Tier 6: Controle das Sombras</li>
                        </ul>
                    </>
                );
            case 'Senhor das Feras':
                return (
                    <>
                        <p>Você tem uma conexão profunda com os animais e pode controlá-los e lutar ao lado deles.</p>
                        <ul>
                            <li>Tier 1: Empatia Animal</li>
                            <li>Tier 1: Chamado das Feras</li>
                            <li>Tier 2: Domínio Animal</li>
                            <li>Tier 4: Amigo dos Animais</li>
                            <li>Tier 5: Invocação de Besta</li>
                            <li>Tier 6: Mestre das Feras</li>
                        </ul>
                    </>
                );
            case 'Mente Brilhante':
                return (
                    <>
                        <p>Você é uma mente brilhante, com habilidades excepcionais de intelecto e manipulação mental.</p>
                        <ul>
                            <li>Tier 1: Memória Fotográfica</li>
                            <li>Tier 1: Análise Rápida</li>
                            <li>Tier 2: Manipulação Mental</li>
                            <li>Tier 4: Telepatia</li>
                            <li>Tier 5: Ilusão Mental</li>
                            <li>Tier 6: Controle Mental</li>
                        </ul>
                    </>
                );
            case 'Mestre do Tempo':
                return (
                    <>
                        <p>Você tem controle sobre o tempo, podendo manipulá-lo para obter vantagens.</p>
                        <ul>
                            <li>Tier 1: Reflexos Rápidos</li>
                            <li>Tier 1: Vislumbre do Futuro</li>
                            <li>Tier 2: Aceleração Temporal</li>
                            <li>Tier 4: Reversão Temporal</li>
                            <li>Tier 5: Parada Temporal</li>
                            <li>Tier 6: Controle Total do Tempo</li>
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
                <option value="Mestre das Sombras">Mestre das Sombras</option>
                <option value="Senhor das Feras">Senhor das Feras</option>
                <option value="Mente Brilhante">Mente Brilhante</option>
                <option value="Mestre do Tempo">Mestre do Tempo</option>
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
                <div key={equipament}>
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
