// scroll

 window.addEventListener('scroll',()=> {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)

 })


// freqently asked question 
// show and hide feature
let fags=document.querySelectorAll('.faq');

fags.forEach(faq=>{
   faq.addEventListener('click',()=>{
      faq.classList.toggle('open');
     
      // minus to plus
      let icon=faq.querySelector('.faq_icon i');
      if(icon.className==='bx bx-plus'){
         icon.className= "bx bx-minus";
      }
      else{
         icon.className="bx bx-plus";
      }
   })
})

// show and hide nav menu
let menu = document.querySelector(".nav_menu");
let menubtn = document.querySelector("#open-menu-btn");
let closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click', () => {
   menu.style.display = "flex";
   closebtn.style.display="inline-block";
   menubtn.style.display="none";
});

// close nav menu
let closeNav=()=>{
   menu.style.display = "none";
   closebtn.style.display="none";
   menubtn.style.display="inline-block";
}
closebtn.addEventListener('click',closeNav);
