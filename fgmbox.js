document.addEventListener("DOMContentLoaded", function () {
  const priceDisplay = document.getElementById("totalPrice");

  const boxes = document.querySelectorAll(".unit-box");

  boxes.forEach(box => {
    box.addEventListener("click", function (e) {
      if (e.target.tagName === "SELECT" || e.target.closest("select")) return;

      boxes.forEach(b => {
        b.classList.remove("active");
        b.querySelector(".unit-options").innerHTML = '';
      });

      this.classList.add("active");

      const units = parseInt(this.dataset.units);
      const price = parseFloat(this.dataset.price);
      const optionsContainer = this.querySelector(".unit-options");

      for (let i = 1; i <= units; i++) {
        const pairDiv = document.createElement("div");
        pairDiv.classList.add("pair-select");

        const sizeSelect = document.createElement("select");
        ["S", "M", "L"].forEach(size => {
          const opt = document.createElement("option");
          opt.text = size;
          sizeSelect.appendChild(opt);
        });

        const colorSelect = document.createElement("select");
        ["Black", "White", "Blue"].forEach(color => {
          const opt = document.createElement("option");
          opt.text = color;
          colorSelect.appendChild(opt);
        });

        pairDiv.appendChild(sizeSelect);
        pairDiv.appendChild(colorSelect);
        optionsContainer.appendChild(pairDiv);
      }

      priceDisplay.textContent = price.toFixed(2);
    });
  });
});
