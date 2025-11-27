import { colorChanger } from "../components/Navbar"
import "../style.css";
import { type ProjectCardProp, ProjectList } from "../components/ProjectCard";
import { useState, useEffect } from 'react';


export default function ProjectsSection() {
    const [projectsData, setProjectsData] = useState<ProjectCardProp[]>([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = () => {
            const dummyProjects: ProjectCardProp[] = [
                {
                    title: "Perfumemarket Web App",
                    description: "Full-stack marketplace app for perfume listings with product cards, search, user accounts and database-stored item data.",
                    tags: ["React", "TypeScript", "HTML", "CSS", "Firestore"],
                    link: "https://github.com/Secondo92/parfumemarked"
                },
                {
                    title: "Safer App",
                    description: "WPF-based kiosk application for Arla used to present safety material, videos and PDF documents for employees and contractors.",
                    tags: ["C#", "XAML", "WPF", "MVVM"],
                    link: "https://github.com/Secondo92/SaferRum"
                },
                {
                    title: "Chess game",
                    description: "A fun hobby project in C# WPF with MVVM architecture, turn system, legal move checks and reusable piece classes.",
                    tags: ["C#", "XAML", "WPF", "MVVM"],
                    link: "https://github.com/Secondo92/Skakspil"
                },
                {
                    title: "Backyard birds",
                    description: "Full-stack iOS app for bird watchers to log sightings, view species lists, and manage observed birds in a personal backyard catalogue.",
                    tags: ["Swift", "MVC", "iOS", "Firestore"],
                    link: "https://github.com/Secondo92/BackyardBirds"
                }
            ];
            setTimeout(() => {
                setProjectsData(dummyProjects)
                setLoading(false);
            }, 1500);
        };
        fetchProjects();
        console.log(projectsData)
    }, [])

    return (
        <section id="projects" className="section">
            <div className="projects-container">

                <div className="section-header">
                    <h2>{colorChanger("03. Projects")}</h2>

                    <div className="line" style={{ marginTop: "10px" }}></div>
                </div>

                <ProjectList projects={projectsData} isLoading={isLoading} />

            </div>
        </section>

    )
}