 interface item {
    text: string
     isDone:boolean,
     isContentEditable: boolean,
}

const itemsArray: item[] = [];
// eslint-disable-next-line no-unused-vars
function deleteItem(i:number) {
  itemsArray.splice(i, 1);
  // eslint-disable-next-line no-use-before-define
  renderItems();
}

function renderItems() {
  let markup = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < itemsArray.length; i++) {
    let inputText = `<div>${itemsArray[i].text}</div>`;
    const deleteButton = `<button onclick="deleteItem(${[i]})">Delete</button>`;
    let checkbox = `<input onclick="toggleCheckbox(${[i]})" type="checkbox">`;
    let editButton = `<button onclick="clickToEditMode(${[i]})">Edit</button>`;

    if (itemsArray[i].isDone) {
      checkbox = `<input onclick="toggleCheckbox(${[i]})" type="checkbox" checked>`;
    }
    if (itemsArray[i].isContentEditable) {
      inputText = `<input style="color:blue; display: block" id="editedItem${[i]}" value="${itemsArray[i].text}">`;
      editButton = `<button  onclick="saveEdit(${[i]})">Save</button>`;
    }

    markup = `${markup}
        ${inputText}
        ${deleteButton}
         ${checkbox}
         ${editButton}`;
  }
  (document.getElementById('list') as HTMLInputElement).innerHTML = markup;
}

// eslint-disable-next-line no-unused-vars
function saveEdit(i:number) {
  itemsArray[i].isContentEditable = !itemsArray[i].isContentEditable;
  const newText = (document.getElementById(`editedItem${[i]}`) as HTMLInputElement).value;
  itemsArray[i].text = newText;
  renderItems();
}

// eslint-disable-next-line no-unused-vars
function clickToEditMode(i:number) {
  itemsArray[i].isContentEditable = true;
  renderItems();
}

// eslint-disable-next-line no-unused-vars
function toggleCheckbox(i:number) {
  itemsArray[i].isDone = !itemsArray[i].isDone;
  renderItems();
}

// eslint-disable-next-line no-unused-vars
function addItemToArray() {
  const text = (document.getElementById('message')as HTMLInputElement).value;
  itemsArray.push({ text, isDone: false, isContentEditable: false });
  // @ts-ignore
  renderItems();
  (document.getElementById('message') as HTMLInputElement).value = '';
}
