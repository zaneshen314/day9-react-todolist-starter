import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495bf6868020296630a6e3.mockapi.io/"
})

export const getTodoList = async () =>{
    const  response = await instance.get("/todo");
    return response.data;
}

