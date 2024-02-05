fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //   console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  copy.querySelector("h3").textContent = product.productdisplayname;
  //   variabel for subtle text
  let subtleText = product.articletype + " - " + product.brandname;
  copy.querySelector("p.subtle").textContent = subtleText;
  //   pris og discount
  copy.querySelector("p.price").textContent = product.price + ",- DKK";
  copy.querySelector(".discounted").textContent = product.discount;

  if (product.soldout) {
    // produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.onSale) {
    // produktet er on sale
    copy.querySelector("p.price").textContent = product.price;

    copy.querySelector("div.discounted").textContent = product.discount;
  }
  // appende
  document.querySelector("main").appendChild(copy);
}

/* <article class="smallProduct">
<img src="https://kea-alt-del.dk/t7/images/webp/640/1533.webp " alt="Cat Red T-shirt" />
<h3>Cat Red T-shirt</h3>
<p class="subtle">Tshirt - Puma</p>
<p class="price">DKK 899,-</p>
<a href="produkt.html"> Read More</a>
</article> */

// {
//   "id": 1163,
//   "gender": "Men",
//   "category": "Apparel",
//   "subcategory": "Topwear",
//   "articletype": "Tshirts",
//   "season": "Summer",
//   "productionyear": 2011,
//   "usagetype": "Sports",
//   "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//   "price": 895,
//   "discount": null,
//   "brandname": "Nike",
//   "soldout": 0
// }
