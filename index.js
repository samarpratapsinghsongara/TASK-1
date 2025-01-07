let root = document.getElementById("root");

let heading = document.createElement("h1");
heading.textContent = "YOUR BEST PRODUCTS";
heading.setAttribute(
  "style",
  "width: 100%; text-align: center; color: black; margin-bottom:0px"
);

let heading2 = document.createElement("h5");
heading2.textContent = "Get every electronic product to your door steps...";
heading2.setAttribute(
  "style",
  `width: 100%; 
  text-align: center; 
  color: black;
  margin-top:0px`
);

root.appendChild(heading);
root.appendChild(heading2);

root.setAttribute(
  "style",
  `
  background-color: lightgrey;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`
);

// SEARCH-FEATURE

let searchDiv = document.createElement("div");
searchDiv.setAttribute(
  "style",
  `width: 100%; 
  display: flex; 
  justify-content: center; 
  margin-top:20px; 
  margin-bottom: 20px;`
);

let searchBar = document.createElement("input");
searchBar.setAttribute("type", "text");
searchBar.setAttribute("placeholder", "Search for products...");
searchBar.setAttribute(
  "style",
  `
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  margin-right: 10px;
`
);

let searchBtn = document.createElement("button");
searchBtn.textContent = "Search";
searchBtn.setAttribute(
  "style",
  `
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
);

searchBtn.addEventListener("click", function () {
  let search = searchBar.value.toLowerCase();

  let filterProduct = finalData.filter((item) => {
    return item.name.toLowerCase().includes(search);
  });
  displayData(filterProduct);
});

// SORT-FEATURE

let sortDiv = document.createElement("div");
sortDiv.setAttribute(
  "style",
  "width: 100%; display: flex; justify-content: center; margin-bottom:20px"
);

let sortDropdown = document.createElement("select");
sortDropdown.setAttribute(
  "style",
  `
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
`
);

let sortDefault = document.createElement("option");
sortDefault.textContent = "FILTER";

let sortOptions1 = document.createElement("option");
sortOptions1.value = "aTOz";
sortOptions1.textContent = "Name : A to Z";

let sortOptions2 = document.createElement("option");
sortOptions2.value = "zTOa";
sortOptions2.textContent = "Name : Z to A";

let sortOptions3 = document.createElement("option");
sortOptions3.value = "lTOh";
sortOptions3.textContent = "Price: Low to High";

let sortOptions4 = document.createElement("option");
sortOptions4.value = "hTOl";
sortOptions4.textContent = "Price: High to Low";

sortDropdown.addEventListener("change", () => {
  let selectedValue = sortDropdown.value;

  if (selectedValue === "aTOz") {
    let acc = finalData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    displayData(acc);
  } else if (selectedValue === "zTOa") {
    let dec = finalData.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    displayData(dec);
  } else if (selectedValue === "lTOh") {
    let lowPrice = finalData.sort((a, b) => {
      return a.price - b.price;
    });
    displayData(lowPrice);
  } else if (selectedValue === "hTOl") {
    let highPrice = finalData.sort((a, b) => {
      return b.price - a.price;
    });
    displayData(highPrice);
  }
});

sortDropdown.appendChild(sortDefault);
sortDropdown.appendChild(sortOptions1);
sortDropdown.appendChild(sortOptions2);
sortDropdown.appendChild(sortOptions3);
sortDropdown.appendChild(sortOptions4);

root.appendChild(searchDiv);
searchDiv.appendChild(searchBar);
searchDiv.appendChild(searchBtn);
sortDiv.appendChild(sortDropdown);
root.appendChild(sortDiv);

// ADD-PRODUCT FEATURE

let addProductDiv = document.createElement("div");
addProductDiv.setAttribute(
  "style",
  "width: 100%; display: flex; justify-content: center; margin-bottom:20px"
);

let addProductBtn = document.createElement("button");
addProductBtn.textContent = "ADD PRODUCT";
addProductBtn.setAttribute(
  "style",
  `
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px; 
  cursor: pointer;`
);

addProductBtn.addEventListener("click", () => {
  formDiv.style.display = formDiv.style.display === "none" ? "block" : "none";
});

addProductDiv.appendChild(addProductBtn);
root.appendChild(addProductDiv);

// addProductForm

let formDiv = document.createElement("div");
formDiv.setAttribute(
  "style",
  `width:100%;
  position:fixed;
  top:30%;
  left:30%;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  z-index:1;
  display:none;
  `
);

let form = document.createElement("form");
form.setAttribute(
  "style",
  `width:100%;
  padding:20px;
  max-width:500px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color: #f9f9f9;
  border-radius:8px;
  box-shadow:0 4px 8px rgba(0,0,0,0.2);
  `
);

let imageInput = document.createElement("input");
imageInput.setAttribute("type", "text");
imageInput.setAttribute("placeholder", "Enter image Link");
imageInput.setAttribute(
  "style",
  `width:100%;
  padding:10px;
  margin-bottom:15px;
  border-radius:6px;
  border:1px solid #ddd;
  font-size:16px;`
);

let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Enter Name of the product");
nameInput.setAttribute(
  "style",
  `width:100%;
  padding:10px;
  margin-bottom:15px;
  border-radius:6px;
  border:1px solid #ddd;
  font-size:16px;`
);

let priceInput = document.createElement("input");
priceInput.setAttribute("type", "number");
priceInput.setAttribute("placeholder", "Enter price of the product");
priceInput.setAttribute(
  "style",
  `width:100%;
  padding:10px;
  margin-bottom:15px;
  border-radius:6px;
  border:1px solid #ddd;
  font-size:16px;`
);

let quantInput = document.createElement("input");
quantInput.setAttribute("type", "number");
quantInput.setAttribute("placeholder", "Enter quantity of the product");
quantInput.setAttribute(
  "style",
  `width:100%;
  padding:10px;
  margin-bottom:15px;
  border-radius:6px;
  border:1px solid #ddd;
  font-size:16px;`
);

let desInput = document.createElement("input");
desInput.setAttribute("type", "text");
desInput.setAttribute("placeholder", "Enter description of the product");
desInput.setAttribute(
  "style",
  `width:100%;
  padding:10px;
  margin-bottom:15px;
  border-radius:6px;
  border:1px solid #ddd;
  font-size:16px;`
);

let inputBtn = document.createElement("button");
inputBtn.setAttribute("type", "submit");
inputBtn.textContent = "Submit";
inputBtn.setAttribute(
  "style",
  `width:100%;
  background-color:#4CAF50;
  color:white;
  border:none;
  cursor:pointer;
  padding:12px;
  margin-bottom:10px;
  border-radius:6px;
  font-size:16px;
  transition: background-color 0.3s ease;`
);

let clsFormBtn = document.createElement("button");
clsFormBtn.setAttribute("type", "submit");
clsFormBtn.textContent = "Close";
clsFormBtn.setAttribute(
  "style",
  `width:100%;
  background-color:#c1121f;
  color:white;
  border:none;
  cursor:pointer;
  padding:5px 5px 5px 5px;
  margin-bottom:10px ;
  border-radius:4px;
  curser:pointer;`
);
clsFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formDiv.style.display = "block" ? "none" : "block";
});

form.appendChild(imageInput);
form.appendChild(nameInput);
form.appendChild(priceInput);
form.appendChild(quantInput);
form.appendChild(desInput);
form.appendChild(inputBtn);

formDiv.appendChild(form);
document.body.appendChild(formDiv);

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let name = nameInput.value;
  let price = priceInput.value;
  let quantity = quantInput.value;
  let description = desInput.value;
  let image = imageInput.value;

  if (!name || !price || !quantity || !description || !image) {
    alert("All fields are required");
    return;
  }

  let newProduct = {
    name: name,
    price: price,
    quantity: quantity,
    description: description,
    image: image,
  };

  finalData.push(newProduct);
  console.log("New Product :", newProduct);

  nameInput.value = "";
  priceInput.value = "";
  quantInput.value = "";
  desInput.value = "";

  displayData(finalData);
});

form.appendChild(nameInput);
form.appendChild(priceInput);
form.appendChild(quantInput);
form.appendChild(desInput);
form.appendChild(imageInput);
form.appendChild(inputBtn);
form.appendChild(clsFormBtn);
formDiv.appendChild(form);
root.appendChild(formDiv);

// Pagination Feature
let currentPage = 1;
let totalPages = 1;
let productsOnPage = 18;

let paginationDiv = document.createElement("div");
paginationDiv.setAttribute("style",
  `width:100%;
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: lightgrey;
  padding: 10px;`
)

let prvsBtn = document.createElement("button");
prvsBtn.textContent = "<<< Previous Page ---";
prvsBtn.setAttribute("style", `
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right:20px;
`);

let nxtBtn = document.createElement("button");
nxtBtn.textContent = "--- Next Page >>>";
nxtBtn.setAttribute("style", `
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left:20px;
`);

function displayPages(products) {
  let start = (currentPage - 1) * productsOnPage;
  let end = start + productsOnPage;
  let productDisplay = products.slice(start, end);

  root.innerHTML = ""; 
  displayData(productDisplay); 


  root.appendChild(paginationDiv);

  prvsBtn.disabled = currentPage === 1;
  nxtBtn.disabled = currentPage === totalPages;

  paginationDiv.appendChild(prvsBtn);
  paginationDiv.appendChild(nxtBtn);
}

prvsBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayPages(finalData);
  }
});
nxtBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayPages(finalData);
  }
});

// DATA-FETCHING

async function getData() {
  try {
    let response = await fetch("./data.json");
    let data = await response.json();
    finalData = data.products;

    totalPages = Math.ceil(finalData.length / productsOnPage); // Update total pages count
    displayPages(finalData);
  } catch (error) {
    alert("Failed to load products.");
  }
}

function displayData(products) {
  root.innerHTML = "";
  root.appendChild(heading);
  root.appendChild(heading2);
  root.appendChild(searchDiv);
  root.appendChild(sortDiv);
  root.appendChild(addProductDiv);
  root.appendChild(formDiv);

  if (products.length === 0) {
    let notFound = document.createElement("h1");
    notFound.textContent = "No Product Found";
    notFound.setAttribute("style", "text-align: center; color: red;");
    root.appendChild(notFound);
  } else {
    products.forEach((item) => {
      let displayCard = document.createElement("div");
      displayCard.setAttribute(
        "style",
        `
        // min-width:22%;
        height: auto;
        width: 200px;
        background-color: white;
        text-align: center;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        position:relative;
        display:block;
      `
      );

      let img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.setAttribute(
        "style",
        `
        height: 80px; 
        width: 80px;`
      );

      let name = document.createElement("h4");
      name.textContent = item.name;
      name.setAttribute(
        "style",
        `font-size: 20px; 
        margin: 10px 0;`
      );

      let price = document.createElement("p");
      price.textContent = `₹ ${item.price}`;
      price.setAttribute(
        "style",
        `font-size: 20px; 
        color: green;`
      );

      let quantity = document.createElement("p");
      quantity.textContent = `In Stock : ${item.quantity}`;
      quantity.setAttribute(
        "style",
        `font-size: 15px; 
        color: #555;`
      );

      let description = document.createElement("p");
      description.setAttribute(
        "style",
        `font-size: 15px; 
        color: #777; 
        margin-bottom: 15px;`
      );

      let addToCart = document.createElement("button");
      addToCart.textContent = "Add to cart";
      addToCart.setAttribute(
        "style",
        `background-color:#f8961e;
        color: white;
        padding: 8px 12px;
        border: none;
        cursor: pointer;
        margin-bottom: 10px;
        border-radius: 5px;`
      );

      let btn = document.createElement("button");
      btn.textContent = "Description";
      btn.setAttribute(
        "style",
        `
        background-color: #007BFF;
        color: white;
        padding: 8px 12px;
        border: none;
        cursor: pointer;
        margin:0px 10px 0px 10px;
        border-radius: 5px;
      `
      );

      let dropdown = document.createElement("div");
      dropdown.textContent = item.description;
      dropdown.setAttribute(
        "style",
        `
        display: none;
        padding: 5px;
        background-color: lightgray;
        margin-top: 10px;
        font-size:15px;
      `
      );

      btn.addEventListener("click", () => {
        dropdown.style.display =
          dropdown.style.display === "none" ? "block" : "none";
      });

      let deletebtn = document.createElement("button");
      deletebtn.textContent = "×";
      deletebtn.setAttribute(
        "style",
        `
        background-color:transparent;
        color: #bc6c25;
        border:none;
        font-size:24px;
        position:absolute;
        top:10px;
        right:10px;
       `
      );

      deletebtn.addEventListener("click", () => {
        displayCard.style.display = "block" ? "none" : "block";
      });

      displayCard.appendChild(img);
      displayCard.appendChild(deletebtn);
      displayCard.appendChild(name);
      displayCard.appendChild(price);
      displayCard.appendChild(quantity);
      displayCard.appendChild(description);
      displayCard.appendChild(btn);
      displayCard.appendChild(dropdown);
      displayCard.appendChild(addToCart);

      root.appendChild(displayCard);
    });
  }
}

getData();
