
 // name : string
 //      role : string
 //      contacts : an object with
 //            mobile: string
 //            email: string 
 //            github: string
 //            twitter: string (optional)
 //            location: string
 //      welcomeMessage: string 
 //      skills: array of strings
 //      biopic: url
 //      display: function


var bio = {
	name : "ShekharGH",
	role : "AndroidDev" ,
	// image : "images/fry.img"  ,
  	contacts : {
		mobile : "123456789" ,
		email : "shekhar1990@gmail.com" ,
		github : "iamshekhargh" ,
		twitter : "@iamshekhargh" ,
		location : "Bangalore" 

	} ,
	welcomeMessage : "hello ssup.?" ,
	skills : ["Android" , "javascript" , "Java" , "CSS" , "Bootstrap"] ,
	biopic : "images/fry.jpg" ,
	  
};

bio.display = function(){
	var mainName = HTMLheaderName.replace("%data%",bio.name);
	var mainRole = HTMLheaderRole.replace("%data%",bio.role);
	var dp = HTMLbioPic.replace("%data%",bio.biopic);
	var wmsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	//console.log(bio.contacts[0]);
	$("#header").prepend(mainRole).prepend(mainName).append(dp).append(wmsg);
	//for(var aa in bio.contacts){
		//console.log(aa);
		var mobl = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
		var email = HTMLemail.replace("%data%",bio.contacts["email"]);
		var twitter = HTMLtwitter.replace("%data%",bio.contacts["twitter"]);
		var github = HTMLgithub.replace("%data%",bio.contacts["github"]);
		//var blog = HTMLblog.replace("%data%",bio.contacts[aa]);
		var location = HTMLlocation.replace("%data%",bio.contacts["location"]);

	//}
	$("#topContacts").append(mobl).append(email).append(twitter).append(github).append(location);
	$("#topContacts").css("width","100%");

	var skillsTitle = HTMLskillsStart;
	$("#header").append(skillsTitle);
	

	for (var i = 0; i < bio.skills.length; i++) {
		var skills = HTMLskills.replace("%data%" ,bio.skills[i] );
		//console.log(skills);
		$("#skills-h3").append(skills);
		$("#skills-h3").css("list-style","none");
		$("#skills-h3").css("font-weight","200");
		
		
	}
	
};

bio.display();

// schools: array of objects with
//            name: string
//            location: string
//            degree: string
//            majors: array of strings
//            dates: string (works with a hyphen between them)
//            url: string
//       onlineCourses: array of objects with
//            title: string
//            school: string
//            dates: string (works with a hyphen between them)
//            url: string
//       display: function

var education ={
	schools: [
		{
			name : "School Name" ,
			location : "Bangalore" ,
			degree : "HighSchool" ,
			majors : ["10th" , "12th"] ,
			dates : "12/12/2010" ,
			url : "iamshekhargh.com" ,
		
		},
		{
			name : "School Name2" ,
			location : "Bangalore" ,
			degree : "Computer Science" ,
			majors : ["Android"] ,
			dates : "12/12/2014" ,
			url : "iamshekhargh.com" ,
		}] ,
	onlineCourses : [
				{
					title : "Android Developer" ,
					school : "Udacity" ,
					dates : "1/09/2016" ,
					url : "iamshekhargh.com" ,
				},
				{
					title : "FrontEnd Developer" ,
					school : "Udacity" ,
					dates : "31/08/2016" ,
					url : "iamshekhargh.com" ,

				}
			]
};


education.display = function() {
	$("#education").append(HTMLschoolStart);
	//for(var num in education.schools){	
	for(var num = 0 ; num<education.schools.length ; num++){
		var scName = HTMLschoolName.replace("%data%" , education.schools[num].name).replace("#",education.schools[num].url);
		console.log(education.schools[num].name);
		var degree = HTMLschoolDegree.replace("%data%" , education.schools[num].degree);
		$(".education-entry").append(scName + degree);

		
		var location = HTMLschoolLocation.replace("%data%" , education.schools[num].location);
		$(".education-entry").append(location);
		var dates = HTMLschoolDates.replace("%data%" , education.schools[num].dates);
		$(".education-entry").append(dates);
		var majors = HTMLschoolMajor.replace("%data%" , education.schools[num].majors);
		$(".education-entry").append(majors);
	}

	$(".education-entry").append(HTMLonlineClasses);
	$(".education-entry h3").css("padding" , "0");
	$(".education-entry h3").css("padding-top" , "2%");
	
		
	//for(var num in education.onlineCourses){
	for(var num = 0 ; num < education.onlineCourses.length ; num++){	
		var title = HTMLonlineTitle.replace("%data%" , education.onlineCourses[num].title).replace("#" , education.onlineCourses[num].url);
		var skol = HTMLonlineSchool.replace("%data%" , education.onlineCourses[num].school);
		var dates = HTMLonlineDates.replace("%data%" , education.onlineCourses[num].dates);
		var urll = HTMLonlineURL.replace("%data%" , education.onlineCourses[num].url);
		$(".education-entry").append(title + skol);
		$(".education-entry").append(dates);
		$(".education-entry:last").append(urll);
		
		
		//title.insertAfter($(".education-entry"));
	}

	
}
education.display();

// jobs: array of objects with
//            employer: string 
//            title: string 
//            location: string 
//            dates: string (Can be 'in progress')
//            description: string 
//       display: function

var work ={
	jobs : [ 
	{
		employer : "Self" ,
		title : "Android Developer" ,
		location : "Bangalore" ,
		dates : "August 2016" ,
		description : "Have made total of 4 apps 3 of which are in the play store like rite now" ,
	

	},
	{
		employer : "Myself" ,
		title : "Web Developer" ,
		location : "Bangalore" ,
		dates : "September 2016" ,
		description : "Am learning front end an have started a project to clone the sites i like . have started with skinny ties site.." ,
	

	}] 
};

work.display= function(){
	var start = HTMLworkStart;
	$("#workExperience").append(start);
	for(var num=0 ; num < work.jobs.length ; num++){
		//console.log("num\t" + num);
		var employer = HTMLworkEmployer.replace("%data%",work.jobs[num].employer).replace("#","iamshekhargh.com");
		var title = HTMLworkTitle.replace("%data%",work.jobs[num].title);
		$(".work-entry").append(employer + title);
		//console.log(employer + title);
		//console.log(work.jobs[num].employer);
		var dates = HTMLworkDates.replace("%data%" , work.jobs[num].dates);
		var location =  HTMLworkLocation.replace("%data%" , work.jobs[num].location);
		var description = HTMLworkDescription.replace("%data%" , work.jobs[num].description);
		$(".work-entry").append(dates).append(location).append(description);
}
}
work.display();
/*
projects: array of objects with
        title: string 
        dates: string (works with a hyphen between them)
        description: string
        images: array with string urls
  display: function taking no parameters


*/

var projects ={
	projects :[
		 {
			title : "Ganpati Bappa Livewallpaper" ,
			dates : "September 1, 2013" ,
			description : "A ganpati bappa live wallpaper.. laal baag chya raja in the background ..!" ,
			images : ["images/ganpatisnap1.jpg" , "images/ganpatisnap2.jpg" , "images/ganpatisnap1.jpg"] ,

		},
		{
			title : "India Flag Live Wallpaper" ,
			dates : "July 22, 2014" ,
			description : "Indian Flag Live Wallpaper is a image manipulation based wallpaper . i hope you guys like it. ;-)" ,
			images : ["images/India1.png" , "images/India2.png" , "images/India1.png"] ,

		}]

};

projects.display = function(){

	var start = HTMLprojectStart;
	$("#projects").append(start);
	for(var num=0 ; num < projects.projects.length ; num++){
		var title = HTMLprojectTitle.replace("%data%" , projects.projects[num].title).replace("#","iamshekhargh.com");
		var dates = HTMLprojectDates.replace("%data%" , projects.projects[num].dates);
		var description = HTMLprojectDescription.replace("%data%" , projects.projects[num].description);
		//var images = HTMLprojectTitle.replace("%data%" , projects.projects[num].)
		$(".project-entry").append(title,dates,description);
		//for(var img in projects.projects[num].images){
		for(var img = 0 ; img < projects.projects[num].images.length ; img++){
			var image = HTMLprojectImage.replace("%data%" , projects.projects[num].images[img]);

			//console.log(projects.projects[num].images[img]);
			$(".project-entry").append(image);

		}
		
	}

}

projects.display();

//Adding a Map code here

function restFdPafe(){
	$("#mapDiv").append(googleMap);

}

restFdPafe();



function futer(){
	var mobl = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
		var email = HTMLemail.replace("%data%",bio.contacts["email"]);
		var twitter = HTMLtwitter.replace("%data%",bio.contacts["twitter"]);
		var github = HTMLgithub.replace("%data%",bio.contacts["github"]);
		//var blog = HTMLblog.replace("%data%",bio.contacts[aa]);
		var location = HTMLlocation.replace("%data%",bio.contacts["location"]);
		$("#footerContacts").append(mobl).append(email).append(twitter).append(github).append(location);
	$("#footerContacts").css("width","100%");
	

}

futer();

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          //center: {lat: 12.9793802, lng: 77.6363849},
          
          center: {lat:12.9793802, lng:77.6363849} ,
          //center: {lat:12.979, lng:77.636}
          
          zoom: 15
        });
      }


// var YOUR_API_KEY = "AIzaSyCOvJENkqwfmygX5hPDotlKt1i01x3Tg4Y";

// var mapText = "<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCOvJENkqwfmygX5hPDotlKt1i01x3Tg4Y&callback=initMap' async defer></script>";
// $('body:last').append(mapText);





