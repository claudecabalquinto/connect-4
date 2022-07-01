/*----- constants -----*/
const COLOR_LOOKUP = {
    '1': 'red',
    '-1': 'blue',
    null: 'white'

};

/*----- app's state (variables) -----*/
// Aray of 42 elements...
// null -> sq avail;
let board;
let turn; // 1 or -1
let gameStatus; // null -> game in play; 1/-1 player win; 'T' tie


/*----- cached element references -----*/
const circEls = document.querySelectorAll('#board > div');
const msgEl = document.querySelector('h1');

/*----- event listeners -----*/
document.getElementById ('board').addEventListener('click', handleMove);

/*----- functions -----*/
init ();

function init () {
    //board = new Array(42).fill(null);
    board = [
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
    ]
    turn = 1;
    gameStatus = null;
    render();
}



function render () {
    circEls.forEach(function(circEl, idx){
        circEl.style.backgroundColor = COLOR_LOOKUP[board[idx]];
    });
    renderMessage();
}

function handleMove (evt) {
    console.log(evt.target);
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