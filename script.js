
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
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function verifier() {
    alert("bienvenue dans  notre magasin") ;
}
// remove items
function rem() {
document.getElementById("paragraph").style.visibility="hidden" ;
}
function remove() {
    document.getElementById("text").style.visibility="hidden" ;
}
// total
let cart = document.getElementsByClassName("cart") ;
let prix = document.getElementsByClassName("price") ;
function myfunction() {
    let total = 0 ;
    total +=  (parseInt(cart[0]) * parseInt(prix[0]) ) +  ( parseInt(cart[1]) * parseInt(prix[1]) ) ;
    document.getElementsByClassName("total").innerHTML = total ;
    console.log(cart,prix) ;

}

    



