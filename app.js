var robot = require("robotjs");
var Canvas = require('canvas')
var fs = require('fs');
var path = require('path');
var  Image = Canvas.Image
var screen = robot.getScreenSize();
var  canvas = new Canvas(screen.width, screen.height);
var  ctx = canvas.getContext('2d');

var mouse = robot.getMousePos();
var interval;

function init () {
    ctx.beginPath();
    console.log('started');

    interval = setInterval( () => {
        var mouse = robot.getMousePos();
        // console.log('mouse:', mouse);

        ctx.lineTo(mouse.x, mouse.y);
    }, 10);
}

function close () {
    ctx.stroke();
    clearInterval(interval);
    canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'clock.png')))
}

init();
setTimeout(() => {
    console.log('closing');

    close();

}, 10000)
