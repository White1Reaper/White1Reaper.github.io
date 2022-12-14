 function send() {
 document.getElementsByName('myform')[0].reset();
    document.getElementById("myform").style.display = "block";
 }

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
		  var inputName= document.getElementById("1");
	localStorage.setItem("name", inputName.value);
		  var inputEmail= document.getElementById("2");
	localStorage.setItem("email", inputEmail.value);
		  var inputTextarea= document.getElementById("3");
	localStorage.setItem("textarea", inputTextarea.value);

}
