/*----- constants -----*/

/*----- app's state (variables) -----*/
// Aray of 42 elements...
// null -> sq avail;
let board;
let turn; // 1 or -1
let gameStatus; // null -> game in play; 1/-1 player win; 'T' tie


/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
init ();

function init () {
    board = new Array(42).fill(null);
    turn = 1;
    gameStatus = null;
    render();
}

function render() {

}