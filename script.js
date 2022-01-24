let firstArray = [1, true, "Pippo"];
let secondArray = ["Pippo", "Pluto", "Paperino"];
let thirdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let lastElement;

console.log(firstArray);
console.log(secondArray.length);

for (let i = 0; i < secondArray.length; i++){
    const element = secondArray[i];
    console.log(element);
}

//Gli array generalmente vengono gestiti con uno stack in LIFO (Last In, First Out) per aggiungere un elemento
for (const element of secondArray){
    console.log(element);
}

//Aggiungere un elemento allo stack
secondArray.push("Topolino");
console.log(secondArray);

//Rimuovere l'ultimo elemento dallo stack
secondArray.pop();

//Rimuovere il primo elemento dallo stack
secondArray.shift();

//E' possibile recuperare l'ultimo elemento inserito riportando il valore che subisce pop o shift in un elemento dichiarato separatamente
lastElement = secondArray.pop();
lastElement = secondArray.shift();
console.log(secondArray);

//E' possibile inserire in testa allo stack un elemento utilizzando l'unshift
secondArray.unshift("Paperone");
console.log(secondArray);

//Intervenendo sull'indice del singolo oggetto, è possibile cambiarne il valore attribuito
secondArray[1] = "Paperina";
console.log(secondArray);

//Estrapolare parte di un array, si considera l'indice di partenza incluso e l'indice di termine escluso
let subArray = thirdArray.slice(2, 5);
console.log(thirdArray, subArray);

//Rimuovere parte di un array, se specificato nei parametri terzi, quarti e quinti, è possibile inserire ulteriori valori al posto di quelli rimossi
let subArray2 = thirdArray.splice(2, 3, 12, 13, 14);
console.log(thirdArray);

let numeroPiuGrande = Math.max(5, 10, 2);
console.log(numeroPiuGrande);
let numeroPiuGrandeArray = Math.max (...thirdArray);
console.log("Numero più grande dell'array: ", numeroPiuGrandeArray);

function stringPiuLunga (...stringhe){
    let str = "";
    for (let i = 0; i < stringhe.length; i++){
        const element = stringhe[i];
        if(str.length < element.length){
            str = element;
        }
    }
    return str;
}
console.log(stringPiuLunga("Pippo", "Topolino", "Pluto"));

function max (...numbers){
    let n = numbers[0];
    for (let i = 0; i< numbers.length; i++) {
        const element = numbers [i];
        if (n < element){
            n = element;
        }
    }
    return n;
}

console.log("Il numero più grande all'interno dell'array è " + max(100, 12, 3, 1001));

//Min
function min (...numbers){
    let nn = numbers[0];
    for (let j = 0; j< numbers.length; j++) {
        const eelement = numbers [j];
        if (nn > eelement){
            nn = eelement;
        }
    }
    return nn;
}

console.log("Il numero più piccolo all'interno dell'array è " + min(100, -99, 3, 1001));


