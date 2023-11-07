import { useState } from 'react';
import { Button } from '../decorations';

const ContactForm = () => {
    const [{ name, email, phone, subject }, setValues] = useState({ name: '', email: '', phone: '', subject: '' });

    const handleChange = (e) => {
        if (!e.target) return;
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="contact-form poppins" onSubmit={handleSubmit}>
            <div className="form-content full-border">
                <input value={name} onChange={handleChange} required={true} type="text" name="name" id="name" className="contact-input full-border" placeholder="Name*" />
                <input value={email} onChange={handleChange} required={true} type="email" name="email" id="email" className="contact-input full-border" placeholder='Email*' />
                <input value={phone} onChange={handleChange} type="tel" name="phone" id="phone" className="contact-input full-border" placeholder='Phone (Optional)' />
                <textarea value={subject} onChange={handleChange} required={true} name="subject" className="contact-input textarea" placeholder="Subject*"></textarea>
                <Button>Submit</Button>
            </div>
        </form>
    )
}

export default ContactForm
