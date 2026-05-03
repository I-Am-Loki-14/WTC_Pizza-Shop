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


// form 

const form = document.querySelector("#form")
console.log(form);

form.addEventListener('submit',function (e){
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries())
  let isValid = true;
  const validations ={
            name:data.name.trim() !== "",
            email:data.email.trim() !== "",
            subject:data.subject.trim() !== "",
            message:data.message.trim() !== "",
  };
  for(field in validations){
    if(!validations[field]){
        document.getElementById(field).style.borderColor = "red";
        isValid = false;
    }else {
        document.getElementById(field).style.borderColor = "#202020"
    }
  }
  if (isValid) {
    alert("SUCCESS! Message successfully sent");
    e.target.reset();
  }
})


const navlinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let activelink = entry.target.getAttribute('id');
            navlinks.forEach(nav => nav.classList.remove('activee'))
            document.querySelector(`a[href="#${activelink}"]`).classList.add('activee')
        }
    })
},{threshold:0.5})
sections.forEach(section => observer.observe(section))


const up = document.querySelector("#up");
up.onclick = () => {
    window.scrollTo(0,0)
}

window.onscroll = () => {
    if (window.scrollY >= 600) {
        up.style.opacity = 1;
    } else {
        up.style.opacity = 0;
    }
}