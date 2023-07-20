import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<h1>Login page</h1>} />
        <Route path="/register" element={<h1>Register page</h1>} />
        <Route path="/profile" element={<h1>Profile page</h1>} />
        <Route path="/tasks" element={<h1>Tasks page</h1>} />
        <Route path="/tasks/:id" element={<h1>Task page</h1>} />
        <Route path="/create-task" element={<h1>Create task page</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
