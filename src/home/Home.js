import React, { useEffect } from 'react'
import me from '../assets/me.png'
// import $ from 'jquery'
import cv from '../assets/my-cv.pdf'
import Cursor from '../cursor/Cursor'
import Spacor from '../spacor/Spacor'
import { motion } from 'framer-motion'
import BgShape from '../bg_shape/BgShape'
import Projects from '../projects/Projects'
export default function Home(props) {

    const skills_coding = [
        'React-js',
        'JavaScript',
        'HTML',
        'CSS',
        'SASS',
        'Next-js',
        'Redux',
        'jQuery',
        'GSAP',
        'Bootstrap',
        'Git-Hub'
    ]
    const skills_cms = [
        'Word Press',
        'Shopify',
        'Godaddy'
    ]
    const skills_designing = [
        'Photoshop',
        'Illustrator',
    ]
    const skills_database = [
        'Node-js',
        'Express',
    ]
    useEffect(() => {

    })
    return (
        <>
            <div className='home-cont'>

                <Cursor cursorVariant={props.cursorVariant} />

                <div className='left-cont'>
                    <motion.div
                        initial={{ x: '-50vw' }}
                        animate={{ x: '0' }}
                        transition={{ type: 'spring', duration: 1, bounce: 0.3, delay: 0.5 }}
                    >
                        <div className='rabee-info' onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                            <h1 className={'my-name'}>Rabee Jaramani</h1>
                            <h2 className='web-developer'>Web Developer</h2>
                            <div className='rabee-links'>
                                <div><a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/rabee-aljaramani-4b005b193'><i className="fa-brands fa-linkedin-in"></i></a></div>
                                <div><a rel="noreferrer" target='_blank' href='https://github.com/rabeexxxx'><i className="fa-brands fa-github"></i></a></div>
                                <div className='cv-icon'> <a href={cv} target="_blank" className='cv-link' rel="noreferrer" ><i className="fa-solid fa-id-card"></i></a></div>
                            </div>
                            <motion.div className='bg-shape-motoin-div'
                                initial={{ transform: 'scale(0)' }}
                                animate={{ transform: 'scale(1)' }}
                                transition={{ type: 'spring', bounce: 0.5, duration: 1.5, delay: 2 }}
                            >
                                <BgShape />
                            </motion.div>

                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className='rabee-image-div'>
                            <img onMouseEnter={props.textEnter} onMouseLeave={props.textLeave} src={me} alt='me' />
                        </div>
                    </motion.div>
                </div>
                <div className='right-cont'>
                    <div className='about-div'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            <h4 className='h4-title'>ABOUT</h4>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            <div className='about-text'>
                                <ul className='about-list'>
                                    <li>First-rate Informatics Engineer with Innovative tech mind and +10 years as a total experience in developing,
                                        programming and supporting.</li>
                                    <li>Recently I am a Web Developer at <a className='link-text' rel="noreferrer" target='_blank' href='https://apparelgroupglobal.com/en/'>Apparel-Group.</a></li>
                                    <li>4+ years of experience in React-js, JavaScript, HTML and CSS.</li>
                                    <li>A solid understanding of Agile Scrum Methodology.</li>
                                    <li>Ambitious problem solver with a passion for online businesses and would like to join a team of like-minded</li>
                                    <li>Constantly striving to improve my skills in new technologies.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                    <div className='skills-div' onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            <h4 className='h4-title skills-title'>SKILLS</h4>
                        </motion.div>
                        <div className='skills-list' >
                            <motion.div className='skill-title-motion-div'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                <span className='skill-title'>Coding:</span>
                            </motion.div>
                            {skills_coding.map((skill, i) => {
                                return <motion.div className='skill-p' key={skill}
                                    initial={{ x: '120vw' }}
                                    animate={{ x: '0' }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                ><span>{skill}</span></motion.div>
                            })}
                        </div>
                        <Spacor height={'20px'} />
                        <div className='skills-list skill-title-and-p' >
                            <motion.div className='skill-title-motion-div'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                <span className='skill-title'>CMS:</span>
                            </motion.div>
                            {skills_cms.map((skill, i) => {
                                return <motion.div className='skill-p' key={skill}
                                    initial={{ x: '120vw' }}
                                    animate={{ x: '0' }}
                                    transition={{ duration: 3, delay: i * 0.4 }}
                                ><span >{skill}</span></motion.div>
                            })}
                        </div>
                        <Spacor height={'20px'} />
                        <div className='skills-list' >
                            <motion.div className='skill-title-motion-div'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                <span className='skill-title'>Database:</span>
                            </motion.div>
                            {skills_database.map((skill, i) => {
                                return <motion.div className='skill-p' key={skill}
                                    initial={{ x: '120vw' }}
                                    animate={{ x: '0' }}
                                    transition={{ duration: 3, delay: i * 0.5 }}
                                ><span>{skill}</span></motion.div>
                            })}
                        </div>
                        <Spacor height={'20px'} />
                        <div className='skills-list' >
                            <motion.div className='skill-title-motion-div'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                <span className='skill-title skill-title-and-p'>Designing:</span>
                            </motion.div>
                            {skills_designing.map((skill, i) => {
                                return <motion.div className='skill-p' key={skill}
                                    initial={{ x: '120vw' }}
                                    animate={{ x: '0' }}
                                    transition={{ duration: 3, delay: i * 0.6 }}
                                ><span>{skill}</span></motion.div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Projects on_Mouse_Enter={props.textEnter} on_Mouse_Leave={props.textLeave} />

        </>
    )
}
