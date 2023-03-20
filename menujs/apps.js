var bars=document.getElementById('bars');
var cross=document.getElementById('cross');

bars.addEventListener('click',function(){
	var menuItems=document.querySelector('.menu-items');
	menuItems.classList.toggle('active');
})
cross.addEventListener('click',function(){
	var menuItems=document.querySelector('.menu-items');
	menuItems.classList.remove('active');
})