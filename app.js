// let body = document.querySelector("#body");
// let btn = document.querySelector("#btn");

// function Radomcolor(){

// }



// HTML
// HTML


// JavaScript
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;
    list.appendChild(li);
    input.value = '';
  }
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
