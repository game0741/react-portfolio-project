import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaDev,  FaLinux  } from "react-icons/fa6";

function Services() {
  return (
    <div id='services' className={styles.services_con}>
        <h3 className={styles.services_title}>My Services</h3>
        <div className={styles.services_list}>
            <div className={styles.services_items}>
                <FaCode />
                <h4>Web Development</h4>
                <p>
                I'm studying about it.
                </p>
            </div>
            <div className={styles.services_items}>
                <FaDev />
                <h4>DevOps</h4>
                <p>
                I can develop quickly.
                </p>
            </div>
            <div className={styles.services_items}>
                < FaLinux />
                <h4>System Engineer</h4>
                <p>
                I'm an expert in many types of OS.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services
