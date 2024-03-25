//JavaScript Code

// Constants
const pizzaOrderForm = document.getElementById('pizzaOrderForm');
const orderPizzaBtn = document.getElementById('orderPizzaBtn');
const studentInfo = document.getElementById('studentInfo');
const pizzaOrderDescription = document.getElementById('pizzaOrderDescription');

// Adding EventListener on submission of form
pizzaOrderForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // This will take all the values
    const size = document.getElementById('pizzaSize').value;
    const toppings = document.getElementById('pizzaToppings').value;
    const crust = document.getElementById('pizzaCrust').value;
    const quantity = document.getElementById('pizzaQuantity').value;

    const pizzaOrder = new PizzaOrder(size, toppings, crust, quantity);

    // This will display Pizza Description
    displayPizzaOrderDescription(pizzaOrder);
});

// Constructor 
class PizzaOrder {
    constructor(size, toppings, crust, quantity) {
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
        this.quantity = quantity;
    }
}

function displayPizzaOrderDescription(pizzaOrder) {
    const description = `Your order: ${pizzaOrder.quantity} ${pizzaOrder.size} pizza(s) with ${pizzaOrder.toppings} toppings on ${pizzaOrder.crust} crust.`;
    pizzaOrderDescription.textContent = description;
}

// This will display Student Info on button
orderPizzaBtn.addEventListener('click', function() {
    const studentId = '200528748';
    const studentName = 'Gaurav';
    studentInfo.textContent = `Student ID: ${studentId}, Name: ${studentName}`;
});
