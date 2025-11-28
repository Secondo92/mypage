import { colorChanger } from "../components/Navbar"
import "../style.css";

export default function SkillsSection() {
    return (
        <section id="skills" className="section">

            <div className="content-container">

                <div className="section-header">
                    <h2>{colorChanger("02. Skills")}</h2>

                    <div className="line" style={{ marginTop: "10px" }}></div>
                </div>
                <div className="skillsBlock">
                    <h3>Core strengths</h3>
                    <p>
                        Developing software from idea to working product. Structured problem
                        solving and ownership of features from planning to testing and
                        delivery.
                    </p>
                </div>

                <div className="skillsBlock">
                    <h3>Languages</h3>
                    <p>C#, JavaScript, TypeScript, SQL, and basic Python.</p>
                </div>

                <div className="skillsBlock">
                    <h3>Frameworks and technologies</h3>
                    <p>
                        React, Node, Express, WPF, MVVM, .NET, Entity Framework, Prisma,
                        REST APIs, HTML, and CSS.
                    </p>
                </div>

                <div className="skillsBlock">
                    <h3>Fullstack experience</h3>
                    <p>
                        Building applications with authentication, databases, and server
                        logic. Comfortable working across frontend and backend. Experience
                        with routing, state management, API integration, and deployment.
                    </p>
                </div>

                <div className="skillsBlock">
                    <h3>Databases and data work</h3>
                    <p>
                        MSSQL, PostgreSQL, Prisma ORM, and JSON based APIs. Experience with
                        forecasting, cross referencing data sets, and estimating workload
                        during my internship at Arla.
                    </p>
                </div>

                <div className="skillsBlock">
                    <h3>UI and UX</h3>
                    <p>
                        WPF applications with touch friendly layouts and simple navigation.
                        React frontends with a clear component structure, modals, forms,
                        state handling, and routing.
                    </p>
                </div>

                <div className="skillsBlock">
                    <h3>Machine learning and analysis</h3>
                    <p>
                        Hands on experiments with neural networks using TensorFlow.NET and
                        ML.NET. Worked with forecasting to estimate staffing needs based on
                        historical data and order logs.
                    </p>
                </div>

                <div className="skillsBlock">
                    <h3>Tools and workflows</h3>
                    <p>
                        Git, Visual Studio, VS Code, Postman, Figma, Jira, and Scrum based
                        iteration.
                    </p>
                </div>

                <div className="skillsBlock">
                    <h3>Projects that shaped my skills</h3>
                    <ul>
                        <li>WPF chess game.</li>
                        <li>
                            Parfumemarked, a fullstack marketplace with login, listings, and
                            image uploads.
                        </li>
                        <li>
                            E2 scripting for Garrys Mod using external APIs and visual overlays.
                        </li>
                        <li>
                            Various projects with product matching and store data based on APIs.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}