import Style from "../style/firstStep.module.css"

function firsStep (){
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

                    <button>Próximo passo</button>

                </div>
            </div>
        </div>
    )
}


export default firsStep;