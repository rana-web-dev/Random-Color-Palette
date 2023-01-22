const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-palette");

const maxPaletteBoxes = 32;

const colorGeneratePalette = () => {

  container.innerHTML = "";

  for (let i = 0; i < maxPaletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    const color = document.createElement("li");
    console.log(color);
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>`;
    container.appendChild(color);

    color.addEventListener("click", () => copyColor(color, randomHex));
  }
};

colorGeneratePalette();

const copyColor = (element, hexValue) => {
  const colorElement = element.querySelector(".hex-value");
  navigator.clipboard.writeText(hexValue).then(() => {
    colorElement.innerText = "COPIED";
    setInterval(() => colorElement.innerText = hexValue, 1000);
  });
}

refreshBtn.addEventListener("click", colorGeneratePalette);
