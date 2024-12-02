import React from 'react';
import './css/NotFound.css';

const TodoList = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">Oops! The page you're looking for could not be found.</p>
                <button className="go-home-button" onClick={() => window.location.href = '/'}>
                    Go to Home
                </button>
            </div>
        </div>
    );
}

export default TodoList;
