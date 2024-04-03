import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SheetContext } from '../context/useContext'; // Ajuste o caminho conforme necessário
import Style from '../style/secondStep.module.css'; 

function SecondStep() {
    const navigate = useNavigate();
    const { setType } = useContext(SheetContext);
    const [selectedType, setSelectedType] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);

    const habilidades = {
        warrior: ['Ataque Poderoso', 'Defesa Robusta'],
        explorer: ['Navegação', 'Sobrevivência'],
        adept: ['Magia Elemental', 'Cura'],
        speaker: ['Diplomacia', 'Persuasão'],
    };

    const goToThirdStep = () => {
        navigate('/ThirdStep');
    };

    const goToBack = () => {
        navigate('/FirstStep');
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setType(e.target.value);
        setSelectedSkills([]);
    };

    const handleSkillChange = (skill) => {
        const newSelectedSkills = selectedSkills.includes(skill)
            ? selectedSkills.filter(s => s !== skill)
            : [...selectedSkills, skill];
        setSelectedSkills(newSelectedSkills);
    };

    return (
        <div className={Style.mainBody}>
            <h1>Tipo</h1>
            <select onChange={handleTypeChange} value={selectedType}>
                <option value="">Selecione um tipo</option>
                <option value="Guerreiro">Guerreiro</option>
                <option value="Explorador">Explorador</option>
                <option value="Adepto">Adepto</option>
                <option value="Orador">Orador</option>
            </select>

            {selectedType && (
                <div>
                    <h4>Habilidades:</h4>
                    {habilidades[selectedType].map(skill => (
                        <div key={skill}>
                            <input
                                type="checkbox"
                                id={skill}
                                name={skill}
                                checked={selectedSkills.includes(skill)}
                                onChange={() => handleSkillChange(skill)}
                            />
                            <label htmlFor={skill}>{skill}</label>
                        </div>
                    ))}
                </div>
            )}

            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToThirdStep}>Próximo passo</button>
        </div>
    );
}

export default SecondStep;