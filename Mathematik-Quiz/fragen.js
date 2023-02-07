"use strict";

function frage(nummer) {
    if (nummer == 1) {
        let a = Math.floor(Math.random() * 49 + 1);
        let b = Math.floor(Math.random() * 49 + 1);
        let ergebnis = prompt("Was ist das Ergebnis aus " + a + "+ " + b + "?");
        if (ergebnis == a + b){
            alert("Sehr gut, richtig!");
            return true;
        }
        else {
            alert("Falsches Ergebnis!");
            return false;
        }
    }
    if (nummer == 2) {
        let a = Math.floor(Math.random() * 49 + 51);
        let b = Math.floor(Math.random() * 49 + 51);
        let ergebnis = prompt("Was ist das Ergebnis aus " + a + "- " + b + "?");
        if (ergebnis == a - b) {
            alert("Sehr gut, richtige Antwort!");
            return true;
        }
        else {
            alert("Falsches Ergebnis!");
            return false;
        }
    }
    if (nummer == 3) {
        let a = Math.floor(Math.random() * 19 + 1);
        let b = Math.floor(Math.random() * 19 + 1);
        let ergebnis = prompt("Was ist das Ergebnis aus " + a + "* " + b + "?");
        if (ergebnis == a * b) {
            alert("Sehr gut, richtig!");
            return true;
        }
        else {
            alert("Falsches Ergebnis!");
            return false;
        }
    }
    if (nummer == 4) {
        let a = Math.floor(Math.random() * 9 + 1);
        let b = Math.floor(Math.random() * 49 + 1);
        let ergebnis = prompt("Was ist das Ergebnis aus " + a*b + "/ " + a + "?");
        if (ergebnis == b) {
            alert("Sehr gut, richtig!");
            return true;
        }
        else {
            alert("Falsches Ergebnis!");
            return false;
        }
    }
    if (nummer == 5) {
        let a = Math.floor(Math.random() * 49 + 1);
        let b = Math.floor(Math.random() * 49 + 1);
        let ergebnis = prompt("Was ist das Ergebnis aus " + a + "+ " + b + "?");
        if (ergebnis == a + b) {
            alert("Sehr gut, richtig!");
            return true;
        }
        else {
            alert("Falsches Ergebnis!");
            return false;
        }
    }
    if (nummer == 6) {
        let a = Math.floor(Math.random() * 49 + 1);
        let b = Math.floor(Math.random() * 49 + 1);
        let ergebnis = prompt("Was ist das Ergebnis aus " + a + "+ " + b + "?");
        if (ergebnis == a + b) {
            alert("Sehr gut, richtig!");
            return true;
        }
        else {
            alert("Falsches Ergebnis!");
            return false;
        }
    }
    if (nummer == 7) {
        let a = Math.floor(Math.random() * 49 + 1);
        let b = Math.floor(Math.random() * 49 + 1);
        let ergebnis = prompt("Was ist das Ergebnis aus " + a + "+ " + b + "?");
        if (ergebnis == a + b) {
            alert("Sehr gut, richtig!");
            return true;
        }
        else {
            alert("Falsches Ergebnis!");
            return false;
        }
    }
    if (nummer == 8) {
        let a = Math.floor(Math.random() * 49 + 1);
        let b = Math.floor(Math.random() * 49 + 1);
        let ergebnis = prompt("Was ist das Ergebnis aus " + a + "+ " + b + "?");
        if (ergebnis == a + b) {
            alert("Sehr gut, richtig!");
            return true;
        }
        else {
            alert("Falsches Ergebnis!");
            return false;
        }
    }
    if (nummer == 9) {
        let a = Math.floor(Math.random() * 49 + 1);
        let b = Math.floor(Math.random() * 49 + 1);
        let ergebnis = prompt("Was ist das Ergebnis aus " + a + "+ " + b + "?");
        if (ergebnis == a + b) {
            alert("Sehr gut, richtig!");
            return true;
        }
        else {
            alert("Falsches Ergebnis!");
            return false;
        }
    }

}