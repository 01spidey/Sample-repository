// console.log(printArea(4,5));


// function printArea(len,bre){
//     return len*bre;
// }


//ternary operator
// let x = window.prompt("Enter the value : ");
// let val = (x%2==0) ? "Even" : "Odd" ;
// console.log(val);

// function scope(){
//     for(let i=0;i<3;i++){
//         // console.log(i);
//     }
//     let x=8;
//     console.log(x);
// }

// console.log(x);
// scope();

// function scope(){
//     let txt = `The value is <br> ${window.prompt("Enter a value : ")}`;
//     document.getElementById("txt").innerHTML = txt;
// }

let inp_txt = document.getElementById("inp_txt");


document.getElementById("btn").onclick = function(){
    let inp_txt = Number(document.getElementById("inp_txt").value);
    
    let inp_curr = document.getElementById("inp_curr");
    inp_curr = inp_curr.options[inp_curr.options.selectedIndex].value;
    
    let out_curr = document.getElementById("out_curr");
    out_curr = out_curr.options[out_curr.options.selectedIndex].value;

    if(inp_txt==0){
        window.alert("Kindly enter a value!!");
    }

    else{
        if(inp_curr==out_curr) document.getElementById("res").innerHTML = (inp_txt.toLocaleString(undefined,{
            style:"currency",
            currency:inp_curr,
        }));
    
        else if(inp_curr=="USD" && out_curr=="INR") document.getElementById("res").innerHTML = usd_inr(inp_txt);
        else if(inp_curr=="USD" && out_curr=="EUR") document.getElementById("res").innerHTML = usd_euro(inp_txt);
    
        else if(inp_curr=="INR" && out_curr=="USD") document.getElementById("res").innerHTML = (inr_usd(inp_txt));
        else if(inp_curr=="INR" && out_curr=="EUR") document.getElementById("res").innerHTML = (inr_euro(inp_txt));
    
        else if(inp_curr=="EUR" && out_curr=="USD") document.getElementById("res").innerHTML = (euro_usd(inp_txt));
        else if(inp_curr=="EUR" && out_curr=="INR") document.getElementById("res").innerHTML = (euro_inr(inp_txt));
    }
}

//USD conversions
function usd_inr(usd){
    let txt = usd*79.20;
    txt = txt.toLocaleString(undefined,{
        style:"currency",
        currency: "INR"
    });
    return txt;
}

function usd_euro(usd){
    let txt = usd*0.98;
    txt = txt.toLocaleString(undefined,{
        style:"currency",
        currency: "EUR"
    });
    return txt;
}

//INR conversions
function inr_usd(inr){
    let txt= inr*0.013;
    txt = txt.toLocaleString(undefined,{
        style:"currency",
        currency: "USD"
    });
    return txt;
}

function inr_euro(inr){
    let txt= inr*0.012;
    txt = txt.toLocaleString(undefined,{
        style:"currency",
        currency: "EUR"
    });
    return txt;
}

//EURO conversions
function euro_usd(euro){
    let txt = euro*1.02;
    txt = txt.toLocaleString(undefined,{
        style:"currency",
        currency: "USD"
    });
    return txt;
}

function euro_inr(euro){
    let txt = euro*80.99;
    txt = txt.toLocaleString(undefined,{
        style:"currency",
        currency: "INR"
    });
    return txt;
}


