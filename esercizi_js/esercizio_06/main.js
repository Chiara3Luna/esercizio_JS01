function numeriCasuali(N, min, max) {
    let arrayNumeriCasuali = [];
    
    for (let i = 0; i < N; i++) {
        let numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
        arrayNumeriCasuali.push(numeroCasuale);
    }
    
    return arrayNumeriCasuali;
}
let N = 3;
let min = 1;
let max = 5;
let risultato = numeriCasuali(N, min, max);
console.log(risultato);
