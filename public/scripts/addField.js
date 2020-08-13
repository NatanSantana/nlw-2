// Procurar o botão 
document.querySelector("#add-time")
.addEventListener('click', cloneField)
                 // Quando clicar no botão


// Executar uma ação
function cloneField() {

// Duplicar os campos
// (Seleciona o campo que quer duplicar)
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // Boolean= true or false

// Pegar os campos, que campos?
const fields = newFieldContainer.querySelectorAll('input')


// Para cada campo, limpar
fields.forEach(function(field) {
    // Pega o field do momento e limpa ele
    field.value = ""
})

// Onde colocar?
document.querySelector('#schedule-items').appendChild(newFieldContainer)

} 