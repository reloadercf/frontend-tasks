import { z } from 'zod';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Input from '../components/Input';
import Alert from '../components/Alert';
import connect from '../lib/connectAxios';

const passwordSchema = z
  .string({ required_error: 'Your password is required' })
  .min(5, { message: 'Your password Must be 5 or more characters' })
  .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, {
    message: 'Remember use uppercase letter and number ',
  });

export const NewPassword = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [notification, setNotification] = useState({
    message: null,
    kind: null,
  });

  const { token } = useParams();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data } = await connect.user(`/forget-password/${token}`);
        if (data.msj === 'Success') setIsValidToken(true);
      } catch (err) {
        setIsValidToken(false);
      }
    };
    checkToken();
  }, []);

  const handleSavePassword = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrorPassword('');
    const isValidPassword = passwordSchema.safeParse(newPassword);
    if (isValidPassword.success) {
      try {
        const { data } = await connect.user.post(`/forget-password/${token}`, {
          password: newPassword,
        });
        setNotification({
          message: data.msj,
          kind: 'success',
        });
      } catch (err) {
        setNotification({
          message: 'Error, please retry the process',
          kind: 'error',
        });
      }
    } else {
      setErrorPassword(isValidPassword.error.issues[0].message);
    }
  };

  return (
    <div>
      <h2 className="capitalize text-center text-indigo-600 font-bold text-2xl">
        Create new password
      </h2>
      {notification.message && (
        <Alert
          message={notification.message}
          kind={notification.kind}
          setNotification={setNotification}
        />
      )}
      {isValidToken ? (
        <form
          onSubmit={handleSavePassword}
          className="my-10 bg-white shadow px-10 py-5"
        >
          <Input
            title="New password"
            kind="password"
            placeholder="Write your new password"
            id="email"
            value={newPassword}
            onInput={(e) => {
              setNewPassword(e.target.value);
            }}
            error={errorPassword}
          />
          <input
            type="submit"
            value="Save New Password"
            className="bg-indigo-600 w-full m-2 text-white py-2 
        hover:cursor-pointer hover:bg-indigo-950 transition-colors"
          />
        </form>
      ) : (
        <p className="text-center my-10 text-rose-600">
          You can not create new password, please visit your email or retry
          process
        </p>
      )}
      <nav className="lg:flex lg:justify-around">
        <Link
          className="block text-center my-5 text-indigo-600 uppercase text-sm"
          to="/"
        >
          Login
        </Link>
      </nav>
    </div>
  );
};
