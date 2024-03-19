import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from '../style/secondStep.module.css';

function SecondStep() {
    const navigate = useNavigate();
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
            <h3>O Tipo do seu personagem define o papel que ele vai desempenhar no grupo.</h3>
            <h3>Cada foco possui uma árvore de habilidade única.</h3>
            
            <select onChange={handleTypeChange} value={selectedType}>
                <option value="">Selecione um tipo</option>
                <option value="warrior">Guerreiro</option>
                <option value="explorer">Explorador</option>
                <option value="adept">Adepto</option>
                <option value="speaker">Orador</option>
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
