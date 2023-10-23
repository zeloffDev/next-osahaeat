import React from "react";

export default function User() {
  return (
    <div className="group inline-block relative">
      <div className="flex items-center h-full">
        <button
          id="dropdownDividerButton"
          data-dropdown-toggle="dropdownDivider"
          type="button"
        >
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
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

          {/* <svg
            className="fill-current hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle fill="none" cx="12" cy="7" r="3"></circle>
            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path>
          </svg> */}
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
