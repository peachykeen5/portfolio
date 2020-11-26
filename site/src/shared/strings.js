export default {
    header: {
        title: "Lexi Keen",
        subtitle: "front-end developer",
    },
    navBar:["About Me", "Skills", "Experience", "Projects"],
    secondarySection: {
        title: "About",
        subtitle: "",
        body: "With a background in accounting and customer service, I have a well-rounded approach to development, always keeping the end consumer in mind.  Being an avid learner, I first taught myself the basics of HTML and CSS as a teenager; however, I took a different career path and completed a BBA with a major in accounting.  Once I realized accounting was not for me, I pivoted and decided to pursue a career in development.  I applied and was accepted to the Lighthouse Labs Web Development boot camp in 2018 and graduated with a very hands-on diploma in Computer Science.  Since graduation, I have been employed at TONIT - the app for motorcyclists.",
    },
    thirdSection: {
        title: "Skills",
    },
    fourthSection: {
        title: "Experience",
        experience: [
            {
                companyName: "TONIT",
                jobTitle: "intermediate front-end developer",
                date: "August 2018 - present",
                description: "Working at a small startup, one must wear many hats.  This is why, although my official title is intermediate front-end developer, I do have some full-stack experience.  My responsibilities include writing clean, well-organized code while taking into consideration reusability and quality.  I collaborate with my team and connect with other departments to establish the scope and expectations of each project.  Most of the work I do is within the app itself, but the TONIT website was my biggest solo project.  I am also involved in writing tests for the server codebase.  Beyond my role as a developer, I was am involved in planning, coordinating, and executing all team events.",
            },
        ],
    },
    fifthSection: {
        title: "Projects",
        projects: [
            {
                name: "TONIT Website",
                link: "https://www.tonit.com/",
                body: "Marketing and promotional website for the TONIT motorcycle community app.  Built with Gatsby and integrated with Netlify CMS.",
                imageSource: "tonitLogoLight.png",
            },
            {
                name: "TONIT App",
                link: "https://apps.apple.com/ca/app/tonit/id1321053644",
                body: "TONIT online community for motorcyclists. Built in react-native for both iOS and Android devices.",
                imageSource: "tonitLogoLight.png",
            },
            {
                name: "HuskiHealth",
                link: "https://github.com/peachykeen5/huski_health",
                body: "A pet health tracking web app designed to help pet owners take the best care of their furry friend.",
                imageSource: "hhLogoLight.png",
            },
            {
                name: "ChattyApp",
                link: "https://github.com/peachykeen5/chattyapp",
                body: "This project integrates a WebSocket server with a basic single page application to provide a seamless multi-user chat experience.",
                imageSource: "chattyLogoLight.png",
            },
        ],
    },
}