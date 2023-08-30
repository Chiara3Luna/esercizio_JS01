function numeriSuperioriMedia(arrayNumeri) {
    let somma = arrayNumeri.reduce((acc, num) => acc + num, 0);
    let media = somma / arrayNumeri.length;
    
    let numeriSuperiori = arrayNumeri.filter(num => num > media);
    
    return numeriSuperiori;
}
let arr = [1, 2, 3];
let risultato = numeriSuperioriMedia(arr);
console.log(risultato);
