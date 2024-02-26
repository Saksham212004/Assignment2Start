// Get references to DOM elements
const customNumberInput = document.getElementById('customNumber');
const customColorBtn = document.getElementById('customColorBtn');
const randomColorBtn = document.getElementById('randomColorBtn');
const imageSelect = document.getElementById('imageSelect');
const displayedImage = document.getElementById('displayedImage');
const studentId = document.getElementById('myStudentId');

// Event listeners
customColorBtn.addEventListener('click', changeCustomColor);
randomColorBtn.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Function to change background color based on user input and display student ID
function changeCustomColor() {
    const number = parseInt(customNumberInput.value);

    // Set background color based on the input range
    if (isNaN(number) || number < 0 || number > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (number >= 0 && number <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (number > 20 && number <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (number > 40 && number <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (number > 60 && number <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }

    // Display student ID
    studentId.textContent = `Student ID:200551810`;
}

// Function to change background color based on a random number
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNumber;

    // Set background color based on the random number range
    if (isNaN(randomNumber) || randomNumber < 0 || randomNumber > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (randomNumber >= 0 && randomNumber <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (randomNumber > 20 && randomNumber <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (randomNumber > 40 && randomNumber <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (randomNumber > 60 && randomNumber <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }
}

// Function to change displayed image based on the selected option
function changeImage() {
    const selectedImage = imageSelect.value;
    displayedImage.src = `img/${selectedImage}`;
}

// Generate options for select list
function addList() {
    const imageArray = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']; // Example image names
    for (let i = 0; i < imageArray.length; i++) {
        const option = document.createElement('option');
        option.textContent = `Image ${i+1}`;
        option.value = imageArray[i];
        imageSelect.appendChild(option);
    }
}

// Add options when the page loads
addList();
