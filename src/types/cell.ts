export type CellType = {
    hasBomb: boolean,
    revealed: boolean,
    bombsNear: number,
    marked: false | 'flag' | 'question' | 'bomb'
}

