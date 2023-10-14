/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';

export const ForgetPassword = () => {
  return (
    <div>
      <h2 className="capitalize text-center text-indigo-600 font-bold text-2xl">
        Recovery your password
      </h2>
      <form className="my-10 bg-white shadow px-10 py-5">
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
        <input
          type="submit"
          value="Send instructions"
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
