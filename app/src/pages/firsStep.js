import { useNavigate } from "react-router-dom";
import Style from "../style/firstStep.module.css"

function FirsStep (){
    const navigate = useNavigate();
    const goToSecondStep = () => {
        navigate("/secondStep");
    }
    
    return(
        <div>
            <div className={Style.mainBody}>
                <div>
                    <p>Para começar, vamos dar um nome para o seu herói, descreve-lo e estabalecer seu backGround</p>
                    <label>Nome do jogador</label>
                    <input type="text"></input>
                    
                    <label>Nome do Personajem</label>
                    <input type="text"></input>

                    <br/>
                    <label>Descrição: </label>
                    <br/>
                    <textarea  placeholder="Cabelos negros e longos, alcançando a altura dos ombros; Olhos azuis e penetrantes; Alto com corpo robusto"/>
                    <br/>
                    
                    
                    <label>História: </label>
                    <br/>
                    <textarea  placeholder="Nasci em um vilarejo pequeno, meu pai era um caçador e minha mãe uma padeira. Cresci sonhando com grandes aventruas e com as maravilhas escondidas pelo mundo, quando me tornei um adulto decidi viajar para entender mais sobre esse mundo e sobre mim mesmo"/>
                    <br/>

                    <h3>Selecione o Descritor do personagem</h3>
                    <select>
                        <option>Opção 1</option>
                        <option>Opção 2</option>
                        <option>Opção 3</option>
                        <option>Opção 4</option>
                        <option>Opção 5</option>
                        <option>Opção 6</option>
                    </select>

                    <br/>
                    <button onClick={goToSecondStep}>Próximo passo</button>
                </div>
            </div>
        </div>
    )
}


export default FirsStep;
