let ann = function (name:string,age:number,country:string){
    return `My name: ${name} - My age ${age} - My country ${country}`
}
console.log(ann('anwar',21,'Egypt'));

let details = (num1:number,num2:number):number=>{
    return num1 + num2;
}
console.log(details(10,20));

type st = string;
let user:st = 'anwar';
console.log(user);

type buttons = {
    up:string,
    left:string,
    right:string,
    bottom:string,
}
type last = buttons & {
    x:boolean
}
function handlebtns (btns:last){
    return `the upper ${btns.up}
            the left  ${btns.left}
            the right ${btns.right}
            the bottom ${btns.bottom}
            the value ${btns.x}`
}
console.log(handlebtns({up:"UP",left:"LEFT",right:"RIGHT",bottom:"BOTTOM",x:true}));

type transition_time_functions = "ease"|"ease-in"|"ease-out"|"ease-in-out"|"linear";

function transition (transition_name:string,transition_delay:number,transition_time:transition_time_functions)
{
    console.log(`The transition name is : ${transition_name}`);
    console.log(`The transition delay is : ${transition_delay}`);
    console.log(`The transition time functions is : ${transition_time}`);
}
console.log(transition('transform',1,"ease-in-out"));

let  mytaple:readonly[number,string,boolean]= [20,"anwar",true];
console.log(mytaple);
// mytaple.push(true);
console.log(mytaple);
// void
function show ():void
{
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

enum numbers {
    one = 10,
    two = "anwar",
    three = "kareem",
    four = 20,
}
console.log(numbers);

let my_name = numbers.two;
console.log(my_name);
function data (name:string,age:number)
{
    return `my name is ${name} and my age is ${age}`
}
console.log(data(numbers.two,numbers.one+numbers.four));

function add (number1:number,number2:number):number{
    return number1 + number2;
}
enum  languages {
    one = 'javasript',
    two = 'c++',
    three = 'typescript'
}
enum datas{
    my_name = "anwar",
    my_age = add(1,20),
    my_language = languages.two,
    my_expressions = 10+30*2,
    my_enum = datas.my_name
}
console.log(datas.my_name);
console.log(datas.my_age);
console.log(datas.my_language);
console.log(datas.my_expressions);
console.log(datas.my_enum);
// type assertions 

let num:any = 1000;
let newnum = Number.isInteger((num as number ));
console.log( newnum);

let str:any = "anwar";
let x = (str as string).repeat(3);
console.log(x);


let un:unknown = "anwar";
let y = <string>un;
console.log(y.repeat(3));

let image = <HTMLImageElement>document.getElementById('image');
console.log(image.src);
console.log(image.alt);

// union type and inter-section type 
let variable: string | number = 'anwtr';
console.log(variable);

// inter-section type 

type first = {
    one : string,
    two : string,
    three : number,
}

type two = {
    y : boolean
}

type three = first & two;

function go (obj:three)
{
    console.log(obj.one);
    console.log(obj.two);
    console.log(obj.three);
    console.log(obj.y);
}
 go({one:"anwar",two:'tarek',three:21,y:false});
