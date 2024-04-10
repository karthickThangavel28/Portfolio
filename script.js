var icon =document.getElementById('icon');
var menu=document.querySelector('.nav_menu_list');
icon.addEventListener('click',()=>{
    menu.classList.toggle('open');
});