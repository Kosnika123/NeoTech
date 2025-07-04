function addToCart(name,price,image){
    let cart = 
    JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name,price,image});
    localStorage.setItem("cart",
    JSON.stringify(cart));    
    alert(`${name} added to cart!`);
}

function showCart(){
    let cart = 
    JSON.parse(localStorage.getItem("cart")) || 
    [];

    const cartDiv = document.getElementById("cart-items");

    if(cart.length === 0){
        cartDiv.innerHTML = "<p> Your cart is empty </p>";
        return;
    }

    cartDiv.innerHTML = cart.map((item, index) => `
     <div class="cart-item"> 
     <img src="${item.image}" alt="${item.name}" width="300" height="250px" style="object-fit:cover;" />
   <div class="item-details">
   <p> <strong>  ${item.name} </strong> </p>
   <p> <strong> $ ${item.price} </strong> <br> 
   <button onclick="removeItem(${index})" class="remove-btn"> Remove  </button>
     </div>
     </div>
      `).join("");
}

document.getElementById("cart-actions").style.display = "block";

document.getElementById("clear-cart").onclick = clearCart;
document.getElementById('purchase-btn').onclick = purchaseCart;

const clearBtn = document.getElementById("clear-cart");
clearBtn.addEventListener("click", clearCart);

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

function clearCart(){
if (confirm("Are you sure you want to clear all items?")) {
    localStorage.removeItem("cart");
    showCart();
}
}

function purchaseCart(){
    if(confirm("Proceed to purchase?")){
    localStorage.removeItem("cart");
    document.getElementById("cart-items").innerHTML = "<p>🎉🎉 Thank you for your purchase! <br> Delivery in 3 days </p>";
    document.getElementById("cart-actions").style.display = "none";
    }
}