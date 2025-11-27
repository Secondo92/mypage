import "../style.css";

export interface ProjectCardProp {
    title: string;
    description: string;
    tags?: string[];
    image?: string;
};

export interface ProjectCardPropList {
    projects: ProjectCardProp[]
    isLoading: boolean
}

export default function ProjectCard({ title, description }: ProjectCardProp) {
    return (
        <div className="projects-card">
            <div className="projects-header">Icon?</div>
            <div className="projects-body">
                <p style={{ fontSize: 20 }}>{title}</p>
                {description}
            </div>
            <div className="projects-footer">footer</div>
        </div>
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
            />
        ))}
        </div>

    )

}
