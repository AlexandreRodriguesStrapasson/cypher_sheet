import Browser  from "../components/browser";
import img from "../style/img/Cypher_img_1.png"

function Home(){
    return(
        <div>
            <Browser/>
            <br/>
            <div className="greetingsImg">
                <img src={img} alt="greeting img"/>
            </div>
            
        </div>
    )
}

export default Home;