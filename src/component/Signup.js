import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';  // Custom CSS for additional styling

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        resume: null,
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle file selection
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0],
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const userData = new FormData();
        userData.append('username', formData.username);
        userData.append('email', formData.email);
        userData.append('password', formData.password);
        userData.append('resume_file', formData.resume);
    
        console.log("Submitting form data:", [...userData]);  // Debugging: Log form data
    
        axios.post('http://localhost:8000/api/signup/', userData)
            .then(response => {
                console.log("Signup successful:", response.data);
                setMessage('Signup successful!');
                navigate('/success');  // Redirect to success page on successful signup
            })
            .catch(error => {
                console.error("Signup failed:", error.response ? error.response.data : error.message);
                setMessage('Signup failed: ' + (error.response ? error.response.data : error.message));
            });
    };
    

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {message && <div className="alert alert-info">{message}</div>}
                    <form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Upload Resume</label>
                            <input
                                type="file"
                                name="resume"
                                onChange={handleFileChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
