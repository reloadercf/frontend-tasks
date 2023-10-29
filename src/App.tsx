import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';

import { Login } from './pages/Login';
import { Register } from './pages/Register/Register';
import { NewPassword } from './pages/NewPassword';
import { AuthLayout } from './layouts/AuthLayout';
import { ForgetPassword } from './pages/ForgetPassword';
import { ConfirmAccount } from './pages/ConfirmAccount';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="confirm/:id" element={<ConfirmAccount />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="forget-password/:token" element={<NewPassword />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
