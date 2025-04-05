// reference: https://p5js.org/reference/p5/loadJSON/
// Load external JSON file
let fruitData;

function preload() {
  // 引用 P5.js 的 loadJSON 方法
  fruitData = loadJSON("fruits.json");
}

function setup() {
  noCanvas(); 


  let fruits = fruitData.fruits;

  for (let i = 0; i < fruits.length; i++) {
    createElement("p", fruits[i]);
  }
}
