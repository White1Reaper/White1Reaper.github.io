function openForm() {
    history.pushState({page: 2}, "Form", "?form");
    return false;
}

function openHome() {
    history.replaceState({page: 1}, "Home", "?home");
    return false;
}

$(document).ready(function () {
    $(".myButton").click(function (event) {
        openForm();
        event.preventDefault();
        $("#myOverlay").fadeIn(297, function () {
            $("#myForm").css("display", "block").animate({opacity: 1}, 0);
        });
        if (localStorage.getItem("name").length > 0) {
            document.querySelector("#name_polz").value =
            localStorage.getItem("name");
        }
        if (localStorage.getItem("email").length > 0) {
            document.querySelector("#email_polz").value =
            localStorage.getItem("email");
        }
        if (localStorage.getItem("mes").length > 0) {
            document.querySelector("#mes").value =
            localStorage.getItem("mes");
        }
        if (localStorage.getItem("check") === "true") {
            document.querySelector("#check").checked = true;
        }
    });

    $("#myOverlay, #close").click(function () {
        $("#myForm").animate({opacity: 0}, 0, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
            openHome();
        });
    });

    $("#lete").click(function () {
        var slapform = new Slapform();
        $("#lete").prop("disabled", true);
        slapform.submit({
            data: {
                checkbox: localStorage.getItem("check"),
                email: localStorage.getItem("email"),
                message: localStorage.getItem("mes"),
                name: localStorage.getItem("name")
            },
        form: "vog0f58Vj"
        }).then(function () {
            alert("отправка успешно завершена!");
        }).catch(function () {
            alert("отправка провалена");
        });
        document.querySelector("#name_polz").value = "";
        document.querySelector("#email_polz").value = "";
        document.querySelector("#mes").value = "";
        document.querySelector("#check").checked = false;
        localStorage.clear();
        return false;
    });

    addEventListener("popstate", function () {
        $("#myForm").animate({opacity: 0}, 0, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(0);
            openHome();
        });
    }, false);

    $("#name_polz").change(function () {
        var nam = $("#name_polz").val();
        var email = $("#email_polz").val();
        var mes = $("#mes").val();
        var check = $("#check").prop("checked");
        localStorage.setItem("name", nam);
        localStorage.setItem("email", email);
        localStorage.setItem("mes", mes);
        if (check) {
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("check", false);
        }
        if (nam.length > 0 && email.length > 0 && mes.length > 0 && check) {
            $("#lete").prop("disabled", false);
        } else {
            $("#lete").prop("disabled", true);
        }
        return false;
    });
        $("#email_polz").change(function () {
        var nam = $("#name_polz").val();
        var email = $("#email_polz").val();
        var mes = $("#mes").val();
        var check = $("#check").prop("checked");
        localStorage.setItem("name", nam);
        localStorage.setItem("email", email);
        localStorage.setItem("mes", mes);
        if (check) {
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("check", false);
        }
        if (nam.length > 0 && email.length > 0 && mes.length > 0 && check) {
            $("#lete").prop("disabled", false);
        } else {
            $("#lete").prop("disabled", true);
        }
        return false;
    });
        $("#mes").change(function () {
        var nam = $("#name_polz").val();
        var email = $("#email_polz").val();
        var mes = $("#mes").val();
        var check = $("#check").prop("checked");
        localStorage.setItem("name", nam);
        localStorage.setItem("email", email);
        localStorage.setItem("mes", mes);
        if (check) {
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("check", false);
        }
        if (nam.length > 0 && email.length > 0 && mes.length > 0 && check) {
            $("#lete").prop("disabled", false);
        } else {
            $("#lete").prop("disabled", true);
        }
        return false;
    });
        $("#check").change(function () {
        var nam = $("#name_polz").val();
        var email = $("#email_polz").val();
        var mes = $("#mes").val();
        var check = $("#check").prop("checked");
        localStorage.setItem("name", nam);
        localStorage.setItem("email", email);
        localStorage.setItem("mes", mes);
        if (check) {
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("check", false);
        }
        if (nam.length > 0 && email.length > 0 && mes.length > 0 && check) {
            $("#lete").prop("disabled", false);
        } else {
            $("#lete").prop("disabled", true);
        }
        return false;
    });
});
