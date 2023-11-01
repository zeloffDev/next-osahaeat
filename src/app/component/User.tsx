import React from "react";
import { logoutActionServer } from "../action/loginAction";

export default function User() {
  const handleClickLogout = async () => {
    await logoutActionServer();
  };
  return (
    <div className="group inline-block text-left duration-300 relative">
      <div className="flex items-center h-full">
        <button
          id="dropdownDividerButton"
          data-dropdown-toggle="dropdownDivider"
          type="button"
        >
          <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-10 h-10 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
      <ul className="absolute rounded w-44 hidden  group-hover:block  bg-white  dark:bg-gray-700">
        <li>
          <button
            onClick={handleClickLogout}
            className="rounded text-left w-full bg-white  dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-400 py-2 px-4 block"
          >
            Đăng xuất
          </button>
        </li>
        <li>
          <button className="rounded text-left w-full bg-white  dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-400 py-2 px-4 block">
            Đăng kí
          </button>
        </li>
      </ul>
    </div>
  );
}
