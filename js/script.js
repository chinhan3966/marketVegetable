let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    // autoplay: {
    //     delay: 7500,
    //     disableOnInteraction: false,
    // },
    // centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

// ---------------AddProduct---------------------

const activeCart = document.querySelector('.shopping')
const AddProduct = document.querySelectorAll('#addProduct')

AddProduct.forEach(function(list) {
  list.onclick = function(e) {
    e.preventDefault()
    const btn = e.target
    const boxElement = btn.parentElement
    const imgProduct = boxElement.querySelector('img').src
    const nameProduct = boxElement.querySelector('h3').innerText
    const priceProduct = boxElement.querySelector('.price').innerText
    addProducts(imgProduct, nameProduct, priceProduct)
    //activeCart.classList.add('active')
    // var arrayProduct = new Array()
    // var sp = new Array(imgProduct, nameProduct, priceProduct)
    // arrayProduct.push(sp)
    // console.log(arrayProduct)
  }
})

function addProducts(imgProduct, nameProduct, priceProduct) {
    const shoppingCart = document.querySelector('.shopping-cart')
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
            <i class="fas fa-trash"></i>
            <img src="${imgProduct}" alt="">
            <div class="content">
                <h3>${nameProduct}</h3>
                <span class="price">${priceProduct}</span>
                <input class="quantity" type="number" value="1" min="1">
            </div>
    `
    shoppingCart.appendChild(box)
    if(shoppingCart.appendChild(box)){
        document.querySelector('.announce').innerHTML = ''
    }
    // else{
    //   document.querySelector('.payment').style.display = 'block'
    // }
    removeProduct()
    totalCart()
    changeInput() 
    quantityProduct()
} 


function removeProduct(){
  const btnRemove = document.querySelectorAll('.fa-trash')
  btnRemove.forEach(function(item) {
      item.onclick = function(e) {
        const box = e.target.parentElement
        box.remove()
        totalCart()
        quantityProduct()
      }
  })
  
}

function totalCart() {
    const shoppingCart = document.querySelectorAll('.shopping-cart .box')
    var total = 0
    for(var i = 0; i < shoppingCart.length; i++){
      const priceProduct = shoppingCart[i].querySelector('.price').innerHTML
      const quantityProduct = shoppingCart[i].querySelector('.quantity').value
      var tempTotal = priceProduct * quantityProduct
      total += tempTotal
    }

    var totalCart = document.querySelector('.payment span').innerText = `${Math.floor(total)} $`
    
}

function changeInput() {
  const shoppingCart = document.querySelectorAll('.shopping-cart .box')
  shoppingCart.forEach(function(item) {
      const inputElement = item.querySelector('.quantity')
      inputElement.onchange = function() {
        totalCart()
      }
  })
}



function quantityProduct() {
    const boxLenght = document.querySelectorAll('.shopping-cart .box')
    document.querySelector('.quanlity-cart').innerHTML = boxLenght.length
}




function timeBack() {
    var time = 120;
    let hr = time / 60
    if(hr < 10){
      hr += `0${hr}`
    }
    let mn = time % 60
    if(mn < 10){
      mn += `0${hr}`
    }

    return `${hr}:${mn}`
}


setInterval(function() {
    var date = new Date()
    let hr = date.getHours()
    let mn =  date.getMinutes()
    let sc = date.getSeconds()
    let totalSecond = hr*3600 + mn*60 + sc
    var totalDay = 86400
    
    let hr1 = Math.floor((totalDay - totalSecond) / 3600)
    if(hr1< 10){
      hr1 = `0${hr1}`
    }
    let mn1 =  Math.floor(((totalDay - totalSecond) - (hr1 * 3600)) / 60)
    if(mn1< 10){
      mn1 = `0${mn1}`
    }
    let sc1 = Math.floor((totalDay - totalSecond) % 60)
    if(sc1< 10){
      sc1 = `0${sc1}`
    }
    
    
    document.getElementById('sale').innerHTML = `Flash-Sale: ${hr1}:${mn1}:${sc1}`
  
}, 1000)



