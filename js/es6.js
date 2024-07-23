// let and const

// function exampleLet(){
//     let x = 10;

//     if(true){
//         let x = 20;
//         console.log("if block",x)
//     }

//     console.log("function level", x)
// }

// exampleLet()

// const num  = 10;

// num = 20
// const person = {name: "venkat"}
// person.name = "new name"

// arrow function

// let welcome = (a,b = 10) => a + b

// console.log(welcome(5, 23))

var person = {
    name: "venkat",
    skills: ["js", "react"],
    getName(){
        return this.name
    }
}

// var lang = "java script"
// var version = "es6"

// var langObj = { lang, version}

// console.log(langObj)


// rest and spread operator ...

function totalCartValue(...prices){
    var total = 0
    for(p of prices){
        total += p
    }
    console.log(total)
}

//totalCartValue(230, 540, 780, 5262)

var arr = [230, 540, 780, 5262]

// console.log(
//     Math.max(...arr)
// )

// Destructing 
var product = {
    title: "mobile",
    price: "787834",
    brand: "lenovo"
}

let {title, price} = product

// console.log(title)
// console.log(price)
// console.log(product)

let skills = ["js", "react", "react_native", "css"]

let [a, b, ...c] = skills

// console.log(a)
// console.log(b)
// console.log(c)

//template literals
let template =  `<p> Product title is: ${title} <p> price is: ${price}`

console.log(template)


