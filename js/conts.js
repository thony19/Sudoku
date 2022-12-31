// VARIABLES GLOBALES
const CONSTANT = {
    UNASSIGNED: 0,
    GRID_SIZE: 9,
    BOX_SIZE: 3,
    NUMBERS: [1,2,3,4,5,6,7,8,9],
    LEVEL_NAME: [
        'Easy',
        'Medium',
        'Hard',
        'Very hard',
        'Insane',
        'Inhuman'
    ],
    LEVEL: [29, 38, 47, 56, 65, 74]
}

let level_index = 0;
let level = CONSTANT.LEVEL[level_index];

let timer = null;
let pause = false;
let seconds = 0;

let su = undefined;
let su_answer = undefined;

let selected_cell = -1;

// VARIABLES CON LAS CLASES
const start_screen = document.getElementById('start-screen');
const game_screen = document.getElementById('game-screen');
const pause_screen = document.getElementById('pause-screen');
const result_screen = document.getElementById('result-screen');

const cells = document.querySelectorAll('.main-grid-cell');
const number_inputs = document.querySelectorAll('.number');
const game_level = document.getElementById('game-level');
const game_time = document.getElementById('game-time');
const result_time = document.querySelector('#result-time');
const back = document.getElementById('game-back');
const btnLevel = document.getElementById('btn-level');
const lottie = document.getElementById('lottie')
const lottie_two = document.getElementById('lottie_two')
