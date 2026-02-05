const numbers = [];

for(let i = 0; i < 6; i++){
    let number = Number(prompt("Inserisci 6 numeri"))
    if(number % 2 === 0){
        numbers.push(number);
    }
    
}
console.log(numbers);
