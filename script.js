 $(document).ready(function(){
   
   $(window).scroll(function(){

      if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
 });
    
    window.addEventListener("scroll",
     function() {
     var elemento =  document.querySelector(".logo a");
     var spanElement = document.createElement("span");
     spanElement.id = "msg";
        
     if (window.scrollY > 20)  {
      elemento.innerHTML = "< Portfo";
      spanElement.textContent = "lio/>";
      elemento.appendChild(spanElement);

   } else {
      elemento.innerHTML = "Bem-<span>vindo!</span>";
         }
     
 }); 

    $('.menu-btn').click(function(){
      var menuIcon = $('.menu-btn i');
    $('.navbar .menu').toggleClass("active");
    menuIcon.toggleClass("rotate");
      if (menuIcon.hasClass('fa-bars')) {
        menuIcon.removeClass('fa-bars').addClass('fa-times');
    } else {
        menuIcon.removeClass('fa-times').addClass('fa-bars');
    }
 });
     
    var typed = new Typed(".typing", {
      strings: ["Desenvolvedora", "Apaixonada por TI", "Gamer", "Mãe de pet 🐁🐈"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

     
       //owl carousel script
      
   $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
         0:{
           items: 1,
           nav: false
          },
          
        600:{
           items: 2,
           nav: false 
          },

        1000:{
           items: 2,
           nav: false 
           },

          }
      });
 }); 