import { colorChanger } from "../components/Navbar"
import "../style.css";
import { type ProjectCardProp, ProjectList } from "../components/ProjectCard";
import { useState } from 'react';
import { projects } from "../data/projects";



export default function ProjectsSection() {
    const [projectsData, setProjectsData] = useState<ProjectCardProp[]>(projects)
    const [isLoading, setLoading] = useState(true);

    return (
        <section id="projects" className="section-grid">
            <div className="projects-container">

                <div className="section-header">
                    <h2>{colorChanger("02. Projects")}</h2>

                    <div className="line" style={{ marginTop: "10px" }}></div>
                </div>
                
                <ProjectList projects={projectsData} isLoading={isLoading} />

            </div>
        </section>

    )
}