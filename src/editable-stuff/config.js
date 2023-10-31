// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ff9b11, #e74c3c, #2ecc71, #3498db, #1ad7c0, #34495e",
  firstName: "Nicolas",
  middleName: "",
  lastName: "Quintana",
  message: " Committed to technological excellence for a brighter world. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nicolasquintanam",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nicolasquintanam/",
    },
    {
      image: "fa-stack-overflow",
      url: "https://stackoverflow.com/users/12531625/nicolas-quintana",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",

  message:
    "Hello, I'm Nicolas Quintana, a passionate Software Developer with a focus on web and mobile applications using .NET technology. I graduated in 2020 with a degree in Computer Science Engineering from the prestigious University of Santiago de Chile. My journey in the world of software engineering has been defined by my unwavering commitment to creating innovative solutions that empower businesses and enhance user experiences. I'm dedicated to turning ideas into reality, and I find my true calling in crafting robust, user-friendly applications. When I'm not coding, you'll often find me exploring the latest tech trends and constantly expanding my skill set to stay at the forefront of this ever-evolving field.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C#", value: 90 },
    { name: ".NET", value: 95 },
    { name: "Xamarin Forms", value: 95 },
    { name: "SQL", value: 85 },
    { name: "PHP", value: 65 },
    { name: "JavaScript", value: 65 },
    { name: "HTML/CSS", value: 65 },
    { name: "Bootstrap", value: 75 },
  ],
  softSkills: [
    { name: "Fast Learner", value: 95 },
    { name: "Problem Solving", value: 95 },
    { name: "Critical Thinker", value: 100 },
    { name: "Team Player", value: 90 },
    { name: "Interpersonal Skills", value: 70 },
    { name: "Organization", value: 85 },
    { name: "Attention to Detail", value: 95 },
    { name: "Priorization", value: 90 },
    { name: "Multitasking Ability", value: 90 },
    { name: "Adaptability", value: 95 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm actively seeking full-time opportunities in the field of Software Development, with a particular focus on web and mobile application development. If you're aware of any available positions, have inquiries, or simply want to connect, please don't hesitate to reach out to me at",
  email: "nicolasquintanam@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Mobile Developer", // Here Add Company Name
      companylogo: require("../assets/img/tapp.png"),
      date: "Jan 2023 – Jul 2023",
    },
    {
      role: "Xamarin Developer", // Here Add Company Name
      companylogo: require("../assets/img/progesys.png"),
      date: "Oct 2022 – Jan 2023",
    },
    {
      role: "Developer Engineer",
      companylogo: require("../assets/img/belltech.png"),
      date: "Jul 2022 – Oct 2022",
    },
    {
      role: "System Development Assistant",
      companylogo: require("../assets/img/eme.png"),
      date: "Apr 2018 – Jul 2022",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
