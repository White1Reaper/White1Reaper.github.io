    $("#send1").click(function () {
        var slapform = new Slapform();
        $("#lete").prop("disabled", true);
        slapform.submit({
            data: {
                checkbox: localStorage.getItem("check"),
                email: localStorage.getItem("email"),
                message: localStorage.getItem("mes"),
                name: localStorage.getItem("nam")
            },
            form: "vog0f58Vj"
        }).then(function () {
            alert("successful sending!");
        }).catch(function () {
            alert("sending failed");
        });

        return false;
    });

    addEventListener("popstate", function () {
        $("#myForm").animate({opacity: 0}, 198, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
            openHome();
        });
    }, false);

function openForm() {
    document.getElementById("myForm").style.display = "block";
 var state = { 'page_id': 1, 'user_id': 5 };
var title = 'Hello World';
var url = 'hello-world.html';
history.pushState(state, title, url);
					      var inputName= document.getElementById("1");
 inputName.value=localStorage.getItem('name');
      var inputEmail= document.getElementById("2");
 inputEmail.value=localStorage.getItem('email');
			      var inputTextarea= document.getElementById("3");
 inputTextarea.value=localStorage.getItem('textarea');

}
 function closeForm() {
    document.getElementById("myForm").style.display = "none";

 } 
    addEventListener("popstate", function () {
    $("#1, #2, #3, #check").change(function () {
        var nam = $("#1").val();
        var email = $("#2").val();
        var mes = $("3").val();
        var check = $("#check").prop("checked");
        localStorage.setItem("1", nam);
        localStorage.setItem("2", email);
        localStorage.setItem("3", mes);
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
