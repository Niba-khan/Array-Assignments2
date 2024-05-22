/*Part 1: Basic Arrays - Product Inventory
Challenge:
You are tasked with creating a Product Inventory system. Implement functions and logic to
manage object manipulation effectively.
1. Define a type alias named Product to represent a product with the following
properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each
product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new
color as input. This function should update the color property of the product and
adjust the price based on the new color (implement your own logic, e.g., increase by
10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the
products array and print each product's details.
// Part 1: Basic Arrays - Product Inventory
// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to
// manage object manipulation effectively.*/
var product1 = [{
        name: "jeans",
        price: 3500,
        colour: "Blue",
        inventory: {
            stock: 30,
            colourOption: ["sky Blue", "White", "Blue", "black"]
        }
    },
    {
        name: "sneakers",
        price: 4000,
        colour: "pink",
        inventory: {
            stock: 40,
            colourOption: ["black", "brown", "white"]
        }
    },
    {
        name: "T_shirts",
        price: 5000,
        colour: "red",
        inventory: {
            stock: 50,
            colourOption: ["pink", "blue", "brown"]
        }
    }
];
function changeColour(product, newColor) {
    var colourChangning = product.inventory.colourOption.includes(newColor);
    if (newColor == "blue") {
        product.price -= product.price / 100 * 5;
    }
    else if (newColor == "pink") {
        product.price -= product.price / 100 * 10;
    }
    else if (newColor == "red") {
        product.price += product.price / 100 * 15;
    }
}
;
// Display each product's details
product1.forEach(function (product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price.toFixed(2)));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colourOption.join(", ")));
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
});
// Change color of a product 
changeColour(product1[0], "red");
console.log(changeColour);
// Define students array
var students = [
    {
        name: "Niba",
        grades: [85, 89, 75, 90]
    },
    {
        name: "Kinza",
        grades: [78, 82, 90, 85]
    },
    {
        name: "Maha",
        grades: [90, 95, 78, 89]
    }
];
// Function to calculate average grade for a student
function calculateAverageGrade(grades) {
    var totalGrades = grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    return totalGrades / grades.length;
}
// Function to display student's name and average grade
function displayStudentDetails(student) {
    var averageGrade = calculateAverageGrade(student.grades);
    console.log("Name: ".concat(student.name));
    console.log("Average Grade: ".concat(averageGrade.toFixed(2)));
    console.log("-------------------------------------");
}
// Display details of each student
students.forEach(function (student) {
    displayStudentDetails(student);
});
var employees = [
    {
        name: "Niba",
        houseWorked: 30,
        hourlyRate: 15,
        salary: 0,
    },
    {
        name: "Maham",
        houseWorked: 25,
        hourlyRate: 10,
        salary: 0,
    },
    {
        name: "Kinza",
        houseWorked: 40,
        hourlyRate: 25,
        salary: 0,
    },
];
function calculateSalary(employee) {
    var basedSalary = employee.salary = employee.houseWorked * employee.hourlyRate;
    if (employee.houseWorked >= 20) {
        employee.salary *= 1.10;
    }
    return basedSalary;
}
// Update the salary for each employee
employees.forEach(function (employee) {
    employee.salary = calculateSalary(employee);
    console.log("Employees Salaries ".concat(employee.salary));
});
console.log(employees);
