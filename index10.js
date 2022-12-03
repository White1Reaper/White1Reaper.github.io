      function click1() {
let f1 =document.querySelector(".field1");
 let r = document.getElementById("result");
let select = document.querySelector('.myselect1');

         let c1 = document.getElementById("c1");
        let c2 = document.getElementById("c2");
const radio1 = document.querySelector('input[name="myradio"]:checked')

let b=1*f1.value;        
        if(select.value=="1"){
          b=b*10;
        }
else {
                if(select.value=="2"){
                  

if(radio1.value=="1"){

b=b*15;
}
                  else{
if(radio1.value=="2"){
           
                    b=b*50;
                  }
                    else {
 if(radio1.value=="3"){
                  
                    b=b*500;
                  }
                    }
        }
                }
  else{
    if(select.value=="3"){
                  b=b*1000000;
                  if(c2.checked){
                  b=b*15;
                  }
                                    if(c1.checked){
                  b=b+15000;
                  }
        }
    
  }
        }
r.innerHTML=b;
return false;

}
    window.addEventListener('DOMContentLoaded', function (event) {
 let s = document.getElementsByName("myselect");
 let radios = document.getElementById("myradios");
radios.style.display = "none";
let checkboxes = document.getElementById("checkboxes");
 checkboxes.style.display = "none";     
 s[0].addEventListener("change", function(event) {
 let select = event.target;
 radios.style.display = "none";
 if (select.value == "1") {
 radios.style.display = "none";
   checkboxes.style.display = "none";     
 }
 else {
   if(select.value == "2"){
 radios.style.display = "block";
 checkboxes.style.display = "none";
   }
   else {
      checkboxes.style.display = "block";
      radios.style.display = "none";
   }
 }
 });

 let r = document.querySelectorAll(".myradios input[type=radio]");
 r.forEach(function(radio) {
 radio.addEventListener("change", function(event) {
 let r = event.target;
 console.log(r.value);
 });
 });

});
