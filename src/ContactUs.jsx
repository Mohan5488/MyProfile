import { useState } from "react"
function ContactUs(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feed, setFeed] = useState('');

    const handleChange = (e)=>{
        e.preventDefault();
        if(!name || !email || !message){
            setFeed('Please enter all Fields');
        }else{
            setFeed('Thank you for contacting us! We will get back to you soon.');
        }
        setTimeout(() => {
            setFeed('');
            }, 3000);
        setName('');
        setEmail('');
        setMessage('');
    }
    return(
        <div id="contactUs">
            
            <h1 className="h1">Contact US</h1>
            <p className="feedback-message">{feed}</p>
            <form onSubmit={handleChange}>
                <input type="text" placeholder="Name" value={name} onChange={e=>{setName(e.target.value)}} />
                <input type="email" placeholder="Email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                <textarea placeholder="Your Message" value={message} 
          onChange={(e) => setMessage(e.target.value)} ></textarea>
                <input className="submit-button" type="submit" />
            </form>
            
        </div>
    )
}   
export default ContactUs