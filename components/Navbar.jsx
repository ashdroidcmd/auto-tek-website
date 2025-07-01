"use client";

import Image from "next/image";


const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-50 bg-black text-white">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="navbar-brand">
          <Image
            src="/images/logo.webp"
            loading="lazy"
            className="h-auto w-70 transition-transform duration-300 ease-in-out hover:scale-110"
            alt="Logo"
            width={180}
            height={60}
          />
        </a>

        {/* Hamburger for mobile */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box right-0 z-[50] mt-3 w-52 bg-black p-2 shadow"
          >
            <li>
              <a href="#" className="p-3 text-2xl text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#service-page" className="p-3 text-2xl text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#location-section" className="p-3 text-2xl text-white">
                Location
              </a>
            </li>
            <li>
              <a href="#contact-form" className="p-3 text-2xl text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-3xl text-white">
            <li>
              <a
                href="#"
                className="rounded-3xl px-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-red-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#service-page"
                className="rounded-3xl px-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-red-600"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#location-section"
                className="rounded-3xl px-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-red-600"
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#contact-form"
                className="rounded-3xl px-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-red-600"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
