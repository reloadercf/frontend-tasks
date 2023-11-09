import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { ProjectProvider } from './context/ProjectProvider';

import { Login } from './pages/Login';
import { Register } from './pages/Register/Register';
import { NewPassword } from './pages/NewPassword';
import { AuthLayout } from './layouts/AuthLayout';
import { ForgetPassword } from './pages/ForgetPassword';
import { ConfirmAccount } from './pages/ConfirmAccount';
import { ProtectedRoute } from './layouts/ProtectedRoute';
import { Projects } from './pages/Projects/Projects';
import AddProject from './pages/Projects/AddProject';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProjectProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="confirm/:id" element={<ConfirmAccount />} />
              <Route path="forget-password" element={<ForgetPassword />} />
              <Route path="forget-password/:token" element={<NewPassword />} />
            </Route>
            <Route path="/projects" element={<ProtectedRoute />}>
              <Route index element={<Projects />} />
              <Route path="add-project" element={<AddProject />} />
            </Route>
          </Routes>
        </ProjectProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
