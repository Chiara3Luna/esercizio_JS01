function tipoDato(input) {
    let tipo = typeof input;
    return `Il dato inserito è un ${tipo}`;
}
let numero = 42;
let risultato = tipoDato(numero);
console.log(risultato); // Output: Il dato inserito è un number

let stringa = "Ciao, mondo!";
risultato = tipoDato(stringa);
console.log(risultato); // Output: Il dato inserito è un string

let booleano = true;
risultato = tipoDato(booleano);
console.log(risultato); // Output: Il dato inserito è un boolean
