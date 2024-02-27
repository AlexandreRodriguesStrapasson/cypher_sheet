import { useNavigate } from "react-router-dom";
import img from "../style/img/Cypher_img_1.png"
import Style from "../style/imgHome.module.css"

function Greetings(){
    const navigate = useNavigate();
    const goToFirstStep = () => {
        navigate("/firstStep");
    }

    return(
        <div className="container">
            <img src={img} alt="greeting img" className={Style.center} />
            <div className={Style.message}>
                <h1>Bem Vindo Viajante</h1>
                <h2>A</h2>
                <h1>Forja de herois</h1>
                <button className={Style.btn} onClick={goToFirstStep}>Forja</button>
            </div>
            <br/>
        </div>  
    )
}

export default Greetings;