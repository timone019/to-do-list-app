function newItem() {

    let li = $('container');
    $('body').append(newElement);

    let element = $('.my-class');

}

//javascript replit that we need to convert to jquery
//1. Adding a new item to the list of items: 
// let li = document.createElement("li");
// let inputValue = document.getElementById("input").value;
// let text = document.createTextNode(inputValue);
// li.appendChild(text);

// vanilla javascript 1.9 example
// let newElement = document.createElement('div');
// newElement.classList.add('new-class');
// newElement.innerText = 'Content is here!';
// document.querySelector('body').appendChild(newElement);


let inputValue = $('#input').val();

// replit code to convert 
// let inputValue = document.getElementById("input").value;

$('.selectedElement').append('<li>some item</li>')

// Tip: You can reuse createTextNode('X') in jQuery like this: 
//deleteButton.append(document.createTextNode('X'));.


// replit code to convert
// let text = document.createTextNode(inputValue);
//    li.appendChild(text);

let element = $('.my-class');

// replit code to convert 
// if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     let list = document.querySelector('#list');
//     list.appendChild(li);
//   }

li.addClass("strike");


// replit 
//2. Crossing out an item from the list of items:
//  function crossOut() {
//     li.classList.toggle("strike");
// }

$('input').on('click', function (event) {
    // Do something
});
$('input').off('click'); // Remove all 'click' listeners

// replit
// li.addEventListener("dblclick",crossOut);

let newElement = $('container');
$('body').append(newElement);

// replit
//3(i). Adding the delete button "X": 
// let crossOutButton = document.createElement("crossOutButton");

$('.selectedElement').append('<li>some item</li>')

// replit
// crossOutButton.appendChild(document.createTextNode("X"));
//  	li.appendChild(crossOutButton);

$('input').on('click', function (event) {
    // Do something
});
$('input').off('click'); // Remove all 'click' listeners

// replit
// crossOutButton.addEventListener("click", deleteListItem);

// this should be in css already but use it as a reference
// .delete {
//     display: none; 
//   }

li.addClass("delete");

// replit
//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
// function deleteListItem(){
//     li.classList.add("delete")
// }



 // 4. Reordering the items:
//  $('#list').sortable(); this is already in jquery no need to convert

// }

