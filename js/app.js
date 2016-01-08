/*Adding list item function*/
function addItem() {}
/*Check Item*/
function checkItem() {}
/*Delete Item*/
function deleteItem() {}
/*Clear All Items*/
function clearAll() {}
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
/*on click on the ".checkbox" button fire the action called checkItem()*/
$(document).on('click', '.checkbox', checkItem);
/*on click on the ".delete" button fire the action called deleteItem()*/
$(document).on('click', '.delete', deleteItem);
