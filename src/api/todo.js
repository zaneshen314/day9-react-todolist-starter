import instance from "./interceptor";


export const getTodoList = async () =>{
    const  response = await instance.get("/todos");
    return response.data;
}

export const addTodo = async (newTodo) => {
    try {
        const response = await instance.post("/todos", newTodo);
        return response.data;
    } catch (error) {
        console.error('添加 Todo 失败:', error);
        throw error;
    }
}

export const deleteById = async (id) => {
    try {
        const response = await instance.delete(`/todos/${id}`);
        return response.data;
    } catch (error) {
        console.error(`删除 Todo ${id} 失败:`, error);
        throw error;
    }
}

export const update = async (newTodo) => {
    try {
        const response = await instance.put(`/todos/${newTodo.id}`,newTodo);
        return response.data;
    } catch (error) {
        console.error('更新 Todo 失败:', error);
        throw error;
    }
}