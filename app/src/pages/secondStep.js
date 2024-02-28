import React, { useState } from 'react';
import Style from '../style/secondStep.module.css';

function SecondStep() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive); // Alternar estado
    };

    return (
        <div className={Style.mainBody}>
            <div
                className={`${Style.card} ${isActive ? Style.active : ''}`}
                onClick={handleClick}
            >
                <div className={`${Style.content} ${isActive ? Style.contentActive : ''}`}>
                    <p>Texto de exemplo</p>
                </div>
            </div>
        </div>
    );
}

export default SecondStep;
