//funzioni 
function generateRandomNumer (min , max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

//elementi DOM
const countDownElement = document.getElementById('countdown');
const numberListElement = document.getElementById('numbers-list');
const instructionElement = document.getElementById('instructions');
const answerFormElement = document.getElementById('answers-form');
const inputsElement = document.querySelectorAll('input');
const messageElement = document.getElementById('message');
//var di gioco
numberToGuess = 5;
const number = [];
let playTime = 5; //secondi di gioco per ricordare i numeri

//genero 5 numeri casuali e salvo nell'array
for(let i = 0; i < numberToGuess; i++){
    const randomNumber= generateRandomNumer( 1, 50);
    number.push(randomNumber);
}
//ciclo while
while(number.length<numberToGuess){
    const randomNumber = generateRandomNumer(1,50);

    if(!number.includes(randomNumber)){
        number.push(randomNumber);
    }
    
}
// mostro in numeri 
for(let i = 0; i < number.length; i++){
    const randomNumber = number[i]
    numberListElement.innerHTML += `<li>${randomNumber}<li>`
}

// scateno un timer di tot secondi 

countDownElement.innerText = playTime;
 const playInterval = setInterval(function(){

    countDownElement.innerText = --playTime;

if(playTime=== 0){
    clearInterval(playInterval);
    numberListElement.classList.add('d-none');
    instructionElement.innerText = 'Quanti numeri riesci a ricordare?'
    answerFormElement.classList.remove('d-none');
}

},1000);


//parte dell'utente
answerFormElement,addEventListener('submit', function(event){
    event.preventDefault();
    let courrentCount = 0;
    for(let i=0; i< inputsElement.length; i++){

    const currentElement = parseInt(inputsElement[i].value);

    if (number.includes(currentElement)){
        courrentCount++;
    }
      messageElement.innerText= `Hai indovinato ${courrentCount} numeri su ${numberToGuess}`;  
    } 
});