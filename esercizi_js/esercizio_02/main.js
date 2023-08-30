function stampaTabellina(numero) {
    for (let i = 1; i <= 10; i++) {
        let risultato = numero * i;
        console.log(`${numero} x ${i} = ${risultato}`);
    }
}
let numero = 5;
stampaTabellina(numero);
