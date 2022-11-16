
let unit_1 = 0;
let unit_2 = 0;
let res;

document.getElementById("opt").onclick=function(){

    let select = document.getElementById("opt");
    let cel = select.options[0].value;
    // let fht = select.options[1].value;

    let opt = select.options;
    opt = opt[opt.selectedIndex].value;

    if(opt==cel){
        select.style.backgroundColor = "darkcyan";
        unit_1 = 0;
    }
    else{
        select.style.backgroundColor = "darkgoldenrod";
        unit_1 = 1;
    }
    // if(opt == "&#8451") console.log("Celsius");
    // else if(opt == "&#8457") console.log("Fahrenheit");
}


document.getElementById("opt1").onclick=function(){

    let select = document.getElementById("opt1");
    let cel = select.options[0].value;
    // let fht = select.options[1].value;

    let opt = select.options;
    opt = opt[opt.selectedIndex].value;

    if(opt==cel){
        select.style.backgroundColor = "darkcyan";
        unit_2 = 0;
    }
    else{
        select.style.backgroundColor = "darkgoldenrod";
        unit_2 = 1;
    }
    // if(opt == "&#8451") console.log("Celsius");
    // else if(opt == "&#8457") console.log("Fahrenheit");
}


document.getElementById("btn").onclick = function(){
    // console.log(unit_1,unit_2);
    let inp = document.getElementById("inp").value;
    let sym = document.getElementById("opt1").options;
    sym = sym[sym.selectedIndex].value;

    if(inp!=""){

        inp = Number(inp);
        
        if(inp!=inp) window.alert("Enter a valid Number!!");

        else if(unit_1==unit_2) res=inp;

        else if(unit_1==0 && unit_2==1){
            res = cel_fht(inp);
            
        }

        else if(unit_1==1 && unit_2==0){
            res = fht_cel(inp);
        }

    }

    else window.alert("Kindly enter a value!!");

    document.getElementById("res").innerHTML = `${String(res)} ${sym}`;
}

function cel_fht(cel){
    return ((cel*(9/5))+32).toPrecision(3);
}

function fht_cel(fht){
    return ((fht-32)*(5/9)).toPrecision(3);
}
