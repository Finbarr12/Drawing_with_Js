let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

//Draw Rectangle
// ctx.fillStyle = "red";
// ctx.fillRect(50, 50, 120, 70);

// //Draw Circle

// ctx.fillStyle = "green";
// ctx.beginPath();
// ctx.arc(200, 50, 30, 0, 2 * Math.PI);
// ctx.fill();

// ctx.fillStyle = "Orange";
// ctx.beginPath();
// ctx.moveTo(150, 120);
// ctx.lineTo(200, 170);
// ctx.lineTo(100, 170);
// ctx.closePath();
// ctx.fill();

const drawPerson = (ctx, x, y) => {
  //drawHead
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(x, y - 40, 30, 0, 2 * Math.PI);
  ctx.fill();

  //drawBody
  ctx.fillStyle = "black";
  ctx.fillRect(x - 10, y - 10, 20, 40);

  //draw Hands
  ctx.fillStyle = "black";
  ctx.fillRect(x - 30, y - 10, 20, 5); //Left Hand
  ctx.fillRect(x + 10, y - 10, 20, 5); //Right hand

  //draw Legs

  (ctx.fillStyle = "black"), ctx.fillRect(x - 10, y + 30, 10, 20); //Left Leg
  ctx.fillRect(x, y + 30, 10, 20); //Right Leg
};

drawPerson(ctx, 150, 150);
