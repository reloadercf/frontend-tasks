import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SchemaRegister } from './SchemaRegister';

export const Register = () => {
  const [formData, setFormData] = useState({
    nameUser: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [errorForm, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (errorForm.hasOwnProperty(name)) {
      const errorFound= { ...errorForm };
      delete errorFound[name];
      setError(errorFound);
    }

    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const isValid = SchemaRegister.safeParse(formData);
    if (isValid.success) {
      console.log('all ok');
    } else {
      isValid.error.issues.forEach((err) => {
        setError((prev) => ({ ...prev, [err.path]: err.message }));
      });
    }
  };

  return (
    <div>
      <h2 className="capitalize text-center text-indigo-600 font-bold text-2xl">
        Create new account
      </h2>
      <form
        className="my-10 bg-white shadow px-10 py-5"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-lg font-bold"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            placeholder="What is your name?"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="name"
            name="nameUser"
            value={formData.nameUser}
            onChange={handleInputChange}
          />
          {errorForm.nameUser && (
            <span className="text-rose-600">{errorForm.nameUser}</span>
          )}
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-lg font-bold"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Input your email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errorForm.email && (
            <span className="text-rose-600">{errorForm.email}</span>
          )}
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-lg font-bold"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errorForm.password && (
            <span className="text-rose-600">{errorForm.password}</span>
          )}
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-lg font-bold"
            htmlFor="repeatPassword"
          >
            Confirm password:
          </label>
          <input
            type="password"
            name="repeatPassword"
            placeholder="repeat your password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleInputChange}
          />
          {errorForm.repeatPassword && (
            <span className="text-rose-600">{errorForm.repeatPassword}</span>
          )}
        </div>
        <input
          type="submit"
          value="Register"
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
          to="forget-password"
        >
          Forgot your password?
        </Link>
      </nav>
    </div>
  );
};
