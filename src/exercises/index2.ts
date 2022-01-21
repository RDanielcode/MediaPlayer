function hello (age: number):any{
    console.log(`im ${age} years old`)
}

const sir = hello(17);

let user: string = 'Richard';
let sentence = `my name is ${user}`

function names (firstName: string, lastName: string = 'Reyes'):string{
    return `my name is ${firstName}`
}
//in case we want an argument to be optional, we put ? before the :

const dan = names('daniel');

//arrays
let list: string[] = [];
list = ['juan', 'carlos']
let list2 : Array <string | number>;
list2.push('hola'); 
list2.push(3); 
list2.push('cool'); 

//enum 
enum Color {
    red = 'red',
    blue = 'bue',
    green = 'green'
}

//must be init in enum because they get number values instead the string

let favColor: Color = Color.red;
console.log(favColor);

//any

let flag: any = 'corea';
flag = 3;

//object

let people: object = {
    name: 'dan',
}

//interfaces

