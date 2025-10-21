import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import { Menu, Button } from "@material-tailwind/react";

const MenuHospitales = () => {
  const [hospitales, setHospitales] = useState([]);
  const urlHospitales = Global.apiHospitales;

  const loadHospitales = () => {
    let request = "webresources/hospitales";
    axios.get(urlHospitales + request).then((response) => {
      setHospitales(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    loadHospitales();
  }, []);

  return (
    <nav className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              command="--toggle"
              commandfor="mobile-menu"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6 [[aria-expanded='true']_&]:hidden"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6 [&:not([aria-expanded='true']_*)]:hidden"
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  aria-current="page"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/createhospital"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Crear hospital
                </NavLink>
                <NavLink
                  to="/doctores/22"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Doctores 22
                </NavLink>
                <Menu>
                  <Menu.Trigger as={Button}>Doctores</Menu.Trigger>
                  <Menu.Content>
                    {hospitales.map((hosp, index) => {
                      return (
                        <NavLink
                          to={`/doctores/${hosp.idhospital}`}
                          key={index}
                        >
                          <Menu.Item>{hosp.nombre}</Menu.Item>
                        </NavLink>
                      );
                    })}
                    {/* <Menu.Item>Add Team</Menu.Item>
                    <Menu.Item>Add Project</Menu.Item>
                    <Menu.Item>My Profile</Menu.Item> */}
                  </Menu.Content>
                </Menu>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <el-dropdown className="relative ml-3">
              <button className="relative flex rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="size-8 rounded-full bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10"
                />
              </button>

              <el-menu
                anchor="bottom end"
                popover
                className="m-0 w-48 origin-top-right rounded-md bg-white p-0 py-1 shadow-lg outline outline-1 outline-black/5 transition [--anchor-gap:theme(spacing.2)] [transition-behavior:allow-discrete] data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-none"
                >
                  Your profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-none"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-none"
                >
                  Sign out
                </a>
              </el-menu>
            </el-dropdown>
          </div>
        </div>
      </div>

      <el-disclosure
        id="mobile-menu"
        hidden
        className="sm:hidden [&:not([hidden])]:block"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            aria-current="page"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </el-disclosure>
    </nav>
  );
};

export default MenuHospitales;
