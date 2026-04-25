const tog = document.getElementById('toggle')
const navlin = document.querySelector('.nav-links')

tog.addEventListener('click',()=>{
    console.log("menu clicked");
    navlin.classList.toggle('active')
    
})


// carousel 

const imgs = document.querySelectorAll('.home .curosel-img')
console.log(imgs);

let i = 0;

function nextCarousel (){
    i = (i +1) % imgs.length
    imgs.forEach((img ,index) => img.classList.toggle('active' , index == i));

}
function prevCarousel (){
    i = (i - 1 + imgs.length) % imgs.length
    imgs.forEach((img ,index) => img.classList.toggle('active' , index == i));

}
setInterval(()=>nextCarousel(),3000)
