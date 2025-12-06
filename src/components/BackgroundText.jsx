import React from 'react';
import styling from "./BackgroundText.module.scss"

const text = "TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST"
const repeatedText = text.repeat(3);

const BackgroundText = () => {
    return (
        <div className={styling.backgroundText}>
            {repeatedText}
        </div>
    );
};

export default BackgroundText;