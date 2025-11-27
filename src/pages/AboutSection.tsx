import { colorChanger } from "../components/Navbar"


export default function AboutSection() {
    return (
        <section id="about" className="section">
            <div className="section-grid">

                <div className="content-container">
                    <div className="section-header">
                        <h2>{colorChanger("01. About Me")}</h2>

                        <div className="line" style={{ marginTop: "10px" }}></div>
                    </div>
                    <p className="description">
                        My name is Davide Nuccio and I am an
                        engaged computer science graduate with strong user-oriented thinking.
                        With two and a half years of study experience, I have built a solid foundation in Java,
                        JavaScript, SQL, C# and WPF application development, supported by an academic background in physics.
                    </p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <div>
                        <ul className="skills-grid">
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Firebase</li>
                            <li></li>
                        </ul>

                    </div>
                </div>
                <div style={{
                    backgroundImage: "url('/partiboi.jpg')",
                    backgroundSize: "cover",
                    width: "300px",
                    height: "200px",
                    marginTop: "120px",
                    marginLeft: "30px"
                }}></div>

            </div>

        </section>
    )
}

