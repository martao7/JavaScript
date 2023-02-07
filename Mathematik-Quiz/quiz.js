"use strict";

function weiter() {
    if (frage(spielstand)) {
        spielstand++;
        let hervorheben = "feld" + (spielstand - 1);
        document.getElementById(hervorheben).style.background = "white";
        if (spielstand == 10) {
            alert(decodeURI("Herzlichen Gluckwunsch, Sie haben gewonnen!"));
            spielstand = 1;
        }
        hervorheben = "feld" + spielstand;
        document.getElementById(hervorheben).style.background = "red";
        localStorage.setItem("spielstand", spielstand);
    }
}

function neu() {
    let hervorheben = "feld" + spielstand;
    document.getElementById(hervorheben).style.background = "white";
    spielstand = 1;
    hervorheben = "feld" + spielstand;
    document.getElementById(hervorheben).style.background = "red";
    localStorage.setItem("spielstand", spielstand);
}

let spielstand;

if (localStorage.getItem("spielstand") == null) {
    spielstand = 1;
}
else {
    spielstand = localStorage.getItem("spielstand");
}

let hervorheben = "feld" + spielstand;

document.getElementById(hervorheben).style.background = "red";

nachsterZug.onclick = weiter;
neuesSpiel.onclick = neu;