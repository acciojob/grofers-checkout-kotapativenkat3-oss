
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // Select all prices from the table
    const prices = document.querySelectorAll(".prices");

    let total = 0;

    // Calculate total price
    prices.forEach((price) => {
        total += Number(price.textContent);
    });

    // Create a new table row
    const newRow = document.createElement("tr");

    // Create a single cell
    const newCell = document.createElement("td");

    // Display total price
    newCell.textContent = "Total Price: Rs " + total;

    // Append cell to row
    newRow.appendChild(newCell);

    // Append row to table
    document.querySelector("table").appendChild(newRow);

};

getSumBtn.addEventListener("click", getSum);