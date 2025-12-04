import { type ProjectCardProp } from "../components/ProjectCard";

export const projects: ProjectCardProp[] = [
    {
        title: "Discount Finder Web App",
        description: "A small web app where you choose a store and find discounts and food-waste items from APIs.",
        tags: ["React", "TypeScript", "Vite", "Node", "Express", "API Integration"],
        link: "https://secondo92.github.io/discount-site/",
        githubLink: "https://github.com/Secondo92/discount-site",
        whatILearned: [
            "I learned how to structure a simple API in Node and connect it cleanly to a React frontend.",
            "I got better at handling data from different sources and making sure everything lined up before using it.",
            "State management became easier once I split things into smaller parts instead of one big block of logic.",
            "I also learned the basics of handling loading and error states properly when working with external APIs."
        ]
    },
    {
        title: "Perfumemarket Web App",
        description: "A perfume marketplace with listings, search and user accounts.",
        tags: ["React", "TypeScript", "HTML", "CSS", "Firestore"],
        githubLink: "https://github.com/Secondo92/parfumemarked",
        whatILearned: [
            "I learned why a good database structure matters. Fixing it later is possible, but it's harder than planning it well from the start.",
            "I got more comfortable building simple authentication and understanding everything that goes into it beyond just a login form."
        ]
    },
    {
        title: "Safer App",
        description: "A WPF kiosk-style app for Arla that shows safety videos, PDFs and instructions.",
        tags: ["C#", "XAML", "WPF", "MVVM"],
        githubLink: "https://github.com/Secondo92/SaferRum",
        whatILearned: [
            "I learned how to build a WPF application using MVVM in a way that was actually maintainable.",
            "I got better at adjusting the app when requirements changed without breaking the existing structure.",
            "I learned the value of writing short, clear documentation so others can understand how the app works."
        ],
        titel: "Intern",
        location: "Arla Foods"
    },
    {
        title: "Chess game",
        description: "A C# WPF hobby project with turn logic, valid moves and reusable piece classes.",
        tags: ["C#", "XAML", "WPF", "MVVM"],
        githubLink: "https://github.com/Secondo92/Skakspil",
        whatILearned: [
            "I learned to separate the game logic from the UI so the rules and visuals didn't get mixed together.",
            "Working on this helped me understand MVVM better because the game exposed mistakes very quickly."
        ]
    },
    {
        title: "Backyard birds",
        description: "An iOS app where you log birds you've seen and keep a personal catalogue.",
        tags: ["Swift", "MVC", "iOS", "Firestore"],
        githubLink: "https://github.com/Secondo92/BackyardBirds",
        whatILearned: [
            "I learned the basics of SwiftUI, and the component-based approach made it easier to build new screens.",
            "Working with Firebase helped me understand why choosing a good data shape early makes adding features later much simpler."
        ],
        titel: "Project",
        location: "School"
    }
];