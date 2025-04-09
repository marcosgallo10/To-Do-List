let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

document.querySelectorAll('li').forEach(function(element) {
  element.addEventListener('click', function(){
    element.style.textDecoration = "line-through"
  });
  element.addEventListener('dblclick' , function(){
    element.remove();
  });
});
addToDoButton.addEventListener('click', function(){
  let listItem = document.createElement('li');
    listItem.innerText = inputField.value;
      toDoContainer.appendChild(listItem);
      inputField.value= "";
  listItem.addEventListener('click', function(){
    listItem.style.textDecoration = "line-through";
  })
  listItem.addEventListener('dblclick', function(){
    listItem.remove();
  });
});