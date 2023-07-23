import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";

const TaskFormPage = () => {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

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
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskFormPage;
