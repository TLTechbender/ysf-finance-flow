const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-wrapper');
const menuHolder =Array.from(document.querySelector('.menu').children);
const navLinks = document.querySelectorAll(".nav-link");





/*=======Logic for the header to stick on scroll*==========*/

window.addEventListener('scroll', ()=>{
    header.classList.toggle('fixed-item', window.scrollY >45);
     
    
  
  });

  
/*=======Logic to open/close menu *==========*/

menuBtn.addEventListener('click', ()=>{
    if(menuBtn.className.includes('fa-bars')){
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-xmark')
        menu.classList.add('show-menu-wrapper')
    } else{
        menuBtn.classList.remove('fa-xmark')
        menuBtn.classList.add('fa-bars');
        menu.classList.remove('show-menu-wrapper');
       
    }
});


/*=======Logic to close menu when a menu item is clicked *==========*/

menuHolder.forEach((menuitem)=>{

    menuitem.addEventListener('click', ()=>{
        menu.classList.remove('show-menu-wrapper');
        menuBtn.classList.remove('fa-xmark')
        menuBtn.classList.add('fa-bars');
    });

    
   
});



/**
 * 
 * This is a work around to show which page is active per time
 */


navLinks.forEach((navLink)=>{
    
  
    if(navLink.href === window.location.href +"#"){
        navLink.classList.add("current-page");
        console.log(navLink.href);
    } else if (navLink.href === window.location.href)  {
        navLink.classList.add("current-page");
        console.log(navLink.href);
    }

});






