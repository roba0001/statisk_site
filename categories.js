copy.querySelector(".brands").setAttribute("href", `kategori.html?id=${product.id}`);

const urlParams = new URLSearchParams(window.location.search);
const brands = urlParams.get("brandname");

fetch("https://kea-alt-del.dk/t7/api/products/" + brands)
  .then((response) => response.json())
  .then((data) => showProduct(data));
