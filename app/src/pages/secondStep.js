import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from '../style/secondStep.module.css';

function SecondStep() {
    const [isActiveGuerreiro, setIsActiveGuerreiro] = useState(false);
    const [isActiveExplorador, setIsActiveExplorador] = useState(false);
    const [isActiveOrador, setIsActiveOrador] = useState(false);
    const [isActiveAdepto, setIsActiveAdepto] = useState(false);
    const navigate = useNavigate();
    const goToThirdStep = () => {
        navigate('/ThirdStep');
      };

    return (
        <div className={Style.mainBody}>
            <h1>Tipo</h1>
            <h3>O Tpo do seu personagem define o papel que ele vai desempenhar no grupo.</h3>
            <h3>Cada foco possui uma arvore de habilidade única.</h3>
            <div
                className={`${Style.card} ${isActiveGuerreiro ? Style.active : ''}`}
                onClick={() => setIsActiveGuerreiro(!isActiveGuerreiro)}
            >
                <div className={Style.styleCharacter}>Guerreiro</div>
                <div className={`${Style.content} ${isActiveGuerreiro ? Style.contentActive : ''}`}>
                    <p>Descrição do Guerreiro...</p>
                </div>
            </div>

            <div
                className={`${Style.card} ${isActiveExplorador ? Style.active : ''}`}
                onClick={() => setIsActiveExplorador(!isActiveExplorador)}
            >
                <div className={Style.styleCharacter}>Explorador</div>
                <div className={`${Style.content} ${isActiveExplorador ? Style.contentActive : ''}`}>
                    <p>Descrição do Explorador...</p>
                </div>
            </div>

            <div
                className={`${Style.card} ${isActiveOrador ? Style.active : ''}`}
                onClick={() => setIsActiveOrador(!isActiveOrador)}
            >
                <div className={Style.styleCharacter}>Orador</div>
                <div className={`${Style.content} ${isActiveOrador ? Style.contentActive : ''}`}>
                    <p>Descrição do Orador...</p>
                </div>
            </div>

            <div
                className={`${Style.card} ${isActiveAdepto ? Style.active : ''}`}
                onClick={() => setIsActiveAdepto(!isActiveAdepto)}
            >
                <div className={Style.styleCharacter}>Adepto</div>
                <div className={`${Style.content} ${isActiveAdepto ? Style.contentActive : ''}`}>
                    <p>Descrição do Adepto...</p>
                </div>
            </div>

            <button onClick={goToThirdStep}>Próximo passo</button>
        </div>
    );
}

export default SecondStep;
