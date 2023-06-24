function checkValid() {
  const nameError = document.getElementById("name");
  const priceError = document.getElementById("price");
  var nameInput = document.getElementById("name-input");
  var priceInput = document.getElementById("price-input");
  if (nameInput.value === "") {
    nameError.style.display = "block";
    nameInput.style.outlineColor = "red";
  } else {
    nameError.style.display = "none";
  }
  if (priceInput.value === "") {
    priceError.style.display = "block";
  } else {
    priceError.style.display = "none";
    priceInput.style.outlineColor = "red";
  }
}
