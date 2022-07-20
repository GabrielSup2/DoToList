const formAddTodo = document.querySelector(".form-add-todo");
const UlsTodo = document.querySelector(".todos-container")

formAddTodo.addEventListener("submit", event=>{
  event.preventDefault();
  const inputValue = event.target.add.value.trim()

  if(inputValue.length){

    UlsTodo.innerHTML +=  ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span> ${inputValue}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`

    event.target.reset()

  }



})




