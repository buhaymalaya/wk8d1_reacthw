import { useState } from 'react';
import '../styles/forms.css';

export default function Forms() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        imdb_rating: '',
        first_name: '',
        last_name: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://react-flask-wk6d1hw.onrender.com/director', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to submit data');
            }
            const data = await response.json();
            setResponseData(data);
            setSubmitted(true);
        } catch (error) {
            setError(error.message);
            console.error('Error submitting data:', error);
        }
    }

    return (
        <div>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    </label>
                    <label>
                        IMDB Rating:
                        <input type="text" name="imdb_rating" value={formData.imdb_rating} onChange={handleChange} />
                    </label>
                    <label>
                        First Name:
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className='welcome'>
                    {error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <>
                            <p>Welcome, {formData.username}! Please check your inbox to verify your email address. Thanks!</p>
                            <p>Check Your Info: {JSON.stringify(responseData)}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
