(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".case-studies-carousel").owlCarousel({
            loop: true,
            margin: 30,           
            nav: false,        
            dots: true,     
            items : 3, 
            lazyLoad:true,
            
        });
        
        
        $(".testimonial-carousel").owlCarousel({
            loop: true,
            margin: 30,           
            nav: false,        
            dots: true,
            items : 1, 
        });
        
        $(".logo-carousel").owlCarousel({
            loop: true,
            margin: 30,           
            nav: false,        
            dots: false,     
            items : 6, 
            
        });
        
        
        $(".single-testimonial-carousel").owlCarousel({
            loop: true,
            margin: 30,           
            nav: false,        
            dots: false,
            items : 1, 
        });
        
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	