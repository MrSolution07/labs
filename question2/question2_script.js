//  Author: CE BULABULA
// date: 10.03.2024
// graded lab 3

document.addEventListener("DOMContentLoaded", function() 
{
    var list = document.getElementById("list");
    var itemInput = document.getElementById("item");
    var addButton = document.getElementById("add");
    var removeButton = document.getElementById("remove");
    var removedItemsContainer = document.getElementById("removed-items");
    var removedCounter = document.getElementById("removed-counter");
    let my_counter = 0;


    // this block is to add an element 
    addButton.addEventListener("click", function() 
    {
        removedItemsContainer.textContent = "";
        removedCounter.textContent = "";
        removedCounter.style.display = "none";

        const itemText = itemInput.value.trim().toLowerCase();
        if (itemText !== "") 
        {
            const li = document.createElement("li");
            li.textContent = itemText;
            list.appendChild(li);
            updateListBackground();
             itemInput.value = "";
        }
    });
    
    // remove button block, didn't know if we should have allowed the user to remove more than 1 item i choose not to
    removeButton.addEventListener("click", function() 
    {
        const itemToRemove = itemInput.value.trim().toLowerCase();

        if (itemToRemove !== "") 
        {
            let removed = false;
            const list_of_items = list.querySelectorAll("li"); 
            for (let i = 0; i < list_of_items.length; i++) 
            {
                const liText = list_of_items[i].textContent.toLowerCase();
                if (liText === itemToRemove && !removed) 
                {
                    list_of_items[i].classList.add("removed");
                    removedItemsContainer.textContent = `${itemToRemove}`;
                    list_of_items[i].remove();
                    updateListBackground();
                    my_counter += 1;
                    removed = true;
                }
            }

            if (removed) 
            {
                if(my_counter < 2)
                {
                    removedCounter.textContent = `(${my_counter}) item removed`;
                }
                else
                {
                    removedCounter.textContent = `(${my_counter}) items removed`;
                }
                removedCounter.style.display = "block";
            }
            itemInput.value = "";
        }
    });
});

function updateListBackground() 
{
    const listItems = document.querySelectorAll("#list li");
    listItems.forEach(function(item, index) 
    {
        if (index % 2 === 0) 
        {
            item.classList.remove("yellow_element");
            item.classList.add("white_element");
        } else 
        {
            item.classList.remove("white_element");
            item.classList.add("yellow_element");
        }
    });
}
