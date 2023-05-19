let ar = 1000;

function termek(ar, akcios) {
  if (akcios == true) {
    let kedvezmeny = ar * 0.85;
    return kedvezmeny;
  } else {
    return ar;
  }
}

let akcios = true;
var eredmeny = termek(ar, akcios);
console.log(eredmeny);

akcios = false;
eredmeny = termek(ar, akcios);
console.log(eredmeny);