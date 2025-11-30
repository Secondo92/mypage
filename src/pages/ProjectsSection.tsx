import { colorChanger } from "../components/Navbar"
import "../style.css";
import { ProjectList } from "../components/ProjectCard";
import { projects } from "../data/projects";



export default function ProjectsSection() {

    return (
        <section id="projects" className="section-grid">
            <div className="projects-container">

                <div className="section-header">
                    <h2>{colorChanger("02. Projects")}</h2>

                    <div className="line" style={{ marginTop: "10px" }}></div>
                </div>
                
                <ProjectList projects={projects} />

            </div>
        </section>

    )
}