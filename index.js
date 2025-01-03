let root = document.getElementById("root");

let heading = document.createElement("h1");
heading.textContent = "YOUR BEST PRODUCTS";
heading.setAttribute("style", "width: 100%; text-align: center; color: black;");

let heading2 = document.createElement("h5");
heading2.textContent = "Get every electronic product to your door steps...";
heading2.setAttribute("style", 
  `width: 100%; 
  text-align: center; 
  color: black;`);

root.appendChild(heading);
root.appendChild(heading2);

root.setAttribute("style", `
  background-color: lightgrey;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`);
 
let searchDiv = document.createElement("div");
searchDiv.setAttribute("style", 
  `width: 100%; 
  display: flex; 
  justify-content: center; 
  margin-bottom: 20px;`
  );

let searchBar = document.createElement("input");
searchBar.setAttribute("type", "text");
searchBar.setAttribute("placeholder", "Search for products...");
searchBar.setAttribute("style", `
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  margin-right: 10px;
`);

let searchBtn = document.createElement("button");
searchBtn.textContent = "Search";
searchBtn.setAttribute("style", `
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`);


let sortDiv = document.createElement("div");
sortDiv.setAttribute("style", "width: 100%; display: flex; justify-content: center; margin-top: 20px;");

let sortDropdown = document.createElement("select");
sortDropdown.setAttribute("style", `
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
`);

let sortDefault = document.createElement("option");
sortDefault.textContent = "FILTER";

let sortOptions1 = document.createElement("option");
sortOptions1.textContent = "Name : A to Z";

let sortOptions4 = document.createElement("option");
sortOptions4.textContent = "Name : Z to A";

let sortOptions2 = document.createElement("option");
sortOptions2.textContent = "Price: Low to High";

let sortOptions3 = document.createElement("option");
sortOptions3.textContent = "Price: High to Low";

sortDropdown.appendChild(sortDefault);
sortDropdown.appendChild(sortOptions1);
sortDropdown.appendChild(sortOptions4);
sortDropdown.appendChild(sortOptions2);
sortDropdown.appendChild(sortOptions3);

root.appendChild(searchDiv);
searchDiv.appendChild(searchBar);
searchDiv.appendChild(searchBtn);
root.appendChild(sortDiv);
sortDiv.appendChild(sortDropdown);

// let finalData = [];

async function getData(callback) {
  try {
    let response = await fetch("./data.json");
    let data = await response.json();
    finalData = data.products;  // 
    callback(finalData);         
  } catch (error) {
    alert("Failed to load products.");
  }
}


function displayData(products) {
  root.innerHTML = ''; 
  root.appendChild(heading);
  root.appendChild(heading2);
  root.appendChild(searchDiv);
  root.appendChild(sortDiv);

  
  if (products.length === 0) {
    let notFound = document.createElement("h1");
    notFound.textContent = "No Product Found";
    notFound.setAttribute("style", "text-align: center; color: red;");
    root.appendChild(notFound);
  } else {  
    products.forEach((item) => {
      let displayCard = document.createElement("div");
      displayCard.setAttribute("style", `
        height: auto;
        width: 200px;
        background-color: white;
        text-align: center;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      `);

    
      let img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.setAttribute("style",
        `height: 80px; 
        width: 80px;`);

      
      let name = document.createElement("h4");
      name.textContent = item.name;
      name.setAttribute("style", 
        `font-size: 20px; 
        margin: 10px 0;`);

      
      let price = document.createElement("p");
      price.textContent = `₹ ${item.price}`;
      price.setAttribute("style", 
        `font-size: 20px; 
        color: green;`);

      
      let quantity = document.createElement("p");
      quantity.textContent = `In Stock : ${item.quantity}`;
      quantity.setAttribute("style", 
        `font-size: 15px; 
        color: #555;`);

      
      let description = document.createElement("p");
      description.setAttribute("style", 
        `font-size: 15px; 
        color: #777; 
        margin-bottom: 15px;`
      );

      
      let btn = document.createElement("button");
      btn.textContent = "Description";
      btn.setAttribute("style", `
        background-color: #007BFF;
        color: white;
        padding: 8px 12px;
        border: none;
        cursor: pointer;
        margin-bottom: 10px;
        border-radius: 5px;
      `);

    
      let dropdown = document.createElement("div");
      dropdown.textContent = item.description;
      dropdown.setAttribute("style", `
        display: none;
        padding: 5px;
        background-color: lightgray;
        margin-top: 10px;
        font-size:15px;
      `);

      btn.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";  
      });

      displayCard.appendChild(img);
      displayCard.appendChild(name);
      displayCard.appendChild(price);
      displayCard.appendChild(quantity);
      displayCard.appendChild(description);
      displayCard.appendChild(btn);
      displayCard.appendChild(dropdown);

      root.appendChild(displayCard);
    });
  }
}

searchBtn.addEventListener("click", function() {
  let search = searchBar.value.toLowerCase();  

  let filterProduct = finalData.filter((item) => {
    return item.name.toLowerCase().includes(search);  
  });

  displayData(filterProduct);
});  

getData(displayData); 