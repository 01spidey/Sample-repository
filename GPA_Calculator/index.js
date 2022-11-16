const pqt = 3;
const os = 3;
const daa = 3;
const toc = 3;
const dbms = 3;
const oops = 3;
const os_lab = 1;
const dbms_lab = 2;

const credits = [pqt,os,daa,toc,dbms,oops,os_lab,dbms_lab];


let temp;
let pqt_grade;
let os_grade;
let daa_grade;
let toc_grade;
let dbms_grade;
let oops_grade;
let osLab_grade;
let dbmsLab_grade;

let tot;

document.getElementById("btn").onclick = function(){
    let Grade_points = [];

    temp = document.getElementById("U19MA404");
    pqt_grade = temp.options[temp.selectedIndex].value;
    Grade_points.push(gradeToPoint(pqt_grade));
    
    temp = document.getElementById("U19CS401");
    os_grade = temp.options[temp.selectedIndex].value;
    Grade_points.push(gradeToPoint(os_grade));

    temp = document.getElementById("U19CS402");
    daa_grade = temp.options[temp.selectedIndex].value;
    Grade_points.push(gradeToPoint(daa_grade));
    
    temp = document.getElementById("U19CS403");
    toc_grade = temp.options[temp.selectedIndex].value;
    Grade_points.push(gradeToPoint(toc_grade));

    temp = document.getElementById("U19CS404");
    dbms_grade = temp.options[temp.selectedIndex].value;
    Grade_points.push(gradeToPoint(dbms_grade));
  
    temp = document.getElementById("U19CS405");
    oops_grade = temp.options[temp.selectedIndex].value;
    Grade_points.push(gradeToPoint(oops_grade));

    temp = document.getElementById("U19CS406");
    osLab_grade = temp.options[temp.selectedIndex].value;
    Grade_points.push(gradeToPoint(osLab_grade));  

    temp = document.getElementById("U19CS407");
    dbmsLab_grade = temp.options[temp.selectedIndex].value;
    Grade_points.push(gradeToPoint(dbmsLab_grade));

    let num = 20;
    let den = 2;

    for(i=0;i<8;i++){
        num+=(credits[i]*Grade_points[i]);
    }


    for(i=0;i<8;i++){
        den+=credits[i];
    }

    // console.log(credits);
    // console.log(Grade_points);
    console.log((num/den).toFixed(3));
    document.getElementById("res").innerHTML = "GPA : "+String((num/den).toFixed(2));
    
}

function gradeToPoint(x){
    let point;
    switch(x){
        case "O":
            point= 10;
            break;

        case "A+":
            point= 9;
            break;

        case "A":
            point= 8;
            break;

        case "B+":
            point= 7;
            break;

        case "B":
            point= 6;
            break;

        case "U":
            point= 0;
            break;
    }

    return point;
}








