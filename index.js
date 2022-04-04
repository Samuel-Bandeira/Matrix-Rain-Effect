const canvas = document.getElementById("Matrix");
const ctx = canvas.getContext("2d");

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const alphabet = katakana + latin + nums;

canvas.width = document.body.offsetWidth;
canvas.height = document.body.offsetHeight;

const w = canvas.width;
const h = canvas.height;

const fontSize = 16;

const columns = Math.floor(canvas.width / fontSize);
const heightCounter = Array(columns + 1).fill(1);

const draw = () => {
  ctx.fillStyle = "#0001";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monoscape";
  for (let i = 0; i < heightCounter.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    ctx.fillText(text, fontSize * i, fontSize * heightCounter[i]);

    if (heightCounter[i] * fontSize > canvas.height && Math.random() > 0.975) {
      heightCounter[i] = 0;
    }
    heightCounter[i]++;
  }
};

setInterval(draw, 30);
