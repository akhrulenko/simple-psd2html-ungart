var btnLearnMore = document.getElementsByClassName('learn-more')[0];
var competence = document.getElementsByClassName('competence')[0];

btnLearnMore.onclick = function(){
	window.scrollBy(0, competence.getBoundingClientRect().top);
}