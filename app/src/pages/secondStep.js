import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SheetContext } from '../context/useContext'; 
import Style from '../style/secondStep.module.css'; 

function SecondStep() {
    const navigate = useNavigate();
    const { setType, setSelectedSkills, selectedSkills, setAnnotation } = useContext(SheetContext);
    const [ annotationInput, setAnnotationInput ] = useState("");
    const [selectedType, setSelectedType] = useState('');
    
    const habilidades = {
        Guerreiro: ["Porrada", "Capacidade de Combate", "Controle o Campo", "Melhorar a borda", "Não há necessidade de armas", 
        "Habilidades Físicas", "Treinado em armadura", "lançamento rápido", "deslize", "Treinado sem armadura",
        "Golpe esmagador", "Hemorragia", "Recarregar", "Habilidade com ataques", "habilidade com Defesa", "Ataque sucessivo"],

        Explorador: ['Navegação', 'Sobrevivência', 'Rastreamento', 'Escalada', 'Acampamento', 'Pesca', 'Orientação', 
        'Primeiros Socorros', 'Camuflagem', 'Armadilhas', 'Caça', 'Cartografia', 'Identificação de Plantas', 'Criptografia',
        'Observação', 'Mergulho', 'Forrageamento', 'Corrida de Longa Distância'],

        Adepto: ['distorção', 'Apagar memórias', 'Passo distante', 'magia de cobertura', 'Treinamento Mágico', 'Ataque', 
        'Empurrar', 'Campo de Ressonância', 'Varredura', 'Quebrar', 'Ala', 'Adaptação', 'Corte leve', 'Flutuar', 
        'Leitura de mente', 'Recuperar memórias'],

        Orador: ['Diplomacia', 'Persuasão', 'Negociação', 'Intimidação', 'Atuação', 'Enganação', 'Liderança', 'Empatia', 
        'Discurso Inspirador', 'Argumentação', 'Contação de Histórias', 'Compreensão Cultural', 'Arbitragem', 
        'Estratégia de Comunicação', 'Manipulação', 'Detecção de Mentiras', 'Retórica', 'Mediação'],
    };

    const goToThirdStep = () => {
        navigate('/ThirdStep');
        setAnnotation(annotationInput);
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

            <br/>
            <label>Anotações: </label>
            <br/>
            <textarea
                placeholder='Anotações'
                value={annotationInput}
                onChange={(e) => setAnnotationInput(e.target.value)}
            />

            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToThirdStep}>Próximo passo</button>
        </div>
    );
}

export default SecondStep;
