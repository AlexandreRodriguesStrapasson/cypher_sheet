import React, { useState } from 'react';
import Style from '../style/secondStep.module.css';

function SecondStep() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive); 
    };

    return (
        <div className={Style.mainBody}>
            <div
                className={`${Style.card} ${isActive ? Style.active : ''}`}
                onClick={handleClick}
            >
                <div className={Style.styleCharacter}>Guerreiro</div> 
                <div className={`${Style.content} ${isActive ? Style.contentActive : ''}`}>
                    <p>
                        Você é um bom aliado para se ter em uma luta. Você sabe
                        como usar armas e se defender...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SecondStep;
