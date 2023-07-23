import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/tasks");
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    };
    loadTask();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        className="w-5/12 py-5 mx-auto mt-5 bg-gray-200 border rounded shadow shadow-gray-400"
        onSubmit={onSubmit}
      >
        <div className="w-3/4 mx-auto mb-3 flex flex-col">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="w-full px-4 py-2 rounded"
            placeholder="Title"
            {...register("title")}
            autoFocus
          />
        </div>
        <div className="w-3/4 mx-auto mb-3 flex flex-col">
          <label>Description</label>
          <textarea
            name="description"
            className="w-full px-4 py-2 rounded"
            placeholder="Description"
            {...register("description")}
          ></textarea>
        </div>
        <div className="w-3/4 mx-auto mb-3">
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded shadow shadow-blue-900"
          >
            Save task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskFormPage;
