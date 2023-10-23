import { z } from 'zod';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import connect from '../lib/connectAxios';
import Alert from '../components/Alert';
import Input from '../components/Input';

export const SchemaRecovery = z.coerce
  .string()
  .email({ message: 'Email invalid' })
  .min(5, { message: 'Complete your email' })
  .toLowerCase();

export const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [errorInput, setErrorInput] = useState(null);
  const [notification, setNotification] = useState({
    message: null,
    kind: null,
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const isValidEmail = SchemaRecovery.safeParse(email);
    if (isValidEmail.success) {
      try {
        const { data } = await connect.user.post('/forget-password/', {
          email,
        });
        setNotification({
          message: data.msj,
          kind: 'success',
        });
      } catch (err) {
        const { response } = err;
        setNotification({
          message: response.data.msj,
          kind: 'error',
        });
      }
    } else {
      setErrorInput(isValidEmail.error.issues[0].message);
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (errorInput !== null) {
      setErrorInput(null);
    }
  };

  return (
    <div>
      <h2 className="capitalize text-center text-indigo-600 font-bold text-2xl">
        Recovery your password
      </h2>
      {notification.message && (
        <Alert
          message={notification.message}
          kind={notification.kind}
          setNotification={setNotification}
        />
      )}
      <form
        className="my-10 bg-white shadow px-10 py-5"
        onSubmit={handleSubmit}
      >
        <Input
          id="email"
          kind="email"
          title="Email"
          value={email}
          placeholder="Introduce your email for recovery password"
          onInput={handleEmail}
          error={errorInput}
        />
        <input
          type="submit"
          value="Recovery password"
          className="bg-indigo-600 w-full m-2 text-white py-2 
        hover:cursor-pointer hover:bg-indigo-950 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-around">
        <Link
          className="block text-center my-5 text-indigo-600 uppercase text-sm"
          to="/"
        >
          Login
        </Link>
        <Link
          className="block text-center my-5 text-indigo-600 uppercase text-sm"
          to="/register"
        >
          Create account
        </Link>
      </nav>
    </div>
  );
};
