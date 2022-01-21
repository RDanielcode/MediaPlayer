function sayHi() {
    console.log(`hello im ${this.name} ${this.lastName}`)
}
// cant do this with arrow function
const richard = {
    name: 'Daniel',
    lastName: 'Reyes'
}

sayHi.call(richard)

//example 2

function walk (meters, direction){
    console.log(`Hi im ${this.name} ${this.lastName} and i walk ${meters}m to ${direction}`)
}

walk.call(richard, 400, 'north');

walk.apply(richard,[400, 'north']);

const data = [400, 'south'];
walk.apply(richard, data);

// call of comma, apply of array
//bind needs another function

const jussbeth = {
    name: 'jussbeth',
    lastName: 'bustos'
}

const jussbethSay = sayHi.bind(jussbeth);
jussbethSay();
const jussbethWalk = walk.bind(jussbeth, 1000, 'east')
jussbethWalk();

//in here we cannot use buttons directly, we used apply to make a relation with the buttons
const buttons = document.getElementsByClassName('call-to-action');

Array.prototype.forEach.call(buttons, button => {
    button.onclick = () =>{
        alert('hello')
    };
})