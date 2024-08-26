//FUNCTION

function dice(){
    let roll = Math.floor((Math.random() *6 ) +1);
    console.log(roll);
}
dice();

function name(n){
    console.log(`${n}is a boy`);
}
name("pratyush");
name("prakyath");

function avg(a,b,c){
    console.log((a+b+c)/3);
}
avg(643,341,43567);

//function multiplication(n){
    //for (let i=1; i<=n*10;i++){
      //  console.log(n*i);
    //}
//}
//multiplication(5);

function sum(a,b){
    return(a+b);
}
console.log(sum(8,9));

function number(a){
    let sum=0;
    for(let i =1;i<=a;i++){
        sum+=i;

    }
    return(sum);

}
number(4);

let str=["hi","!","where have you","been?"];
function concat(str){
    let result = "";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}

let greet = "hello";
function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();

function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

let Greet = function(){
    console.log("hello");
}
multipleGreet(Greet,2);

//function oddEvenTest(request){
    //if(request == "odd"){
       // let odd = function(n){
            //console.log(!(n%2 == 0));
        //}
        //}
    //else if(request == "even"){
      //  let even = function(n){
        //    console.log(n%2 == 0);
        //}
        //return even;
    //}else{
      //  console.log("wrong request");
    //}
//}
//let request = "odd";

const calci={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a, b){
        return a*b;
    }
    
};

//ASSIGNMENT
let first = [8,32,13,34,2,1,4,2,14];
let m = 4;
function elements(first,m){
    for(let i =0;i<first.length;i++){
        if(arr[i]>m){
            console.log(first[i]);
        }
    }
}
elements(first,m);


let s ="asdfghjkmnbvcxz";
function unique(str){
    let ans = "";
    for(let i=0;i<str.enght;i++){
        let char = s[i];
    if(async.indexOf(char) == -1){
        ans +=char;
    }
}
return ans;
}
unique(str);


let country = ["spain","india","Morocco","austrailia"];;
function longestName(country){
    let ansIdx  = 0;
    for (let i =0;i<country.length;i++){
        let ansLen = country[i].length;if(currLen>ansLen)
            {
                ansIdx=i;

    }
}
returncountry[ansIdx];
}
longestName(country)


letstr="gnanasiri";
functioncountVowels(str){
    letcount=0;
    for(leti=0;i<str.length;i++){
        if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u")
            {
                count++;
            }
        }
        returncount;

    }
    

letstart=100;
letend=200;
functiongenerateRandom(start,end){
    letdiff=end-start;
    returnMath.floor(Math.random()*diff)+start;
}