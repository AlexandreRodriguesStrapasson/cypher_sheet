import React, { useContext, useEffect, useState } from 'react'; 
import Style from "../style/sheet.module.css";
import { SheetContext } from '../context/useContext'; 

function Sheet() {
    const {
        characterName, playerName, description, backGround, 
        descriptor, level, type, selectedSkills, focus, focusSkills
    } = useContext(SheetContext);

    const [strength, setStrength] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [intellect, setIntellect] = useState(0);


    useEffect(() => {
        switch(type) {
            case 'Guerreiro':
                setStrength(10);
                setSpeed(10);
                setIntellect(8);
                break;
            case 'Explorador':
                setStrength(10);
                setSpeed(9);
                setIntellect(9);
                break;
            case 'Adepto':
                setStrength(7);
                setSpeed(9);
                setIntellect(12);
                break;
            case 'Orador':
                setStrength(8);
                setSpeed(9);
                setIntellect(11);
                break;
            default:
                setStrength(0);
                setSpeed(0);
                setIntellect(0);
        }


        switch(descriptor){
            case 'Calmo':
                setIntellect(prev => prev + 2);
                break;
        }
    }, [type]);

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
                        <div className='might'><strong>Força         <br/> {strength}</strong></div>
                        <div className='speed'><strong>Velocidade    <br/>{speed}</strong></div>
                        <div className='intellect'><strong>Intelecto <br/>{intellect}</strong></div>              
                    </div>
                </div>

                <div className={Style.abilities}>
                    <h3>Habilidades</h3>
                </div>
                <div className={Style.cyphers}>
                    <h3>Cyphers</h3>
                </div>
            </div>
            
            <div className={Style.combatSections}> 
                <div className={Style.skills}>
                    <h3>Habilidades Especiais</h3>
                    
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
                </div>
                <div className={Style.equipament}>
                    <h3>Equipamentos</h3>
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
                </div>
            </div>
        </div>
    );
}

export default Sheet;
