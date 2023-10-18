/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <h1 className="text-indigo-600 font-black text-6xl capitalize">
        admin your
        <span className="text-slate-700"> projects</span>
      </h1>

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
            placeholder="input your email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
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
            className="w-full mt-3 p-3 border rounded-xl bg-gray-100"
            id="password"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-indigo-600 w-full m-2 text-white py-2 
          hover:cursor-pointer hover:bg-indigo-950 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-around">
        <Link
          className="block text-center my-5 text-indigo-600 uppercase text-sm"
          to="/register"
        >
          Create account now!
        </Link>
        <Link
          className="block text-center my-5 text-indigo-600 uppercase text-sm"
          to="/forget-password"
        >
          Forgot your password?
        </Link>
      </nav>
    </>
  );
};
