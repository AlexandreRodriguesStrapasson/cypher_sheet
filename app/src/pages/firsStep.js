import React, { useState, useContext  } from 'react';
import Style from '../style/firstStep.module.css';
import { useNavigate } from 'react-router-dom';
import { SheetContext } from '../context/useContext';

function FirstStep() {
  const { setCharacterName, setPlayerName, setDescription, setBackGround, setDescriptor } = useContext(SheetContext);
  
  const [characterInput, setCharacterInput] = useState(""); 
  const [playerNameInput, setPlayerInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [backGroundInput, setBackGroundInput] = useState("");
  const [descriptorInput, setDescriptorInput] = useState("");

  const navigate = useNavigate();

  const goToSecondStep = () => {
    setCharacterName(characterInput); 
    setPlayerName(playerNameInput);
    setDescription(descriptionInput);
    setBackGround(backGroundInput);
    setDescriptor(descriptorInput);
    navigate('/secondStep');
  };

  const goToHome = () => {
    navigate('/');
  }

  const handleDescriptorChange = (event) => {
    setDescriptorInput(event.target.value);
};

  return (
    <div>
      <div className={Style.mainBody}>
        <div>
          <p>Para começar, vamos dar um nome para o seu herói, descrevê-lo e estabelecer seu background</p>
          <label>Nome do jogador</label>
          <input 
            type="text"
            value={playerNameInput}
            onChange={(e) => setPlayerInput(e.target.value) }
          />
          
          <label>Nome do Personagem</label>
          <input 
            type="text" 
            value={characterInput} 
            onChange={(e) => setCharacterInput(e.target.value)} 
          />

          <br/>
          <label>Descrição: </label>
          <br/>
          <textarea 
            placeholder="Cabelos negros e longos, alcançando a altura dos ombros; Olhos azuis e penetrantes; Alto com corpo robusto"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
          <br/>
          
          <label>História: </label>
          <br/>
          <textarea 
            placeholder="Nasci em um vilarejo pequeno, meu pai era um caçador e minha mãe uma padeira. Cresci sonhando com grandes aventuras e com as maravilhas escondidas pelo mundo, quando me tornei um adulto decidi viajar para entender mais sobre esse mundo e sobre mim mesmo"
            value={backGroundInput}  
            onChange={(e) => setBackGroundInput(e.target.value)}
          />
          <br/>

          <h3>Selecione o Descritor do personagem</h3>
          <select onChange={handleDescriptorChange}>
            <option value="">Descritor</option>
            <option value="Benificente">Benificente</option>
            <option value="Calmo">Calmo</option>
            <option value="Caótico">Caótico</option>
            <option value="Criativo">Criativo</option>
            <option value="Cruel">Cruel</option>
            <option value="Louco">Louco</option>
          </select>
      

          <h3>Qual é o nível do seu personagem?</h3>
          <select>
            <option value="">Nivel</option>
            <option value="Nivel 1">1</option>
            <option value="Nivel 2">2</option>
            <option value="Nivel 3">3</option>
            <option value="Nivel 4">4</option>
            <option value="Nivel 5">5</option>
            <option value="Nivel 6">6</option>
          </select>

          <br/>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToSecondStep}>Próximo passo</button>
        </div>
      </div>
    </div>
  );
}

export default FirstStep;
