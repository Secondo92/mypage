import "../style.css";
import { colorChanger } from "../components/Navbar";

export default function HomePage() {
    return (
        <div>
            <section id="hero" className="section">
                <div
                    style={{
                        backgroundColor: "#0a192f",
                        color: "#e9e9e9ff",
                        minHeight: "100vh",
                        paddingTop: "60px",
                        paddingRight: "400px",
                    }}
                >
                    <div style={{ maxWidth: "800px", margin: "auto" }}>

                        <p style={{ color: "#64ffda", fontSize: "18px", marginBottom: "8px", marginRight: "30px" }}>
                            Hi, my name is
                        </p>
                        <h1 style={{ color: "#e6f1ff", fontSize: "60px", margin: 0, fontWeight: 700 }}>
                            Davide Nuccio.
                        </h1>
                        <h2
                            style={{
                                fontSize: "60px",
                                margin: 0,
                                fontWeight: 700,
                                color: "#8892b0",
                            }}
                        >
                            I'm a recent computer science graduate.
                        </h2>
                        <p
                            style={{
                                marginTop: "24px",
                                fontSize: "18px",
                                lineHeight: 1.6,
                                color: "#8892b0",
                                maxWidth: "540px",
                            }}
                        >
                            I have experience in Java, C#, JavaScript,
                            SQL and a growing interest in React and TypeScript. Open to <span style={{ color: "#64ffda" }}>job</span> and <span style={{ color: "#64ffda" }}>internship </span>
                            opportunities.
                        </p>

                    </div>
                </div>
            </section>

            <div className="block">
                <section id="about" className="section">
                <h2>{colorChanger("01. About Me")}</h2>
                <p>My name is Davide Secondo Nuccio and I'm bla bla</p>
            </section>
            </div>

            <div className="block">
                <section id="skills" className="section">
                <h2>{colorChanger("02. Skills")}</h2>
                <p>...</p>
            </section>
            </div>
            

            <section id="projects" className="section">
                <h2>{colorChanger("03. Projects")}</h2>
                <p>...</p>
            </section>

            <section id="contact" className="section contact-section">
                <div className="contact-grid">
                    {/* LEFT */}
                    <div>
                        <h1
                            style={{
                                fontSize: "100px",
                                fontWeight: 700,
                                lineHeight: "0.9",
                                fontFamily: "'Times New Roman', serif",
                            }}
                        >
                            GET IN<br />
                            <span
                                style={{
                                    display: "inline-block",
                                    transform: "translateX(145px)",
                                }}
                            >
                                TOUCH
                            </span>
                        </h1>

                        <div
                            style={{
                                transform: "translateX(155px)",
                                marginTop: "60px",
                            }}
                        >
                            <span
                                style={{
                                    borderBottom: "2px solid #ffffff",
                                    paddingBottom: "5px",
                                    fontSize: "26px",
                                    cursor: "pointer",
                                }}
                            >
                                Secondo92@hotmail.com
                            </span>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <p
                            style={{
                                fontSize: "22px",
                                lineHeight: 1.6,
                                color: "#c6d4ed",
                            }}
                        >
                            I'm always open to a friendly conversation, whether over coffee
                            or a quick call.
                        </p>

                        <h3
                            style={{
                                fontSize: "14px",
                                letterSpacing: "2px",
                                opacity: 0.7,
                                marginTop: "40px",
                            }}
                        >
                            SOCIAL LINKS
                        </h3>

                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
