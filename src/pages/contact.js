import { useState } from "react"

const Contact = () => {

    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ phone, setPhone ] = useState()
    const [ message, setMessage ] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Name: ${name} Email: ${email} Phone: ${phone} Message: ${message}`)
        // maybe send a modal? Maybe change to another SVG for something received
    }
    return ( 
    <div id="contact">
        <h1>Let's Get Started</h1>
        <form className="contact-form">
            <label>Name</label>
            <input type='text'
            onChange={((e) => setName(e.target.value))}
            value={name}
            ></input>

            <label>Email</label>
            <input type='email'
            onChange={((e) => setEmail(e.target.value))}
            value={email}
            ></input>

            <label>Phone</label>
            <input type='tel'
            onChange={((e) => setPhone(e.target.value))}
            value={phone}
            ></input>

            <label>Message</label>
            <textarea rows={10} cols={10}
            onChange={((e) => setMessage(e.target.value))}
            value={message}
            ></textarea>

            <button onClick={((e) => handleSubmit(e))}>Submit</button>
        </form>
    </div> );
}
 
export default Contact;