const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

modal.addEventListener("click", (e) => {
    // Kontrollera om användaren klickade på bakgrunden av modalen
    if (e.target === modal) {
        modal.classList.remove("open"); // Döljer modalen
    }
});
