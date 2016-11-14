var bio = {
  "name": "Shauna Kerr",
  "role": "Front End Developer",
  "contacts": {
    "email": "shauna.kerr@gmail.com",
    "github": "shamicker",
    // "twitter": "@_S_h_a_u_n_a",
    "mobile": "(514)-594-8081",
    "location": "Montreal, QC",
    "linkedin": "canadian-shauna-kerr"
  },
  "biopic": "build/images/hipster_logo_cropped.png",
  // "welcomeMessage": "Hi, my name is Shauna. I am a student and an alumna of <a class='text-link' href='https://www.udacity.com/us'>Udacity</a>, an online education website. This is just the beginning of my coding adventures! Currently my plan is to learn front-end and then back-end web development, and then continue on learning from there.",
  "welcomeMessage": "Welcome!",
  "skills": ["HTML", "CSS", "Python", "JavaScript"],
  "iconAndLinks": {
    "email": ["fa fa-at", "mailto:shauna.kerr@gmail.com"],
    "github": ["fa fa-github", "https://github.com/shamicker"],
    // "twitter": ["", ""],
    "mobile": ["fa fa-phone", "https://en.wikipedia.org/wiki/Emma_Nutt"],
    "location": ["fa fa-street-view", "https://www.google.ca/maps/place/Montreal,+QC/@45.5600397,-73.8524774,11z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5016889!4d-73.567256"],
    "linkedin": ["fa fa-linkedin", "https://ca.linkedin.com/in/canadian-shauna-kerr"]
  },
  "display": function() {

    // append basics
    var name = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);
    var biopic = HTMLbioPic.replace("%data%", bio.biopic);
    var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage).replace("span", "p");

    $("#header").prepend(role);
    $("#header").prepend(name);
    $("#header").append(biopic);
    $("#header").append(message);

    // add alt to biopic
    $(".biopic").attr("alt", "stylized image of me");

    // put name and role in own div
    $("#header h1, #header span:first-of-type").wrapAll("<header class='header flex-box'></header>");

    // TODO: make sure all for-in loops loop over objects only! (and check the key)
    // append contact info
    for (var key in bio.contacts) {
      if (bio.contacts.hasOwnProperty(key)) {
        var item = HTMLcontactGeneric.replace("%contact%", "");
        var infoDisplay;

        // initial window size & content
        if (window.innerWidth < 700) {
          infoDisplay = key;
        } else {
          infoDisplay = bio.contacts[key];
        }

        item = item.replace("%data%", infoDisplay);

        // append contact info; add aria attribute
        $("#topContacts, #footerContacts").addClass("contactList").append(item);
        $(".gold-text").attr("aria-hidden", "true");

        // add icons
        $("#topContacts .gold-text:last, #footerContacts .gold-text:last").addClass( bio.iconAndLinks[key][0]);

        // wrap list items in <a> tags (to make them links)
        $("#topContacts .flex-item:last span").wrapAll("<a class='contact'></a>");
        $("#footerContacts .flex-item:last span").wrapAll("<a class='contact'></a>");

        // add hrefs (links)
        $("#topContacts a:last, #footerContacts a:last").attr("href", bio.iconAndLinks[key][1]);
      }
    }

    // wrap biopic, skills, welcome in divs
    $(".biopic, .welcome-message, #skills-h3, #skills").wrapAll("<div class='flex-box first-glance'></div>");
    // TODO: Figure out why the IDs aren't included

    // append <hr> and skills
    if (bio.skills.length > 0) {
      $("#header").append("<hr>");
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace(
          "%data%", skill);
        $("#skills").append(formattedSkill);
      });
    }
  }
};

var work = {
  "jobs":
  [
    {
      "title": "Freelance Violist",
      "employer": "Self-employed",
      "dates": "1994 - current",
      "location": ["Regina, SK", " Montreal, QC"],
      "description": "Performed in numerous chamber ensembles and orchestras" +
        " at a wide variety of functions, including many special events" +
        " such as the Saskatchewan Centennial Gala (attended by Queen" +
        " Elizabeth II) and the 2008 Canadian Country Music Awards;",
      "url": "http://www.triodacapo.com/"
    },{
      "title": "Accounts Receivable Coordinator",
      "employer": "Globe Union (Canada) Inc.",
      "dates": "2009 - 2015",
      "location": "Montreal, QC",
      "description": "Began as an A/P Coordinator temp via Groom & Associates Staffing" +
        " Agency; recruited within a month for a permanent cash" +
        " application position - entered invoice payments from 1000" +
        " cheques monthly."
    },{
      "title": "Accounts Payable Accounting Clerk",
      "employer": "Groom & Associates, Staffing Agency",
      "dates": "2008 - 2009",
      "location": "Montreal, QC",
      "description": "Positioned at Bechtel Corporation, Kitimat Project -" +
      " assisted in daily and monthly routine accounting activities; audited" +
      " invoices; analyzed and reconciled a variety of documents and data;" +
      " created and maintained excel spreadsheets; produced reports;"
    },{
      "title": "Section Violist",
      "employer": "Regina Symphony Orchestra",
      "dates": "1996 - 2008",
      "location": "Regina, SK",
      "description": "Performed in dozens of symphonic, opera, and chamber" +
        " concerts every year."
    },{
      "title": "Corporate Legal Assistant",
      "employer": "Kanuka Thuringer LLP",
      "dates": "2007 - 2008",
      "location": "Regina, SK",
      "description": "Conducted routine legal services for 1000s of" +
      " corporations, ensuring they were all kept up to date and on the" +
      " Provincial Register."
    },{
      "title": "General Office Manager",
      "employer": "Westcor Builders (2003) Inc.",
      "dates": "2005 - 2006",
      "location": "Regina, SK",
      "description": "Managed the administration of the implementation" +
      " of Health Benefits; assisted in routine accounting activities;" +
      " entered data and maintained a variety of databases; received and" +
      " directed telephone calls; produced a variety of documents using" +
      " Word and Excel."
    }
  ],
  "display": function() {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry").addClass("flex-box");

      var employer = HTMLworkEmployer.replace("%data%",
        job.employer);
      var title = HTMLworkTitle.replace("%data%", job.title);
      var dates = HTMLworkDates.replace("%data%", job.dates);
      var location = HTMLworkLocation.replace("%data%",
        job.location);
      var description = HTMLworkDescription.replace(
        "%data%", job.description);

      $(".work-entry:last").append(employer + title);
      $(".work-entry:last").append(dates);
      $(".work-entry:last").append(location);
      $(".work-entry:last").append(description);
    });

    // remove <br>, wrap link inside h4, add class to <a>
    $(".work-entry p br").remove();
    $(".work-entry a").wrap("<h4></h4>");
    $(".work-entry h4 a").addClass("header-link");
    // to make toggling better, wrap entries in a div
    $(".work-entry").wrapAll("<div class='work-toggle'></div>");
  }
};

var projects = {
  "projects": [{
    "title": "Fill in the Blanks Quiz",
    "dates": 2016,
    "description": "designed and created an interactive quiz using Python language",
    "images": ["src/images/IPND_Quiz2.png"],
    "url": "https://github.com/shamicker/Fill_in_the_blanks_Quiz"
  }, {
    "title": "Movie Trailer Website",
    "dates": 2016,
    "description": "manipulated a Bootstrap- and Python-based template to personalize a website",
    "images": ["src/images/IPND_Trailers.png"],
    "url": "https://github.com/shamicker/Movie_trailer_website"
  }, {
    "title": "Multi-Game Tournament",
    "dates": 2016,
    "description": "designed and created a database to organize a multi-game tournament, using PostgreSQL and Python",
    "images": ["src/images/IPND_Tournament.png"],
    "url": "https://github.com/shamicker/Multi-Tournament"
  }],
  "display": function() {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry").addClass("flex-box");

      var title = HTMLprojectTitle.replace("%data%",
        project.title);
      var dates = HTMLprojectDates.replace("%data%",
        project.dates);

      $(".project-entry:last").append(title);
      $(".project-entry:last").append(dates);

      project.images.forEach(function(img) {
        var caption = HTMLprojectDescription.replace("%data%", project.description);
        caption = caption.replace("p", "figcaption");
        var image = HTMLprojectImage.replace("%data%", img);

        $(".project-entry:last").append("<figure class='quiz'></figure>");
        $("figure:last").append(caption);
        $("figure:last").append(image);
      });
    });

    // remove <br>
    $(".project-entry figcaption br").remove();
    // make header link, and style it
    $(".project-entry a").wrap("<h4></h4>");
    $(".project-entry h4 a").addClass("header-link");
  }
};

var education = {
  "onlineCourses": [{
    "school": "Udacity",
    "title": "Front End Nanodegree",
    "dates": 2016,
    "description": "",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1",
    "displayURL": "www.udacity.com"
  }, {
    "school": "Udacity",
    "title": "Introduction to Programming Nanodegree",
    "dates": 2016,
    "description": "Learned programming basics such as HTML, CSS; gained" +
      " working knowledge of Python, JavaScript, jQuery, JSON," +
      " PostgreSQL, Bootstrap; completed projects, both from scratch and" +
      " from templates, using all of the aforementioned knowledge and more.",
    "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000#project_modal_3568138824",
    "displayURL": "www.udacity.com"
  }],
  "schools": [{
    "name": "University of Regina",
    "location": "Regina, SK",
    "degree": "Certificate in French as a Second Language",
    "majors": "",
    "dates": 2007,
    "description": "Awarded the 'Canadian Millennium Scholarship Foundation Bursary' for the highest GPA within the Faculty of Arts.",
    "url": "http://lacite.uregina.ca/en/study-here/academics/undergraduate-programs/certificate-in-french-as-a-second-language"
  }, {
    "name": "University of Regina",
    "location": "Regina, SK",
    "degree": "Bachelor of Music",
    "majors": "viola performance",
    "dates": 2001,
    "url": "http://www.uregina.ca/mediaartperformance/areas-study/music/music-programs.html"
  }],
  "display": function() {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);

      var name = HTMLschoolName.replace("%data%", school.name);
      var degree = HTMLschoolDegree.replace("%data%", school.degree);
      var dates = HTMLschoolDates.replace("%data%", school.dates);
      var location = HTMLschoolLocation.replace("%data%", school.location);

      $(".education-entry:last").append(name + degree);
      $(".education-entry:last").append(dates);
      $(".education-entry:last").append(location);

      if ( school.description ) {
        $(".education-entry:last").append("<p></p>");
        $(".education-entry p").append(school.description);
      }

      if ( school.url !== "" ) {
        $(".education-entry:last a").attr("href", school.url);
      }

      if ( school.majors ) {
        var major = HTMLschoolMajor.replace("em", "p");
        major = major.replace("%data%", school.majors);
        $(".education-entry:last").append(major);
      }

      // $(".education-entry:last").append("<br>");
    });

    // $("#education").append("<br>");
    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLschoolStart);

      var school = HTMLonlineSchool.replace("%data%", course.school);
      var title = HTMLonlineTitle.replace("%data%", course.title);
      var dates = HTMLonlineDates.replace("%data%", course.dates);
      var url = HTMLonlineURL.replace("%data%", course.displayURL);

      $(".education-entry:last").append(title + school);
      $(".education-entry:last").append(dates);
      $(".education-entry:last").append(url);
      // $(".education-entry:last").append("<br>");

      if ( course.url !== "" ) {
        $(".education-entry:last a").attr("href", course.url);
      }
    });

    // Make flexy
    $(".education-entry").addClass("flex-box");

    // remove <br>, wrap link in h4, add class to <a>
    $(".education-entry p br").remove();
    $(".education-entry a").wrap("<h4></h4>");
    $(".education-entry h4 a").addClass("header-link");
  }
};




bio.display();
work.display();
projects.display();
education.display();

// TODO: make links go to new tab



// button to internationalize name
$("#main").append(internationalizeButton);
var inName = function() {
  var names = bio.name.split(" ");
  names = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase() +
    " " + names[1].toUpperCase();
  return names;
};


// work/project/edu section toggling
var workHeader = document.querySelector("#workExperience h2");
var workEntries = document.querySelector(".work-toggle");

workHeader.addEventListener("click", function(e) {
  if ($(workHeader).is(":hidden") ) {
    $(workEntries).slideDown("slow");
  } else if ($(workHeader).is(":visible") ) {
    $(workEntries).slideUp("slow");
  }
  // workEntries.slideDown('slow');
});
// workHeader.addEventListener("click", function(e) {
//   workEntries.slideUp('slow');
// });



// $(workHeader).click(function() {
//   if ($(workHeader).is(":hidden") ) {
//     $(workEntries).slideDown("slow");
//   } else {
//     $(workEntries).slideUp("slow");
//   }
// });
// $("#mapDiv").append(googleMap);



// TODO: add url to all <a> href's
// TODO: add descriptions & data
// TODO: add more descriptions
// TODO: figure out a colour scheme
// TODO: mobile-friendly!
// TODO: add more interactivity - drawing program from Treehouse?
// TODO: add more interactivity - python interaction for quiz??
// TODO: add credits! -- "github by Doejo from the Noun Project" icon
// TODO: add favicon!



