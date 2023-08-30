function operazioneArray(arr1, arr2, operazione) {
    let risultato = [];
    
    if (operazione === "addizione") {
        for (let i = 0; i < arr1.length; i++) {
            risultato.push(arr1[i] + arr2[i]);
        }
    } else if (operazione === "sottrazione") {
        for (let i = 0; i < arr1.length; i++) {
            risultato.push(arr1[i] - arr2[i]);
        }
    } else {
        console.log("Operazione non supportata");
        return [];
    }
    
    return risultato;
}

let a = [1, 2, 3];
let b = [4, 5, 6];
let addizione = operazioneArray(a, b, "addizione");
console.log(addizione); // Output: [5, 7, 9]

let sottrazione = operazioneArray([40, 60, 80], [4, 5, 6], "sottrazione");
console.log(sottrazione); // Output: [36, 55, 74]
