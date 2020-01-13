const fill_element = document.querySelector(".fill");
const emptiy_elements = document.querySelectorAll(".empty");

// Fill Listeners
fill_element.addEventListener("dragstart", dragStart);
fill_element.addEventListener("dragend", dragEnd);

// Loop Through Empty Elements
for(const empty of emptiy_elements) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

// Drag Functions
function dragStart() {
    //console.log("start");
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
    //console.log("end");
    this.className = "fill";
}

function dragOver(event) {
    event.preventDefault();
    //console.log("Drag Over");
}

function dragEnter(event) {
    //console.log("Drag Enter");
    event.preventDefault();
    this.className += " hovered";
}

function dragLeave () {
    //console.log("Drag Leave");
    this.className = "empty";
}

function dragDrop() {
    //console.log("Drag Drop");
    this.className = "empty";
    this.append(fill_element);
}