function RI(){
    let red = document.getElementById("RI").value;
    document.getElementById("RO").value = red;
}
function GI(){
    let red = document.getElementById("GI").value;
    document.getElementById("GO").value = red;
}
function BI(){
    let red = document.getElementById("BI").value;
    document.getElementById("BO").value = red;
}
function tekst(){
    let tekst = document.getElementById("input").value;
    document.getElementById("output").innerText = tekst;
    setTimeout("tekst()", 1000);
}
function updatekolor(){
    let red = document.getElementById("RI").value;
    let green = document.getElementById("GI").value;
    let blue = document.getElementById("BI").value;

    red = parseInt(red, 10);
    red = red.toString(16);

    green = parseInt(green, 10);
    green = green.toString(16);

    blue = parseInt(blue, 10);
    blue = blue.toString(16);

    if(red[1] == null) red = `0${red}`;
    if(green[1] == null) green = `0${green}`;
    if(blue[1] == null) blue = `0${blue}`;

    document.getElementById("output").style.color = `#${red}${green}${blue}`;
}