import "../style.css";

export default function ContactSection() {
    return (
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
                            transform: "translateX(680px)",
                            marginTop: "-140px",
                        }}
                    >

                        <a href="mailto:Secondo92@hotmail.com" className="getintouch">
                            Say Hello
                        </a>

                    </div>
                </div>

                {/* RIGHT */}
                <div>
                    <p
                        style={{
                            fontSize: "22px",
                            lineHeight: 1.6,
                            color: "#c6d4ed",
                            marginTop: "65px",
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
                    </h3>

                </div>
            </div>
        </section>
    )
}