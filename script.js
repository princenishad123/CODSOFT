const openBtn = document.querySelector("#open-button");
const sidebar = document.querySelector(".menus");
const navbar = document.querySelector(".navbar");
openBtn.onclick = ()=>{
    // sidebar.style.transform = `translateX(0px)`
    sidebar.classList.toggle("collapse")  
}

let onScroll = window.addEventListener("scroll",(e)=>{
    let yscroll = Math.floor(window.pageYOffset)
     
    if(yscroll > 20){
      navbar.style.boxShadow = `0px 2px 15px -5px rgba(0, 0, 0, 0.208)`
    }else{
      navbar.style.boxShadow = `none`

    }


  return window.removeEventListener("scroll",
    onScroll
  )
    
})


const leftBtn = document.querySelector(".left-scroll-btn");
const rightBtn = document.querySelector(".right-scroll-btn");
const feedback = document.querySelector(".feedback");

rightBtn.onclick = () =>{
 feedback.scrollBy(260,0)
}
leftBtn.onclick = () =>{
feedback.scrollBy(-260,0)
}
