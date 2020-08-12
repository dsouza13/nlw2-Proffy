// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', CloneField)

//Executar uma ação
function CloneField(){
    // Duplicar os campos. Quais campos??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpar os campos. Quais?
    const fields = newFieldContainer.querySelectorAll('input')

   // para cada campo, limpar
   fields.forEach(function(field){
       //pega o field do momento e limpa
        field.value=""
   })

    //Colocar na página. Onde exatamente??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}