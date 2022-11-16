let num; 
let color_val=0;
let score=0;

document.getElementById("1").onclick = function(){
    color_val=1;
}

document.getElementById("2").onclick = function(){
    color_val=2;
}

document.getElementById("3").onclick = function(){
    color_val=3;
}

document.getElementById("4").onclick = function(){
    color_val=4;
}

document.getElementById("5").onclick = function(){
    color_val=5;
}

document.getElementById("6").onclick = function(){
    color_val=6;
}

document.getElementById("btn").onclick = function(){
    
    num= Math.floor(((Math.random())*6)+1);

    document.getElementById("color").style.backgroundColor = document.getElementById(String(num)).style.backgroundColor;
    
    // console.log(color_val,num);
    
    if(color_val==num){
        score+=10;
        document.getElementById("score").innerHTML=String(score)+" pts";
    }
    // else{
        
    // }
    
}
