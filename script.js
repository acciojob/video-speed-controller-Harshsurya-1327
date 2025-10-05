// Select all price cells
const priceCells = document.querySelectorAll(".prices");

let totalPrice = 0;

// Loop through each price cell and sum up the prices
priceCells.forEach(cell => {
  // Convert text content to number and add to total
  totalPrice += parseFloat(cell.textContent);
});

// Create a new row for total
const table = document.getElementById("grocery-table");
const totalRow = document.createElement("tr");

// Create a single cell spanning 2 columns
const totalCell = document.createElement("td");
totalCell.colSpan = 2;  // spans across Item and Price columns
totalCell.style.fontWeight = "bold";
totalCell.textContent = `Total Price: ${totalPrice}`;

// Append the cell to the row and row to the table
totalRow.appendChild(totalCell);
table.appendChild(totalRow);
