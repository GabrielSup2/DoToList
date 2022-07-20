const formAddTodo = document.querySelector(".form-add-todo");
const UlsTodo = document.querySelector(".todos-container")
const inputFindTodo = document.querySelector(".form-search")



formAddTodo.addEventListener("submit", event=>{
  event.preventDefault();
  const inputValueWithNoBlanckSpace = event.target.add.value.trim()

  if(inputValueWithNoBlanckSpace.length){

const insertTaskOnToDoList  =    UlsTodo.innerHTML +=  ` <li class="list-group-item d-flex justify-content-between align-items-center">
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

inputFindTodo.addEventListener("input", (event)=>{

inputValue = event.target.value.trim().toLowerCase()




Array.from(UlsTodo.children).
  filter(todo => !todo.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(inputValue.toLowerCase()) )
  .forEach((todo)=>{
    todo.classList.remove("d-flex")
    todo.classList.add("hidden")
  })
 
  Array.from(UlsTodo.children).
  filter(todo => todo.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputValue.toLowerCase()) )
  .forEach((todo)=>{
    todo.classList.remove("hidden")
    todo.classList.add("d-flex")
  })
  

})

