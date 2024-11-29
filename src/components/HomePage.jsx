import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="page-title">Welcome to the HomePage</h1>
            <nav className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/todo-list" className="nav-link">TodoList</Link>
                <Link to="/done-list" className="nav-link">DoneList</Link>
            </nav>
        </div>
    );
};

export default HomePage;
