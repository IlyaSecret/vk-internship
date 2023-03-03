import React from 'react';
import './mine-field.css'
import {CellType} from '../../types/cell';
import Cell from '../cell/cell';

interface props {
    cells: CellType[],
    onClickStart(): void,
    onClickEnd(i: number, button: 'left' | 'right'): void
}

const MineField = ({cells, onClickEnd, onClickStart}: props) => {
    return (
        <div className={'mine-field bordered pushed'}>
            {cells.map((x, i) => <Cell cellData={x} onMouseUp={(s: 'left' | 'right') => onClickEnd(i, s)} onMouseDown={onClickStart} key={`c${i}`}/>)}
        </div>
    );
};

export default MineField;