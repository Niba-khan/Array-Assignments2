//=========Array Assigmenmt 2=============

//~~~~~~~~~~~~~~~~~~~Task 1~~~~~~~~~~~~~~~~~~~~~~~
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

type product ={
    name: string,
    price: number,
    colour:string,
    inventory:{
        stock: number,
        colourOption: string[]
    }
}
let product1:product[] =[{
      name: "jeans",
      price: 3500,
      colour: "Blue",
      inventory:{
        stock: 30,
        colourOption: ["sky Blue", "White", "Blue", "black"]
    } 
},
{
      name: "sneakers",
      price: 4000,
      colour: "pink",
      inventory:{
        stock: 40,
        colourOption:["black", "brown", "white"]
    }
},
{
   name: "T_shirts",
    price: 5000,
    colour: "red",
    inventory:{
        stock: 50,
        colourOption: ["pink", "blue", "brown"]
    }
 }
]
function changeColour(product:product,newColor:any):void{
    
    let colourChangning = product.inventory.colourOption.includes(newColor)
    if(newColor == "blue"){
     product.price -= product.price / 100 * 5
    }

    else if(newColor == "pink"){
     product.price -= product.price / 100 * 10
    }

    else if(newColor == "red"){
     product.price += product.price / 100 * 15
    }
};


// Display each product's details
product1.forEach(product => {
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price.toFixed(2)}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colourOption.join(", ")}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
})
// Change color of a product 
changeColour(product1[0], "red");
console.log(changeColour)

//~~~~~~~~~~~~~~~~~~Task 2~~~~~~~~~~~~~~~~~~~~~
/*Part 2: Multi-Dimensional Arrays and Tuples - Student
 Grades Challenge:
 You are tasked with creating a student grading system. Implement functions and logic to
 manage student grades effectively.
 1. Define a TypeScript type alias named Student to represent a student with the
 following properties:
 • name (string): The name of the student.
 • grades (number[ ]): An array of grades for different subjects.
 2. Create an array named students containing at least three student objects. Each student
 object should include a name and an array of grades.
 3. Implement a function named calculateAverageGrade that takes a student's grades as
 input and returns the average grade for that student.
 4. Display each student's name and average grade. Iterate through the students array,
 calculate the average grade for each student using the calculateAverageGrade
 function, and print their name and average grade please solve in typescript*/

//Define Student type alias
type Student = {
    name: string;
    grades: number[];
};
// Define students array
let students: Student[] = [
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
function calculateAverageGrade(grades: number[]): number {
    const totalGrades = grades.reduce((sum, grade) => sum + grade, 0);
    return totalGrades / grades.length;
}

// Function to display student's name and average grade
function displayStudentDetails(student: Student): void {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`Name: ${student.name}`);
    console.log(`Average Grade: ${averageGrade.toFixed(2)}`);
    console.log("-------------------------------------");
}

// Display details of each student
students.forEach(student => {
    displayStudentDetails(student);
});

//~~~~~~~~~~~~~~~~~~~~~Task 3~~~~~~~~~~~~~~~~~~~~~~~~~~
/* Part 3: Array with Types and Indexing - Employee
 Salaries Challenge:
 You are managing employee salaries for a company. Implement logic to calculate salaries and
 handle bonuses.
 1. Define a type alias named Employee with the following properties:
 • name (string): The name of the employee.
 • hoursWorked (number): The number of hours the employee worked. •
 hourlyRate (number): The hourly rate of the employee.
 • salary (number): The base salary of the employee.
 2. Define an array named employees containing employee objects. Each employee
 object should include a name, hoursWorked, hourlyRate, and salary. 
 3. Implement a function named calculateSalary that calculates the salary for each
 employee based on the hours worked and hourly rate.
 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.*/


type Employee = {
    name: string;
    houseWorked: number;
    hourlyRate: number;
    salary: number;
}
let employees: Employee[]= [
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
]
function calculateSalary(employee : Employee):any{
    let basedSalary = employee.salary = employee.houseWorked * employee.hourlyRate;
    if(employee.houseWorked >= 20){
        employee.salary *= 1.10;
    }
    return basedSalary;
   }

   // Update the salary for each employee
employees.forEach(employee => {
    employee.salary = calculateSalary(employee);
    console.log(`Employees Salaries ${employee.salary}`)
});

console.log(employees);














