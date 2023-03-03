import React from 'react';
import './header.css'
import {GameStatusType} from '../../types/game-status';
import {SmileType} from '../../types/smile';
import Display from '../display/display';
import Smile from '../smile/smile';


interface props {
    timer: number,
    status: GameStatusType,
    bombsLeft: number,
    onSmileClick(): void
}

const Header = ({bombsLeft, status, timer, onSmileClick}: props) => {
    let smileState: SmileType = 'default'
    switch (status) {
        case "scared":
            smileState = 'scary'
            break
        case "ended":
            smileState = 'dead'
            break
        case "won":
            smileState = 'cool'
            break
    }
    return (
        <div className={'header-bar bordered pushed'}>
            <Display number={bombsLeft}/>
            <Smile onClick={onSmileClick} state={smileState}/>
            <Display number={timer}/>
        </div>
    );
};

export default Header;