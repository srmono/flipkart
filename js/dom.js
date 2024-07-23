var divEl = document.createElement("div")

document.body.appendChild(divEl)

var textEl = document.createTextNode("Some Text")

divEl.appendChild(textEl)

divEl.setAttribute("id", "container")

//divEl.innerText ="new text"

divEl.innerHTML = "<p> new paragraph </p>";

divEl.innerHTML = ""

//divEl.remove()


