fetch("https://kea-alt-del.dk/t7/api/products/")
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  // looper og kalder showCategory
  categories.forEach(showCategory);
}

function showCategory(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("#txt_kategori").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("button").textContent = "denne kategori er " + product.category;
  copy.querySelector("button").setAttribute("href", `produktliste.html?category=${product.category}`);
  // vælg parent
  // append (tilføj kopi til html)
  document.querySelector("main").appendChild(copy);
}
