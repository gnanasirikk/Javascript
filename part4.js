//for loops
//for(let i=0;i<=100;i++)
    //console.log(i);

//odd numbers
//for(i=1;i<=15;i=i+2){
    //console.log(i);
//}

//even numbers
//for(i=2;i<=15;i=i+2){
 //   console.log(i);
//}
//for(i=1; ;i=i+2){
  //  console.log(i);
//}

// let g=1;
//while(g<=9){
    //console.log("NINE");
    //g++;
//}

//let movie="Ironman";
//let guess=prompt("Movie:");
//while((movie!=guess) && (guess!="quit")){
    //console.log("wrong");
    //guess=prompt("Movie:");
//}

let Games=["hideandseek","tag","ko ko","chess"];
for(Game of Games){
    console.log(Game);
}

let games=[["hideandseek","tag"],["ko ko","chess"],["kabadi","jam"]];
for(list of games){
    for(game of list){
        console.log(game);
    }
}

for(char of "Gnana Siri"){
    console.log(char);
}

//TO DO APP
//let todo=[];
//let req=prompt("To do? :");
//console.log(req);
while(true){
    if(req = "quit"){
        console.log("quitting");
        break;
    }
    if(req == "add"){
        //task =prompt("What do you want to add?");
       todo.push(task);
        break;
    }
    //req=prompt("To do? :");
    if(req == "list"){
        for(task of todo){
            console.log(task);
        }
        break;
    }
   

    if(req = "delete"){
        console.log("deleting");
        break;
    }
}

//ASSIGNMENT

let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0;i<arr.length;i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}    
console.log(arr);

let digit = [12578];
console.log(digit.length);
//OR
 let number = 345678;
 let count = 0;
 let sum =0;
 let copy = number;
 while(copy>0){
    count++;
    d = copy%10;
    sum+= digit;
    copy = Math.floor(copy/10);
 }
console.log(count);
console.log(sum);

let no = 8;
let fact =1;
for(let i=1;i<no;i++){
    fact*i;
}
console.log('fact is ${fact}');

let array=[6,1,2,3,9];
let largest = 0;
for(let i =0;i<=array.length;i++){
    if(largest<array[i]){
        largest = arr[i];
    }
}
console.log(largest);