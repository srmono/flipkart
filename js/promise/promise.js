async function fetchTodo(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        //console.log(response)
        if(!response.ok){
            throw new Error("error message" + response.statusText)
        }
        const data = await response.json()
        console.log("Todo Data: ", data)
    } catch (error) {
        console.log(error)   
    }
}

fetchTodo()