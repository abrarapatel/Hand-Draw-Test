const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
  isPressed: false,
  color: "red",
  dot: 3,
};

canvas.addEventListener("mousemove", function (event) {
  if (mouse.isPressed) {
    mouse.dot = 3;
    mouse.color = "green";
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
  }
});

canvas.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    mouse.dot = 10;
    mouse.color = "green";
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
    mouse.isPressed = true;
  }
});

canvas.addEventListener("mouseup", function () {
  if (event.button === 0) {
    mouse.dot = 10;
    mouse.color = "red";
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
    mouse.isPressed = false;
  }
});

function drawCircle() {
  ctx.fillStyle = mouse.color;
  ctx.strokeStyle = mouse.color;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, mouse.dot, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

function animate() {
  requestAnimationFrame(animate);
}

animate();
