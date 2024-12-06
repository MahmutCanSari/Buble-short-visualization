let ary  = new Array(600);

function setup() {
  createCanvas(600, 600);
  crtArray(ary);
  shufleArray(ary);
}

function draw() {
  background(180);
  bubleShort(ary);
  showArray(ary);
}

function bubleShort(array){
    for(let i = 0; i <array.length-1; i++ ){
      if(array[i]>array[i+1]){
        let temp;
        temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
      }
  }
}

function crtArray(array){
  for(let i = 1; i <= array.length; i++ ){
    array[i-1] = i; 
  }
}

function showArray(array){
  let size = (width)/array.length;
  for(let i = 0; i < array.length; i++ ){
    fill(255);
    rectMode(CORNER);
    rect(i*size,width-(array[i]*size),size,array[i]*size);
  }
}


function shufleArray(array){
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}