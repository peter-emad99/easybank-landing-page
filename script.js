
const body = document.querySelector('body');
const menuIcon = document.querySelector('.hamburger-menu-icon');
const menu = document.querySelector('.header-nav');
const mobileHeaderImages = document.querySelector('.mobile-header-images');
const IconToOpen = document.querySelector('.icon_to_Open')
const IconToClose = document.querySelector('.icon_to_Close')



menuIcon.addEventListener('click', function(){
  console.log('click hamburger');
menu.classList.toggle('open_menu');
mobileHeaderImages.classList.toggle('overlay-shown')
IconToOpen.classList.toggle('hidden_icon')
IconToClose.classList.toggle('hidden_icon')
body.classList.toggle('noscroll')


}); 