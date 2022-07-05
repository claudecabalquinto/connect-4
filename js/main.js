/*----- constants -----*/
const COLOR_LOOKUP = {
    '1': 'red',
    '-1': 'blue',
    0: 'white'

};

/*----- app's state (variables) -----*/
// Aray of 42 elements...
// null -> sq avail;
let board;
let turn; // 1 or -1
let gameStatus; // null -> game in play; 1/-1 player win; 'T' tie


/*----- cached element references -----*/
const markerEls = [...document.querySelectorAll('#markers > div')];
const circEls = document.querySelectorAll('#board > div');
const msgEl = document.querySelector('h1');

/*----- event listeners -----*/
document.getElementById ('markers').addEventListener('click', handleMove);

/*----- functions -----*/
init ();

function init () {
    board = [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
    ]
    turn = 1;
    gameStatus = 0;
    render();
}



function render () {
    circEls.forEach(function(circEl, idx){
        circEl.style.backgroundColor = COLOR_LOOKUP[board[idx]];
    });
    renderMessage();
}

function handleMove (evt) {
    const COLOR_LOOKUP = markerEls.indexOf(evt.target);

}

function renderMessage() {
    if (gameStatus === null) {
      msgEl.innerHTML = `Player <span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
    } else if (gameStatus === 'T') {
      // Tie game
    } else {
      // Player has won!
    }
  }