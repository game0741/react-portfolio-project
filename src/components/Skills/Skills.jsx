import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaDocker, FaGitAlt, FaNode,FaDatabase,FaUbuntu,FaWindows } from "react-icons/fa6";
import Tilt from 'react-parallax-tilt';

function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skills</h3>
        <ul className={styles.skills_list}>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaSquareJs />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaReact />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaDocker />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaGitAlt />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaNode />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaDatabase />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <FaUbuntu />
              </Tilt>
            </li>
            <li>
              <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                < FaWindows />
              </Tilt>
            </li>
        </ul>
    </div>
  )
}

export default Skills
