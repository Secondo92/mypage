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
                        Hello, my name is Davide Nuccio, and I genuinely enjoy building things through code.
                        My interest in programming started when I was very young, but I never pursued it fully back then.
                        I already spent most of my spare time sitting at a computer, so working in front of one as well felt counter-intuitive.

                        That changed during my bachelor in physics, where I had my first real hands-on experience with programming.
                        It clicked instantly. Suddenly I went from solving problems on paper to creating solutions that actually did something, and that feeling stuck with me.
                        Not long after, I made the decision to leave physics behind and pursue software development instead.

                        Fast forward to today: I have completed my computer science degree and have spent most of my time working with object oriented programming and web development.
                        Along the way I have picked up a love for React and TypeScript, and I'm excited to keep building, learning and creating more.
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <div>
                        <ul className="skills-grid">
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Firestore</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>

                    </div>
                </div>
                <div className="profileWrapper">
                    <img src="/cvjobnetbillede.png" alt="Profile" className="profileImage" />
                    <div className="imageFrame"></div>
                </div>

            </div>

        </section>
    )
}

