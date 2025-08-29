// Prompt the user for their age
let age = prompt("Please enter your age:");

// Convert the input to a number
age = parseInt(age);

// Check if the age is 18 or older using if/else
if (age >= 18) {
  console.log("You are old enough to vote!");
} else {
  console.log("You are not yet old enough to vote.");
}

# Function for processing input and returning a result
def calculate_area_rectangle(length, width):
    """
    Calculates the area of a rectangle.

    Args:
        length (float or int): The length of the rectangle.
        width (float or int): The width of the rectangle.

    Returns:
        float or int: The calculated area of the rectangle.
    """
    if length <= 0 or width <= 0:
        return "Error: Length and width must be positive values."
    return length * width

# Function for processing input and displaying a result
def greet_user(name):
    """
    Greets a user by displaying a personalized message.

    Args:
        name (str): The name of the user.
    """
    print(f"Hello, {name}! Welcome.")

    // Iterate through an array of names
const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}

// Calculate sum of numbers
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`Sum: ${sum}`);

// Process array until condition is met
const scores = [85, 92, 78, 95, 88];
let i = 0;
let total = 0;

while (i < scores.length) {
    total += scores[i];
    i++;
}
console.log(`Average score: ${total / scores.length}`);

// Find first failing grade
const grades = [85, 92, 59, 95, 88];
let index = 0;
let failingGrade = null;

while (index < grades.length && failingGrade === null) {
    if (grades[index] < 60) {
        failingGrade = grades[index];
    }
    index++;
}
console.log(`First failing grade: ${failingGrade}`);

// Select elements by ID
const header = document.getElementById('header');

// Select elements by class name (returns HTMLCollection)
const buttons = document.getElementsByClassName('btn');

// Select elements by tag name
const paragraphs = document.getElementsByTagName('p');

// Modern selectors (returns NodeList)
const mainContent = document.querySelector('#main-content');
const allButtons = document.querySelectorAll('.btn');
const firstListItem = document.querySelector('ul li:first-child');

// Click event
document.getElementById('myButton').addEventListener('click', function(e) {
    console.log('Button clicked!', e.target);
    e.target.textContent = 'Clicked!';
});

// Mouse events
const hoverElement = document.querySelector('.hover-me');
hoverElement.addEventListener('mouseenter', () => {
    hoverElement.style.backgroundColor = 'lightblue';
});
hoverElement.addEventListener('mouseleave', () => {
    hoverElement.style.backgroundColor = '';
});

// Form events
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputValue = document.getElementById('textInput').value;
    console.log('Form submitted with:', inputValue);
});

// Keyboard events
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Changing text content
function updateText() {
    const element = document.getElementById('dynamic-text');
    element.textContent = 'New text content!';
    element.innerHTML = '<strong>Formatted</strong> text!';
}

// Toggling classes
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
}

// Changing styles directly
function highlightElement() {
    const element = document.querySelector('.important');
    element.style.backgroundColor = 'yellow';
    element.style.padding = '10px';
    element.style.border = '2px solid orange';
}

// Showing/hiding elements
function toggleVisibility() {
    const element = document.getElementById('secret-content');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}