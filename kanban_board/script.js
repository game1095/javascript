const dragItem = document.querySelectorAll(".drag-item");
const dragList = document.querySelectorAll(".drag-item-list");
let selectItem;

dragItem.forEach((item) => {
  item.addEventListener("dragstart", onDragStart);
});

// หมวดหมู่
dragList.forEach((list) => {
  list.addEventListener("dragover", onDragOver);
  list.addEventListener("dragenter", onDragEnter);
  list.addEventListener("drop", onDrop);
});

function onDrop() {
  this.append(selectItem);
  selectItem = null;
}

function onDragStart() {
  selectItem = this;
}

function onDragEnter(event) {
  event.preventDefault();
}

function onDragOver(event) {
  event.preventDefault();
}
