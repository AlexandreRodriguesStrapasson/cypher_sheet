import Style from "../style/sheet.module.css";

function Sheet(){
    return(
        <div className={Style.mainBody}>
            <h2>Ficha Cypher</h2>
            <div className="carachterInfo">
                <input value="Nome do jogador" readOnly/>
                <input value="Nome do personagem" readOnly/>
                <input value="Descritor" readOnly/>
                <input value="Tipo" readOnly/>
                <input value="foco" readOnly/>

            </div>
            <div className={Style.attributeBox}></div>
            <div className="skills"></div>
            <div className="attack"></div>
            <div className="cyphers"></div>
            <div className="equipament"></div>

            <div className="abilitties"></div>
            <div className="backGround"></div>
            <div className="notes"></div>
        </div>
    )
}

export default Sheet;