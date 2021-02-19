document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const formFocus = document.getElementById("new-task-description").focus();
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescriptionButton = document.getElementById("new-task-description-button");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskList = document.getElementById("list")
  

  newTaskDescriptionButton.addEventListener('click', function(e) {
    e.preventDefault();
    const newTaskValue = newTaskDescription.value;
    
    if (newTaskValue === "") {
      newTaskDescription.placeholder = "Enter something!";
    } else {
      newTaskList.innerHTML += `<li class="emoji">${newTaskValue}</li>`;
      newTaskDescription.value = "";
      newTaskDescription.placeholder = "description";
    }
  });




});



// const newTaskDescription = document.getElementById("new-task-description")



// newTaskForm.addEventListener("submit", (e) => {
//   e.preventDefault();
// )};


// function handleSubmit(e){
//   e.preventDefault()
// };

// document.getElementById("new-task-description").addEventListener("onsubmit", function(e) {
//   e.preventDefault()
// });

// const submitButton = document.getElementById("new-task-description");

// submitButton.addEventListener("click", function(e) {
//   e.preventDefault()
// });



// function handleSubmit(event){
//   console.log('in handle submit function')
//   // prevent the defaul POST action
//   event.preventDefault()

//   // grab the emoji in the input field
//   let emoji = document.getElementById('new-emoji').value

//   // add that emoji to the list 
//   emojiBank.innerHTML += `<li class="emoji">${emoji}</li>`

//   // reset the page so that the form is gone & the button is back

//   // addEmojiArea().innerHTML = `<button id="add-button">Add Emoji</button>`
//   addEmojiArea.innerHTML = ""
//   addEmojiArea.append(addEmojiBtn)
// }