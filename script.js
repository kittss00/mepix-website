const searchInput =
    document.getElementById("searchInput");

const productCards =
    document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {

    const search =
        this.value.toLowerCase();

    productCards.forEach(function (card) {

        const product =
            card.innerText.toLowerCase();

        if (product.includes(search)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});