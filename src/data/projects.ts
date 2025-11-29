import { type ProjectCardProp, ProjectList } from "../components/ProjectCard";


export const projects: ProjectCardProp[] = [
    {
        title: "Perfumemarket Web App",
        description: "Full-stack marketplace app for perfume listings with product cards, search, user accounts and database-stored item data.",
        tags: ["React", "TypeScript", "HTML", "CSS", "Firestore"],
        link: "https://github.com/Secondo92/parfumemarked",
        whatILearned: ["Learned why database design affects feature speed later.",
            "Understood authentication and account flows require more planning than they seem."]
    },
    {
        title: "Safer App",
        description: "WPF-based kiosk application for Arla used to present safety material, videos and PDF documents for employees and contractors.",
        tags: ["C#", "XAML", "WPF", "MVVM"],
        link: "https://github.com/Secondo92/SaferRum",
        whatILearned: ["Learned UI/UX decisions matter more than code elegance.",
            "Discovered how real stakeholders change requirements over time.",
            "Understood documentation and clarity reduce friction more than features."],
        titel: "Data forecasting and app development",
        location: "Arla Foods",

    },
    {
        title: "Chess game",
        description: "A fun hobby project in C# WPF with MVVM architecture, turn system, legal move checks and reusable piece classes.",
        tags: ["C#", "XAML", "WPF", "MVVM"],
        link: "https://github.com/Secondo92/Skakspil",
        whatILearned: ["Learned MVVM makes large UI logic maintainable but takes discipline.",
            "Importance of separating game logic from rendering to avoid tangled updates."]
    },
    {
        title: "Backyard birds",
        description: "Full-stack iOS app for bird watchers to log sightings, view species lists, and manage observed birds in a personal backyard catalogue.",
        tags: ["Swift", "MVC", "iOS", "Firestore"],
        link: "https://github.com/Secondo92/BackyardBirds",
        whatILearned: ["This project taught me to think in components and data flow. SwiftUI felt " + 
            " like building React apps, and Firebase highlighted how early data decisions affect everything that comes later"]
    }
];
