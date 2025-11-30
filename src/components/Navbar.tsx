import "../style.css";
import { useEffect, useState } from "react";

export function colorChanger(text: String) {
    let split = text.split(" ")
    console.log(split)
    let word = ""
    split.forEach((s, index) => {
        if(index != 0)
        word = word.concat(s + " ")
    })
    return <> <span style={{ color: "#64ffda" }}>{split[0].toString()}</span> {word} </>
}

export default function Navbar() {


    const [active, setActive] = useState("hero")

    useEffect(() => {
        const sections = document.querySelectorAll("section")

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(entry.target.id)
                    setActive(entry.target.id)
                }
            });
        }, { threshold: 0.6 })

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="navbar-simple">
            
            <a className={active === "about" ? "active" : ""} href="#about">{colorChanger("01. About")}</a>
            <a className={active === "projects" ? "active" : ""} href="#projects">{colorChanger("02. Projects")}</a>
            <a className={active === "skills" ? "active" : ""} href="#skills">{colorChanger("03. What I learned")}</a>
            <a className={active === "contact" ? "active" : ""} href="#contact">{colorChanger("04. Contact")}</a>
        </nav>
    );
}

