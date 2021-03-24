//կենտրոնի և շառավիղ
const centerX = 4;
const centerY = 5;
const radius = 6;

//կետի
const pointX = 4;
const pointY = -0.99;
const isInCircle = (X, Y) => {
  return Math.sqrt(Math.pow(centerX - X, 2) + Math.pow(centerY - Y, 2));
};
console.log(radius - isInCircle(pointX, pointY) > 0);
