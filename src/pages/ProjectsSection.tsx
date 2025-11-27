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
                    title: "Chess game",
                    description: "A game of chess made in C#"
                },
                {
                    title: "title2",
                    description: "desc2"
                },
                {
                    title: "Chess game",
                    description: "A game of chess made in C#"
                },
                {
                    title: "title2",
                    description: "desc2"
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