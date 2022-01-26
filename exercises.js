// Reverse senza reverse - Soluzione 1

function reverseWithoutReverse(array) {
    let reverseOutput = [];
    for (let i=0; i< array.length ; i++){
        reverseOutput.unshift(array[i]);
    }
    return reverseOutput;
}

console.log("[Soluzione #1] I dati dell'array sono stati invertiti. Ora l'array è: " + reverseWithoutReverse([1, 2, 3, 4, 5, 6, 7]));

// Reverse senza reverse - Soluzione 2

function reverseWithoutReverse2(array){
    let reverseOutput2 = [];
    for (let i = array.length - 1; i >= 0; i--){
        reverseOutput2.push(array[i]);
    }
    return reverseOutput2;
}

console.log("[Soluzione #2] I dati dell'array sono stati invertiti. Ora l'array è: " + reverseWithoutReverse2([1, 2, 3, 4, 5 ,6 ,7]));

// Reverse senza reverse - Soluzione 3

function reverseWithoutReverse3(array){
    let reverseOutput3 = [];

    for (const number of array){
        reverseOutput3.unshift(number);
    }
    return reverseOutput3;
}

console.log("[Soluzione #3] I dati dell'array sono stati invertiti. Ora l'array è: " + reverseWithoutReverse3([1, 2, 3, 4, 5, 6, 7]))

// Reverse in place

let arr = [1, 2, 3, 4, 5, 6, 7]
function reverseInPlace(arr){
    // let rev = reverse(arr);
    // arr.length = 0;
    // arr.push(...rev);
    for (let i = 0; i < arr.length; i++){
        const headElem = arr[i];
        const tailElem = arr[arr.length-1-i];
        
        // let temp = headElem;
        // headElem = tailElem;
        // tailElem = temp;

        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}

console.log(arr);

// Range + step - Soluzione completa

function rangeNumber(max, min = 0, step = 1){
    let arrayRange = [];
    let start = stop > 0 ? min : max;
    let end;

    if (step > 0){
        end = max;
    } else {
        end = min;
    }

    for (let i = 0; i <= max; i += step){
        arrayRange.push(i);
    }
    return arrayRange;    
}

console.log(rangeNumber(100, 10, 2));

//Somma con funzione range e non - Soluzione completa

function sumArray(...numbers){ //Split operator davanti una funzione che genera un array per aprire la "scatola"
    let result = numbers[0];

    for (let i = 1; i < numbers.length ; i++){
        // const element = numbers[i];
        result += numbers[i];
    }
    return result;
}

console.log("Il risultato della somma con la funzione range è " + sumArray(...rangeNumber(5))); // Equivale a console.log(sumArray(...[0, 1, 2, 3, 4, 5]));
console.log("Il risultato della somma senza la funzione range è " + sumArray(...[0, 1, 2, 3, 4, 5]));
// console.log(sumArray(rangeNumber(5)));

let array5 = [7, 4, 100, 12];

function doubleFirstElement(array){
    /* let tempArray = [];
    
    for (let i = 0; i < array.length; i++) {
       tempArray.push(array[i]);
    } */

    let tempArray = [...array];

    tempArray[0] = tempArray[0] * 2;
    return tempArray; 
}

let newArray5 = doubleFirstElement(array5); // Il valore del primo elemento dell'array (indice 0) è stato raddoppiato

console.log(array5);
console.log(newArray5);

let finalArray = [23, 13, 5, 12];

function sumFirst4ElementsOfArray ([el0, el1, el2, el3]){
    return el0 + el1 + el2 + el3;
}

