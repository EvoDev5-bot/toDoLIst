const main = document.querySelector("body main");

let input;
let label;
let removeButton;
let editButton;
let emptyDiv;
let wrapperDiv;

let deletingInput;
let deletingLabel;
let deletingRemoveButton;
let deletingEditButton;

let editingLabel;

let n = 0;




function addListItem() {
    n += 1;

    input = document.createElement("input");
    label = document.createElement("label");
    removeButton = document.createElement("button");
    editButton = document.createElement("button");
    emptyDiv = document.createElement("div");
    wrapperDiv = document.createElement("div");

    input.setAttribute("type", "checkbox")
    input.setAttribute("name", n)
    input.setAttribute("id", "input-" + n)

    label.setAttribute("for", n);
    label.setAttribute("id", "label-" + n);
    label.innerText = prompt("Enter the name of your list item")


    removeButton.setAttribute("onclick", "deleteListItem(" + n + ")")
    removeButton.setAttribute("id", "remove-btn-" + n)
    removeButton.setAttribute("class", "remove-btn")

    removeButton.innerText = "Remove"

    editButton.setAttribute("onclick", "editListItem(" + n + ")");
    editButton.setAttribute("id", "edit-btn-" + n);
    editButton.setAttribute("class", "edit-btn");

    editButton.innerText = "Edit"

    emptyDiv.setAttribute("class", "empty-div");
    emptyDiv.setAttribute("id", "empty-div-" + n);

    wrapperDiv.setAttribute("id", "wrapper-div-" + n);
    wrapperDiv.setAttribute("class", "wrapper-div");


    wrapperDiv.appendChild(input);
    wrapperDiv.appendChild(label);
    wrapperDiv.appendChild(emptyDiv);
    wrapperDiv.appendChild(editButton);
    wrapperDiv.appendChild(removeButton);

    main.appendChild(wrapperDiv)
}

function deleteListItem(num) {
    deletingInput = document.querySelector("#input-" + num)
    deletingLabel = document.querySelector("#label-" + num)
    deletingRemoveButton = document.querySelector("#remove-btn-" + num)
    deletingEditButton = document.querySelector("#edit-btn-" + num);


    deletingInput.remove();
    deletingLabel.remove();
    deletingRemoveButton.remove();
    deletingEditButton.remove();
}

function editListItem(num) {
    editingLabel = document.querySelector("#label-" + num)

    editingLabel.innerText = prompt("What do you want to change it to?");
}

