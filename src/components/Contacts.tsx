import { Github } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export default function Contacts() {
    return (
        <>
            <div>
                <ul className="myElement">
                    <li>
                        <a href="https://github.com/Secondo92"><Github size={30} strokeWidth={1} /> </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/davide.s.nuccio"><Facebook size={30} strokeWidth={1} /> </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/davide-nuccio-26719334b/"><Linkedin size={30} strokeWidth={1} /> </a>
                    </li>
                </ul>

                <ul className="myEmail">
                    <li>
                        <a href="mailto:Secondo92@hotmail.com">Secondo92@hotmail.com</a>
                    </li>
                </ul>

            </div>
        </>)
}