// function welcome(){
//     console.log("I am an event")
// }
// var button = document.getElementById("btn");
// //button.onclick = welcome
// button.addEventListener("click", welcome)

var p1 = document.getElementById("p1")
var c1 = document.getElementById("c1")

var p2 = document.getElementById("p2")
var c2 = document.getElementById("c2")

var anc = document.getElementById("anc")

function ancHandler(e) {
    e.preventDefault();
    
    console.log("prevented default action")
}

anc.addEventListener("click", ancHandler)

function parentHandler(e){
    // console.log(e.target)
    console.log(e.currentTarget)
    console.log("parent event")
}

function childHandler(e){
    e.stopPropagation();
    console.log("child event")
}

function anotherEvent(e){
    if(false){
        e.stopImmediatePropagation()
    }
    console.log("I am another event")
}

function anotherEventTwo(){
    console.log("I am another event two")
}

p1.addEventListener("click", parentHandler)


//c1.addEventListener("click", childHandler)


// c1.addEventListener("click", anotherEvent)
// c1.addEventListener("click", anotherEventTwo)


// p2.addEventListener("click", parentHandler, true)
// c2.addEventListener("click", childHandler)
