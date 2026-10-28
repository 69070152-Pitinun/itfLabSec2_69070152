const todo_input = document.getElementById("todo_input")
const add_btn = document.getElementById("add_btn")
const todo_list = document.getElementById("todo_list")

let name_list = []

function createLi(text) {
    let li = document.createElement("li")
    li.textContent = text

    let delete_btn = document.createElement("button")
    delete_btn.textContent = "ลบ"

    delete_btn.addEventListener("click", () => {
        li.remove()

        let index = name_list.indexOf(text)
        name_list.splice(index, 1)

        updateStorage()
    })

    li.appendChild(delete_btn)

    return li
}

function updateStorage() {
    let arr_to_text = JSON.stringify(name_list)
    localStorage.setItem("name_list", arr_to_text)
}

add_btn.addEventListener("click", () => {
    let new_li = createLi(todo_input.value)

    todo_list.appendChild(new_li)
    name_list.push(todo_input.value)

    updateStorage()

    todo_input.value = ""
})

window.onload = () => {
    let data = localStorage.getItem("name_list")

    if (data != null) {
        let arr = JSON.parse(data)

        arr.forEach(i => {
            let new_li = createLi(i)
            todo_list.appendChild(new_li)
            name_list.push(i)
        })
    }
}