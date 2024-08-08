function showBlock() {

    function closeForm(event) {
      var form = document.getElementById("fm1");
      var butt1 = document.getElementById("request1");
      var butt2 = document.getElementById("request23");
      var butt3 = document.getElementById("request3");
      if (!form.contains(event.target)&&!butt1.contains(event.target)&&!butt2.contains(event.target)&&!butt3.contains(event.target)) {
          $("#fm1").fadeOut(1000);
      }
    }

    document.addEventListener("click", closeForm);
    $("#fm1").fadeIn(1000);
    } 
  
    $(".multiple-items").slick({
        dots: true,      
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      });
      function myFunction(x) {
        x.classList.toggle("change");
    
        if ($(".p_menu").is(":visible")) {
            $(".p_menu").animate({width: 'hide'}, "fast");
        } else {
            $(".p_menu").animate({width: 'show'}, "fast");
        }
    }
    












