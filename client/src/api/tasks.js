import { instance as axios } from "./config";

export const findAllTasksRequest = () => axios.get("/tasks");

export const findTaskRequest = (id) => axios.get(`/tasks/${id}`);

export const createTaskRequest = (task) => axios.post("/tasks", task);

export const updateTaskRequest = (task) =>
  axios.patch(`/tasks/${task.id}`, task);

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
