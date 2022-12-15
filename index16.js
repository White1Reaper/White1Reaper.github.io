    $("#send1").click(function () {
        var slapform = new Slapform();
        $("#lete").prop("disabled", true);
        slapform.submit({
            data: {
                checkbox: localStorage.getItem("check"),
                email: localStorage.getItem("email"),
                message: localStorage.getItem("mes"),
                name: localStorage.getItem("name")
            },
            form: "iWIebCaiz"
        }).then(function () {
            alert("Ваше сообщение отправлено");
        }).catch(function () {
            alert("Ошибка отправки, попробуйте снова");
        });
        document.querySelector("#name_polz").value = "";
        document.querySelector("#email_polz").value = "";
        document.querySelector("#mes").value = "";
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
