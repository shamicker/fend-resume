/* ************************* MODEL ****************************** */
var model = {
    bio: {
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
        "biopic": "build/images/projects/sketch-large.jpg",
        "biopicImages": ["build/images/projects/sketch-small.jpg 180w", "build/images/projects/sketch-large.jpg 256w"],
        "welcomeMessage": "As a student and alumna of <a class='italic-link gold-text' href='https://www.udacity.com/us'>Udacity</a>, an online education website, I am just beginning my coding adventures! My plan is to learn front-end and then back-end web development, and then continue on learning from there.",
        "skills": ["HTML", "CSS", "Python", "JavaScript", "jQuery", "GitHub", "Grunt"],
        "iconAndLinks": {
            "email": ["fa-at", "mailto:shauna.kerr@gmail.com"],
            "github": ["fa-github", "https://github.com/shamicker"],
            // "twitter": ["", ""],
            "mobile": ["fa-phone", "https://en.wikipedia.org/wiki/Emma_Nutt"],
            "location": ["fa-street-view", "https://www.google.ca/maps/place/Montreal,+QC/@45.5600397,-73.8524774,11z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5016889!4d-73.567256"],
            "linkedin": ["fa-linkedin", "https://ca.linkedin.com/in/canadian-shauna-kerr"]
        }
    },

    work: [{
        "title": "Freelance Violist",
        "employer": "Self-employed",
        "dates": "1994 - current",
        "location": "Regina, SK/Montreal, QC",
        "description": "Performed in numerous chamber ensembles and orchestras" +
            " at a wide variety of functions, including many special events" +
            " such as the Saskatchewan Centennial Gala (attended by Queen" +
            " Elizabeth II) and the 2008 Canadian Country Music Awards;"
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

    projects: [{
        "title": "Fill in the Blanks Quiz",
        "dates": "2016",
        "description": "Designed and created an interactive quiz using Python language",
        "images": [
            "build/images/projects/IPND_Quiz2-med.png",
            "build/images/projects/IPND_Quiz2-tiny.png 320w",
            "build/images/projects/IPND_Quiz2-small.png 640w",
            "build/images/projects/IPND_Quiz2-med.png 960w",
            "build/images/projects/IPND_Quiz2-large.png 1280w"
            ],
        "url": "https://github.com/shamicker/Fill_in_the_blanks_Quiz",
        "livePage": "#",
        "idTitle": "quiz",
        "paragraph": "I learned a lot about Python."
        },{
        "title": "Movie Trailer Website",
        "dates": "2016",
        "description": "Manipulated a Bootstrap- and Python-based template to personalize a website",
        "images": [
            "build/images/projects/IPND_Trailers-med.png",
            "build/images/projects/IPND_Trailers-tiny.png 320w",
            "build/images/projects/IPND_Trailers-small.png 640w",
            "build/images/projects/IPND_Trailers-med.png 960w",
            "build/images/projects/IPND_Trailers-large.png 1280w"
            ],
        "url": "https://github.com/shamicker/Movie_trailer_website",
        "livePage": "https://shamicker.github.io/Movie_trailer_website",
        "idTitle": "trailers",
        "paragraph": "I learned a lot about how Bootstrap and Python can work together."
        },{
        "title": "Multi-Game Tournament",
        "dates": "2016",
        "description": "Designed and created a database to organize a multi-game tournament, using PostgreSQL and Python",
        "images": [
            "build/images/projects/IPND_Tournament-med.png",
            "build/images/projects/IPND_Tournament-tiny.png 320w",
            "build/images/projects/IPND_Tournament-small.png 640w",
            "build/images/projects/IPND_Tournament-med.png 960w",
            "build/images/projects/IPND_Tournament-large.png 1280w"
            ],
        "url": "https://github.com/shamicker/Multi-Tournament",
        "livePage": "#",
        "idTitle": "tournament",
        "paragraph": "I learned a lot about relational databases, PostgreSQL, the command line, and virtual machines."
        }
    ],

    education: {
        "onlineCourses": [{
            "school": "Udacity",
            "title": "Front End Web Developer Nanodegree",
            "dates": "2016",
            "description": "",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1",
            "displayURL": "www.udacity.com/fend/"
            },{
            "school": "Udacity",
            "title": "Introduction to Programming Nanodegree",
            "dates": "2016",
            "description": "Learned programming basics such as HTML, CSS; gained" +
                " working knowledge of Python, JavaScript, jQuery, JSON," +
                " PostgreSQL, Bootstrap; completed projects, both from scratch and" +
                " from templates, using all of the aforementioned knowledge and more.",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000#project_modal_3568138824",
            "displayURL": "www.udacity.com/ipnd/"
            }
        ],
        "schools": [{
            "name": "University of Regina",
            "location": "Regina, SK",
            "degree": "Certificate in French as a Second Language",
            "majors": [""],
            "dates": "2007",
            "description": "Awarded the 'Canadian Millennium Scholarship Foundation Bursary' for the highest GPA within the Faculty of Arts.",
            "url": "https://lacite.uregina.ca/en/study-here/academics/undergraduate-programs/certificate-in-french-as-a-second-language"
            },{
            "name": "University of Regina",
            "location": "Regina, SK",
            "degree": "Bachelor of Music",
            "majors": ["viola performance"],
            "dates": "2001",
            "url": "https://www.uregina.ca/mediaartperformance/areas-study/music/music-programs.html"
            }
        ]
    }
}; // end of model


/* *********************** OCTOPUS ******************************* */
var octopus = {
    initBio: function() {

        // append basics
        var name = HTMLheaderName.replace("%data%", model.bio.name);
        var role = HTMLheaderRole.replace("%data%", model.bio.role);
        var biopic = HTMLbioPic.replace("%data%", model.bio.biopic);
        var message = HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMessage).replace("span", "p");

        // add in reverse order to header
        $("#header").prepend(message);
        $("#header").prepend(biopic);
        $("#header").prepend(role);
        $("#header").prepend(name);

        // add alt, sizes, srcset to biopic
        $(".biopic").attr("alt", "stylized image of me");
        $(".biopic").attr("srcset", model.bio.biopicImages);
        $(".biopic").attr("sizes", "(max-width: 600px) 40vw, 256px");

        // put name and role in own div
        $("#header h1, #header span:first-of-type").wrapAll("<header class='header flex-box'></header>");

        // append contact info
        for (var key in model.bio.contacts) {
            if (model.bio.contacts.hasOwnProperty(key)) {
                var item = HTMLcontactGeneric.replace("%contact%", "");
                var icon = "fa " + model.bio.iconAndLinks[key][0] + " fa-lg";
                var topContacts, bottomContacts;

                topContacts = item.replace("%data%", model.bio.contacts[key]).replace("%className%", "contact");
                bottomContacts = item.replace("%data%", key).replace("%className%", "contact " + key);

                // append contact info; add aria attribute
                $(".topContacts").append(topContacts);
                $("#footerContacts").append(bottomContacts);
                $(".gold-text").attr("aria-hidden", "true");

                // add icons
                $(".topContacts .gold-text:last, #footerContacts .gold-text:last").addClass(icon);

                // wrap contact info in <a> tags; add hrefs (links)
                $(".topContacts .flex-item:last span").wrapAll("<a class='clickable'></a>");
                $("#footerContacts .flex-item:last span").wrapAll("<a class='clickable'></a>");
                $(".topContacts a:last, #footerContacts a:last").attr("href", model.bio.iconAndLinks[key][1]);
            }
        }

        // append skills
        if (model.bio.skills.length > 0) {
            $(".topContacts").before("<h3 class='contacts-h3'>Contact Info</h3>");
            $("#header").append(HTMLskillsStart);
            model.bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace(
                    "%data%", skill);
                $(".skills-ul").append(formattedSkill);
            });
        }

        // wrap biopic, skills, welcome in divs
        $(".biopic, .welcome-message").wrapAll("<div class='flex-box first-glance'></div>");

        // add toggle
        $(".skills-ul").parent().attr("style", "display:none;");
        $(".skills-ul").parent().addClass("skills-toggle");
        $(".topContacts").attr('style', "display:none;");
        // $(".topContacts").addClass("toggle");
    },

    initWork: function() {
        model.work.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry").addClass("flex-box");

            var employer = HTMLworkEmployer.replace("%data%", job.employer);
            var title = HTMLworkTitle.replace("%data%", job.title);
            var dates = HTMLworkDates.replace("%data%", job.dates);
            var location = HTMLworkLocation.replace("%data%",
                job.location);
            var description = HTMLworkDescription.replace(
                "%data%", job.description);

            employer = employer.replace('<a href="#"', "<h4 class='entry-header dark-text'");
            title = title.replace("</a>", "</h4>");

            $(".work-entry:last").append(employer + title);
            $(".work-entry:last").append(dates);
            $(".work-entry:last").append(location);
            $(".work-entry:last").append(description);
        });

        // remove <br>
        $(".work-entry p br").remove();

        // to make toggling better, wrap entries in a div
        $(".work-entry").wrapAll("<div class='work-toggle' style='display:none;'></div>");
        // add class to h2
        $("#workExperience h2").addClass("work-heading");
    },

    initProjects: function() {
        model.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry").attr("data-toggle", "modal");
            $(".project-entry:last").attr("data-target", "#" + project.idTitle);

            var title = HTMLprojectTitle
                .replace("%data%", "%%")
                .replace(/a/g, "h4")
                .replace('href="#"', "class='entry-header dark-text'")
                .replace("%%", project.title);
            var dates = HTMLprojectDates.replace("%data%", project.dates);

            $(".project-entry:last").append(title);
            $(".project-entry:last").append(dates);

            var caption = HTMLprojectDescription
                .replace(/p/g, "figcaption")
                .replace("%data%", project.description);
            $(".project-entry:last").append("<figure class='" + project.idTitle + "'><br></figure>");
            $("." + project.idTitle).append(caption);

            // only 1 displayed image per project, but displayed with srcset
            var srcset = project.images.splice(1).join(", ");
            var src = project.images.splice(0, 1);

            var image = HTMLprojectImage.replace("%srcset%", srcset);
            $("." + project.idTitle).append(image);

            // for each project, add a formatted modal!
            var modal = HTMLmodal
                .replace(/%idTitle%/g, project.idTitle)
                .replace("%title%", project.title)
                .replace("%srcset%", srcset)
                .replace("%paragraph%", project.paragraph)
                .replace("%url%", project.url)
                .replace("%livePage%", project.livePage);
            $("#main").after(modal);
            $(".project-fig").addClass(project.idTitle);

            // add class, src, alt to each project image AND modal image
            $("." + project.idTitle + " img").attr("sizes", "(max-width:556px) 90vw, 500px");
            $("." + project.idTitle + " img").addClass("image");
            $("." + project.idTitle + " img").attr("src", src);
            $("." + project.idTitle + " img").attr("alt", project.title);

            if (project.livePage === "#") {
                $("#" + project.idTitle + " a:first-of-type").addClass("disabled");
            }

        });

        // remove <br> and the mysterious extra <p>
        $(".project-entry figcaption br").remove();
        $(".project-entry figcaption p").remove();

        // make header link, and style it
        $(".project-entry").wrapAll("<div class='project-toggle' style='display:none;'></div>");

        // add class to h2
        $("#projects h2").addClass("project-heading");
    },

    initEducation: function() {
        model.education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var name = HTMLschoolName
                .replace("<a", "<h4")
                .replace('href="#"', "class='entry-header dark-text'")
                .replace("%data%", school.name);
            var degree = HTMLschoolDegree
                .replace("a>", "h4>")
                .replace("%data%", school.degree);
            var dates = HTMLschoolDates.replace("%data%", school.dates);
            var location = HTMLschoolLocation.replace("%data%", school.location);

            $(".education-entry:last").append(name + degree);
            $(".education-entry:last").append(dates);
            $(".education-entry:last").append(location);

            // no formal school link please
            // if ( school.url !== "" ) {
            //   $(".education-entry:last a").attr("href", school.url);
            // }

            // at most 1 major
            if (school.majors[0] !== "") {
                var major = HTMLschoolMajor.replace("em", "p");
                major = major.replace("%data%", school.majors[0]);
                $(".education-entry:last").append(major);
            }

            // description if no major
            if (school.description) {
                $(".education-entry:last").append("<p></p>");
                $(".education-entry p").append(school.description);
            }

        });

        $("#education").append(HTMLonlineClasses);

        model.education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);

            var title = HTMLonlineTitle
                .replace("<a", "<h4")
                .replace('href="#"', "class='entry-header dark-text'")
                .replace("%data%", course.title);
            var school = HTMLonlineSchool
                .replace("a>", "h4>")
                .replace("%data%", course.school);
            var dates = HTMLonlineDates.replace("%data%", course.dates);
            var url = HTMLonlineURL.replace("%data%", course.displayURL);

            $(".education-entry:last").append(title + school);
            $(".education-entry:last").append(dates);
            $(".education-entry:last").append("<br>");
            $(".education-entry:last").append(url);

            if (course.url !== "") {
                $(".education-entry:last a").attr("href", course.url);
                $(".education-entry:last a").addClass("italic-link dark-text");
            }
        });

        // remove <br>
        $(".education-entry p br").remove();

        // add toggle div - around edu, and online
        $(".education-entry, #education h3").wrapAll("<div class='education-toggle' style='display:none;'></div>");

        // add class to h2
        $("#education h2").addClass("education-heading");
    },

    initMap: function(){
        // Map alterations
        $("#mapDiv").append(googleMap);
        $("#mapDiv h2").text("Locations");
    },

    // button to internationalize name
    internationalizeName: function() {
        $("#main").append(internationalizeButton);
        var names = model.bio.name.split(" ");
        names = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase() +
            " " + names[1].toUpperCase();
        return names;
    }
};


/* *********************** VIEW ********************************** */
var view = {
    toggleHeaders: function(){
        // Show and hide sections
        $("#contacts h3, #skills h3, h2").on("click", function() {
            var toToggle = $(this).next();

            // if Map
            if (toToggle[0] === $(".map-toggle")[0]) {
                toToggle.toggle("slow", initializeMap);

            // all others
            } else {
                toToggle.toggle("slow");
            }

            // TODO: figure out how to automatically close the headers. Argh!
        });
    }
};

octopus.initBio();
octopus.initWork();
octopus.initProjects();
octopus.initEducation();
octopus.initMap();
view.toggleHeaders();