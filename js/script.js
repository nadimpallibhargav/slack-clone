
$(()=>{
    var createSlick = ()=>{
    let slider = $(".slider");

        slider.not('.slick-initialized').slick({
            autoplay: true,
            infinite: true,
            dots: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive: [
                
                {
                breakpoint: 991,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    },
                },
                {
                breakpoint: 600,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    },
                },
            ],
        });	
    }

    createSlick();

    $(window).on( 'resize orientationchange', createSlick );
})

$(()=>{
    var createSlick = ()=>{
    let slider = $(".slidereight");

        slider.not('.slick-initialized').slick({
            autoplay: true,
            infinite: true,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                
                {
                breakpoint: 992,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    },
                },
                {
                breakpoint: 600,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    },
                },
            ],
        });	
    }

    createSlick();

    $(window).on( 'resize orientationchange', createSlick );
})


$(()=>{
    var createSlick = ()=>{
    let slider = $(".enterprisesliderone");

        slider.not('.slick-initialized').slick({
            autoplay: true,
            infinite: true,
            dots: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                
                {
                breakpoint: 991,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    },
                },
                {
                breakpoint: 600,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    },
                },
            ],
        });	
    }

    createSlick();

    $(window).on( 'resize orientationchange', createSlick );
})

$(()=>{
    var createSlick = ()=>{
    let slider = $(".pricingsliderlast");

        slider.not('.slick-initialized').slick({
            autoplay: true,
            infinite: true,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                
                {
                breakpoint: 991,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    },
                },
                {
                breakpoint: 600,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    },
                },
            ],
        });	
    }

    createSlick();

    $(window).on( 'resize orientationchange', createSlick );
})


$(()=>{
    var createSlick = ()=>{
    let slider = $(".resourcessliderone");

        slider.not('.slick-initialized').slick({
            autoplay: true,
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                
                {
                breakpoint: 991,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    },
                },
                {
                breakpoint: 600,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    },
                },
            ],
        });	
    }

    createSlick();

    $(window).on( 'resize orientationchange', createSlick );
})



            function myFunction(x) {
              if (x.matches) { // If media query matches
                document.getElementById("myDetailsone").open = true;
                document.getElementById("myDetailstwo").open = true;
                document.getElementById("myDetailsthree").open = true;
                document.getElementById("myDetailsfour").open = true;
                document.getElementById("myDetailsfive").open = true;
              } else {
                document.getElementById("myDetailsone").open = false;
                document.getElementById("myDetailstwo").open = false;
                document.getElementById("myDetailsthree").open = false;
                document.getElementById("myDetailsfour").open = false;
                document.getElementById("myDetailsfive").open = false;
              }
            }
            
            var x = window.matchMedia("(min-width: 992px)")
            myFunction(x) // Call listener function at run time
            x.addListener(myFunction) // Attach listener function on state changes
            

// modal script start

            $(document).ready(function() {
               // Gets the video src from the data-src on each button
               var $videoSrc;
               $(".video-btn").click(function() {
                  $videoSrc = $(this).attr("data-src");
                  console.log("button clicked" + $videoSrc);
               });
      
               // when the modal is opened autoplay it
               $("#exampleModalCenter").on("shown.bs.modal", function(e) {
                  console.log("modal opened" + $videoSrc);
                  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
                  $("#video").attr(
                     "src",
                     $videoSrc + "?autoplay=1&rel=0"
                  );
               });
      
               // stop playing the youtube video when I close the modal
               $("#exampleModalCenter").on("hide.bs.modal", function(e) {
                  // a poor man's stop video
                  $("#video").attr("src", $videoSrc);
               });
      
               // document ready
            });
      
          
// modal script end