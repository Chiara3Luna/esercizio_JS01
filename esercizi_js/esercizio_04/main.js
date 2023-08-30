function unisciArray(arr1, arr2) {
    let nuovoArray = [...arr1, ...arr2];
    return nuovoArray;
}
let arr1 = [1, 2, 3];
let arr2 = ['ciao', 'sono', 'Matteo'];
let risultato = unisciArray(arr1, arr2);
console.log(risultato);
