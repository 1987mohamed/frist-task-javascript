var allProducts = document.querySelectorAll(".list li")
var cart = document.querySelector(".cart")
var btn = document.querySelector(".btn")
var total = document.querySelector(".total")
var totalPrice= 0



allProducts.forEach(function (item){
    item.onclick = function (){
        cart.innerHTML += item.textContent + " + "
        totalPrice +=  +(item.getAttribute("price"))

        if(cart.innerHTML != ""){
            btn.style.display = "block";
            
        }
    }
})

btn.onclick = function (){
    total.innerHTML=  totalPrice
    console.log(totalPrice)
}