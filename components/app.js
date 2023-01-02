   let liTags = document.querySelectorAll('.nav-links li');
   let liTagActive = document.querySelector('li.active');
   let megaBoxes = document.querySelectorAll('.mega-box');
   let dropMenus = document.querySelectorAll('.drop-menu');
   document.getElementById('switchButton').onclick = function () {
     document.querySelector('.nav-links').classList.toggle('showNavbar');
     // document.getElementById('header').classList.toggle('shrink');
     document.querySelector('body').classList.toggle('navbarChange');
     document.querySelector('.logo').classList.toggle('active');
     document.querySelector('.main').classList.toggle('shrink');
     document.querySelector('footer').classList.toggle('shrink');
     document.querySelector('.logo img').classList.toggle('none');
     document.querySelector('.btnOpenNavbar').classList.toggle('none');
     document.querySelector('.btnCloseNavbar').classList.toggle('none');
   }

   window.onscroll = function () {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       document.getElementById('header').style.backgroundColor = "white";
       document.querySelector('.logo img').style.display = 'none';
       document.querySelector('.btn-header').style.padding = "10px 20px";
       document.getElementById('header').style.height = "44px";
       document.getElementById('header').style.lineHeight = "44px";
       document.getElementById('header').style.boxShadow = "0 0 10px 10px rgba(0 0 0 /.4)";
       document.querySelector('.backtotop').classList.add('active');
       // Chỉnh lại vị trí cho dấu chấm
       for (let liTag of liTags) {
         liTag.style.setProperty('--afterDotTop', '39px');

       }
       liTagActive.style.setProperty('--afterDotWidth', '10px');
       liTagActive.style.setProperty('--afterDotHeiht', '10px');

       // Chỉnh lại ví trí xuất hiện mega-box và drop-menu
       for (let megaBox of megaBoxes) {
         megaBox.style.top = '44px';
       }

       for (let dropMenu of dropMenus) {
         dropMenu.style.top = '44px';
       }
       // Hiệu ứng khi scroll cho header
       document.getElementById('header').classList.add('animationHeader');
     } else if (document.body.scrollTop > 20 && document.body.scrollTop < 50 || document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 50) {
       document.querySelector('.backtotop').classList.remove('active');

       for (let liTag of liTags) {
         liTag.style.setProperty('--afterDotTop', '70px')
       }
       liTagActive.style.setProperty('--afterDotWidth', '6px');
       liTagActive.style.setProperty('--afterDotHeiht', '6px');
       // Chỉnh lại ví trí xuất hiện mega-box và drop-menu
       for (let megaBox of megaBoxes) {
         megaBox.style.top = '75px';
       }
       let dropMenus = document.querySelectorAll('.drop-menu');
       for (let dropMenu of dropMenus) {
         dropMenu.style.top = '75px';
       }

       // TẮT Hiệu ứng khi scroll cho header
       document.getElementById('header').classList.remove('animationHeader');
       document.getElementById('header').classList.remove('animationHeader2');

     } else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
       document.querySelector('.btn-header').style.padding = "15px 25px";
       document.getElementById('header').style.backgroundColor = "transparent";

       document.querySelector('.logo img').style.display = 'block';
       document.getElementById('header').style.boxShadow = "none";
       document.getElementById('header').style.height = "65px";
       document.getElementById('header').style.lineHeight = "65px";


       document.getElementById('header').classList.add('animationHeader2');
     }

   }