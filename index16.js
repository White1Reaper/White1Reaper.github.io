    $("#send1").click(function () {
        var slapform = new Slapform();
        $("#lete").prop("disabled", true);
        slapform.submit({
            data: {
                checkbox: localStorage.getItem("check"),
                email: localStorage.getItem("email"),
                message: localStorage.getItem("message"),
                name: localStorage.getItem("name")
            },
            form: "iWIebCaiz"
        }).then(function () {
            alert("successful sending!");
        }).catch(function () {
            alert("sending failed");
        });
        document.getElementById("1").value = "";
        document.getElementById("2").value = "";
        document.getElementById("3").value = "";
        document.querySelector("#check").checked = false;
        localStorage.clear();
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

					      var inputName= document.getElementById("1");
 inputName.value=localStorage.getItem('name');
      var inputEmail= document.getElementById("2");
 inputEmail.value=localStorage.getItem('email');
			      var inputTextarea= document.getElementById("3");
 inputTextarea.value=localStorage.getItem('textarea');
	        document.getElementById("1").value = "";
        document.getElementById("2").value = "";
        document.getElementById("3").value = "";
}
 function closeForm() {
    document.getElementById("myForm").style.display = "none";
	 		  var inputName= document.getElementById("1");
	localStorage.setItem("name", inputName.value);
		  var inputEmail= document.getElementById("2");
	localStorage.setItem("email", inputEmail.value);
		  var inputTextarea= document.getElementById("3");
	localStorage.setItem("textarea", inputTextarea.value);
 } 
function saveForm(){
	document.getElementById("myForm").style.display = "none";
		  var inputName= document.getElementById("1");
	localStorage.setItem("name", inputName.value);
		  var inputEmail= document.getElementById("2");
	localStorage.setItem("email", inputEmail.value);
		  var inputTextarea= document.getElementById("3");
	localStorage.setItem("textarea", inputTextarea.value);

}
    $("#1, #2, #3, #check").change(function () {
        var nam = $("#1").val();
        var email = $("#2").val();
        var mes = $("3").val();
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
