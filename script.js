
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    const prices = document.querySelectorAll(".price");

    let total = 0;

    prices.forEach((price) => {
        total += Number(price.textContent);
    });

    // Remove previous total row if it exists
    const oldRow = document.querySelector("#total-row");

    if (oldRow) {
        oldRow.remove();
    }

    // Create new row
    const newRow = document.createElement("tr");
    newRow.id = "total-row";

    const newCell = document.createElement("td");

    newCell.textContent = "Total Price: Rs " + total;

    newCell.colSpan = 2;

    newRow.appendChild(newCell);

    document.querySelector("table").appendChild(newRow);
};

// Calculate automatically when page loads
getSum();

// Calculate again when button is clicked
getSumBtn.addEventListener("click", getSum);
