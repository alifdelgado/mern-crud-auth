import { useForm } from "react-hook-form";

const TaskFormPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        className="w-5/12 py-5 mx-auto mt-5 bg-gray-200 border rounded shadow shadow-gray-400"
        onSubmit={onSubmit}
      >
        <div className="w-1/2 mx-auto mb-3">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="w-1/2 p-2 mb-3 rounded"
            placeholder="Title"
            {...register("title")}
            autoFocus
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Description"
            {...register("description")}
          ></textarea>
        </div>
        <div>
          <button type="submit">Create task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskFormPage;
