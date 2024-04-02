import React, { useContext } from 'react'; 
import Style from "../style/sheet.module.css";
import { SheetContext } from '../context/useContext'; 

function Sheet() {
    const {characterName, playerName, description, backGround} = useContext(SheetContext);

    return (
        <div className={Style.mainBody}>
            <h2>Ficha Cypher</h2>
            <div className={Style.characterInfo}>
                <input value={playerName || "Nome do personagem"} readOnly />
                <input value={characterName || "Nome do personagem"} readOnly />
                <input value="Descritor" readOnly />
                <input value="Tipo" readOnly />
                <input value="foco" readOnly />
            </div>

            <div className={Style.infoSections}> 
                <div className={Style.attributeBox}>
                    <h3>Atributos</h3>
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
                    <h3>Habilidades</h3>
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
                    <h1>Aparência</h1>
                    <p>{description}</p>
                    <h1>História</h1>
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
