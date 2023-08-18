var cartItems = [];
var cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push(productName);
    cartTotal += price;

   
    var cartItemsElem = document.getElementById("cart-items");
    var cartTotalElem = document.getElementById("cart-total");


    cartItemsElem.innerHTML = "";
   for (var i = 0; i < cartItems.length; i++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = cartItems[i];
        cartItemsElem.appendChild(listItem);
    }


  
    cartTotalElem.textContent = cartTotal;
}


























// var cartItems = [];
// var cartTotal = 0;

// function addToCart(productName, price) {
//     cartItems.push(productName);
//     cartTotal += price;

//     // Update the cart display
//     var cartItemsElem = document.getElementById("cart-items");
//     var cartTotalElem = document.getElementById("cart-total");

//     // Clear the current content
//     cartItemsElem.innerHTML = "";

//     // Rebuild the cart items
//     for (var i = 0; i < cartItems.length; i++) {
//         var listItem = document.createElement("li");
//         listItem.innerHTML = cartItems[i];
//         cartItemsElem.appendChild(listItem);
//     }


//     // Update the total
//     cartTotalElem.textContent = cartTotal;
// }