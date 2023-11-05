const snack = document.querySelector('.snack');
const food = document.querySelector('.food');

let snackX = 100;
let snackY = 100;
let foodX = 200;
let foodY = 200;

function updateSnack() {
    snack.style.left = snackX + 'px';
    snack.style.top = snackY + 'px';
}

function updateFood() {
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

function moveFood() {
    foodX = Math.floor(Math.random() * 19) * 20;
    foodY = Math.floor(Math.random() * 19) * 20;
    updateFood();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && snackY > 0) {
        snackY -= 20;
    } else if (event.key === 'ArrowDown' && snackY < 380) {
        snackY += 20;
    } else if (event.key === 'ArrowLeft' && snackX > 0) {
        snackX -= 20;
    } else if (event.key === 'ArrowRight' && snackX < 380) {
        snackX += 20;
    }

    updateSnack();

    if (snackX === foodX && snackY === foodY) {
        moveFood();
    }
});

updateSnack();
updateFood();
