import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import connect from '../lib/connectAxios';
import Alert from '../components/Alert';

export const ConfirmAccount = () => {
  const [notification, setNotification] = useState({
    message: null,
    kind: null,
  });

  const { id } = useParams();
  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const { data } = await connect.user(`/confirm/${id}`);
        setNotification({
          message: data.msj,
          kind: 'success',
        });
      } catch (err) {
        setNotification({
          message: err.response.data.msj,
          kind: 'error',
        });
      }
    };
    confirmAccount();
  }, []);
  return (
    <div>
      <h2 className="capitalize text-center text-indigo-600 font-bold text-2xl">
        Confirm your account
      </h2>
      {notification.message && (
        <Alert
          message={notification.message}
          kind={notification.kind}
          setNotification={setNotification}
        />
      )}
      <nav className="lg:flex lg:justify-around">
        <Link
          className="block text-center my-5 text-indigo-800 uppercase text-sm"
          to="/"
        >
          You have confirmed account? Go Login
        </Link>
        <Link
          className="block text-center my-5 text-indigo-600 uppercase text-sm"
          to="forget-password"
        >
          Forgot your password?
        </Link>
      </nav>
    </div>
  );
};
