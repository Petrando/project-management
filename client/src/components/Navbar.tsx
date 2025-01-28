/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Menu, Moon, Search, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const {isSidebarCollapsed, isDarkMode} = useAppSelector(
    (state) => state.global,
  );
  
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
        <div className="flex items-center gap-8">
            {!isSidebarCollapsed ? null : (
              <button
                onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
              >
                <Menu className="h-8 w-8 dark:text-white" />
              </button>
            )}
            <div className="relative flex h-min w-[200px]">
                <Search
                  className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white"
                />
                <input
                  className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
                  type="search"
                  placeholder="Search..."
                />
            </div>
        </div>


        {/* Icons */}
        <div className="flex items-center">                
          <button
            onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
            className={
              isDarkMode
                ? `rounded p-2 dark:hover:bg-gray-700`
                : `rounded p-2 hover:bg-gray-100`
            }
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
            ) : (
              <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
            )}
          </button>
          <Link
            href="/settings"
            className={
              isDarkMode
                ? `h-min w-min rounded p-2 dark:hover:bg-gray-700`
                : `h-min w-min rounded p-2 hover:bg-gray-100`
            }
          >
            <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
          </Link>
          <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block" />
          <div className="hidden items-center justify-between md:flex">
          <div className="align-center flex h-9 w-9 justify-center">
            <User className="h-6 w-6 cursor-pointer self-center rounded-full dark:text-white" />
          </div>
          <span className="mx-3 text-gray-800 dark:text-white">
            username
          </span>
          <button
            className="hidden rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500 md:block"
            onClick={undefined}
          >
            Sign out
          </button>
        </div>
        </div>
    </div>
  );
};

export default Navbar;