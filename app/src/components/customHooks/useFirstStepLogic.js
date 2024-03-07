import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useFirstStepLogic = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const goToSecondStep = () => {
    navigate('/secondStep');
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

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

  return { selectedOption, handleSelectChange, getDescription, goToSecondStep };
};
