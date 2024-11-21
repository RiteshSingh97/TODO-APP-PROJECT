let todoList =[
    {
        item : 'ritu',
        dueDate: '22/22/2222'

    },
    

];
displayItems();

function addTodo() {
let inputElement = document.querySelector('#input-box');
let dateElement =document.querySelector('#input-date');
let todoItem =inputElement.value;
let todoDate = dateElement.value;
todoList.push({item:todoItem,dueDate:todoDate});
inputElement.value= '';
dateElement.value= '';
displayItems();

}
function displayItems() {
    let containerElement = document.querySelector('#container');
    let newHtlm = '';
    
    for (let i=0; i<todoList.length; i++) {
     let item = todoList[i].item;
     let dueDate = todoList[i].dueDate;
     newHtlm += `
    
    <span> ${item} </span>
    <span> ${dueDate} </span>
    <button id ='btn-delete'onclick="todoList.splice (${i} , 1);
    displayItems();" > Delete </button>

    
    `;
    }
    containerElement.innerHTML =newHtlm;
    }
      