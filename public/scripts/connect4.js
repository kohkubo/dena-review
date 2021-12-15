import {
    drawDisc,
    drawDiscStoke,
    drawBoard,
    topDiscAnimation,
} from './modules/draw.js';

import {
    isGameSet,
    dropColumn,
} from './modules/game.js';

import {
    getMousePos,
} from './modules/mouse.js';

import {
    DiscPieces,
} from './modules/disc.js';

let canvas = document.getElementById("CanvasBoard");
let resetBtn = document.getElementById("ResetBtn")
let mainCanvasCtx = canvas.getContext('2d');

canvas.height = 100 * 7 + 30;
canvas.width = 100 * 7 + 30;

let g_playerColor = 'red';
let g_gameBoard = [];
for (let i = 0; i < 7; i++) {
    g_gameBoard[i] = new Array(6);
}
let g_mousePos = [];
let g_discPieces = [];
let g_endflg = false;
let g_win = g_playerColor;

canvas.addEventListener('mousemove', function (evt) {
    g_mousePos = getMousePos(evt, canvas);
});

function changePlayer() {
    g_playerColor = (g_playerColor === 'red' ? 'blue' : 'red');
}

function death(x, y, color) {
    for (let i = 0; i < 8; i++) {
        g_discPieces.push(new DiscPieces(x, y, color));
    }
}

canvas.addEventListener('click', function (evt) {
    for (let i = 0; i < canvas.width; i += 100) {
        if (g_mousePos.x > i && g_mousePos.x < i + 100) {
            let column = Math.min(parseInt(i / 100), 6);
            if (g_gameBoard[column][0] !== undefined) {
                break;
            }
            let row = dropColumn(g_gameBoard, column, g_playerColor);
            canvas.style.pointerEvents = 'none';
            death(g_gameBoard[column][row].x, g_gameBoard[column][row].y, g_playerColor);
            if (!isGameSet(g_gameBoard, column, row)) {
                canvas.style.pointerEvents = 'auto';
            } else {
                console.log("game set: " + g_playerColor + " win");
                g_endflg = true;
                g_win = g_playerColor;
            }
            changePlayer();
        }
    }
});

resetBtn.addEventListener('click', function () {
    location.reload();
});

function loop(ts) {
    if (g_endflg === false) {
        topDiscAnimation(mainCanvasCtx, canvas, g_mousePos.x, g_playerColor);
    }
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 6; j++) {
            if (g_gameBoard[i][j] !== undefined) {
                g_gameBoard[i][j].reqularMove(mainCanvasCtx);
            }
        }
    }
    if (g_endflg === true) {
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 6; j++) {
                if (g_gameBoard[i][j] !== undefined) {
                    if (g_gameBoard[i][j].color !== g_win) {
                        g_gameBoard[i][j].r = 0.0;
                        g_gameBoard[i][j].eyeOpen = false;
                    } else {
                        g_gameBoard[i][j].r = 60.0;
                        g_gameBoard[i][j].eyeOpen = true;
                    }

                }
            }
        }
        for (let i = 0; i < g_discPieces.length; i++) {
            if (g_discPieces[i].color !== g_win) {
                g_discPieces[i].crash(mainCanvasCtx);
            }
        }
    }
    window.requestAnimationFrame(ts => loop(ts));
}

window.requestAnimationFrame(ts => loop(ts));
