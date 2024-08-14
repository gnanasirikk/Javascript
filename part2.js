console.log("hi");
console.log("Gnana siri");
let a=90
let b=21
//let c=("Total is:"+(a+b)+"cm");
let c=`Total is:${a+b} cm hiuuu`
console.log(c)

//Conditional statements
console.log("Before if stmt")
let age=8
    if(age>18){
        console.log(" eligible")
        let ah=9
            console.log(5*ah)}
    if(age<18){
        console.log("under 18")}
console.log("after")
//Traffic light system(cnd stmts:if)
let light='red'
if (light==='red')
    console.log("Stop");
if (light==='yellow')
    console.log("slow down");
else (light==='green')
    console.log("go");
//Months
let num=1
if(num==1){
    console.log("January");
}
else if(num==8){
    console.log("August");
}
else if(num=9){
    console.log("September");
}
//practice question
let size="M"
if (size=="XL"){
    console.log("Price is 250rs");
}
if (size=="L"){
    console.log("Price is 200rs");
}
if (size=="M"){
    console.log("Price is 150rs");
}
if (size=="S") {
    console.log("Price is 100rs");
}
//practice question(string starts w 'a' and greater than 3)
let str="apple"
if(str[0]='a' && (str.length>3)){
    console.log("good");
}
//PQ(switch)
let day =6;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;  
    case 3:
        console.log("Wednesday");
        break; 
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("not a day");
}

//ALERT and PROMPT
//alert("wrong password");
//prompt("Enter name:");
//let name=prompt("Enter name:");
//console.log("name");

//ASSIGNMENT
let n=2;
if(n % 10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}

let o=prompt("Enter name:");
let p = prompt("Enter age:");
alert('$ {o} is $ {p} years old.');
