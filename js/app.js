/*Adding list item function*/
function addItem() {

    //get the value of the input box
    var itemValue = $('#item-value').val();

    //validate input
    if (itemValue.length === 0) {
        alert('Please Type Item');
    }
    //if the input is valid...
    else {
        //dynamically create one row inside the shopping list
        var row = $('<li><button class="checkbox">✓</button> <span class="list">' + itemValue + '</span><button class="delete">x</button></li>');

        //add each row to the previous ones
        $('.list-items').append(row);

        //empty the input box after submit by resetting the value
        itemValue = $('#item-value').val('');
    }

}
/*Check Item*/
function checkItem() {
    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and add / remove the "checked" class to it
    $(this).parent().toggleClass('checked');
}
/*Delete Item*/
function deleteItem() {
    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and remove it
    $(this).parent().remove();
}
/*Clear All Items*/
function clearAll() {
    $('.list-items').empty();
}
$(document).ready(function () {
    /*on click on the "#add-button" button fire the action called addItem()*/
    $('#add-button').on('click', function () {
        addItem();
    });
    /*on click on the ".clear-all" button fire the action called clearAll()*/
    $('.clear-all').on('click', function () {
        clearAll();
    });



});

/*the following 3 function calls should be OUTSIDE the $(document).ready(function() because the targeted containers where created AFTER the page was loaded*/

/*add item on enter*/
$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        addItem();
    }
});
/*clear list on delete*/
$(document).on('keypress', function (key) {
    //keyCode == 46 is the DELETE key
    if (key.keyCode == 46) {
        deleteAll();
    }
});

/*on click on the ".checkbox" button fire the action called checkItem()*/
$(document).on('click', '.checkbox', checkItem);
/*on click on the ".delete" button fire the action called deleteItem()*/
$(document).on('click', '.delete', deleteItem);
