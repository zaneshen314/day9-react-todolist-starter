import React from 'react';
import './css/NotFound.css';

const TodoList = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">500</h1>
                <p className="not-found-message">Server Error,please try again later</p>
                <button className="go-home-button" onClick={() => window.location.href = '/hard-stop'}>
                    Go to Home
                </button>
            </div>
        </div>
    );
}

export default TodoList;
