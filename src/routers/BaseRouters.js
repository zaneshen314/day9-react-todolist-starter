import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom';
import HomePage from '../components/HomePage';
import TodoList from '../components/TodoList';
import NotFound from '../components/NotFound';
import {DoneList} from "../components/DoneList";


const BaseRouters = () => {
    return (
        <Routers>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/todo-list"} element={<TodoList/>}/>
                <Route path={"/done-list"} element={<DoneList/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </Routers>

    );
};

export default BaseRouters;
