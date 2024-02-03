import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>Works very well</p>
            <img src="https://e7.pngegg.com/pngimages/374/574/png-clipart-illustrator-homo-sapiens-%E7%AE%A1%E7%90%86%E8%81%B7-teacher-man-child-face.png" alt="clients" />
            <h4>John</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>Give good advice.</p>
            <img src="https://e7.pngegg.com/pngimages/890/751/png-clipart-comics-female-girl-girl-face-comics-child.png" alt="clients" />
            <h4>Jane</h4>
            <p className={styles.bio}>Sales department</p>
        </div>
        <div className={styles.testi_items}>
            <p>Can you help me.</p>
            <img src="https://e7.pngegg.com/pngimages/988/731/png-clipart-cartoon-animated-film-man-character-man-comics-face.png" alt="clients" />
            <h4>plant</h4>
            <p className={styles.bio}>Department head</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
