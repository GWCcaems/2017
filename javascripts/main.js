var subject;
var grade;

button.onclick = function chooseArea () {
	//user clicks grade
	grade = user.Input;
	return grade;
	//user clicks subject
	subject = user.Input;
	return subject;
	//create new nodes to fill with text
	var games = document.createElement("links1");
	var study = document.createElement("links2");
	//fill new nodes from existing docs
	var links1 = document.createTextNode("");//how do I add text from an existing file?
	var links2 = document.createTextNode("");//how do I add text from an existing file?
	//link text to DOM node
	links1.appendChild(games);
	links2.appendChild(study);
	//place nodes and text in corrent area of page
	document.getElementById("userContent").appendChild(games);
	document.getElementById("userContent").appendChild(study);
	
}


