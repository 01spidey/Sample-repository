document.getElementById("btn").onclick=function(){
    document.getElementById("res").innerHTML = "";
    let size = Number(document.getElementById("inp").value);
    if(size==0) window.alert("Please enter a value!!");
    
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            document.getElementById("res").innerHTML+= "# ";
        }
        document.getElementById("res").innerHTML+= "<br>"; 
    }
}







