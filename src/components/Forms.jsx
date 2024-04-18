import { useState } from 'react';
import '../styles/forms.css';

export default function Forms() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Full Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className='welcome'>
                    <p>Welcome, {formData.name}! Please check your inbox/spam folder for your unique raffle ticket. Thank you for participating!</p>
                </div>
            )}
        </div>
    );
}
