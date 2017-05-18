/**
 * Created by Ucenik on 18.5.2017..
 */
var counter=0;
var brojevi=[];
function funk() {
    if(counter==10){
        for(var i=0;i<10;i++){
            document.getElementById("randod").innerHTML = Math.max(brojevi[i]);
        }
    }else{
        brojevi.push(document.getElementById("inputo").value);
        console.log(brojevi);
        counter+=1;
        document.getElementById("inputo").value = "";

    }
}

function provjera(){
    var imeno = document.getElementById("ime").value;
    var godino = document.getElementById("god").value;
    if(imeno.length<10){
        document.getElementById("imep").innerHTML = "Minimalo brojo znako je deseto!";
    }else{
        document.getElementById("imep").innerHTML = "Tvojo imeno je dobro!";
    }
    if(godino<18){
        document.getElementById("godp").innerHTML = "Nesto ne stima s tvojim godinama!";
    }else if(godino>99){
        document.getElementById("godp").innerHTML = "Nesto ne stima s tvojim godinama!";
    }else{
        document.getElementById("godp").innerHTML = "Tvojo godino valjajo!";
    }
}

function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow) {
        txt = "Value too large";
    }else if(document.getElementById("id1").value == ""){
        txt = "No value";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;
}

function bojo() {
    var broj = Math.floor((Math.random() * 1000) + 1);
    if(broj>0 && broj<201){
        document.getElementById("sirnico").style.backgroundColor = "blue";
        document.getElementById("oooo").innerHTML = broj;
    }else if(broj>200 && broj<402){
        document.getElementById("sirnico").style.backgroundColor = "red";
        document.getElementById("oooo").innerHTML = broj;
    }else if(broj>600 && broj<802){
        document.getElementById("sirnico").style.backgroundColor = "green";
        document.getElementById("oooo").innerHTML = broj;
    }else if(broj>800 && broj<1001){
        document.getElementById("sirnico").style.backgroundColor = "yellow";
        document.getElementById("oooo").innerHTML = broj;
    }else{
        document.getElementById("sirnico").style.backgroundColor = "white";
        document.getElementById("oooo").innerHTML = broj;
    }
}