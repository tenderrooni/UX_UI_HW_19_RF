console.log("your index.js file is loaded correctly!");


    $('.work').click(function() {
        $('html, body').animate({
            scrollTop: $('.portfolio-section').offset().top
        }, 1000); // The duration for the animation in milliseconds
    });