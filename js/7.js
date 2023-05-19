let szoveg = "str";
let charsToFind = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 't'];

console.log(szoveg, charsToFind);

function termek(szoveg, charsToFind) {
    for (let i = 0; i < szoveg.length; i++) {
        let currentChar = szoveg.at(i);
        for(let i = 0; i < charsToFind.length; i++) {
            if (currentChar == charsToFind(i)) {
                console.log('Található benne');
            }
        }
        
        }
    }

termek(szoveg, charsToFind);

