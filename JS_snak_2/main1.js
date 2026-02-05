const parola = prompt("Inserisci la prima parola")
const parola_due = prompt ("Inserisci un altra parola")


if (parola.length < parola_due.length){
    console.log("la prima parola e la piu corta " `${parola} ${parola_due}` );
    
} else if (parola_due.length < parola.length){
    console.log("la seconda parola e piu corta della prima", `${parola_due} ${parola}`);
    
} else {
    console.log("le due parole hanno la stezza lunghezza ");
    
}