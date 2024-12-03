import instance from "./interceptor";


export const getTodoList = async () =>{
    const  response = await instance.get("/todos");
    return response.data;
}

export const addTodo = async (newTodo) => {
    const response = await instance.post("/todos", newTodo);
    return response.data;
}

export const deleteById = async (id) => {
    const response = await instance.delete(`/todos/${id}`);
    return response.data;
}

export const update = async (newTodo) => {
    const response = await instance.put(`/todos/${newTodo.id}`,newTodo);
    return response.data;
}