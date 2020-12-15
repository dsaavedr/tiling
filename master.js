let n = 60,
    SIZE;

var WIDTH, HEIGHT;

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

function init() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    // WIDTH = 900;
    // HEIGHT = 600;

    SIZE = WIDTH / n;

    canvas.setAttribute("width", WIDTH);
    canvas.setAttribute("height", HEIGHT);

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "white";
    // ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();

    ani();
}

function ani() {
    // ctx.fillStyle = "orange";
    // ctx.fillRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let x = SIZE * i;
            let y = SIZE * j;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + SIZE, y + SIZE / 2);
            ctx.lineTo(x, y + SIZE);
            ctx.closePath();
            let a = ((SIZE * i) / WIDTH) * random(0.4, 1.2);
            log(a);
            ctx.fillStyle = rgb(0, 0, 0, a);
            ctx.fill();
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let x = SIZE * i;
            let y = SIZE * j;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + SIZE, y - SIZE / 2);
            ctx.lineTo(x + SIZE, y + SIZE / 2);
            ctx.closePath();
            let a = ((WIDTH - SIZE * i) / WIDTH) * random(0.4, 0.9);
            log(a);
            ctx.fillStyle = rgb(0, 0, 0, a);
            ctx.fill();
        }
    }

    // requestAnimationFrame(ani);
}

init();
