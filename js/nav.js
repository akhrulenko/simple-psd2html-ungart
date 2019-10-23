var links = document.getElementsByClassName('menu')[0].getElementsByTagName('a');
var competence = document.getElementsByClassName('competence')[0];
var portfolio = document.getElementsByClassName('portfolio')[0];
var ourTeam = document.getElementsByClassName('our-team')[0];
var contact = document.getElementsByClassName('contact')[0];

links[0].onclick = function(){
	window.scrollBy(0, competence.getBoundingClientRect().top);
}

links[1].onclick = function(){
	window.scrollBy(0, portfolio.getBoundingClientRect().top);
}

links[2].onclick = function(){
	window.scrollBy(0, ourTeam.getBoundingClientRect().top);
}

links[3].onclick = function(){
	window.scrollBy(0, contact.getBoundingClientRect().top);
}