import { colorChanger } from "../components/Navbar"

export default function AboutSection() {
    return (
        <section id="about" className="section">
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
                    I have a proven ability to collaborate effectively in high-pressure environments while delivering innovative solutions — 
                    demonstrated through projects such as the Saferrum application for Arla.
                </p>
            </div>
        </section>
    )
}

