import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'




const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>  

                
        </nav>
        <ul>
            <li>
                <a
                 target="_blank"
                 rel="noreffer"
                 href="https://www.linkedin.com/in/anish-natu-16830b260/"
                 > 
                 <FontAwesomeIcon icon="fab fa-linkedin-in" />
                </a>
            </li>
            <li>
                <a
                 target="_blank"
                 rel="noreffer"
                 href="https://github.com/Anish-Natu/"
                 > 
                    <FontAwesomeIcon icon={['fab', 'fa-github']} color="#4d4d4e" />
                </a>
            </li>
            </ul>    
    </div>    
)

export default Sidebar