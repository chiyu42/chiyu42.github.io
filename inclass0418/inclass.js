function clickD1(){
  let paragraph = document.getElementsByTagName('p');
  alert("There are " + paragraph.length + " paragraphs in this page.");
}




function clickD2(){
  let paragraph = document.getElementById('div1').getElementsByTagName('p');
  alert(`There are ${paragraph.length} paragraphs in div1`);
}

function clickD3(){
  let paragraph = document.getElementById('div2').getElementsByTagName('p');
  alert(`There are ${paragraph.length} paragraphs in div2`);
}
