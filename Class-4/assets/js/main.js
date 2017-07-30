(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".case-studies-carousel").owlCarousel({
            loop: true,
            margin: 30,           
            nav: false,        
            dots: true,     
            items : 3, 
            
        
        });
        
        
        $(".testimonial-carousel").owlCarousel({
             
            items : 1, 
        });
        
        
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	