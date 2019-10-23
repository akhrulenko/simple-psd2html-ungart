var btnMoreProj = document.getElementsByClassName('more-proj')[0];
var projects = document.getElementsByClassName('projects')[0];
var sections = projects.getElementsByTagName('section');

var showMoreKey = 0;
var sumVisible = 6;
var divider = 2;

var showVisible = function(){
	if(showMoreKey == 0){
		divider = 2;
		btnMoreProj.innerText = 'More Projects'
	}
	else{
		divider = 1;
		btnMoreProj.innerText = 'Less Projects'
	}
	for(var i = 0; i < sections.length; i++){
		sections[i].style.display = 'none';
	}
	for(var i = 0; i < sections.length/divider; i++){
		if(sections[i].attributes[1].value == '1'){
		sections[i].style.display = 'inline-block';
		}
	}
}

showVisible();

btnMoreProj.onclick = function(){
	if(showMoreKey == 0){
		showMoreKey = 1;
		showVisible();
		window.scrollBy(0, projects.getBoundingClientRect().top);
	}
	else {
		showMoreKey = 0;
		showVisible();
		window.scrollBy(0, projects.getBoundingClientRect().top);
	}
}

var portfolioCategories = document.getElementsByClassName('portf-categoties')[0];
var button = portfolioCategories.getElementsByTagName('i')[0];
var span = portfolioCategories.getElementsByTagName('span')[0];
var menu = portfolioCategories.getElementsByClassName('categ-menu')[0];
var liMenu = menu.getElementsByTagName('ul')[0].getElementsByTagName('li');

var buttonsMenu = [];
var showMenuKey = 0;

var hideMenu = function(){
	menu.style.display = 'none';
	showMenuKey = 0;
}

var showMenu = function(){
	menu.style.display = 'block';
	showMenuKey = 1;
}

hideMenu();

button.onclick = function(){
	if(showMenuKey == 1){
		hideMenu();
	}
	else{
		showMenu();
	}
}


for(var i = 0; i < liMenu.length; i++){
	buttonsMenu[i] = liMenu[i].getElementsByTagName('button')[0];
}

buttonsMenu[0].onclick = function(){
	for(var counter = 0; counter < sections.length; counter++){
			sections[counter].attributes[1].value = '1';
		}
		sumVisible = 12;
		showVisible();
		span.innerText = buttonsMenu[0].innerText;
}

buttonsMenu[1].onclick = function(){
	for(var counter = 0; counter < sections.length; counter++){
				if((sections[counter].className.split(' ')[1] != buttonsMenu[1].className)){
					sections[counter].attributes[1].value = '0';
				}
				else{
					sections[counter].attributes[1].value = '1';
				}
		}
		sumVisible = 4;
		showVisible();
		span.innerText = buttonsMenu[1].innerText;
}

buttonsMenu[2].onclick = function(){
	for(var counter = 0; counter < sections.length; counter++){
				if((sections[counter].className.split(' ')[1] != buttonsMenu[2].className)){
					sections[counter].attributes[1].value = '0';
				}
				else{
					sections[counter].attributes[1].value = '1';
				}
		}
		sumVisible = 4;
		showVisible();
		span.innerText = buttonsMenu[2].innerText;
}

buttonsMenu[3].onclick = function(){
	for(var counter = 0; counter < sections.length; counter++){
				if((sections[counter].className.split(' ')[1] != buttonsMenu[3].className)){
					sections[counter].attributes[1].value = '0';
				}
				else{
					sections[counter].attributes[1].value = '1';
				}
		}
		sumVisible = 4;
		showVisible();
		span.innerText = buttonsMenu[3].innerText;
}