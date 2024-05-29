const circle = document.getElementById("circle");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

let rotatevalue = circle.style.transform;
//console.log(roratevalue);
let rotateSum;

upBtn.onclick = function(){
  /*時計回りに90度回転 */
  rotateSum = rotatevalue + "rotate(-90deg)";
  circle.style.transform= rotateSum;
  rotatevalue = rotateSum;
};

downBtn.onclick = function(){
  rotateSum = rotatevalue + "rotate(90deg)";
  circle.style.transform= rotateSum;
  rotatevalue = rotateSum;
};