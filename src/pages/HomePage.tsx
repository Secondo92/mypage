import "../style.css";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
import Hero from "./Hero.tsx";

export default function HomePage() {
    return (
        <div>
            <div className="hero">
                <Hero />
            </div>

            <div className="block">
                <AboutSection />
            </div>

            <div className="block">
                <ProjectsSection />
            </div>

            <div className="block">
                <SkillsSection />
            </div>
            

            <div className="block">
                <ContactSection />
            </div>
        </div>
    );
}
