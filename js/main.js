/*----- constants -----*/
const COLOR_LOOKUP = {
    '1': 'red',
    '-1': 'blue',
    '0': 'white'

};

/*----- app's state (variables) -----*/
// Aray of 42 elements...
// 0 -> sq avail;
let board;
let turn; // 1 or -1
let gameStatus; // 0 -> game in play; 1/-1 player win; 'T' tie
let player;
let winner;


/*----- cached element references -----*/
const btnEl = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];
const circEls = document.querySelectorAll('#board > div');
const msgEl = document.querySelector('h1');

/*----- event listeners -----*/
document.getElementById ('markers').addEventListener('click', handleDrop);
btnEl.addEventListener('click', init);

/*----- functions -----*/
init ();

function init () {
    board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    turn = 1;
    winner = 0;
    render();
}

function render (){
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cellVal, rowIdx) {
            const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
            cellEl.style.backgroundColor = COLOR_LOOKUP[cellVal];
        });
    });
    renderMessage();
    renderMarkers();
}

function renderMarkers() {
    markerEls.forEach(function (markerEl, colIdx) {
        markerEl.style.visibility = board[colIdx].includes(0) ? 'visible' : 'hidden';
        if (winner === -1 || winner === 1 ) {
            markerEl.style.visibility = 'hidden'
    };
    });
}


function handleDrop (evt) {
    const colIdx = markerEls.indexOf(evt.target);
    if(colIdx === -1) return;
    const colArr = board[colIdx];
    if (!colArr.includes(0)) return;
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = turn;
    turn *= -1;
    winner = checkWin (colIdx, rowIdx)
    render();

}


function renderMessage() {
    if (winner === 'T') {
      msgEl.innerHTML = "It's a Tie!";
    } else if (winner) {
      msgEl.innerHTML = `<span style="color: ${COLOR_LOOKUP[winner]}">${COLOR_LOOKUP[winner].toUpperCase()}</span> Wins!`;
    } else {
      msgEl.innerHTML = `<span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
    }
  }


function checkWin(colIdx, rowIdx){
    const player = board[colIdx][rowIdx];
    return checkVertWin(colIdx, rowIdx, player) 
    || checkHorzWin (colIdx, rowIdx, player)
    // || checkDiagWin(colIdx, rowIdx, player)
};


function checkVertWin(colIdx, rowIdx, player) {
    const colArr = board[colIdx];
    let count = 1;
    rowIdx--;
    while (board[colIdx][rowIdx] === player && rowIdx >= 0) {
        count++;
        rowIdx--;
    }
    return count === 4 ? winner - turn : 0;
}

function checkHorzWin(colIdx, rowIdx, player) {
    const colArr = board[colIdx];
    let count = 1;
    let idx = colIdx + 1;
    while (idx < board.length && board [idx][rowIdx] === player) {
        count++;
        idx++;
    }
    idx = colIdx -1;
    while((idx >= 0) && board[idx][rowIdx] === player) {
        count++;
        idx--;
    }
    return count >= 4 ? winner = turn*-1 : 0;
}

// function checkDiagWin(colIdx, rowIdx, player) {
//  const colArr = board[colIdx][rowIdx];
//  let count = 1;
//  let idx1 = colIdx - 1;
//  let idx2 = rowIdx + 1;

//  while (idx1 >= 0 && idx2 < board[0].length && board[idx1][idx2] === player) {
//     count++;
//     idx1--;
//     idx2++;
//  }
//  idx1 = colIdx + 1;
//  idx2 = rowIdx - 1;
//  while (idx1 < board.length && idx2 >= 0 && board[idx1][idx2] === player) {
//     count++;
//     idx1--;
//     idx2--;
//  }
//  return count >= 4 ? winner = true : 0;
// }