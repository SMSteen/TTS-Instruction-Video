function showProducts(results) {
  for (let idx = 0; idx < results.length; idx++) {
    let productData = `
              <div class="product-card">
              <img src=${results[idx].image} alt="${results[idx].brand} ${
      results[idx].desc
    }">
              <div class="product-details">
                  <p class="price">$${results[idx].price}</p>
                  <p class="brand">${results[idx].brand}</p>
                  <p class="desc">${results[idx].desc}</p>
              </div>
              <button>Add to Cart</button>
              </div>
          `;

    $('.products').append(productData);
  }
}

function collapseMenu() {
  console.log('I have been clicked');
}
$(document).ready(function() {
  let baseURL = 'https://5c3e77caa9d04f0014a98be7.mockapi.io/products/shoes';
  let errorMsg =
    'Oops, something went wrong with this request. If the URL is correct, there could be an issue with the server. Please try again at a later time.';
  let products = Promise.resolve($.get(baseURL));
  products
    .then(function(data) {
      console.log(data);
      showProducts(data);
    })
    .catch(function(xhrObj) {
      $('.products').html(errorMsg);
    });
});
