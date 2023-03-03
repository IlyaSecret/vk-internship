import React from 'react';
import './display.css';

interface props {
    number: number
}

const Display = ({ number }: props) => {
    let numbers = []
    while(numbers.length < 3) {
        numbers.unshift(number % 10)
        number = number / 10 | 0
    }
    return (
        <div className={'digital-display'}>
            {numbers.map((x, i) => <div key={x + i * 100} style={{'--left': `${-(x - 1) * 14}px`} as React.CSSProperties}></div>)}
        </div>
    );
};

export default Display;