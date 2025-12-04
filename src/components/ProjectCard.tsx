import "../style.css";
import { Folder } from "lucide-react";
import { Github } from "lucide-react";

export interface ProjectCardProp {
    title: string;
    description: string;
    tags?: string[];
    image?: string;
    link?: string;
    githubLink?: string;
    whatILearned: string[];
    location?: string;
    titel?: string;
}

export interface ProjectCardPropList {
    projects: ProjectCardProp[];
}

export default function ProjectCard({ title, description, tags, link, githubLink }: ProjectCardProp) {
    const cardHref = link ? link : githubLink;

    return (
        <div className="card-wrapper">
            <a
                href={cardHref}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
            >
                <div className="projects-card">
                    <div className="projects-header">
                        <Folder size={40} color="#64ffda" strokeWidth={1} />
                    </div>

                    <div className="projects-title">
                        <p>{title}</p>
                    </div>

                    <div className="projects-body">
                        {description}
                    </div>

                    <ul className="projects-footer li">
                        {tags?.map((tag, index) => (
                            <li key={index}>{tag.replace("+", " ")}</li>
                        ))}
                    </ul>
                </div>
            </a>

            {githubLink && (
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon"
                >
                    <Github size={20} strokeWidth={1.5} className="github" />
                </a>
            )}
        </div>
    );
}

export const ProjectList = ({ projects }: ProjectCardPropList) => {
    if (!projects || projects.length === 0) return null;

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
                    githubLink={project.githubLink}
                    whatILearned={project.whatILearned}
                    location={project.location}
                    titel={project.titel}
                />
            ))}
        </div>
    );
};
