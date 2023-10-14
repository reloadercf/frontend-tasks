/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div>
      <h2 className="capitalize text-center text-indigo-600 font-bold text-2xl">
        Create new account
      </h2>
      <form className="my-10 bg-white shadow px-10 py-5">
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
          />
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
            placeholder="Input your email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="email"
          />
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
            placeholder="password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="email"
          />
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
            placeholder="repeat your password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="repeatPassword"
          />
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
