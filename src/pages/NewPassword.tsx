/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';

export const NewPassword = () => {
  return (
    <div>
      <h2 className="capitalize text-center text-indigo-600 font-bold text-2xl">
        Create new password
      </h2>
      <form className="my-10 bg-white shadow px-10 py-5">
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-lg font-bold"
            htmlFor="password"
          >
            Write your new password:
          </label>
          <input
            type="password"
            placeholder="Write your new password"
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
            placeholder="Repeat your password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="repeatPassword"
          />
        </div>
        <input
          type="submit"
          value="Save New Password"
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
      </nav>
    </div>
  );
};
