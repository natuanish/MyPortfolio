import './index.scss'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect (() => {
    return setTimeout(() => {
    setLetterClass('text-animate-hover')
    }, 3000)
    }, [])

  return (
    <div className="container about-page">
        <div className="text-zone">
        <h1>
            <AnimatedLetters
               letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
            />
        </h1>
        <p> Hey! My name is Anish Natu, I currently study Software Engineering as a 2nd Year at Tampere Uni of Applied Sciences. I'm an aspiring software developer and have  in several programming languages and technologies, including C++, Java, 
          JavaScript, Python, React.js, and AWS. I am passionate about using technology to create innovative solutions that solve real-world problems.</p>
        <p>I have experience working with CI/CD pipelines and enjoy automating development processes to improve efficiency and productivity. In addition, I am very interested
           in the fields of machine learning, artificial intelligence, and augmented reality, and have experience working on app development projects that incorporate these 
           technologies.</p>
        <p>I am always looking for new opportunities to learn and grow as a developer, and I am excited to explore new technologies and solve new challenges.</p> 
        </div>

        <div className='stage-cube-cont'>
              <div className='cubespinner'>
                  <div className='face1'>
                      <FontAwesomeIcon icon />  
                    </div>  
                </div>  
        </div>
    </div>
   )
}

export { Link }
export default About;


