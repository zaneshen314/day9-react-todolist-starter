import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>HomePage
            <br/>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/todo-list">TodoList</Link>
                <Link to="/done-list">DoneList</Link>
            </nav>
        </div>

)
    ;
};

export default HomePage;
