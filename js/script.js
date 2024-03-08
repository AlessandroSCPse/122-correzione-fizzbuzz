// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” 
// al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// BONUS 1:
// Crea un container nel DOM , aggiungendo un elemento
// html con il numero o la stringa corretta da mostrare.

// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM 
// nel *BONUS 1*, a seconda che il valore inserito sia un 
// numero, un fizz, un buzz o un fizzbuzz. 

// Prendere il contenitore a cui appendere i box.
const numbersContainer = document.querySelector('#container');

// Devo stampare tutti i numeri da 1 a 100.
for(let i = 1; i <= 100; i++) {
    // Per ogni numero:
    // se è multiplo di 3 e 5 stampo "FizzBuzz"
    // altrimenti se è multiplo di 3 stampo "Fizz"
    // altrimenti se è multiplo di 5 stampo "Buzz"
    // altrimenti stampo il numero
    let message;
    let cssClass;
    if(i % 3 === 0 && i % 5 === 0) {
        message = 'FizzBuzz';
        cssClass = 'fizzbuzz';
    } else if (i % 3 === 0) {
        message = 'Fizz';
        cssClass = 'fizz';
    } else if (i % 5 === 0) {
        message = 'Buzz';
        cssClass = 'buzz';
    } else {
        message = i;
        cssClass = 'base-color';
    }

    // Aggiungere un box col relativo message
    const newBox = `<div class="box ${cssClass}">${message}</div>`;
    numbersContainer.innerHTML += newBox;

    // console.log(cssClass);
    // const newBox = document.createElement('div');
    // newBox.innerHTML = message;
    // newBox.classList.add('box');
    // newBox.classList.add(cssClass);
    // numbersContainer.append(newBox);
}
