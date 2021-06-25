window.addEventListener('scroll', function(){
    var nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 150);
   
})


    

 function showMenu(){
      // get the mobile menu class and display it to none when clicked
      var harmburger = document.querySelector('.harmburger-menu');
      harmburger.style.display = 'none';
      // get the hidemenu and display block when the menu button is clicked
      var cancel = document.querySelector('.cancel');
      cancel.style.display = 'block';
      var nav= document.querySelector('.nav-links')
      nav.style.display= 'block'

    }
    function hideMenu() {
     
      var cancel = document.querySelector('.cancel');
      cancel.style.display = 'none';
      
      var harmburger = document.querySelector('.harmburger-menu');
      harmburger.style.display = 'block';
      var nav= document.querySelector('.nav-links')
      nav.style.display= 'none'
      
    }