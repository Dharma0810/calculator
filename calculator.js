var parent = document.getElementById("numbers_div")
var content = document.getElementById("para_display")
var str = ""

parent.addEventListener("click", eve = (e) => {
    let targetted = e.target

    if (targetted.className == "numbers_button" || targetted.id == "result") {

        if (targetted.value != "=") {
            str += targetted.value
            content.innerHTML = str
        }
        else
            content.innerHTML = eval(str);
    }
    if (targetted.id == "all_clear") {
        str = ""
        content.innerHTML = "0"
    }
    if (targetted.id == "clear") {
        str = str.substring(0, str.length - 1)
        content.innerHTML = str
    }

    mod.addEventListener("click", modul)
    div.addEventListener("click", divide)
    mul.addEventListener("click", multiple)
    sub.addEventListener("click", subtract)
    add.addEventListener("click", adder)
    dot.addEventListener("click", dott)

}, false)

let mod = document.getElementById("moduler");
let div = document.getElementById("divider");
let mul = document.getElementById("multiplier");
let sub = document.getElementById("subtractor");
let add = document.getElementById("adder");
let dot = document.getElementById("dot")
const arr = ["%", "/", "*", "-", "+"];

function modul() {
    let res = true;
    for (i = 0; i < arr.length; i++) {

        if (str.endsWith(arr[i])) {
            str = str.substring(0, str.length - 1)
            str += "%"
            content.innerHTML = str
            res = false;
            break
        }
    }
    if (res) {
        str += "%"
        content.innerHTML = str
    }

    mod.removeEventListener("click", modul)
    div.addEventListener("click", divide)
    mul.addEventListener("click", multiple)
    sub.addEventListener("click", subtract)
    add.addEventListener("click", adder)
    dot.addEventListener("click", dott)
}
mod.addEventListener("click", modul)

function divide() {
    let res = true;
    for (i = 0; i < arr.length; i++) {

        if (str.endsWith(arr[i])) {
            str = str.substring(0, str.length - 1)
            str += "/"
            content.innerHTML = str
            res = false;
            break
        }
    }
    if (res) {
        str += "/"
        content.innerHTML = str
    }
    div.removeEventListener("click", divide)
    mod.addEventListener("click", modul)
    mul.addEventListener("click", multiple)
    sub.addEventListener("click", subtract)
    add.addEventListener("click", adder)
    dot.addEventListener("click", dott)
}
div.addEventListener("click", divide)

function multiple() {
    let res = true;
    for (i = 0; i < arr.length; i++) {

        if (str.endsWith(arr[i])) {
            str = str.substring(0, str.length - 1)
            str += "*"
            content.innerHTML = str
            res = false;
            break
        }
    }
    if (res) {
        str += "*"
        content.innerHTML = str
    }
    mul.removeEventListener("click", multiple)
    mod.addEventListener("click", modul)
    div.addEventListener("click", divide)
    sub.addEventListener("click", subtract)
    add.addEventListener("click", adder)
    dot.addEventListener("click", dott)
}
mul.addEventListener("click", multiple)

function subtract() {
    let res = true;
    for (i = 0; i < arr.length; i++) {

        if (str.endsWith(arr[i])) {
            str = str.substring(0, str.length - 1)
            str += "-"
            content.innerHTML = str
            res = false;
            break
        }
    }
    if (res) {
        str += "-"
        content.innerHTML = str
    }
    sub.removeEventListener("click", subtract)
    mod.addEventListener("click", modul)
    div.addEventListener("click", divide)
    mul.addEventListener("click", multiple)
    add.addEventListener("click", adder)
    dot.addEventListener("click", dott)
}
sub.addEventListener("click", subtract)

function adder() {
    let res = true;
    for (i = 0; i < arr.length; i++) {

        if (str.endsWith(arr[i])) {
            str = str.substring(0, str.length - 1)
            str += "+"
            content.innerHTML = str
            res = false;
            break
        }
    }
    if (res) {
        str += "+"
        content.innerHTML = str
    }
    add.removeEventListener("click", adder)
    mod.addEventListener("click", modul)
    div.addEventListener("click", divide)
    mul.addEventListener("click", multiple)
    sub.addEventListener("click", subtract)
    dot.addEventListener("click", dott)
}
add.addEventListener("click", adder)

function dott() {
    str += "."
    content.innerHTML = str
    dot.removeEventListener("click", dott)
}
dot.addEventListener("click", dott)