import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import './index.scss';

const Contact = () => {
    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>Contact Me</h1>
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/anish-natu-16830b260/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/natuanish" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaGithubSquare /> GitHub
                    </a>
                </div>
                <div className="contact-details">
                    <p><strong>Email:</strong> anishsn2203@gmail.com</p>
                    <p><strong>Phone:</strong> +358 40 3657 107</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
