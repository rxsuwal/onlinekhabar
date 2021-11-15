$('#homeFeaturedCarousel,#homePhotoCarousel,#homeItCarousel,#homeSportsCarousel').slick({
    infinite: false,
  
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:'<button class="position-absolute top-50 start-100 translate-middle rounded-circle text-danger border-0 p-1 ms-4"><i class="fi-xnlrxl-chevron"></i></button>',
    prevArrow:'<button class="position-absolute top-50 start-0 translate-middle rounded-circle text-danger border-0 p-1 me-5 "><i class="fi-xnllxl-chevron"></i></button>',
    responsive:[
        {
            breakpoint:1024,
        settings:{
            slidesToShow:2
        }
        },
        {
            breakpoint:600,
        settings:{
            autoplay:true,
            autoplaySpeed: 2000,
            slidesToShow:1,
            arrows:false
        }
        }
    ]
  });




