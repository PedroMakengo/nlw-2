// Procurar o botão 
const addItem = document.querySelector("#add-time")
    addItem.addEventListener("click", cloneField)
// Quando clicar no botão 

// Executar 
function cloneField() {
    // Duplicar os campos 
    const fields = document.querySelector(".schedule-item") 
        .cloneNode(true)
    // Colocar na página 
    document.querySelector("#schedule-items")
        // appendChild adicionar
        .appendChild(fields)
}
    