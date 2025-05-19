import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Home.css';

import projects from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import TechSkills from '../../components/TechSkill/TechSkill';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    const totalPanels = projects.length;
    const scrollLength = scrollElement.scrollWidth - window.innerWidth;

    gsap.to(scrollElement, {
      x: () => -scrollLength,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${scrollLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects]);

  
  return (
    <>
        <section className="banner">
            <div className="container">
                <h1>Web Developer</h1>

                <div className='banner-text'>
                    <div className="lets-talk">
                        <h4>Let's Talk</h4>
                        <Link to='mailto:uttamkumar9613@gmail.com'>uttamkumar9613[at]gmail.com</Link>
                    </div>
                    <div className="scroll-down">
                        <span>Scroll Down</span>
                        <IoIosArrowRoundDown className='down-arrow'/>
                    </div>
                    <div className="info">
                        <h4 className='info-title'>Summary</h4>
                        <p>Hi, I'm Uttam Kumar, a Web Developer. I build creative and functional digital experiences. Explore my projects, learn more about me, and feel free to get in touch!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="our-work">
            <div className="container">
                <div className="text">
                    <h2 className='heading'>Projects</h2>
                    <p>As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
                </div>
                <div className="more-link">
                    <Link to='/projects'>More</Link>
                    <IoIosArrowRoundForward className='right-arrow'/>
                </div>
            </div>

            <div className="container" ref={containerRef}>
                <div className="project-list" ref={scrollRef}>
                    {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        alt={project.alt}
                        title={project.title}
                        category={project.category}
                        id={project.id}
                        slug={project.slug}
                    />
                    ))}
                </div>
            </div>
        </section>

        <section className="tech-skills">
            <div className="container">
                <div className="text">
                    <h2 className='heading'>Technical Skills</h2>
                    <p>With extensive experience in developing modern, responsive web applications, I specialize in creating user-friendly digital solutions using the latest web technologies. My expertise ranges from front-end frameworks like React and Vue.js to back-end technologies such as Node.js and Python, ensuring the development of intuitive, high-performance web platforms tailored to your brand's needs.</p>
                </div>

                <TechSkills />
            </div>
        </section>
    </>
  );
};

export default Home;
