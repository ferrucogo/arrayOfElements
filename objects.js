/* let point = { x: 2, y: 3 };
let student = { name: "Simone", surname: "Aloia", yob: 1997, married: false };
let student1 = { name: "Alessandro", surname: "Capogreco", yob: 2002, married: false };
let classe = { name: "Programmatore Front-End", students: [student, student1] };
let andrea = { name: "Andrea", surname: "Asioli", class: classe };
let andreaF = { name: "Andrea", surname: "Ferruggia", "Classe di cui è docente": classe };
let nomeStudent1 = student1.name;

console.log(andrea.surname);
console.log(andrea["surname"]); //E' la stessa cosa dell'istruzione precedente ma con valore assegnato alla stringa piuttosto che alla key diretta
console.log(nomeStudent1);

student1.name = "Pippo";
console.log(student1.name);

console.log(student1.titoloDiStudio);
student1.titoloDiStudio = "Diploma di maturità";
console.log(student1);

for(const key in student1){ //Stampa tutti gli attributi dell'oggetto student1
    if(Object.hasOwnProperty.call(student1, key)){
        const element = student1[key];
        console.log(key + ": " + element);
    }
}

console.log(JSON.stringify(andrea)); //Stampa la struttura dell'oggetto creato in formato JSON/XML
let oggettoStringa = '{"name":"Andrea","surname":"Asioli","class":{"name":"Programmatore Front-End","students":[{"name":"Simone","surname":"Aloia","yob":1997,"married":false},{"name":"Pippo","surname":"Capogreco","yob":2002,"married":false,"titoloDiStudio":"Diploma di maturità"}]}}';
let andreaCopy = JSON.parse(oggettoStringa);
console.log(andreaCopy);

function CalcolaTriangoloRettangolo(catetoMinore, catetoMaggiore, ipotenusa){
    let perimetro = catetoMaggiore + catetoMinore + ipotenusa;
    let area = (catetoMaggiore * catetoMinore) / 2;

    return {perimetro: perimetro, area: area};
}
let dimensioniTriangolo = CalcolaTriangoloRettangolo(5,6,7);
console.log("Il triangolo è di perimetro " + dimensioniTriangolo.perimetro + " e di area " + dimensioniTriangolo.area); */


/*

let firstNumber = 5;

function addOne(number){
    number = number + 1;
    return number;
}

let secondNumber = addOne(firstNumber); //Passando 5 qui, si perde la referenza di definizione di firstNumber fatta prima della funzione

console.log(firstNumber);
console.log(secondNumber); */


/* let firstNumber = 5;

function addOne(){
    firstNumber = firstNumber + 1;
    return firstNumber;
}

let secondNumber = addOne(); //Passando come parametro la variabile piuttosto che il valore della variabile stessa, anche firstNumber diventa 6

console.log(firstNumber);
console.log(secondNumber); */

let userAndrea = {name: "Andrea Asioli", age: 43};
let myAccount = {user: userAndrea, balance: 100}; // In questo caso userAndrea è una reference (non una stringa)

function changeAge(newAge, account){
    let tempAccount = JSON.parse(JSON.stringify(account));
    tempAccount.user.age = newAge;
    return tempAccount;
}

let updatedAccount = changeAge(50, myAccount);

console.log(myAccount.age);
console.log(updatedAccount); 
console.log(myAccount.user.age);

let student = {name: "Simone", surname: "Aloia", loc: "Napoli", age: 24}

for (const key in Object.keys(student)) {
    const key = Object.keys(student);
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}

let pippo = {name: "Pippo", city: "Topolinia"};
let pippo1 = pippo;
let pippo2 = {name: "Pippo", city: "Topolinia"};

console.log(pippo === pippo1); // True
console.log(pippo === pippo1); // False (questione di reference)

const age = 5;
const name1 = "Osvaldo";

let baby = {age, name: name1}; //Il nome delle proprietà dell'oggetto è uguale al nome delle variabili, a meno che io non li definisca all'interno dell'oggetto
console.log(baby);


