import React, { useContext, useEffect, useState } from 'react';
import Style from "../style/sheet.module.css";
import { SheetContext } from '../context/useContext';

function Sheet() {
    const {
        characterName, playerName, description, backGround, 
        descriptor, level, type, selectedSkills, focus, focusSkills, selectedWeapons, annotation,
        selectedEquipament
    } = useContext(SheetContext);

    const [strength, setStrength] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [intellect, setIntellect] = useState(0);
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        let baseStrength = 0;
        let baseSpeed = 0;
        let baseIntellect = 0;
        let additionalAbilities = [];

        switch(type) {
            case 'Guerreiro':
                baseStrength = 10;
                baseSpeed = 10;
                baseIntellect = 8;
                break;
            case 'Explorador':
                baseStrength = 10;
                baseSpeed = 9;
                baseIntellect = 9;
                break;
            case 'Adepto':
                baseStrength = 7;
                baseSpeed = 9;
                baseIntellect = 12;
                break;
            case 'Orador':
                baseStrength = 8;
                baseSpeed = 9;
                baseIntellect = 11;
                break;
            default:
                baseStrength = 0;
                baseSpeed = 0;
                baseIntellect = 0;
        }

        switch(descriptor) {
            case 'Calmo':
                baseIntellect += 2;
                additionalAbilities.push("Você é TREINADO em quatro habilidades não físicas de sua escolha.");
                break;
            case 'Beneficente':
                additionalAbilities.push("TREINADO em todos os testes relacionados a interações sociais.");
                additionalAbilities.push("Generoso: Aliados que passaram mais de 1 dia com você recebem +1 nas rolagens de recuperação");
                break;
            case 'Caótico':
                baseSpeed += 4;
                additionalAbilities.push("Você é TREINADO em testes de defesa de Intelecto.");
                additionalAbilities.push("Caótico: Uma vez após cada rolagem de recuperação de dez horas, se você não gostar do primeiro resultado, você pode rolar novamente um dado de sua escolha.");
                additionalAbilities.push("Inabilidade: Seu corpo está um pouco desgastado por excessos ocasionais. Tarefas de defesa de Força são dificultados.");
                break;
            default:
                additionalAbilities.push("Nenhuma descritor seleciondo");
        }

        setStrength(baseStrength);
        setSpeed(baseSpeed);
        setIntellect(baseIntellect);

        setAbilities(prevAbilities => {
            const newAbilities = [...prevAbilities, ...additionalAbilities];
            return [...new Set(newAbilities)]; 
        });
    }, [type, descriptor]);

    return (
        <div className={Style.mainBody}>
            <h2>Ficha Cypher</h2>
            <div className={Style.characterInfo}>
                <input value={playerName || "Nome do jogador"} readOnly />
                <input value={characterName || "Nome do personagem"} readOnly />
                <input value={descriptor || "Descritor"} readOnly />
                <input value={type || "Tipo"} readOnly />
                <input value={focus || "Foco"} readOnly />
                <input value={level || "Nível"} readOnly/>
            </div>

            <div className={Style.infoSections}> 
                <div className={Style.attributeBox}>
                    <h3>Atributos</h3>
                    <div className={Style.attributeBoxCountainer}>
                        <div className='might'><strong>Força<br/> {strength}</strong></div>
                        <div className='speed'><strong>Velocidade<br/>{speed}</strong></div>
                        <div className='intellect'><strong>Intelecto<br/>{intellect}</strong></div>              
                    </div>
                </div>

                <div className={Style.abilities}>
                    <h3>Habilidades</h3>
                    <ul>
                        {abilities.map((ability, index) => (
                            <li key={index}>{ability}</li>
                        ))}
                    </ul>
                </div>
                <div className={Style.cyphers}>
                    <h3>Cyphers</h3>
                </div>
            </div>
            
            <div className={Style.combatSections}> 
                <div className={Style.skills}>                    
                    <h3>Habilidades do Tipo</h3>
                    
                    <ul>
                        {selectedSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    
                    <h3>Habilidades do Foco</h3>

                    <ul>
                        {focusSkills && focusSkills.map((skill, index) => (
                            <li key={`focus-${index}`}>{skill}</li> 
                        ))}
                    </ul>
                </div>
                
                <div className={Style.attack}>
                    <h3>Ataques</h3>
                    <ul>
                        {selectedWeapons.map((weapon, index) => (
                            <li key={index}>{weapon}</li>
                        ))}
                    </ul>
                </div>

                <div className={Style.equipament}>
                    <h3>Equipamentos</h3>
                    <ul>
                        {selectedEquipament.map((equipament, index) => (
                            <li key={index}>{equipament}</li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className={Style.additionalInfoSections}>
                <div className={Style.backGround}>
                    <h3>Aparência</h3>
                    <p>{description}</p>
                    <h3>História</h3>
                    <p>{backGround}</p>
                </div>
                <div className={Style.notes}>
                    <h3>Anotações</h3>
                    <p>{annotation}</p>
                </div>
            </div>
        </div>
    );
}

export default Sheet;
