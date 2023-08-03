"use strict";
let ann = function (name, age, country) {
    return `My name: ${name} - My age ${age} - My country ${country}`;
};
console.log(ann('anwar', 21, 'Egypt'));
let details = (num1, num2) => {
    return num1 + num2;
};
console.log(details(10, 20));
let user = 'anwar';
console.log(user);
function handlebtns(btns) {
    return `the upper ${btns.up}
            the left  ${btns.left}
            the right ${btns.right}
            the bottom ${btns.bottom}
            the value ${btns.x}`;
}
console.log(handlebtns({ up: "UP", left: "LEFT", right: "RIGHT", bottom: "BOTTOM", x: true }));
function transition(transition_name, transition_delay, transition_time) {
    console.log(`The transition name is : ${transition_name}`);
    console.log(`The transition delay is : ${transition_delay}`);
    console.log(`The transition time functions is : ${transition_time}`);
}
console.log(transition('transform', 1, "ease-in-out"));
let mytaple = [20, "anwar", true];
console.log(mytaple);
// mytaple.push(true);
console.log(mytaple);
// void
function show() {
    console.log("anwar");
    return;
}
console.log(show());
// function show2():never
// {
//     // while(true)
//     // {
//     //     console.log("anwar");
//     // }
//     // console.log();
//     throw new Error("not found");
//     console.log("my name is anwar");
// }
// console.log(show2());
var numbers;
(function (numbers) {
    numbers[numbers["one"] = 10] = "one";
    numbers["two"] = "anwar";
    numbers["three"] = "kareem";
    numbers[numbers["four"] = 20] = "four";
})(numbers || (numbers = {}));
console.log(numbers);
let my_name = numbers.two;
console.log(my_name);
function data(name, age) {
    return `my name is ${name} and my age is ${age}`;
}
console.log(data(numbers.two, numbers.one + numbers.four));
function add(number1, number2) {
    return number1 + number2;
}
var languages;
(function (languages) {
    languages["one"] = "javasript";
    languages["two"] = "c++";
    languages["three"] = "typescript";
})(languages || (languages = {}));
var datas;
(function (datas) {
    datas["my_name"] = "anwar";
    datas[datas["my_age"] = add(1, 20)] = "my_age";
    datas["my_language"] = "c++";
    datas[datas["my_expressions"] = 70] = "my_expressions";
    datas["my_enum"] = "anwar";
})(datas || (datas = {}));
console.log(datas.my_name);
console.log(datas.my_age);
console.log(datas.my_language);
console.log(datas.my_expressions);
console.log(datas.my_enum);
// type assertions 
let num = 1000;
let newnum = Number.isInteger(num);
console.log(newnum);
let str = "anwar";
let x = str.repeat(3);
console.log(x);
let un = "anwar";
let y = un;
console.log(y.repeat(3));
let image = document.getElementById('image');
console.log(image.src);
console.log(image.alt);
// union type and inter-section type 
let variable = 'anwtr';
console.log(variable);
function go(obj) {
    console.log(obj.one);
    console.log(obj.two);
    console.log(obj.three);
}
go({ one: "anwar", two: 'tarek', three: 21 });
