const inputName = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  const trimInput = inputName.value.trim();
  output.textContent = trimInput === "" ? "Anonymous" : trimInput;
});
