lucide.createIcons();

let select = document.querySelector(".select"),
  selectValue = document.getElementById("selected-value"),
  optionsViewButton = document.getElementById("options-view-button"),
  inputsOptions = document.querySelectorAll(".option input");

inputsOptions.forEach((input) => {
  input.addEventListener("click", (event) => {
    selectValue.textContent = input.dataset.label;

    const isMouseOrTouch =
      event.pointerType == "mouse" || event.pointerType == "touch";

    isMouseOrTouch && optionsViewButton.click();
  });
});

window.addEventListener("keydown", (e) => {
  if (!select.classList.contains("open")) return;

  if (e.key === "Escape" || e.key === " ") {
    optionsViewButton.click();
  }
});

optionsViewButton.addEventListener("click", () => {
  select.classList.toggle("open");

  if (select.classList.contains("open")) {
    const input =
      document.querySelector(".option input:checked") ||
      document.querySelector(".option input");

    input.focus();
  }
});

let select2 = document.querySelector(".select2"),
  selectValue2 = document.getElementById("selected-value2"),
  optionsViewButton2 = document.getElementById("options-view-button2"),
  inputsOptions2 = document.querySelectorAll(".option2 input");

inputsOptions2.forEach((input) => {
  input.addEventListener("click", (event) => {
    selectValue2.textContent = input.dataset.label;

    const isMouseOrTouch =
      event.pointerType == "mouse" || event.pointerType == "touch";

    isMouseOrTouch && optionsViewButton2.click();
  });
});

window.addEventListener("keydown", (e) => {
  if (!select.classList.contains("open")) return;

  if (e.key === "Escape" || e.key === " ") {
    optionsViewButton2.click();
  }
});

optionsViewButton2.addEventListener("click", () => {
  select2.classList.toggle("open");

  if (select2.classList.contains("open")) {
    const input =
      document.querySelector(".option input:checked") ||
      document.querySelector(".option input");

    input.focus();
  }
});
