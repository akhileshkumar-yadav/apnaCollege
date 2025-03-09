const inputField = document.querySelector(".input-field");
const label = document.querySelector(".head");

inputField.addEventListener("mouseover", () => {
    label.classList.remove("move-down");
    label.classList.add("move-up");
});

inputField.addEventListener("mouseout", () => {
    if (inputField.value === "") {
        label.classList.remove("move-up");
        label.classList.add("move-down");
    }
});
