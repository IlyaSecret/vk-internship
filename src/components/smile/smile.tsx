import React from 'react';
import './smile.css'
import {SmileType} from '../../types/smile';

interface props {
    state: SmileType,
    onClick(): void
}

const Smile = ({state, onClick}: props) => {
    const classNames = ['smile']
    switch (state) {
        case 'default':
            classNames.push('smiling')
            break
        case 'pushed':
            classNames.push('smiling-pushed')
            break
        case 'cool':
            classNames.push('cool')
            break
        case 'dead':
            classNames.push('dead')
            break
        case 'scary':
            classNames.push('scared')
    }
    return (
        <div role={'button'} onClick={onClick} className={classNames.join(' ')}/>
    );
};

export default Smile;