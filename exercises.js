// Reverse senza reverse - Soluzione 1

function reverseWithoutReverse(array) {
    let reverseOutput = [];
    for (let i=0; i< array.length ; i++){
        reverseOutput.unshift(array[i]);
    }
    return reverseOutput;
}

console.log("[Soluzione #1] I dati dell'array sono stati invertiti. Ora l'array è: " + reverseWithoutReverse([1,2,3,4,5,6,7]));

// Reverse senza reverse - Soluzione 2

function reverseWithoutReverse2(array){
    let reverseOutput2 = [];
    for (let i = array.length - 1; i >= 0; i--){
        reverseOutput2.push(array[i]);
    }
    return reverseOutput2;
}

console.log("[Soluzione #2] I dati dell'array sono stati invertiti. Ora l'array è: " + reverseWithoutReverse2([1,2,3,4,5,6,7]));