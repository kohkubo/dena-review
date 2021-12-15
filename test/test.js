import {
    isGameSet,
} from '../public/scripts/modules/game.js';

import {
    Disc,
} from '../public/scripts/modules/disc.js';

let boardTestCase = [];

function initTestCase() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 6; j++) {
            boardTestCase.splice(i, 1, [])
        }
    }
}

function testIsGameSet() {
    initTestCase();
    // test case row
    boardTestCase[0][0] = new Disc(0, 0, 'red');
    boardTestCase[1][0] = new Disc(100, 0, 'red');
    boardTestCase[2][0] = new Disc(200, 0, 'red');
    boardTestCase[3][0] = new Disc(300, 0, 'red');
    console.log("test case row0: " + isGameSet(boardTestCase, 0, 0));
    console.log("test case row1: " + isGameSet(boardTestCase, 1, 0));
    console.log("test case row2: " + isGameSet(boardTestCase, 2, 0));
    console.log("test case row3: " + isGameSet(boardTestCase, 3, 0));
    initTestCase();
    // test case column
    boardTestCase[0][0] = new Disc(0, 0, 'red');
    boardTestCase[0][1] = new Disc(0, 100, 'red');
    boardTestCase[0][2] = new Disc(0, 200, 'red');
    boardTestCase[0][3] = new Disc(0, 300, 'red');
    console.log("test case column0: " + isGameSet(boardTestCase, 0, 0));
    console.log("test case column1: " + isGameSet(boardTestCase, 0, 1));
    console.log("test case column2: " + isGameSet(boardTestCase, 0, 2));
    console.log("test case column3: " + isGameSet(boardTestCase, 0, 3));
    initTestCase();

    // test case diagonal
    boardTestCase[0][0] = new Disc(0, 0, 'red');
    boardTestCase[1][1] = new Disc(100, 100, 'red');
    boardTestCase[2][2] = new Disc(200, 200, 'red');
    boardTestCase[3][3] = new Disc(300, 300, 'red');
    console.log("test case diagonal0: " + isGameSet(boardTestCase, 0, 0));
    console.log("test case diagonal1: " + isGameSet(boardTestCase, 1, 1));
    console.log("test case diagonal2: " + isGameSet(boardTestCase, 2, 2));
    console.log("test case diagonal3: " + isGameSet(boardTestCase, 3, 3));
    initTestCase();

    // test case diagonal
    boardTestCase[0][3] = new Disc(0, 300, 'red');
    boardTestCase[1][2] = new Disc(100, 200, 'red');
    boardTestCase[2][1] = new Disc(200, 100, 'red');
    boardTestCase[3][0] = new Disc(300, 0, 'red');
    console.log("test case diagonal0: " + isGameSet(boardTestCase, 0, 3));
    console.log("test case diagonal1: " + isGameSet(boardTestCase, 1, 2));
    console.log("test case diagonal2: " + isGameSet(boardTestCase, 2, 1));
    console.log("test case diagonal3: " + isGameSet(boardTestCase, 3, 0));
    initTestCase();

    // test case no set row
    boardTestCase[0][0] = new Disc(0, 0, 'red');
    boardTestCase[1][0] = new Disc(100, 0, 'red');
    boardTestCase[2][0] = new Disc(200, 0, 'red');
    console.log("test case no set row0: " + isGameSet(boardTestCase, 0, 0));
    console.log("test case no set row1: " + isGameSet(boardTestCase, 1, 0));
    console.log("test case no set row2: " + isGameSet(boardTestCase, 2, 0));
    initTestCase();

    // test case no set column
    boardTestCase[0][0] = new Disc(0, 0, 'red');
    boardTestCase[0][1] = new Disc(0, 100, 'red');
    boardTestCase[0][2] = new Disc(0, 200, 'red');
    console.log("test case no set column0: " + isGameSet(boardTestCase, 0, 0));
    console.log("test case no set column1: " + isGameSet(boardTestCase, 0, 1));
    console.log("test case no set column2: " + isGameSet(boardTestCase, 0, 2));
    initTestCase();

    // test case no set diagonal
    boardTestCase[0][0] = new Disc(0, 0, 'red');
    boardTestCase[1][1] = new Disc(100, 100, 'red');
    boardTestCase[2][2] = new Disc(200, 200, 'red');
    console.log("test case no set diagonal0: " + isGameSet(boardTestCase, 0, 0));
    console.log("test case no set diagonal1: " + isGameSet(boardTestCase, 1, 1));
    console.log("test case no set diagonal2: " + isGameSet(boardTestCase, 2, 2));
    initTestCase();

    // test case no set diagonal
    boardTestCase[0][3] = new Disc(0, 300, 'red');
    boardTestCase[1][2] = new Disc(100, 200, 'red');
    boardTestCase[2][1] = new Disc(200, 100, 'red');
    console.log("test case no set diagonal0: " + isGameSet(boardTestCase, 0, 3));
    console.log("test case no set diagonal1: " + isGameSet(boardTestCase, 1, 2));
    console.log("test case no set diagonal2: " + isGameSet(boardTestCase, 2, 1));
    initTestCase();
}

testIsGameSet();
