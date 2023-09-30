// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("infi-list");
    const totalItems = 10; // Total initial list items

    // Function to add a new list item
    function addListItem() {
        const newItem = document.createElement("li");
        newItem.textContent = "Item " + (list.childElementCount + 1);
        list.appendChild(newItem);
    }

    // Add the initial list items
    for (let i = 1; i <= totalItems; i++) {
        addListItem();
    }

    // Add more list items when the user reaches the end of the list
    list.addEventListener("scroll", function() {
        const lastItem = list.lastElementChild;
        if (list.scrollTop + list.clientHeight >= lastItem.offsetTop + lastItem.clientHeight) {
            // User has scrolled to the end of the list, add 2 more items
            addListItem();
            addListItem();
        }
    });
});
