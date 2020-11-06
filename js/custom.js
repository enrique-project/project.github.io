// evento para navbar

addEventListener('DOMContentLoaded',() =>{
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click',()=>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

    const btn_list = document.querySelector('.btn_list')
    if(btn_list){
        btn_list.addEventListener('click',()=>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})





// scroll
$(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("set_color");
    } else {
        $("#menu").removeClass("set_color");
    }
  });


// proyectos

$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    autoplay:true,
    autoplayTimeout:1800,
    // autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
    
})