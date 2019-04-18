var solution = " ";

function sq(){
  var x = document.getElementById('square-input').value;
  solution = x * x;
  document.getElementById('solution').innerHTML = "Square this and you got " + solution;
}


function half(){
  var y = document.getElementById('half-input').value;
  solution = y/2;
  document.getElementById('solution').innerHTML = "Half this and you got " + solution;
}

function fr(){
  var x = document.getElementById('percent1-input').value;
  var y = document.getElementById('percent2-input').value;
  solution = x / y;
  document.getElementById('solution').innerHTML = "Divide them and you got " + solution;
}

function ar(){
  var b = document.getElementById('area-input').value;
  solution = b * b * 3.14;
  document.getElementById('solution').innerHTML = "The area of a circle with this radius is " + solution;
}
