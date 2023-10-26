function newItem() {
    //1. Adding a new item to the list of items: 
    // 1.9 jquery template - let newElement = $('<div class="new-class">Content is here!</div>');
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    // 1.9 template - let inputValue = $('#input').val(); $('body').append(newElement);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }



    //1.javascript replit: converted to jquery above
    // let li = document.createElement("li");
    // let inputValue = document.getElementById("input").value;
    // let text = document.createTextNode(inputValue);
    // li.appendChild(text);

    // vanilla javascript 1.9 example notes
    // let newElement = document.createElement('div');
    // newElement.classList.add('new-class');
    // newElement.innerText = 'Content is here!';
    // document.querySelector('body').appendChild(newElement);

    // Tip: jQuery doesn’t have an equivalent to createElement, so you’ll have to append HTML as a string like this: 
    // $('.selectedElement').append('<li>some item</li>');



    //1. replit code to convert 
    // if (inputValue === '') {
    //     alert("You must write something!");
    //   } else {
    //     let list = document.querySelector('#list');
    //     list.appendChild(li);
    //   }

    // Using jQuery, you can perform the rough equivalent of a document.querySelectorAll function like so:
    // let element = $('.my-class');
    // ou can assign the selected list to a variable (say “list”) using 
    // let list = $('#list') 
    // To append something to this list, such as an li element, you can write: $('#list').append(<li>list something</li>); 
    // If you want to use the variable “list” you created earlier, you can write: list.append("<li>list something</li>");
    // You can store each <li> element in a variable as well using let li = $('<li></li>'); 
    // Now you can append the li variable to the “list” variable like list.append(li);


    // 1.9 example of vanilla javascript
    // let inputs = document.querySelectorAll('input');
    // inputs.forEach(function (input) {
    //     input.classList.add('.my-class');
    //   });

    // jquery adding a class
    // let inputs = $('input');
    // inputs.addClass('my-class');


    //2. Crossing out an item from the list of items:
    // 1.9 template li.addClass("strike");
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });


    //2. vanilla replit to convert
    //  function crossOut() {
    //     li.classList.toggle("strike");
    // }
    // li.addEventListener("dblclick",crossOut);

    // 1.9 event handling template - on is equivalent to addEventListener
    // li.on("click", function() {
    //     li.addClass("strike");
    //   });

    //3.  (i). Adding the delete button "X": 
    // Tip: You can reuse createTextNode('X') in jQuery like this: deleteButton.append(document.createTextNode('X'));
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    // 1.9 template - also refer to template 1. at the very top
    // let newElement = $('container');
    // $('body').append(newElement);
    // $('.selectedElement').append('<li>some item</li>')

    crossOutButton.on("click", deleteListItem); // on replaces eventlistener

    // /3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        li.addClass("delete")
    }

    // 3. replit to convert
    // crossOutButton.addEventListener("click", deleteListItem);
    // li.addClass("delete");
    // function deleteListItem(){
    //     li.classList.add("delete")
    // }

    // 4. Reordering the items: this is already in jquery no need to convert
    $('#list').sortable();














}