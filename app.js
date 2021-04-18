const speed = 20;
const scale = 0.17;
let canvas;
let ctx;
let hueDegrees = 0;

const dvd = {
    x: 200,
    y: 200,
    xspeed: 5,
    yspeed: 5,
    img: new Image()
};

const update = () => {
    setTimeout(() => {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.filter = `hue-rotate(${hueDegrees}deg)`;
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);

        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;
        checkHitBox();
        update();
    }, speed)
};

const checkHitBox = () => {
    if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
        dvd.xspeed *= -1;
        pickColor();
    }

    if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
        dvd.yspeed *= -1;
        pickColor();
    }
};

const pickColor = () => {
    let diff = 0
    while (diff < 120) {
        diff = Math.floor(Math.random() * 360)
    }
    hueDegrees = (hueDegrees + diff) % 360
};

(() => {
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    dvd.img.src = 'dvd-logo.png';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    pickColor();
    update();
})();
