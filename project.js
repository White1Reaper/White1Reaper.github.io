/*global $, Slapform */
// Авто-прокрутка слайдера 1

$(function(){
    $(".slayder_body1").jCarouselLite({
		circular: true,
		visible: 7,
        auto: 2000,
        speed: 1000
    });
});

// Авто-прокрутка слайдера 2
$(function(){
    $(".slayder_body2").jCarouselLite({
		circular: true,
		visible: 8,
        auto: 2000,
        speed: 1000
    });
});




/* 8. Блок - Отзывы */
$(".multiple-items").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});

// Блок - подвал
$("#send1").click(function () {
    document.querySelector("#happy").checked = false;

    let slapform = new Slapform();
    $("#send1").prop("disabled", true);
    slapform.submit({
        form: "vog0f58Vj"
        }).then(function () {
            alert("successful sending!");
        }).catch(function () {
            alert("sending failed");
        });
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.getElementById("4").value = "";
    return false;
});
$("#nav").on("click", function() {
    $(".second").toggle();
});

// Блок - фиксированная форма

function openForm() {
    history.pushState({page: 2}, "Form", "?form");
    return false;
}

function openHome() {
    history.replaceState({page: 1}, "Home", "?home");
    return false;
}

$("#open-form").on("click", function() {
		if (document.querySelector(".form11").style.display == "none")
		openForm();
	else
		openHome();
	
    $(".form11").toggle(400);
	        if (localStorage.getItem("name").length > 0) {
            document.querySelector("#11").value =
            localStorage.getItem("name");
        }
        if (localStorage.getItem("email").length > 0) {
            document.querySelector("#22").value =
            localStorage.getItem("email");
        }
        if (localStorage.getItem("mes").length > 0) {
            document.querySelector("#33").value =
            localStorage.getItem("mes");
        }
	
        if (localStorage.getItem("tel").length > 0) {
            document.querySelector("#44").value =
            localStorage.getItem("tel");
        }
        if (localStorage.getItem("check") === "true") {
            document.querySelector("#check").checked = true;
        }

});

    addEventListener("popstate", function () {      
    $("#11, #22, #33, #44, #55").change(function () {
        var nam = $("#11").val();
        var email = $("#22").val();
        var mes = $("#33").val();
	    var tel = $("#44").val();
        var check = $("#55").prop("checked");
        localStorage.setItem("name", nam);
        localStorage.setItem("email", email);
        localStorage.setItem("mes", mes);
	    localStorage.setItem("tel", tel);
        if (check) {
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("check", false);
        }
        
        return false;
    });
});


