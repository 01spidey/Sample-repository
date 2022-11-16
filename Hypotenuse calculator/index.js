// Adding Semicolon is not always important in jS because the 'Automatic Semicolon Insertion'[ASI] process takes care of it but not all the time...

// Using 'Math' module...


const PI = Math.PI; //Declaring v2ariables with 'const' keyword makes it a immutable variable...

let a;
let b;
let c;
let ans = document.getElementById("ans");

document.getElementById("res").onclick = function(){
    a = Number(document.getElementById("side1").value);
    b = Number(document.getElementById("side2").value);
    c = Math.sqrt((a*a)+(b*b));
    
    if(c==Math.round(c)){
        ans.innerHTML = "Hypotenuse : "+ Math.round(c);
    }
    else{
        ans.innerHTML = "Hypotenuse : "+ c.toFixed(5);
    } 
}


// let x = 3.154;

// console.log(Math.round(x));
// console.log(Math.ceil(x));
// console.log(Math.floor(x));