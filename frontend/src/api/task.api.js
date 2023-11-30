import axios from 'axios'

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const tasksAPI = axios.create({
  baseURL: `${URL}/tasks/api/v1/tasks`,
});


export const getAllTasks = () => tasksAPI.get("/");
export const getTaskById = (idTask) => tasksAPI.get(`/${idTask}`);
export const createTask = (task) => tasksAPI.post("/", task);
export const deleteTask = (idTask) => tasksAPI.delete(`/${idTask}`);
export const updateTask = (idTask, bodyContent) => tasksAPI.put(`/${idTask}/`, bodyContent);


