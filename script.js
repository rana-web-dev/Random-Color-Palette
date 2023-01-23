// Get html element
const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-palette");

// Create how many color palette have
const maxPaletteBoxes = 32;

// Create a function for create color palette
const colorGeneratePalette = () => {
  container.innerHTML = "";

  // for loop of color palette
  for (let i = 0; i < maxPaletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    // create li html element
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>`;
    container.appendChild(color);

    // click on color palette for copied hex code
    color.addEventListener("click", () => copyColor(color, randomHex));
  }
};

colorGeneratePalette();

const copyColor = (element, hexValue) => {
  const colorElement = element.querySelector(".hex-value");
  navigator.clipboard.writeText(hexValue).then(() => {
    colorElement.innerText = "COPIED";
    setInterval(() => (colorElement.innerText = hexValue), 1000);
  });
};

refreshBtn.addEventListener("click", colorGeneratePalette);
