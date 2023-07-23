import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  findAllTasksRequest,
  findTaskRequest,
  updateTaskRequest,
} from "../api/tasks";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error("useTasks must be used within a TaskProvider");

  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await findAllTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    const res = await findTaskRequest(id);
    return res.data;
  };

  const createTask = async (task) => {
    await createTaskRequest(task);
  };

  const updateTask = async (id, task) => {
    await updateTaskRequest(id, task);
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        updateTask,
        tasks,
        createTask,
        getTasks,
        getTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
