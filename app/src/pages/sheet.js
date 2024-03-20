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

                <div className={Style.abilitties}>
                    <h3>Habilidades</h3>
                </div>
                <div className={Style.cyphers}>
                    <h3>Cyphers</h3>
                </div>
            </div>
            
            <div className={Style.skills}>
                <h3>Habilidades</h3>
            </div>
            
            <div className="attack">
                <h3>Ataques</h3>
            </div>
            <div className="equipament">
                <h3>Equipamentos</h3>
            </div>
            <div className="backGround"></div>
            <div className="notes"></div>
        </div>
    );
}

export default Sheet;