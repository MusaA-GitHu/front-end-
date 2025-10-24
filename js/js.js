

let a=window.prompt("the first number");
let b =window.prompt("enter the second number");
a=Number(a);
b=Number(b);


console.log('the sum of the first number and the second nuber is',a+b);
console.log('the product of two numbers is ',a*b);
console.log('the division of two number is or a/b is',a/b,"and b/a is ",b/a);
console.log('the difference of two numbers is a-b is',a-b,"anb b-a is",b-a);
console.log('the modulus or reminder of a%b is ',a%b,"and b%a is",b%a);
console.log('a=b is',a=b);
console.log('a<b is',a<b);
console.log('a!0b is',a!=b);


//if statment in js 
//the below code is display ony one out put based on the condition
let person1_age=23;
let person2_age=34;
if (person1_age>person2_age){
    console.log("person1 is older than person2");
}
else if (person1_age<person2_age){
    console.log("person2 is older than person1");
}
else{
    console.log("both are of same age");
}



// switch statment in javascript
let day='friday';
switch(day){
    case 'monday':
        console.log('today is manday');
        break;
        case 'friday':
            console.log('you get it today is',day);
            break;
            case 'sunday':
                console.log('today is sunday');
                break;
            default:
                console.log('not valid day');
                 
}