import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';  // Import custom CSS for additional styling

function Success() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="alert alert-success text-center shadow-sm rounded">
                        <h2 className="mb-4">Signup Successful!</h2>
                        <p>Your resume has been uploaded successfully.</p>
                        <Link to="/" className="btn btn-primary mt-3">
                            Go to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
