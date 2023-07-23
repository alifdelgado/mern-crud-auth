import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "../component/TaskItem";

const TasksPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="flex flex-col items-center h-screen">
      <section className="w-10/12 flex gap-2 mx-auto mt-16">
        {tasks.map((task) => (
          <TaskItem task={task} key={task._id} />
        ))}
      </section>
    </div>
  );
};

export default TasksPage;
