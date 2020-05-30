let resumeModel = {
  bio: {
    name: "aBappy",
    role: "Noob",
    contacts: {
      mobile: "+880191564XXXX",
      email: "asifuzzamanbappy@gmail.com",
      github: "www.github.com/bappyasif",
      twitter: "www.twitter.com/bappyasif",
      location: "Dhaka, Bangladesh",
    },
    skills: ["html", "css", "javascript", "test automation"],
    bioPic: "http://somewhere.com/bappyasif",
    welcomeMessage: "Greetings Visitor",
  },
  education: {
    schools: [
      {
        name: "Brac University",
        location: "Dhaka",
        degree: "Computer Science",
        majors: "Computer Science",
        dates: "2004 - 2009",
        url: "http://wwww.bracu.ac.bd",
      },
      {
        name: "Ideal College",
        location: "Dhaka",
        degree: "Science",
        majors: "Science",
        dates: "2000 - 2002",
        url: "http://wwww.idealcollege.bd.edu",
      },
      {
        name: "CPHS",
        location: "Comilla",
        degree: "Science",
        dates: "1999 - 2000",
        url: "http://wwww.cphs.bd.edu",
      },
    ],
    majors: ["Science"],
    onlineCourses: [
      {
        title: "Frontend NanoDegree",
        school: "Udacity",
        dates: "2020 - ",
        url: "http://www.udacity.com",
      },
      {
        title: "Frontend Essentials",
        school: "Udemy",
        dates: "2020 - ",
        url: "http://www.udemy.com",
      },
    ],
  },
  work: {
    jobs: [
      {
        employer: "Everjobs",
        title: "Content And Operations Manager",
        location: "Gulshan 1, Dhaka",
        dates: "2014 - 2016",
        description: "Content And Operations Manager",
      },
      {
        employer: "Bit Mascot",
        title: "SQA Engineer",
        location: "DOHS, Dhaka",
        dates: "2012 - 2013",
        description: "Software Quality Assurance Engineer",
      },
      {
        employer: "The Excel Companies Ltd.",
        title: "Trainee Android App Developer",
        location: "Gulshan 1, Dhaka",
        dates: "2010 - 2011",
        description: "Trainee Android App Developer",
      },
    ],
  },
  projects: {
    projects: [
      {
        title: "IT Enterprenuership",
        dates: "2006- 2008",
        description: "IT Entreprenuership",
        images: ["http://www.aiesec.com/", "http://www.aiesec.com/"],
      },
      {
        title: "Rock Paper Scissors Game",
        dates: "2019- 2019",
        description: "Rock Paper Scissors Game",
        images: [
          "http://www.somewhere.com/rpsg",
          "http://www.somewhere.com/rpsg",
        ],
      },
    ],
  },
};

let octopus = {
  init: function () {
    bioView.render();
    educationView.render();
    workView.render();
    projectView.render();
  },
  getBio: function () {
    return resumeModel.bio;
  },
  getEducation: function () {
    return resumeModel.education;
  },
  getWorkExperience: function () {
    return resumeModel.work;
  },
  getProjectDetails: function () {
    return resumeModel.projects;
  },
};

let bioView = {
  render: function () {
    let bio = octopus.getBio();
    let header = $("#header");
    console.log(bio);
    let headerName = HTMLheaderName.replace("%data%", bio.name);
    let headerRole = HTMLheaderRole.replace("%data%", bio.role);
    let headerPic = HTMLbioPic.replace("%data%", bio.bioPic);
    let headerMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    contactHeader($("#topContacts"));
    contactHeader($("#footerContacts"));
    header.prepend(headerRole);
    header.prepend(headerName);
    header.append(headerPic);
    header.append(headerMessage);
    header.append(HTMLskillsStart);
    bio.skills.forEach((skill) => {
      skill = HTMLskills.replace("%data%", skill);
      $("#skills").append(skill);
    });

    function contactHeader(contactsPosition) {
      let contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
        contactEmail = HTMLemail.replace("%data%", bio.contacts.email),
        contactGithub = HTMLgithub.replace("%data%", bio.contacts.github),
        contactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
        contactLocation = HTMLlocation.replace("%data%", bio.contacts.location),
        topContacts = contactsPosition;

      topContacts.append(
        contactMobile,
        contactEmail,
        contactGithub,
        contactTwitter,
        contactLocation
      );
    }
  },
};

let educationView = {
  render: function () {
    let education = octopus.getEducation();
    $("#education").append(HTMLschoolStart);
    let educationEntry = $(".education-entry");
    education.schools.forEach((school) => {
      // HTMLschoolName.split(" ");
      let schoolName = HTMLschoolName.replace("%data%", school.name),
        educationTimeeline = HTMLschoolDates.replace("%data%", school.dates),
        educationDegree = HTMLschoolDegree.replace("%data%", school.degree),
        schoolLocation = HTMLschoolLocation.replace("%data%", school.location);

      educationEntry.append(
        schoolName,
        educationTimeeline,
        educationDegree,
        schoolLocation
      );
      education.majors.forEach((major) => {
        let majorSubject = HTMLschoolMajor.replace("%data%", major);
        educationEntry.append(majorSubject);
      });
    });
    educationEntry.append(HTMLonlineClasses);
    education.onlineCourses.forEach((course) => {
      let schoolTitle = HTMLonlineTitle.replace("%data%", course.title),
        onlineSchool = HTMLonlineSchool.replace("%data%", course.school),
        onlineDates = HTMLonlineDates.replace("%data%", course.dates),
        schoolUrl = HTMLonlineURL.replace("%data%", course.url);

      educationEntry.append(schoolTitle, onlineSchool, onlineDates, schoolUrl);
    });
  },
};

let workView = {
  render: function () {
    let work = octopus.getWorkExperience();
    $("#workExperience").append(HTMLworkStart);
    let workExperience = $(".work-entry");

    work.jobs.forEach((job) => {
      let workEmployer = HTMLworkEmployer.replace("%data%", job.employer),
        workTitle = HTMLworkTitle.replace("%data%", job.title),
        workLocation = HTMLworkLocation.replace("%data%", job.location),
        workDates = HTMLworkDates.replace("%data%", job.dates),
        workDescription = HTMLworkDescription.replace(
          "%data%",
          job.description
        );
      workExperience.append(
        workEmployer,
        workTitle,
        workLocation,
        workDates,
        workDescription
      );
    });
  },
};

let projectView = {
  render: function () {
    let projects = octopus.getProjectDetails();
    $("#projects").append(HTMLprojectStart);
    let projectEntries = $(".project-entry");
    projects.projects.forEach((project) => {
      let projectTitle = HTMLprojectTitle.replace("%data%", project.title),
        projectDates = HTMLprojectDates.replace("%data%", project.dates),
        projectDescription = HTMLprojectDescription.replace(
          "%data%",
          project.description
        );
      projectEntries.append(projectTitle, projectDates, projectDescription);
      project.images.forEach((image) => {
        let projectImage = HTMLprojectImage.replace(
          "%data%",
          project.images[image]
        );
        projectEntries.append(projectImage);
      });
    });
  },
};
octopus.init();
$("#mapDiv").append(googleMap);
