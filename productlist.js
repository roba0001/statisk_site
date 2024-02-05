fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log("product.discount:", product.discount);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector("p.subtle").textContent = product.articletype + " - " + product.brandname;
  //   pris og discount
  copy.querySelector("p.price").textContent = product.price + ",- DKK";
  copy.querySelector("p.discountpr").textContent = product.discount + " %";

  if (product.soldout) {
    // produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount === null) {
    // produktet er ikke on sale
    copy.querySelector(".discountpr").classList.add("hide");
  } else {
    let discountDecimal = product.discount / 100;
    let discountPrice = product.price - product.price * discountDecimal;
    copy.querySelector(".discountprice").textContent = `Now ${discountPrice},- DKK`;
    copy.querySelector("span.prev").textContent = "Prev";
  }

  // appende
  document.querySelector(".grid_produktliste").appendChild(copy);
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
//
