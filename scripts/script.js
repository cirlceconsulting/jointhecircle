function showCircle(){
    document.getElementById("jointhecircle").style.display = 'none';
    document.getElementById("circle").style.display = 'flex';
}

document.getElementById("jointhecircle").onclick = showCircle;

document.getElementById("email-form").onsubmit = function (e) {
    e.preventDefault(); 
    document.getElementById("lead-form").style.display = 'none';
    document.getElementById("thanks").style.display = 'flex';
}


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });