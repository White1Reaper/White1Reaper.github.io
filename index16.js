
 function clear() {
  document.getElementById("1").value = "";
      document.getElementById("2").value = "";
  document.getElementById("3").value = "";
  var state = { 'page_id': 1, 'user_id': 5 };
var title = 'Hello World';
var url = 'index14.html';

 history.replaceState(null, null, 'hello');
history.pushState(null, null, 'hello');

    document.getElementById("myForm").style.display = "block";
 }

function openForm() {
    document.getElementById("myForm").style.display = "block";
 var state = { 'page_id': 1, 'user_id': 5 };
var title = 'Hello World';
var url = 'hello-world.html';

history.pushState(state, title, url);
}
 function closeForm() {
    document.getElementById("myForm").style.display = "none";
var state = { 'page_id': 1, 'user_id': 5 };
var title = 'Hello World';
var url = 'index14.html';
 history.replaceState(null, null, 'hello');
history.pushState(null, null, 'hello');
 } 
