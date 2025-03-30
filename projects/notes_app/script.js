function create_note() {
    let new_input = document.createElement("input");
    new_input.style.display = "inline-block";
    new_input.style.height = "40px";
    new_input.style.margin = "10px";
    new_input.style.padding = "5px";
    new_input.style.width = "70%";
    new_input.style.border = "1px solid #ccc";
    new_input.style.borderRadius = "5px";
    new_input.style.fontSize = "16px";
    return new_input;
}

function create_delete() {
    let delete_button = document.createElement("button");
    delete_button.innerHTML = "Delete";
    delete_button.style.height = "40px";
    delete_button.style.marginLeft = "10px";
    delete_button.style.padding = "5px 10px";
    delete_button.style.width = "80px";
    delete_button.style.backgroundColor = "#ff4d4d";
    delete_button.style.color = "white";
    delete_button.style.border = "none";
    delete_button.style.borderRadius = "5px";
    delete_button.style.cursor = "pointer";
    delete_button.style.transition = "0.3s";
    
    // Hover effect
    delete_button.onmouseover = function() {
        delete_button.style.backgroundColor = "#cc0000";
    };
    delete_button.onmouseout = function() {
        delete_button.style.backgroundColor = "#ff4d4d";
    };

    return delete_button;
}

// Function to delete a note
function delete_action(event) {
    event.target.parentElement.remove();
}

// Function to create a new note with a delete button
function clickbtn() {
    let note_container = document.getElementById("notesContainer");

    let note_wrapper = document.createElement("div");
    note_wrapper.style.display = "flex";
    note_wrapper.style.alignItems = "center";
    note_wrapper.style.marginBottom = "10px";
    note_wrapper.style.padding = "10px";
    note_wrapper.style.backgroundColor = "white";
    note_wrapper.style.borderRadius = "5px";
    note_wrapper.style.boxShadow = "0px 2px 5px rgba(0,0,0,0.1)";

    let note = create_note();
    let delete_button = create_delete();

    // Assign the delete function
    delete_button.onclick = delete_action;

    // Append elements
    note_wrapper.appendChild(note);
    note_wrapper.appendChild(delete_button);
    note_container.appendChild(note_wrapper);
}
