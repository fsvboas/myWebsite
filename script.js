function darkMode() {
    document.body.classList.toggle("dark-mode");
}

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", darkMode);
