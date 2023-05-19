let ar = 1000;
szam = prompt("Adj meg egy számot 1-100 között!");
szam = szam * 0.01;

function termek(ar, akcios, szam) {
  if (akcios == true) {
    let kedvezmeny = ar * szam;
    let kedvezmenyAr = ar - kedvezmeny;
    return kedvezmenyAr;
  } else {
    return ar;
  }
}

let akcios = true;
var eredmeny = termek(ar, akcios, szam);
console.log(eredmeny);

akcios = false;
eredmeny = termek(ar, akcios, szam);
console.log(eredmeny);