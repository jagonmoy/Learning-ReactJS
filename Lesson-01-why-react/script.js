

// Implementing without using React JS 


let number  = 0 ;

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const display = document.querySelector('#display');

button1.addEventListener('click',() => {
    number++ ;
    display.textContent = number;
})
button2.addEventListener('click',() => {
    number-- ;
    display.textContent = number;
})