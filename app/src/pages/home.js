import Browser  from "../components/browser";
import img from "../style/img/Cypher_img_1.png"
import Style from "../style/imgHome.module.css"

function Home(){
    return(
        <div>
            <Browser/>
            <br/>
            <div className="container">
                <img src={img} alt="greeting img" className={Style.center} />
                <div className={Style.message}>
                    <h1>Bem Vindo Viajnate</h1>
                    <h2>A</h2>
                    <h1>Forja de herois</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Home;