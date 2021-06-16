// Procurar o botão 
const addItem = document.querySelector("#add-time")
    addItem.addEventListener("click", cloneField)
// Quando clicar no botão 

// Executar 
function cloneField() {
    // Duplicar os campos 
    const newFieldContainer = document.querySelector(".schedule-item") 
        .cloneNode(true)

    // Pegar os campos, que campos ?
    const fields = newFieldContainer.querySelectorAll("input") 
   
    // Limpar os campos 
    fields.forEach((field) => {
        field.value = ""
    })

    // Colocar na página 
    document.querySelector("#schedule-items")
        // appendChild adicionar
        .appendChild(newFieldContainer)
}
    