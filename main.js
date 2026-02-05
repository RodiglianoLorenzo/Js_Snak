const numero =  Number(prompt("Inserisci il primo numero"));
const numeroDue =Number(prompt("Inserisci il secondo Numero"));

if (numero > numeroDue) {
    console.log("Il numero maggiore e'" + numero);
    
    
} else if (numeroDue > numero) {
    console.log("Il numero maggiore e'" + numeroDue);
    
}else {
    console.log("I numeri sono uguali" + numero);
    
}
