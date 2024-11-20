const bar=document.getElementById('bar')
const close=document.getElementById('close')
const nav=document.getElementById('navbar')
if(bar)
{
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if(close)
{
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}


// contact form functionality //

  // // Get the form element by its id
  // const messageForm = document.querySelector("#form-details form");

  // messageForm.addEventListener("submit", function (event) {
  //   event.preventDefault(); 

  //   // Get the input value from the name field
  //   const nameInput = document.querySelector("#form-details input[type='text']");
  //   const name = nameInput.value;

  //   alert(`Thanks for your feedback, ${name}! We appreciate it.`);

  //   messageForm.reset();
  // });



  document.addEventListener("DOMContentLoaded", function() {
    const messageForm = document.querySelector("#message-form");
    if (messageForm) {
      messageForm.addEventListener("submit", function(event) {
        event.preventDefault();
  
        // Get the input value from the name field
        const nameInput = document.querySelector("#form-details input[type='text']");
        const name = nameInput.value;
  
        // Get the input value from the feedback field
        const feedbackInput = document.querySelector("#form-details textarea");
        const feedback = feedbackInput.value;
  
        // Save name and feedback to local storage
        saveFeedback(name, feedback);
  
        alert(`Thanks for your feedback, ${name}! We appreciate it.`);
  
        // Reset the form
        messageForm.reset();
      });
    } else {
      console.error("Form element not found!");
    }
  });
  
  function saveFeedback(name, feedback) {
    // Check if local storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
      // Retrieve existing feedbacks from local storage
      let existingFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  
      // Add new feedback to the array
      existingFeedbacks.push({ name: name, feedback: feedback });
  
      // Save the updated feedbacks array to local storage
      localStorage.setItem("feedbacks", JSON.stringify(existingFeedbacks));
    } else {
      console.error("Local storage is not supported!");
    }
  }
  




  



  
  // shop functionality // 




// document.addEventListener('DOMContentLoaded', () => {
//   // Get cart count element
//   const cartCount = document.getElementById('cart-count');

//   // Cart array
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];

//   // Update cart count
//   updateCartCount();

//   // Add to cart
//   function addToCart(product) {
//     // Add product to cart
//     cart.push(product);

//     // Save cart to storage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Update cart count
//     updateCartCount();
//   }

//   // Update cart count
//   function updateCartCount() {
//     cartCount.innerText = cart.length;
//   }
// // Initialize
// function init() {
//   // Get product data
//   const productName = document.getElementById('productName').innerText;
//   const productPrice = document.getElementById('productPrice').innerText;
//   const price = Number(productPrice.replace('$', ''));

//   // Get selected size value
//   const productSizeElement = document.getElementById('productSize');

//   // Add to cart
//   addToCartBtn.addEventListener('click', () => {
//     // Get quantity
//     const quantity = document.getElementById('productQuantity').value;

//     // Get selected size value
//     const productSize = productSizeElement.options[productSizeElement.selectedIndex].value;

//     // Add item to cart
//     addToCart({
//       name: productName,
//       price: price,
//       size: productSize,
//       quantity: quantity
//     });
//   });
// }

//   // Initialize
//   init();
// });





document.addEventListener('DOMContentLoaded', () => {
  // Get cart count element
  const cartCount = document.getElementById('cart-count');

  // Cart array
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Update cart count and total price
  updateCartCount();

  // Add to cart
  function addToCart(product) {
    // Add product to cart
    cart.push(product);

    // Save cart to storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count and total price
    updateCartCount();

    // Calculate and store total price
    const totalPrice = calculateTotalPrice();
    localStorage.setItem('totalPrice', totalPrice);
  }

  // Update cart count
  function updateCartCount() {
    cartCount.innerText = cart.length;
  }

  // Calculate total price
  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    return totalPrice;
  }

  // Initialize
  function init() {
    // Get product data
    const productName = document.getElementById('productName').innerText;
    const productPrice = document.getElementById('productPrice').innerText;
    const price = Number(productPrice.replace('$', ''));

    // Get selected size value
    const productSizeElement = document.getElementById('productSize');

    // Get add to cart button
    const addToCartBtn = document.getElementById('addToCartBtn');

    // Add event listener
    addToCartBtn.addEventListener('click', () => {
      // Get quantity
      const quantity = document.getElementById('productQuantity').value;

      // Get selected size value
      const productSize = productSizeElement.options[productSizeElement.selectedIndex].value;

      // Add item to cart
      addToCart({
        name: productName,
        price: price,
        size: productSize,
        quantity: quantity
      });
    });
  }

  // Initialize
  init();
});














  // Product id //



  // function displayProducts() {
  //   var products = JSON.parse(localStorage.getItem("products")) || [];
  //   var productList = document.getElementById("productList");
  //   productList.innerHTML = "";
  
  //   products.forEach(function (product) {
  //     var productCard = document.createElement("div");
  //     productCard.classList.add("card");
  
  //     var productImage = document.createElement("img");
  //     productImage.src = product.image;
  //     productImage.alt = "Product Image";
  //     productImage.classList.add("product-image");
  //     productCard.appendChild(productImage);
  
  //     var productDetails = document.createElement("div");
  //     productDetails.classList.add("product-details");
  
  //     var productName = document.createElement("h3");
  //     productName.textContent = product.name;
  //     productDetails.appendChild(productName);
  
  //     var productCategory = document.createElement("p");
  //     productCategory.textContent = product.category;
  //     productDetails.appendChild(productCategory);
  
  //     var productPrice = document.createElement("p");
  //     productPrice.textContent = product.price;
  //     productDetails.appendChild(productPrice);
  
  //     var productDescription = document.createElement("p");
  //     productDescription.textContent = product.details;
  //     productDetails.appendChild(productDescription);
  
  //     productCard.appendChild(productDetails);
  //     productList.appendChild(productCard);
  //   });
  // }
  
  // displayProducts();
  
  // function addProduct() {
  //   var productName = document.getElementById("productName").value;
  //   var productCategory = document.getElementById("productCategory").value;
  //   var productPrice = document.getElementById("productPrice").value;
  //   var details = document.getElementById("details").value;
  //   var productImage = document.getElementById("productImage").files[0];
  
  //   var product = {
  //     id: Math.floor(Math.random() * 1000),
  //     name: productName,
  //     category: productCategory,
  //     price: productPrice,
  //     details: details,
  //     image: "",
  //   };
  
  //   var reader = new FileReader();
  //   reader.onload = function (event) {
  //     product.image = event.target.result;
  //     var products = JSON.parse(localStorage.getItem("products")) || [];
  //     products.push(product);
  //     localStorage.setItem("products", JSON.stringify(products));
  
  //     displayProducts();
  //   };
  //   reader.readAsDataURL(productImage);
  // }
  
  // document.getElementById("productForm").addEventListener("submit", function (event) {
  //   event.preventDefault();
  //   addProduct();
  // });





  // function displayProducts() {
  //   var products = JSON.parse(localStorage.getItem("products")) || [];
  //   var productList = document.getElementById("productList");
  //   productList.innerHTML = "";
  
  //   products.forEach(function (product) {
  //     var productCard = document.createElement("div");
  //     productCard.classList.add("card");
  
  //     var productImage = document.createElement("img");
  //     productImage.src = product.image;
  //     productImage.alt = "Product Image";
  //     productImage.classList.add("product-image");
  //     productCard.appendChild(productImage);
  
  //     var productDetails = document.createElement("div");
  //     productDetails.classList.add("product-details");
  
  //     var productName = document.createElement("h3");
  //     productName.textContent = product.name;
  //     productDetails.appendChild(productName);
  
  //     var productCategory = document.createElement("p");
  //     productCategory.textContent = product.category;
  //     productDetails.appendChild(productCategory);
  
  //     var productPrice = document.createElement("p");
  //     productPrice.textContent = product.price;
  //     productDetails.appendChild(productPrice);
  
  //     var productDescription = document.createElement("p");
  //     productDescription.textContent = product.details;
  //     productDetails.appendChild(productDescription);
  
  //     var addToCartButton = document.createElement("button");
  //     addToCartButton.classList.add("add-to-cart-button");
  //     addToCartButton.innerHTML = '<i class="fas fa-shopping-cart"></i>';
  //     addToCartButton.addEventListener("click", function () {
  //       addToCart(product);
  //     });
  
  //     productDetails.appendChild(addToCartButton);
  //     productCard.appendChild(productDetails);
  //     productList.appendChild(productCard);
  //   });
  // }
  
  // function addToCart(product) {
  //   // Add your cart functionality here
  //   console.log("Product added to cart:", product.name);
  // }
  
  // displayProducts();













 
















