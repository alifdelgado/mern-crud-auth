import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<h1>Profile page</h1>} />
          <Route path="/tasks" element={<h1>Tasks page</h1>} />
          <Route path="/tasks/:id" element={<h1>Task page</h1>} />
          <Route path="/create-task" element={<h1>Create task page</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
