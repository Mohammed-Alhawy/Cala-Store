/********* open and close header *********/

const menuIcon=document.querySelector(".menu")
const menu=document.querySelector("header nav ul")
const close =document.querySelector(".clos")

menuIcon.addEventListener("click" , ()=>{
  menu.classList.add("Active-menu")
})

close.addEventListener("click" , ()=>{
  menu.classList.remove("Active-menu")
  console.log("ll");
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

