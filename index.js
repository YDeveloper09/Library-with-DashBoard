const askName = prompt("Enter your Name");
document.querySelector(".name").innerText = "@" + askName;

const btnNewbook = document.querySelector("#newBook");
const btnLogout = document.querySelector("#logOut");
const btnMode = document.querySelector("#mode");
const navBar = document.querySelector(".nav-bar");
const sideBar = document.querySelector(".grid-container");
const Icon = document.querySelector(".fa-sun-bright");



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
    if (Icon.classList.contains("fa-sun-bright")){
        Icon.setAttribute("class", "fa-solid fa-moon-stars fa-2xl");
        Icon.setAttribute("style", "color:white");
        btnMode.style.backgroundColor = "#182c25";
        document.body.style.backgroundColor = "#455b55";
        sideBar.style.backgroundColor = "#2c4c3b";
        navBar.style.backgroundColor = "#182c25";
        document.body.style.color = "white";
    } else {
        Icon.setAttribute("class", "fa-thin fa-sun-bright fa-2xl");
        Icon.setAttribute("style", "color:black");
        btnMode.style.backgroundColor = "";
        document.body.style.backgroundColor = "gainsboro";
        sideBar.style.backgroundColor = "#3CB371";
        navBar.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    
}


function AddNewBook (title,author,pages,checkBox) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.checkBox = checkBox;
}

function creatCard () {
    const cardContainer = document.createElement("div");
    cardContainer.className = "cardContainer";
    document.body.appendChild(cardContainer);
    const insertCard = document.createElement("div")
    insertCard.className = "insertCard";
    cardContainer.appendChild(insertCard);
    const insertBookTitle = document.createElement("h1");
    // insertBookTitle.className = "insertBookTitle";
    // insertBookTitle.textContent = book.title;
    // const insertBookAuthor = document.createElement("p");
    // insertBookAuthor.className = "insertBookAuthor";
    // insertBookAuthor.textContent = book.author;
    // const insertBookPages = document.createElement("p");
    // insertBookPages.className = "insertBookPages";
    // insertBookPages.textContent = book.pages;
    // const bookStatus = document.createElement("p");
    // bookStatus.className = "bookStatus";
    // bookStatus.textContent = book.checkBox;
    // insertCard.appendChild(insertBookTitle);
    // insertCard.appendChild(insertBookAuthor);
    // insertCard.appendChild(insertBookPages);
    // insertCard.appendChild(bookStatus);
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

    (checkBoxform.checked) ? checkBoxform.value ="read": checkBoxform.value="not read";
    const newBook = new AddNewBook(bookTitle.value, addAuthor.value, addPages.value,checkBoxform.value);
    myLibrary.push(newBook);
    console.log(myLibrary);
    divForm.remove();
}

btnMode.addEventListener("click", darkNLightMode);
btnNewbook.addEventListener("click",addNewForm);
btnLogout.addEventListener("click", () => window.close());


