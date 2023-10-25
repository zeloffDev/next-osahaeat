import React from "react";

export default function User() {
  return (
    <div className="group inline-block  duration-300 relative">
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
          <a
            className="rounded  bg-white  dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-400 py-2 px-4 block"
            href="#"
          >
            Đăng xuất
          </a>
        </li>
        <li>
          <a
            className="rounded  bg-white  dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-400 py-2 px-4 block"
            href="#"
          >
            Đăng kí
          </a>
        </li>
      </ul>
    </div>
  );
}
