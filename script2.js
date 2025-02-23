const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
});

const mouse2 = {
  x: undefined,
  y: undefined,
};

document.addEventListener("mousemove", function (event) {    
    mouse2.x = event.x;
    mouse2.y = event.y;
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    drawCircle2();
});

function drawCircle2() {
  ctx2.fillStyle = '#0000ff';
  ctx2.strokeStyle = '#0000ff';
  ctx2.lineWidth = 1;
  ctx2.beginPath();
  ctx2.arc(mouse2.x, mouse2.y, 3, 0, Math.PI * 2);
  ctx2.fill();
  ctx2.stroke();
}

function animate2() {
  requestAnimationFrame(animate2);
}

animate2();
