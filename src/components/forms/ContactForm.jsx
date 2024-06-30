import { useState } from 'react';
import { Button } from '../decorations';
import { sendEmail } from '../../utils';

const ContactForm = () => {
    const [{ name, email, phone, subject }, setValues] = useState({ name: '', email: '', phone: '', subject: '' });
    const [{ loading, btnText }, setMailState] = useState({ loading: false, error: false, btnText: 'Submit' });

    const handleChange = (e) => {
        if (!e.target || loading) return;
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
        resetMailState();
    };
    function resetMailState() {
        setMailState({ loading: false, btnText: 'Submit' });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setMailState(prev => ({ ...prev, loading: true, btnText: 'Sending Mail' }))
        sendEmail({ name, email, phone, subject })
            .then(() => setMailState(prev => ({ ...prev, btnText: 'Mail Sent' })))
            .catch(() => setMailState(prev => ({ ...prev, btnText: 'Mail Not Sent' })))
            .finally(() => setMailState(prev => ({ ...prev, loading: false })));
    };

    return (
        <form className="contact-form poppins" onSubmit={handleSubmit}>
            <div className="form-content full-border">
                <input value={name} onChange={handleChange} required={true} type="text" name="name" id="name" className="contact-input full-border" placeholder="Name*" />
                <input value={email} onChange={handleChange} required={true} type="email" name="email" id="email" className="contact-input full-border" placeholder='Email*' />
                <input value={phone} onChange={handleChange} type="tel" name="phone" id="phone" className="contact-input full-border" placeholder='Phone (Optional)' />
                <textarea value={subject} onChange={handleChange} required={true} name="subject" className="contact-input textarea" placeholder="Subject*"></textarea>
                <Button submitBtn={true} loading={loading}>{btnText}</Button>
            </div>
        </form>
    )
}

export default ContactForm
