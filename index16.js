
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
 function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 
document.getElementById("clearButton").onclick = function(e) {
  document.getElementByName("message").value = "";
      document.getElementByName("f-name").value = "";
  document.getElementByName("Email").value = "";
}
