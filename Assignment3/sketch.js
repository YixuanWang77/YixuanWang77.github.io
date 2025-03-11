let input, addButton, clearButton, list;

function setup() {
    noCanvas();
    input = select("#itemInput");
    addButton = select("#addItemBtn");
    clearButton = select("#clearListBtn");
    list = select("#groceryList");

    addButton.mousePressed(addItem);
    clearButton.mousePressed(clearList);
}

function addItem() {
    let itemText = input.value(); 
    if (itemText !== "") {
        let listItem = createElement("li", itemText); 
        
        let btnContainer = createDiv();
        btnContainer.class("button-container"); 

        let deleteBtn = createButton("X");
        deleteBtn.class("delete-btn");
        deleteBtn.mousePressed(() => listItem.remove()); 

        let purchaseBtn = createButton("✔");
        purchaseBtn.class("purchase-btn");
        purchaseBtn.mousePressed(() => listItem.toggleClass("purchased")); 

        btnContainer.child(purchaseBtn);
        btnContainer.child(deleteBtn);
        listItem.child(btnContainer);
        list.child(listItem);

        input.value(""); 
    } 
}

function clearList() {
    list.html("");
}