function ordinaNomi(arrayNomi) {
    let nomiOrdinati = arrayNomi.slice().sort();
    return nomiOrdinati;
}


let nomi = ["Alice", "Bob", "Charlie", "David", "Eve"];
let nomiOrdinati = ordinaNomi(nomi);
console.log(nomiOrdinati);
