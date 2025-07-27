// 1. Select an Element by ID
let element = document.getElementById("myElement");
console.log(element);

// 2. Select Multiple Elements by Class
let classElements = document.getElementsByClassName("myClass");
for (let i = 0; i < classElements.length; i++) {
  console.log(classElements[i].textContent);
}

// 3. Change Text of an Element
document.getElementById("myElement").textContent = "Hello, JavaScript!";

// 4. Change Background Color of an Element
function changeBackgroundColor(id) {
  let el = document.getElementById(id);
  el.style.backgroundColor = "blue";
}
changeBackgroundColor("myElement");

// 5. Add Event Listener for Click
let button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button clicked!");
});

// 6. Remove an Element from the DOM
let paragraph = document.getElementById("myParagraph");
paragraph.remove(); // أو يمكن استعمال parentNode.removeChild(paragraph);

// 7. Create a New Element and Append it to the Body
function addNewDiv() {
  let newDiv = document.createElement("div");
  newDiv.textContent = "This is a new div!";
  document.body.appendChild(newDiv);
}
addNewDiv();

// 8. Toggle a Class on an Element
button.addEventListener("click", function () {
  button.classList.toggle("myClass");
});

// 9. Change the Style of an Element Dynamically
button.addEventListener("click", function () {
  element.style.fontSize = "24px";
});

// 10. Handle Mouse Hover Event
element.addEventListener("mouseover", function () {
  element.style.color = "red";
});
element.addEventListener("mouseout", function () {
  element.style.color = "black";
});

// 11. Change the Text of a Paragraph When a Button is Clicked
let newPara = document.createElement("p");
newPara.textContent = "Click the button to change me!";
newPara.id = "newPara";
document.body.appendChild(newPara);
button.addEventListener("click", function () {
  document.getElementById("newPara").textContent = "Text changed!";
});

// 12. Find and Change Parent Element’s Text
let child = document.createElement("span");
child.textContent = "I am a child.";
let parent = document.createElement("div");
parent.appendChild(child);
document.body.appendChild(parent);
function changeParentText(childElement) {
  childElement.parentElement.textContent = "Parent text updated!";
}
changeParentText(child);

// 13. Loop Through All Elements with a Class and Change Their Style
let items = document.getElementsByClassName("myClass");
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "yellow";
}

// 14. Create an Image Element Dynamically
function createImage() {
  let img = document.createElement("img");
  img.src = "https://via.placeholder.com/100";
  img.alt = "Dynamic Image";
  document.body.appendChild(img);
}
createImage();

// 15. Add Multiple Event Listeners to a Single Element
button.addEventListener("mouseenter", function () {
  console.log("Mouse entered!");
});

// 16. Create a List of Items Dynamically
function createList(items) {
  let ul = document.createElement("ul");
  items.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}
createList(["Item 1", "Item 2", "Item 3"]);

// 17. Select the First Child of an Element
let container = document.createElement("div");
container.innerHTML = "<p>First</p><p>Second</p>";
document.body.appendChild(container);
console.log(container.firstElementChild.textContent);

// 18. Change the Text of All Paragraphs
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = "New Text";
}

// 19. Create a Table Dynamically
function createTable(rows, cols) {
  let table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let td = document.createElement("td");
      td.textContent = `R${i + 1}C${j + 1}`;
      td.style.border = "1px solid black";
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}
createTable(3, 3);

// 20. Use querySelector to Select an Element and Modify Its Content
let h2 = document.querySelector("h2");
if (h2) {
  h2.textContent = "Updated Heading";
} else {
  let newH2 = document.createElement("h2");
  newH2.textContent = "Updated Heading";
  document.body.appendChild(newH2);
}
