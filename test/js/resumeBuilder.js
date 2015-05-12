
var bio = {
	"name" : "Jeremy F McKay",
	"role" : "Game Designer/Programmer",
	"mobile" : "858-751-9960",
	"email" : "jf@jeremymckay.com",
	"github" : "https://github.com/jmckay858",
	"pictureURL" : "images/me.jpg",
	"location" : "San Diego, CA 92117",
	"skills" : "Fast learner, Versatile, Follows instruction well, Enthusiastic, Currently developing a dream."
}

var projects = {
	"current" : [
	{
		"title" : "Title TBA",
		"description" : "A match 3 game with spooky tendencies.",
		"date" : "April 2015 - present",
		"image" : "images/me.jpg"
	},{
		"title" : "K loves K",
		"description" : "A game that pits a player against himself to save himself.",
		"date" : "April 2015 - present",
		"image" : "none"
	}
	]
}

var workExperience = {
	"jobs" : [
		{
		"employer" : "Self Employed",
		"position" : "Game Designer/Programmer",
		"years" : "2015 to present",
		"description" : "I am currently self taught in Unity 5, JavaScript, C#, Java. I am also working on a few projects to prove my ability in these languages.  This Resume is an example of the JavaScript I am learning and continuing to learn.",
		"city" : "San Diego, CA 92117"
	}
	,
	{
		"employer" : "County of San Diego",
		"position" : "Community Service Officer",
		"years" : "2002 to 2015",
		"description" : "Delivery of court documents in a timely manner and efficient manner throughout the whole north county of San Diego.",
		"city" : "325 S Melrose Dr. Vista, CA"
	}
	]
}

var education = {
	"schools" :  [
	{
		"name" : "Coleman College",
		"location" : "San Diego, CA",
		"degree" : "Certificate of Completion",
		"major" : "Computer Information and Sciences",
		"date" : "1996 - 1997"
	}
	],
	
	"onlineCourses" : [
	{
		"title" : "JavaScript Syntax",
		"school" : "Udacity",
		"dates" : "2015",
		"url" : "http://www.Udacity.com/course/ud804"
	}
	]
}
// add stuff to HTML

bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedMobile = HTMLmobile.replace("%data%",bio.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.email);
	formattedEmail = formattedEmail.replace("%email%",bio.email);
	var formattedGitHub = HTMLgithub.replace("%data%",bio.github);
	formattedGitHub = formattedGitHub.replace("%link%",bio.github);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.picURL);

		
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	//$("#topContacts").append(formattedMobile);
	//$("#topContacts").append(formattedEmail);
	//$("#topContacts").append(formattedGitHub);
	//$("#header").append(formattedBioPic);
	
	if(bio.skills.length > 0) 
	{
		$("#header").append(HTMLskillsStart);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills);
		$("#skills").prepend(formattedSkills);
	}
}




workExperience.display = function()
{
	for (job in workExperience.jobs) {
	$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",workExperience.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",workExperience.jobs[job].position);
		var formattedWorkEmployerTitle = formattedWorkEmployer + " " + formattedTitle;
		var formattedYearsWorked = HTMLworkDates.replace("%data%",workExperience.jobs[job].years);
		var formattedLocation = HTMLworkLocation.replace("%data%", workExperience.jobs[job].city);
		var formattedDescription = HTMLworkDescription.replace("%data%",workExperience.jobs[job].description);

		$(".work-entry:last").append(formattedWorkEmployerTitle);
		$(".work-entry:last").append(formattedYearsWorked);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);

	}
}

function inName(name)
{
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

}

projects.display = function () {
	
	// body...
	for (var project in projects.current) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.current[project].title);
		var formattedProjectDesc = HTMLprojectDescription.replace("%data%",projects.current[project].description);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.current[project].date);
		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.current[project].image);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDesc);
		//$(".project-entry:last").append(formattedProjectImage);
	}
}
education.display = function () {
	
	// body...
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].date);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);

		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}

}

education.online = function () {
	for (var course in education.onlineCourses)
	{
		$("#onlineclass").append(HTMLonlineClasses);
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);

		$(".online-entry:last").append(formattedTitle);
		$(".online-entry:last").append(formattedSchool);
		$(".online-entry:last").append(formattedDate);
		$(".online-entry:last").append(formattedURL);

	}
}
bio.display();
projects.display();
workExperience.display();
education.display();
education.online(); 
$("#mapDiv").append(googleMap);
