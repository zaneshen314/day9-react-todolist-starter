import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495bf6868020296630a6e3.mockapi.io/"
})

export const getTodoList = async () =>{
    const  response = await instance.get("/todo");
    return response.data;
}

export const addTodo = async (newTodo) => {
    try {
        const response = await instance.post("/todo", newTodo);
        return response.data;
    } catch (error) {
        console.error('添加 Todo 失败:', error);
        throw error;
    }
}

export const deleteById = async (id) => {
    try {
        const response = await instance.delete(`/todo/${id}`);
        return response.data;
    } catch (error) {
        console.error(`删除 Todo ${id} 失败:`, error);
        throw error;
    }
}

export const update = async (newTodo) => {
    try {
        const response = await instance.put(`/todo/${newTodo.id}`,newTodo);
        return response.data;
    } catch (error) {
        console.error('更新 Todo 失败:', error);
        throw error;
    }
}