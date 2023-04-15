import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://brmblog-3b350-default-rtdb.firebaseio.com/"
}
//app per URL @ app settings
const app = initializeApp(appSettings);
//database object
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")


const addButtonElem = document.getElementById("add-button");
const inputFieldElem = document.getElementById("input-field");
const shoppingListElem = document.getElementById("shopping-list");


addButtonElem.addEventListener("click", function () {
    let inputValue = inputFieldElem.value;
    //imported from firebase
    push(shoppingListInDB, inputValue);
    appendItemToShoppingListElem(inputValue);
    clearInputFieldElem();
    console.log(`${inputValue} added to database`);
    
});


function appendItemToShoppingListElem(itemValue) {
    shoppingListElem.innerHTML += `<li>${itemValue}</li>`;
}

function clearInputFieldElem () {
    inputFieldElem.value = "";
}