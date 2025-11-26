export default function HomePage() {
    return (
        <section id="hero" className="section">
            <div
                style={{
                    backgroundColor: "#0a192f",
                    color: "#e9e9e9ff",
                    minHeight: "50vh",
                    paddingTop: "60px",
                    paddingRight: "200px",
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
    )
}