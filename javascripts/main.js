function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function() {
    //$(this).next().toggle();
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
  });
}

$(document).ready(main);






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
	var links5 = document.createTextNode("
  <a href='https://www.ixl.com/math/grade-5'>Fifth Grade Math</a>
  <a href='http://www.adaptedmind.com/gradelist.php?grade=5'> Adapted Mind Reading and Math</a>
  <a href='http://activities.macmillanmh.com/science/ca/grade5/index.html'> Science Grade 5</a>
  <a href='https://www.ixl.com/ela/grade-5'> Fifth Grade Language Arts </a>
  <a href='http://www.corestandards.org/ELA-Literacy/RL/5/'> English Language Art Standards </a>
<a href='http://school.discoveryeducation.com/homeworkhelp/socialstudies/social_studies_homework_help.html'> Social Studies Homework Help </a>
  <a href='http://www.factmonster.com/homework/hwsocstudies.html'> Social Studies Fact Monster </a>');

	var links6 = document.createTextNode("<a href="https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic">Khan Academy Ratios & Proportions</a>
<a href='http://www.ixl.com/promo?partner=bing&adGroup=6th+grade+math&campaign=1425&utm_source=bing&utm_medium=cpc&utm_campaign=Search%20-%20Grade%20Levels%20-%20Exact%20-%20US&utm_term=6th%20grade%20math&utm_content=6th%20grade%20math'>ixl math</a>
  <a href='http://www.math-play.com/6th-grade-math-games.html'>Math Play Math Games</a>
  <a href='https://www.ixl.com/science/grade-6'>Ixl Science</a>
  <a href='http://mathandreadinghelp.org/kids_games/index.html'>Math and Reading Games</a>
  <a href='http://www.educationquizzes.com/us/grade-6/science/'>Education Quizzes Science</a>
  <a href="https://www.ixl.com/ela/">Ixl Ela</a>
  <a href='http://mathandreadinghelp.org/kids_games/index.html'>Math and Reading Games</a>
<a href='http://www.educationquizzes.com/us/grade-6/english-language-arts/">Education quizzes ELA</a>
  <a href="http://mathandreadinghelp.org/kids_games/index.html">Math and Reading games</a>
<a href="http://www.factmonster.com/homework/social-studies-united-states.html">Factory Monster Social Studies</a>
");
	
	var links7 = document.createTextNode("<a href="http://www.prestoexperts.com/"> Experts and Tutours around the clock. </a>
<a href="https://kids.usa.gov">   </a>
<a hraf="http://kids.nationalgeographic.com/");    </a>
	<a href="var links8 = document.createTextNode("<a href="http://www.prestoexperts.com/lp/tutoring3/?banid=1227064"> Expersts and tutors.</a>
  <a href="http://www.learningfarm.com/web/tour.cfm">Math and Reading </a>
  <a href="https://www.ixl.com/math/grade-8">Learning Math</a>");
					     
					     
	//link text to DOM node
	links1.appendChild(games);
	links2.appendChild(study);
	//place nodes and text in corrent area of page
	document.getElementById("userContent").appendChild(games);
	document.getElementById("userContent").appendChild(study);
	
}


