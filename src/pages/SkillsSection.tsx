import { colorChanger } from "../components/Navbar"
import "../style.css";
import { useState } from "react";
import { projects } from "../data/projects.ts"

export default function SkillsSection() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const itemHeight = 48;

    return (
        <section id="skills" className="section-grid">


            <div className="content-container">

                <div className="section-header">
                    <h2>{colorChanger("03. What I've learned from my projects")}</h2>

                    <div className="line" style={{ marginTop: "10px" }}></div>
                </div>
                <div className="content-grid">


                    <ul
                        className="skills-list"
                        style={{
                            ["--items" as any]: projects.length,
                            ["--itemHeight" as any]: (itemHeight*1.062) + "px"
                        }}
                    >
                        <div
                            className="skills-selected-bar"
                            style={{
                                top: selectedIndex * (itemHeight*1.062) + "px",
                                height: (itemHeight*1.062) + "px"
                            }}
                        />
                        {projects.map((project, index) => (
                            <li
                                key={index}
                                className={selectedIndex === index ? "selected" : ""}
                                onClick={() => setSelectedIndex(index)}
                            >
                                {project.title}
                            </li>
                        ))}
                    </ul>
                    <div className="skills-list-box">
                        <div className="skills-list-title">
                            <p>
                                {projects[selectedIndex].titel ? projects[selectedIndex].titel : "Hobby project"}
                                {projects[selectedIndex].location && (
                                    <>{" "} <span className="location-text"> @ {projects[selectedIndex].location}</span></>
                                )}
                            </p>

                        </div>
                        <ul className="skills-list-description">
                            {projects[selectedIndex].whatILearned.map((learn) => (
                                <li>
                                    {learn}
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
            </div>

        </section>
    )
}