import { Button } from '../decorations';

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-content">
                <label for='name'>Name</label>
                <input type="text" name="name" id="name" className="contact-input" />

                <label for='email'>Email</label>
                <input type="email" name="email" id="email" className="contact-input" />
                
                <label for='phone'>Phone</label>
                <input type="tel" name="phone" id="phone" className="contact-input" />

                <label for="text">Topic</label>
                <textarea className="contact-input textarea"></textarea>

                <Button>Submit</Button>
            </div>
        </form>
    )
}

export default ContactForm
