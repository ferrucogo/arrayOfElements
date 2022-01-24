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