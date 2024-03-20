import Style from "../style/sheet.module.css";

function Sheet() {
    return (
        <div className={Style.mainBody}>
            <h2>Ficha Cypher</h2>
            <div className={Style.characterInfo}>
                <input value="Nome do jogador" readOnly />
                <input value="Nome do personagem" readOnly />
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
                    <h3>BackGround</h3>
                </div>
                <div className={Style.notes}>
                    <h3>Anotações</h3>
                </div>
            </div>
        </div>
    );
}

export default Sheet;
