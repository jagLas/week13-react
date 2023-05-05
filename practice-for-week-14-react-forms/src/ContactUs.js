import { useState } from "react";

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        const contactInfo = {
            name,
            email,
            phone,
            submittedOn: new Date()
        }

        console.log(contactInfo)

        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        id='name'
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input
                        id='phone'
                        type='text'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;