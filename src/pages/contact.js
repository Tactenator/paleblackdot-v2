import { useState } from "react"
import { motion as m } from 'framer-motion'

const Contact = () => {

    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ phone, setPhone ] = useState()
    const [ message, setMessage ] = useState()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(`Name: ${name} Email: ${email} Phone: ${phone} Message: ${message}`)
    //     // maybe send a modal? Maybe change to another SVG for something received
    // }

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 0.2, 
            staggerChildren: 0.2
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return ( 
    <m.div 
        id="contact"
        initial={{y: '100%', opacity: 0}}
        animate={{ y: '0%', opacity: '100%', transition: {delay: 0.3, duration: 0.5, ease: "easeOut" }}}
        exit={{ y: '0%', transition: {duration: 0 } }}
    >   
    <div
    >
        <m.h1
        initial={{ y: '100%'}}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut"}}
        exit={{ opacity: 0, transition: {duration: 0.3 } }}
        >Let's Get Started</m.h1>
    </div>
        <m.form className="contact-form"
        variants={container}
        initial="hidden"
        animate="show"
        data-netlify="true"
        >
            <m.div variants={item}>
                <label>Name</label>
                <input type='text'
                onChange={((e) => setName(e.target.value))}
                value={name}
                ></input>
            </m.div>

            <m.div variants={item}>
                <label>Email</label>
                <input type='email'
                onChange={((e) => setEmail(e.target.value))}
                value={email}
                ></input>
            </m.div>

            <m.div variants={item}>
                <label>Phone</label>
                <input type='tel'
                onChange={((e) => setPhone(e.target.value))}
                value={phone}
                ></input>
            </m.div>

            <m.div variants={item}>
                <label>Message</label>
                <textarea rows={10} cols={10}
                onChange={((e) => setMessage(e.target.value))}
                value={message}
                ></textarea>
            </m.div>

            <button className="contact-button" type="submit">Submit</button>
        </m.form>
    </m.div> );
}
 
export default Contact;