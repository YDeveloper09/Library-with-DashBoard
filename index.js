const askName = prompt("Enter your Name");
document.querySelector(".name").innerText = "@" + askName;

const btnNewbook = document.querySelector("#newBook");
const btnLogout = document.querySelector("#logOut");
const btnMode = document.querySelector("#mode");
const navBar = document.querySelector(".nav-bar");
const sideBar = document.querySelector(".grid-container");
const Icon = document.querySelectorAll(".material-symbols-outlined")[8];
const cardContainer = document.querySelector(".cardContainer");
const totalBooks = document.querySelector(".countBooks");
const totalPages = document.querySelector(".countPages");
const totalReadBooks = document.querySelector(".readBooks");
const totalUnreadBooks = document.querySelector(".unreadBooks");
let countBooks = 0;
let countPages = 0;
let readBooks = 0;
let unreadBooks = 0;



const myLibrary = []


function addNewForm() {
    const creatDiv = document.createElement("div");
    creatDiv.className = "divForm";
    const creatNewForm = document.createElement("form");
    creatNewForm.className = "form";
    const inputs = ["Title", "Author", "Pages"].map(label => {
        const input = document.createElement("input");
        input.setAttribute("type", label === "Pages" ? "number" : "text");
        input.setAttribute("placeholder", label);
        input.className = label.toLowerCase();
        input.setAttribute("required", "");
        return input;
    });
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = "checkBoxform"
    const verifyIfRed = document.createElement("p");
    verifyIfRed.innerText = "Have you read this book?";
    verifyIfRed.className = "para";
    const addButton = document.createElement("button");
    addButton.innerText = "Add";
    addButton.className = "btnAdd";
    creatNewForm.append(...inputs, verifyIfRed, addButton);
    verifyIfRed.prepend(checkBox);
    creatDiv.appendChild(creatNewForm);
    document.body.appendChild(creatDiv);

    creatNewForm.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    addButton.addEventListener("click", displayLibrary);
}


function darkNLightMode () {
    const insertCard = document.querySelectorAll(".insertCard");
    if (Icon.innerText == "light_mode"){
        Icon.innerText = "dark_mode";
        Icon.setAttribute("style", "color:white");
        btnMode.style.backgroundColor = "#182c25";
        document.body.style.backgroundColor = "#455b55";
        sideBar.style.backgroundColor = "#2c4c3b";
        navBar.style.backgroundColor = "#182c25";
        document.body.style.color = "white";
        insertCard.forEach(bgcolor => {
            bgcolor.style.backgroundColor = "#182c25";
        });
    } else {
        Icon.innerText = "light_mode";
        Icon.setAttribute("style", "color:black");
        btnMode.style.backgroundColor = "";
        document.body.style.backgroundColor = "gainsboro";
        sideBar.style.backgroundColor = "#3CB371";
        navBar.style.backgroundColor = "white";
        document.body.style.color = "black";
        insertCard.forEach(bgcolor => {
            bgcolor.style.backgroundColor = "white";
        });
    }
    
}


function AddNewBook (title,author,pages,checkBox) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.checkBox = checkBox;
}

function creatCard (book) {
    const insertCard = document.createElement("div")
    insertCard.className = "insertCard";
    cardContainer.appendChild(insertCard);
    const insertBookTitle = document.createElement("h1");
    insertBookTitle.className = "insertBookTitle";
    insertBookTitle.textContent = "Book: " + book.title;
    const insertBookAuthor = document.createElement("p");
    insertBookAuthor.className = "insertBookAuthor";
    insertBookAuthor.textContent = "Author: " + book.author;
    const insertBookPages = document.createElement("p");
    insertBookPages.className = "insertBookPages";
    insertBookPages.textContent = "Pages: " +  book.pages;
    const bookStatus = document.createElement("p");
    bookStatus.className = "bookStatus";
    bookStatus.textContent = "Status: " + book.checkBox;
    const colorStatus = document.createElement("div");
    colorStatus.className = "colorStatus";
        if(book.checkBox == "READ"){
        colorStatus.style.backgroundColor = "#3CB371";
        totalReadBooks.innerText = "Read Books: " + `${readBooks +=1}`;
        } else {
            colorStatus.style.backgroundColor = "red";
            totalUnreadBooks.innerText = "Unread Books: " + `${unreadBooks +=1}`;
        }
    insertCard.appendChild(insertBookTitle);
    insertCard.appendChild(insertBookAuthor);
    insertCard.appendChild(insertBookPages);
    insertCard.appendChild(bookStatus);
    insertCard.appendChild(colorStatus);
    totalBooks.innerText = "Total Books: " + `${countBooks +=1}`;
    countPages += parseInt(book.pages);
    totalPages.innerText = "Total Pages: " + `${countPages}`;
}



function displayLibrary () {
    const bookTitle = document.querySelector(".title");
    const addAuthor = document.querySelector(".author");
    const addPages = document.querySelector(".pages");
    const checkBoxform = document.querySelector(".checkBoxform");
    const divForm = document.querySelector(".divForm");

    if (!bookTitle.value || !addAuthor.value || !addPages.value) {
        return; 
    }

    (checkBoxform.checked) ? checkBoxform.value ="READ": checkBoxform.value="NOT READ";
    const newBook = new AddNewBook(bookTitle.value, addAuthor.value, addPages.value,checkBoxform.value);
    myLibrary.push(newBook);
    console.log(myLibrary);
    divForm.remove();
    creatCard(newBook);
}

btnMode.addEventListener("click", darkNLightMode);
btnNewbook.addEventListener("click",addNewForm);
btnLogout.addEventListener("click", () => window.close());


