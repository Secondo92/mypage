import "../style.css";
import { Folder } from "lucide-react";
import { Github } from 'lucide-react';

export interface ProjectCardProp {
    title: string;
    description: string;
    tags?: string[];
    image?: string;
    link?: string;
};

export interface ProjectCardPropList {
    projects: ProjectCardProp[]
    isLoading: boolean
}

function GithubIcon({ url }: { url?: string }) {
    if (!url) {
        return null;
    }
    return <Github size={20} strokeWidth={1.5} className="github" />
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProp) {
    return (
        <a href={link} target="_blank" className="project-link">
            <div className="projects-card">
                <div className="projects-header">
                    <Folder size={40} color="#64ffda" strokeWidth={1} />
                    <GithubIcon url={link}/>

                </div>

                <div className="projects-title">

                    <p>{title}</p>

                </div>

                <div className="projects-body">
                    {description}
                </div>

                <ul className="projects-footer li">
                    {tags?.map((tag, index) => (
                        <li
                            key={index}
                        >{
                                tag.replace('+', ' ')
                            }
                        </li>
                    ))}
                </ul>

            </div>
        </a>
    )
}

export const ProjectList = ({ projects, isLoading }: ProjectCardPropList) => {

    if (isLoading) {
        // TODO: Display loading med JSX
    }

    if (!projects || projects.length === 0) {
        // TODO: Display error med JSX
    }

    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    link={project.link}
                />
            ))}
        </div>

    )

}
