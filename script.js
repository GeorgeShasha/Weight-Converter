const inputField = document.getElementById("pounds");
const results = document.getElementById("results");
const errorMessage = document.getElementById("error");

let errorTime = 0;
let resultsTime = 0;

inputField.addEventListener("input", () => {
  if (inputField.value < 0 || inputField.value === isNaN) {
    errorMessage.innerHTML = "Error. Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorMessage.innerHTML = "";
      inputField.value = "";
    }, 1000);
  } else {
    results.innerHTML = (inputField.value * 0.453592).toFixed(2) + " kg";
    clearTimeout(resultsTime);
    resultsTime = setTimeout(() => {
      inputField.value = "";
      results.innerHTML = "";
    }, 3000);
  }
});
