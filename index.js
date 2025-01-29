import PartyButton from "./partyButton.js";

document.body.appendChild(new PartyButton().buttonContainer);

let parent = document.getElementById("parent");
let child = document.getElementById("child");

// Event callbacks receive an event description object:
parent.addEventListener("mousemove", (eventObject) => {
    console.log("Parent node: ", eventObject.currentTarget);
})

child.addEventListener("mousedown", (e) => {
    // Stop event from "bubbling" to parent node
    e.stopPropagation();
    // Stop any default behavior associated with event
    e.preventDefault();
})