import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import custom CSS for additional styling

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="display-4">Welcome to YourHR</h1>
                <p className="lead">
                    YourHR is here to help you find your ideal job role based on your qualifications and preferences.
                </p>
                <hr className="my-4" />
                <p>
                    Sign up now and get started on your journey to finding the perfect job.
                </p>
                <Link to="/signup" className="btn btn-primary btn-lg">
                    Get Started
                </Link>
            </div>
        </div>
    );
}

export default Home;
