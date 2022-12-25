
$("#send1").click(function () {

        var slapform = new Slapform();
        $("#lete").prop("disabled", true);
        slapform.submit({
            data: {
                checkbox: localStorage.getItem("check"),
                email: localStorage.getItem("Email"),
                message: localStorage.getItem("Message"),
                name: localStorage.getItem("Name")
            },
            form: "vog0f58Vj"
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


function openForm() {
	    document.getElementById("myForm").style.display = "block";
						      var inputName= document.getElementById("1");
 inputName.value=localStorage.getItem('Name');
      var inputEmail= document.getElementById("2");
 inputEmail.value=localStorage.getItem('Email');
			      var inputTextarea= document.getElementById("3");
 inputTextarea.value=localStorage.getItem('Message');


	  var state = { 'page_id': 2, 'user_id': 5 };
var title = 'Hello World';
var url = 'index14.html_form';
history.pushState(state, title, url);
	 

}
 function closeForm() {
    document.getElementById("myForm").style.display = "none";
	  var state = { 'page_id': 1, 'user_id': 5 };
var title = 'Hello World';
var url = 'index14.html';
history.pushState(state, title, url);
	 
}
$( ".test" ).change(function() {
  console.log( "Значение изменилось!" );
});
   addEventListener("popstate", function () {
    $("#1, #2, #3, #check").change(function () {
        var nam = $("#1").val();
        var email = $("#2").val();
        var mes = $("#3").val();
        var check = $("#check").prop("checked");
        localStorage.setItem("Name", nam);
        localStorage.setItem("Email", email);
        localStorage.setItem("Message", mes);
        if (check) {
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("check", false);
        }
        if (nam.length > 0 && email.length > 0 && mes.length > 0 && check) {
            $("#send1").prop("disabled", false);
        } else {
            $("#send1").prop("disabled", true);
        }
        return false;
    });
});
