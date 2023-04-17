const ul = document.querySelector("#todoList");

const addTodo = function (todo) {
  let li = document.createElement("li");

  let label = document.createElement("label");
  label.innerHTML = todo;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  // Write code to trigger the toggleCheck function once the checkbox is clicked
  checkbox.onchange = function () {
    toggleCheck(checkbox);
  };

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "delete";
  // Write code to trigger the deleteTodo function once the delete button is clicked
  deleteButton.onclick = function () {
    deleteTodo(deleteButton);
  }

  // Nest todo elements in list item
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);

  // Write code to append todo element in list with "todoList" id
  ul.appendChild(li);
};

document.getElementById("add").onclick = function () {
  // Store the button's parent element (.addTodo <div>) in a variable
  const parent = this.parentNode;
  // Store the input, which is the first child element of the .addTodo <div>
  const addTextInput = parent.children[0];
  // Make sure that the input's value is not empty in the following if condition
  if (addTextInput.value === "") {
    return;
  } else {
    // Add todo
    addTodo(addTextInput.value);
    // Reset input
    addTextInput.value = "";
  }
};

const toggleCheck = function (c) {
  // Create a variable to refer the to-do list, that is, the parent node of the checkbox
  const parent = c.parentNode
  // Use the classList property to toggle the class checked, for example, varName.classList.toggle('checked')
  if (c.checked) {
    parent.classList.toggle("checked");
  } else {
    parent.classList.remove("checked");
  }
};

const deleteTodo = function (del) {
  // Create a variable to refer the to-do list, that is, the parent node of the delete button
  const parent = del.parentNode;
  // Remove the list item using the .remove() function, for example, varName.remove()
  parent.remove()
};
