
let choix = true ;
function change() {
    let button = document.getElementById("button") ;
    if (choix == true ) {
        button.style.color = "red" ;
        choix = false ;
    } else {
        button.style.color = "black" ;
        choix = true ;
    }
}
let choise = true ;
function button() {
    let input = document.getElementById("input") ;
    if (choise == true ) {
        input.style.color = "red" ;
        choise = false ;
    } else {
        input.style.color = "black" ;
        choise = true ;
    }
}
// + and - items
// + item
function add() {
    var value = input.getAttribute("value") ;
    var prix = document.getElementsByClassName("prix") ; 
    value = value + 1 ;
    prix += prix ; 
}
// - item
function sub() {
    let value = input.getAttribute("value") ;
    let prix = document.getElementsByClassName("prix") ; 
    value = value - 1 ;
    prix -= prix ;
}
// delete items
 

