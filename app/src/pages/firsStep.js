import React, { useState } from 'react'; // Importando o useState
import { useNavigate } from 'react-router-dom';
import Style from '../style/firstStep.module.css';

function FirstStep() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(''); // Estado para armazenar a opção selecionada

  const goToSecondStep = () => {
    navigate('/secondStep');
  };

  // Função para atualizar o estado baseado na seleção do usuário
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Função para obter a descrição baseada na opção selecionada
  const getDescription = (option) => {
    const descriptions = {
      'Opção 1': 'Descrição para Opção 1',
      'Opção 2': 'Descrição para Opção 2',
      'Opção 3': 'Descrição para Opção 3',
      'Opção 4': 'Descrição para Opção 4',
      'Opção 5': 'Descrição para Opção 5',
      'Opção 6': 'Descrição para Opção 6',
    };

    return descriptions[option] || '';
  };

  return (
    <div>
      <div className={Style.mainBody}>
        <div>
          <p>Para começar, vamos dar um nome para o seu herói, descrevê-lo e estabelecer seu background</p>
          <label>Nome do jogador</label>
          <input type="text"></input>
          
          <label>Nome do Personagem</label>
          <input type="text"></input>

          <br/>
          <label>Descrição: </label>
          <br/>
          <textarea placeholder="Cabelos negros e longos, alcançando a altura dos ombros; Olhos azuis e penetrantes; Alto com corpo robusto"/>
          <br/>
          
          <label>História: </label>
          <br/>
          <textarea placeholder="Nasci em um vilarejo pequeno, meu pai era um caçador e minha mãe uma padeira. Cresci sonhando com grandes aventuras e com as maravilhas escondidas pelo mundo, quando me tornei um adulto decidi viajar para entender mais sobre esse mundo e sobre mim mesmo"/>
          <br/>

          <h3>Selecione o Descritor do personagem</h3>
          <select onChange={handleSelectChange}>
            <option value="">Descritor</option>
            <option value="Opção 1">Opção 1</option>
            <option value="Opção 2">Opção 2</option>
            <option value="Opção 3">Opção 3</option>
            <option value="Opção 4">Opção 4</option>
            <option value="Opção 5">Opção 5</option>
            <option value="Opção 6">Opção 6</option>
          </select>

          {/* Exibindo a descrição com base na opção selecionada */}
          <p>{getDescription(selectedOption)}</p>

          <br/>
          <button onClick={goToSecondStep}>Próximo passo</button>
        </div>
      </div>
    </div>
  );
}

export default FirstStep;