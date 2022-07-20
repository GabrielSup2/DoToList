const formAddTodo = document.querySelector(".form-add-todo");
const UlsTodo = document.querySelector(".todos-container")



formAddTodo.addEventListener("submit", event=>{
  event.preventDefault();
  const inputValueWithNoBlanckSpace = event.target.add.value.trim()

  if(inputValueWithNoBlanckSpace.length){

const insertTaskOnToDoList =    UlsTodo.innerHTML +=  ` <li class="list-group-item d-flex justify-content-between align-items-center">
<span> ${inputValueWithNoBlanckSpace}</span>
<i class="far fa-trash-alt delete"></i>
</li>`

    insertTaskOnToDoList
     event.target.reset()

  }

})

UlsTodo.addEventListener("click", event=>{
  itemClicked = event.target
  const isAnIconTagName = itemClicked.tagName === "I" 
  if(isAnIconTagName){
    const parentI = itemClicked.parentNode
   parentI.remove()
   
  }

})


