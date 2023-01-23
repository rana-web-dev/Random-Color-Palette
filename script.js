// Get html element
const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-palette");

// Create how many color palette have
const maxPaletteBoxes = 30;

// Create a function for create color palette
const colorGeneratePalette = () => {
  container.innerHTML = "";

  // For loop of color palette
  for (let i = 0; i < maxPaletteBoxes; i++) {
    // Randomly generate color code by Math.floor() function 
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    // Create li html element
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>`;
    container.appendChild(color);

    // Click on color palette for copied hex code
    color.addEventListener("click", () => copyColor(color, randomHex));
  }
};

// Call color generate palette. If you don't call this function the color palette will be increment. But you need to change color in the same place.
colorGeneratePalette();

const copyColor = (element, hexValue) => {
  const colorElement = element.querySelector(".hex-value");

  // Use navigator.clipboard.writeText for copy hex code.
  navigator.clipboard.writeText(hexValue).then(() => {
    colorElement.innerText = "COPIED";

    // After copied the copied text will be change to hex code in 1 second.
    setInterval(() => (colorElement.innerText = hexValue), 1000);
  });
};

refreshBtn.addEventListener("click", colorGeneratePalette);
