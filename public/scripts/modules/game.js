import {
    Disc,
} from './disc.js';


export function isGameSet(board, column, row) {
    if (board[column][row] === undefined) {
        return false;
    }
    let color = board[column][row].color;
    var x;
    var y;
    let count = 0;
    // check row
    x = column;
    y = row;
    while (x >= 0 && board[x][y] !== undefined && board[x][y].color === color) {
        count++;
        x--;
    }
    x = column;
    while (x < 7 && board[x][y] !== undefined && board[x][y].color === color) {
        count++;
        x++;
    }
    if (count >= 5) {
        return true;
    }
    count = 0;
    // check column
    x = column;
    y = row;
    while (y >= 0 && board[x][y] !== undefined && board[x][y].color === color) {
        count++;
        y--;
    }
    y = row;
    while (y < 6 && board[x][y] !== undefined && board[x][y].color === color) {
        count++;
        y++;
    }
    if (count >= 5) {
        return true;
    }
    count = 0;
    // check diagonal
    x = column;
    y = row;
    while (x >= 0 && y >= 0 && board[x][y] !== undefined && board[x][y].color === color) {
        count++;
        x--;
        y--;
    }
    x = column;
    y = row;
    while (x < 7 && y < 6 && board[x][y] !== undefined && board[x][y].color === color) {
        count++;
        x++;
        y++;
    }
    if (count >= 5) {
        return true;
    }
    count = 0;
    x = column;
    y = row;
    while (x >= 0 && y < 6 && board[x][y] !== undefined && board[x][y].color === color) {
        count++;
        x--;
        y++;
    }
    x = column;
    y = row;
    while (x < 7 && y >= 0 && board[x][y] !== undefined && board[x][y].color === color) {
        count++;
        x++;
        y--;
    }
    if (count >= 5) {
        return true;
    }
    return false;
}

export function dropColumn(board, column, color) {
    const PADDING = 15;
    let row = 5;
    while (row >= 0 && board[column][row] !== undefined) {
        row--;
    }
    if (row < 0) {
        return;
    }
    board[column][row] = new Disc(column * 100 + 50 + PADDING, row * 100 + 50 + 100, color);
    return row;
}
