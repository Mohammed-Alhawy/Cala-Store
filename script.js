/********* open and close header *********/

const menuIcon=document.querySelector(".menu")
const menu=document.querySelector("header nav ul")
const close =document.querySelector(".clos")

menuIcon.addEventListener("click" , ()=>{
  menu.classList.add("Active-menu")
})

close.addEventListener("click" , ()=>{
  menu.classList.remove("Active-menu")
})



/********* chaing big img from the slider *********/

const smalImgCol=document.querySelectorAll(".smal-img-col")
const Mainimg = document.getElementById("Mainimg")

smalImgCol.forEach( item =>{
  item.addEventListener("click" , ()=>{
    Mainimg.removeAttribute("src")
    Mainimg.setAttribute("src" , ` ${item.querySelector(".smal-img").getAttribute("src")} `)
  })
})






/********* big-cart-Active *********/


const openCart=document.querySelectorAll(".open")
const bigCart=document.querySelector(".big-cart")

openCart.forEach(item =>{
  item.addEventListener("click" , ()=>{
    bigCart.classList.toggle("big-cart-Active")
  })
})


// console.log(btn.parentElement.getElementsByTagName("img")[0].getAttribute("src"));
/********* add products to the cart *********/

const cartBtns=document.querySelectorAll(".cart")
const cartItem=document.querySelector(".big-cart table tbody")
console.log(cartItem)

cartBtns.forEach(btn =>{
  btn.addEventListener("click" , ()=>{

    cartItem.innerHTML+=`
      <tr>
            <td><a href="#"><i class="ri-close-circle-line"></i></a></td>
            <td><img src="${btn.parentElement.getElementsByTagName("img")[0].getAttribute("src")}" alt=""></td>
            <td>Cartoon Astronaut T-Shirts</td>
            <td>${ btn.parentElement.getElementsByClassName("des")[0].getElementsByTagName("h4")[0].innerText }</td>
            <td><input type="number" value="1"></td>
            <td></td>
          </tr>
    `




  })
})