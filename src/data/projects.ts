import { type ProjectCardProp } from "../components/ProjectCard";


export const projects: ProjectCardProp[] = [
    {
        title: "Perfumemarket Web App",
        description: "Full-stack marketplace app for perfume listings with product cards, search, user accounts and database-stored item data.",
        tags: ["React", "TypeScript", "HTML", "CSS", "Firestore"],
        link: "https://github.com/Secondo92/parfumemarked",
        whatILearned: ["Found out the hard way that my early database model limited later features. Refactoring taught me why planning relationships early saves pain later.",
            "Thought login and accounts were trivial until edge cases appeared (password resets, validation, state persistence). " +
            "Learned that auth is 10 percent UI and 90 percent invisible logic."]
    },
    {
        title: "Safer App",
        description: "WPF-based kiosk application for Arla used to present safety material, videos and PDF documents for employees and contractors.",
        tags: ["C#", "XAML", "WPF", "MVVM"],
        link: "https://github.com/Secondo92/SaferRum",
        whatILearned: ["Realized polished UI decisions influenced user acceptance more than fancy architecture. A solution that felt right won over a solution that was “elegant”.",
            "Stakeholders changed needs mid-development. Learned to adapt without breaking structure, and why communication reduces scope-creep panic.",
            "Writing clear docs and usage flows saved more time than adding extra features."],
        titel: "Intern",
        location: "Arla Foods",

    },
    {
        title: "Chess game",
        description: "A fun hobby project in C# WPF with MVVM architecture, turn system, legal move checks and reusable piece classes.",
        tags: ["C#", "XAML", "WPF", "MVVM"],
        link: "https://github.com/Secondo92/Skakspil",
        whatILearned: ["MVVM kept the game logic clean, but only when I was strict about separating View and Model. When I got lazy, bugs appeared fast.",
            "Importance of separating game logic from rendering to avoid tangled updates."]
    },
    {
        title: "Backyard birds",
        description: "Full-stack iOS app for bird watchers to log sightings, view species lists, and manage observed birds in a personal backyard catalogue.",
        tags: ["Swift", "MVC", "iOS", "Firestore"],
        link: "https://github.com/Secondo92/BackyardBirds",
        whatILearned: ["This project taught me to think in components and data flow. I've come to learn that SwiftUI felt " +
            " like building React apps", "Firebase highlighted how early data decisions affect everything that comes later"],
        titel: "Project",
        location: "School"
    }
];
