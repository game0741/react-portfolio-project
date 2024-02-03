import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope  } from "react-icons/fa6";

function Contact() {
  return (
    <div id='contact' className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles.contact_desc}>
                 Please believe in us.
                </p>
                <p className={styles.contact_address}>
                 Bangkok, Thailand <br />

                </p>
                <p><FaPhone /> (+66) 61 356 1390 </p>
                <p><FaEnvelope /> dataone3210@gmail.com</p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder='eg. Woradon' />
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder='eg. Kaowkong' />
                        </div>
                    </div>
                    <label htmlFor="email address">Email address</label>
                    <input type="email" placeholder='eg. woradon@gmail.com' />
                    <label htmlFor="email address">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
