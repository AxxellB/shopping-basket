document.addEventListener('DOMContentLoaded', addClickEventToButton);

function addClickEventToButton(e){
    const buyBtns = document.getElementsByClassName('buy')
    const btnsArray = [...buyBtns]
    btnsArray.forEach(element => {
        element.addEventListener('click', addToBasket)
    });

    const checkoutBtn = document.getElementById('basket-checkout')
    checkoutBtn.addEventListener('click', sendDataToBackend, clearBasket)
    checkoutBtn.addEventListener('click', clearBasket)
}

function clearBasket(){
    localStorage.clear()
}

function addToBasket(e){
    let product_name = (e.target.parentElement.getElementsByClassName('card-title')[0].innerHTML)
    let product_price = (e.target.parentElement.getElementsByClassName('card-text')[0].innerHTML)
    product_price = product_price.split(" ")[1]

    if(!localStorage.getItem('basket')){
        localStorage.setItem('basket', JSON.stringify([]))
    }

    basket = JSON.parse(localStorage.getItem('basket'))
    for(i = 0; i < basket.length; i++){
        if(basket[i].product_name === product_name){
            basket[i].quantity += 1;
            return localStorage.setItem('basket', JSON.stringify(basket))
        }
    }

    let product = {
        product_name: product_name,
        product_price: product_price,
        quantity: 1
    }
    basket.push(product)
    localStorage.setItem('basket', JSON.stringify(basket))
}

function removeProduct(e){
    console.log(e.target.parentElement)
    const basketData = localStorage.getItem('basket')
    let basket = basketData ? JSON.parse(basketData) : []
    let currentProductName = (e.target.parentElement.innerHTML.split("</td>")[0])
    currentProductName = currentProductName.slice(4, currentProductName.length)
    for(i = 0; i < basket.length; i++){
        if(basket[i].product_name === currentProductName){
            basket.splice(i, 1)
        }
    }
    localStorage.setItem('basket', JSON.stringify(basket))

}

document.addEventListener('DOMContentLoaded', () =>{
    showBasketItems();
})

function showBasketItems(){
    const basketData = localStorage.getItem('basket')
    const basket = basketData ? JSON.parse(basketData) : []

    let basketList = document.getElementById('basket')
    if(!basketList){
        return
    }
    let totalPrice = 0;
    basket.forEach(element => {
        totalPrice += element.quantity * element.product_price
        const row = document.createElement('tr')
        let nameCell = document.createElement('td')
        let priceCell = document.createElement('td')
        let quantityCell = document.createElement('td')
        let removeBtn = document.createElement('button')
        removeBtn.classList.add('btn')
        removeBtn.classList.add('btn-danger')
        removeBtn.textContent = "Remove"
        removeBtn.addEventListener('click', removeProduct)
        nameCell.textContent = element.product_name
        priceCell.textContent = `${element.product_price} lev`
        quantityCell.textContent = element.quantity

        row.appendChild(nameCell)
        row.appendChild(priceCell)
        row.appendChild(quantityCell)
        row.appendChild(removeBtn)
        basketList.appendChild(row)
    });

    const div = document.createElement('div')
    div.textContent = `Price: ${totalPrice} lev`
    div.classList.add("text-end")
    let basketContainer = document.getElementById('basket-container')
    basketContainer.appendChild(div)
    
}

async function sendDataToBackend(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const response = await fetch("basket", {
      method: "POST",
      body: localStorage.getItem('basket'),
      headers: myHeaders,
    });
    console.log(response)
    
}