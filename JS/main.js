


//  Navigation Menu Toggle Button 

let menu_icon = document.querySelector('.menu-icon');

let mobile_menu = document.querySelector('.nav-hide-on-800')


menu_icon.addEventListener('click',(e)=>{

    mobile_menu.classList.toggle('left-open')
    
})

// Post Bookmark 
let post_bookmarks = document.querySelectorAll('.post-bookmark')

for(i=0;i<post_bookmarks.length;i++){

    post_bookmarks[i].addEventListener('click',(e)=>{

        e.target.classList.toggle('book_marked')

    })   
}

/// আপ স্ক্রল এ নেভ বার এ ফিক্সড ক্লাস লাগানো আর নেভ বারের নিচের এলিমেন্ট এ মারজিন টপ নেভবারের 
///হাইট অনুযায়ী দেওয়া
let topCanvas = document.querySelector(".top-canvas-wrapper");
const navbar = document.querySelector(".nav-section-wrapper");


window.onscroll = function(e){

    if(this.oldScroll > this.scrollY){
        navbar.classList.add('fixed-nav');
        if(navbar) {
            const rect = navbar.getBoundingClientRect();
            navbar.nextElementSibling.style.marginTop = rect.height+'px';        
        }
       
    }else{
        navbar.classList.remove('fixed-nav');
       navbar.nextElementSibling.style.marginTop = '0';
    }
    this.oldScroll = this.scrollY;


      


}
 




// Swipper Js

var swiper = new Swiper(".mySwiper", {
slidesPerView: 16,
    spaceBetween: 2,
    breakpoints: {
      270: {
      slidesPerView: 3,
      },
      330: {
      slidesPerView: 4,
      },
      480: {
      slidesPerView: 6,
      },
      640: {
      slidesPerView: 8,
      },
      840: {
      slidesPerView: 10,
      },
      940: {
      slidesPerView: 15,
      },
}
  
});
