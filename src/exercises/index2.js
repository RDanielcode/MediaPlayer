function hello(age) {
    console.log("im " + age + " years old");
}
var sir = hello(17);
var user = 'Richard';
var sentence = "my name is " + user;
function names(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Reyes'; }
    return "my name is " + firstName;
}
//in case we want an argument to be optional, we put ? before the :
var dan = names('daniel');
//arrays
var list = [];
list = ['juan', 'carlos'];
var list2;
list2.push('hola');
list2.push(3);
list2.push('cool');
//enum 
var Color;
(function (Color) {
    Color["red"] = "red";
    Color["blue"] = "bue";
    Color["green"] = "green";
})(Color || (Color = {}));
//must be init in enum because they get number values instead the string
var favColor = Color.red;
console.log(favColor);
//any
var flag = 'corea';
flag = 3;
//object
var people = {
    name: 'dan'
};
