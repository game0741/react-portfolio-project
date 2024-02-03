import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div id='portfolio' className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coding" />
            </Tilt>
            <p>Project Development</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://images.unsplash.com/photo-1629654291663-b91ad427698f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coding" />
            </Tilt>
            <p>Project Linux</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://news.sophos.com/wp-content/uploads/2020/05/Docker-Logo-White-RGB_Vertical-BG_0.png" alt="coding" />
            </Tilt>
            <p>docker</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/VirtualBox_Kali_Linux_21.01_x64_Desktop_GER_26_02_2021_16_59_25.png" alt="coding" />
            </Tilt>
            <p>kali DDos</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://miro.medium.com/v2/resize:fit:1400/1*ycIMlwgwicqlO6PcFRA-Iw.png" alt="coding" />
            </Tilt>
            <p>Python deploy</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://images.ctfassets.net/xwxknivhjv1b/3TJC8kD8b80vzQFbJlbxNJ/2d8df9837f4e217342ef6e12cd1ef7d9/API_Hero.svg" alt="coding" />
            </Tilt>
            <p>API</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
