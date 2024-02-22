import img from "../style/img/Cypher_img_1.png"
import Style from "../style/imgHome.module.css"

function greetings(){
    return(
        <div className="container">
            <img src={img} alt="greeting img" className={Style.center} />
            <div className={Style.message}>
                <h1>Bem Vindo Viajante</h1>
                <h2>A</h2>
                <h1>Forja de herois</h1>
                <button className={Style.btn}>Forja</button>
            </div>
            <br/>
        </div>  
    )
}

export default greetings;