		document.addEventListener('DOMContentLoaded', function () {
			      var inputName= document.getElementById("1");
 inputName.value=localStorage.getItem('Name');
      var inputEmail= document.getElementById("2");
 inputEmail.value=localStorage.getItem('email');
			      var inputTextarea= document.getElementById("3");
 inputTextarea.value=localStorage.getItem('Textarea');
})
 function send() {
  document.getElementById("1").value = "";
      document.getElementById("2").value = "";
  document.getElementById("3").value = "";


    document.getElementById("myForm").style.display = "block";
 }

function openForm() {
    document.getElementById("myForm").style.display = "block";

	  var inputEmail= document.getElementById("2");
	localStorage.setItem("email", inputEmail.value);
}
 function closeForm() {
    document.getElementById("myForm").style.display = "none";
 } 
function saveForm(){
		  var inputName= document.getElementById("1");
	localStorage.setItem("Name", inputName.value);
		  var inputEmail= document.getElementById("2");
	localStorage.setItem("email", inputEmail.value);
		  var inputTextarea= document.getElementById("3");
	localStorage.setItem("Textarea", inputTextarea.value);
}
