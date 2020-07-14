const projects = [{
    title: "Portfolio Site",
    description: "This very site! While furloughed, took the oportunity to brush up on my React skills to build myself a responsive site that displays my work history, projects and allows user to connect with me. Version1 uses hardcode data but designed in a way to enable me to connect to an api in a further iteration. First dabble with React Hooks tried out on this page!",
    urls: ["https://github.com/clicktravel-sammoran/project-me"],
    techStack: ["React", "Bootstrap", "CSS Modules", "nodejs"],
},
{
    title: "Toucan Doodle",
    description: "Native Android App built in Kotlin utilising Google Cloud where users can register and then log into a whiteboard for real time, collaborative drawing. ",
    urls: ["https://github.com/angriestofhippos/CollabDrawingFE", "https://www.youtube.com/watch?v=VM9JgyZbN0k"],
    techStack: ["Kotlin", "Firebase authentification", "Realtime database", "Cloud storage"]
},
{
    title: "NC-News api",
    description: "A api connected to a PostgreSQL database, serving up articles and their corresponding comments and allowing new ones to be created",
    urls: ["https://github.com/angriestofhippos/nc-news"],
    techStack: ["express", "Knex", "PostgreSQL", "Mocha", "Chai", "Supertest", "Heroku"]
},
{
    title: "Northcoders News",
    description: "Reddit style news site, populating with articles that could be voted and commented",
    urls: ["https://github.com/angriestofhippos/Northcoders-News"],
    techStack: ["React", "CSS Modules", "Reach Router", "Axios", "HTML"]
},
]

export default projects