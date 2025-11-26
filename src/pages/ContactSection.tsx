import "../style.css";

export default function ContactSection(){
    return(
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
    )
}