import React, { useState, useContext  } from 'react';
import Style from '../style/firstStep.module.css';
import { useNavigate } from 'react-router-dom';
import { SheetContext } from '../context/useContext';

function FirstStep() {
  const { setCharacterName, setPlayerName, setDescription, setBackGround, setDescriptor, setLevel } = useContext(SheetContext);
  
  const [characterInput, setCharacterInput] = useState(""); 
  const [playerNameInput, setPlayerInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [backGroundInput, setBackGroundInput] = useState("");
  const [descriptorInput, setDescriptorInput] = useState("");
  const [levelInput, setLevelInput] = useState("");

  const navigate = useNavigate();

  const goToSecondStep = () => {
    setCharacterName(characterInput); 
    setPlayerName(playerNameInput);
    setDescription(descriptionInput);
    setBackGround(backGroundInput);
    setDescriptor(descriptorInput);
    setLevel(levelInput);
    navigate('/secondStep');
  };

  const goToHome = () => {
    navigate('/');
  }

  const handleDescriptorChange = (event) => {
    setDescriptorInput(event.target.value);
  };

  const handleLevelChange = (event) =>{
    setLevelInput(event.target.value);
  }

  const getDescriptorDescription = (descriptor) => {
    switch (descriptor) {
      case 'Beneficente':
        return (
          <>
            <ul>
              <li>Generoso: Aliados que passaram mais de 1 dia com você recebem +1 nas rolagens de recuperação</li>
              <li>Altruista: Se você estiver próximo a uma criatura que sofreu dano, você pode intercepitar e receber 1 ponto desse dano (reduzindo o dano infligido à criatura em 1 ponto). Se você tiver Armadura, ela não oferece nenhum benefício ao usar essa habilidade.</li>
              <li>Você é TREINADO em todos os testes relacionados a interações sociais, deixando as pessoas mais calmas e ganhando confiança.</li>
              <li>Inabilidade: Quando está sozinho, todos os testes de velocidade e intelecto são prejudicados.</li>
              <li>Inabilidade: Você não é do tipo que gosta do ar livre, todos os testes de correr, escalar e nadar são dificultados.</li>
            </ul>
          </>
        );
      case 'Calmo':
        return (
          <>
            <ul>
              <li>Estudioso: +2 na margem de Intelecto</li>
              <li>Habilidade: Você é TREINADO em quatro habilidades não fisicas de sua escolha.</li>
              <li>Curioso: Você pode descobrir um fato aleatório pertinente à situação atual quando desejar. 
                  Isso é sempre uma questão de fato, não de conjectura ou suposição, e deve ser algo que você poderia ter lido ou visto logicamente no passado. 
                  Você pode fazer isso uma vez, embora a habilidade seja renovada cada vez que você fizer um teste de recuperação.</li>
              <li>Inabilidade: Você não é um lutador, todos os testes fisicos são dificultados</li>
            </ul>
          </>
        );

        case 'Caótico':
          return(
            <>
              <ul>
                <li>Agitado: +4 na margem de Velocidade</li>
                <li>Habilidade: Você é TREINADO em testes de defesa de Intelecto</li>
                <li>Caótico: Uma vez após cada rolagem de recuperação de dez horas, se você não gostar do primeiro resultado, 
                    você pode rolar novamente um dado de sua escolha. Se você fizer isso, e independentemente do resultado, o GM apresentará a você uma intrusão do GM.</li>
                <li>Inabilidade: Seu corpo está um pouco desgastado por excessos ocasionais. Tarefas de defesa de Força são dificultados.</li>
              </ul>
            </>
          );
      default:
        return null;
    }
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
            <option value="Beneficente">Beneficente</option>
            <option value="Calmo">Calmo</option>
            <option value="Caótico">Caótico</option>
            <option value="Criativo">Criativo</option>
            <option value="Cruel">Cruel</option>
            <option value="Louco">Louco</option>
          </select>

          {getDescriptorDescription(descriptorInput)}
      

          <h3>Qual é o nível do seu personagem?</h3>
          <select onChange={handleLevelChange}>
            <option value="">Nivel</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
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
