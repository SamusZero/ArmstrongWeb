
/*  to make the sliding bar bigger to view more content*/
/* ".style.marginCenter, kept the hand and words from moving all over*/
function openNav() {
   document.getElementById("mySidenav").style.width = "500px";
   document.getElementById("main").style.marginCenter = "250px";
 }
 
 function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("main").style.marginCenter= "0";
 }


 /* Dropdown script*/

 function myFunction() {
   document.getElementById("Dropdown").classList.toggle("show");
 }
 
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
   }

     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
      }
   }