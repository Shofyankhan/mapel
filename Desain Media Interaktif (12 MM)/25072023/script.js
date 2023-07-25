// Get the button element
const colorButton = document.getElementById('colorButton');

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change the background color of the body
function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

// Attach a click event listener to the button
colorButton.addEventListener('click', changeBackgroundColor);