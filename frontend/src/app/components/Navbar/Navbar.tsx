"use client"

import Link from "next/link"
import Item from "./NavItem";
import { useState } from "react";

const items = [
  {
    page: "Home",
    nav: "/"
  }, 
  {
    page: "About",
    nav: "/about"
  }
];

const Navbar = () => {

  const [isMobileNavOpen, setMobileNav] = useState(false);


  const HSeperator = () => {
    return (
      <div className="w-[1px] h-8 bg-white"></div>
    )
  }

  const toggleMobileNav = () => {
    setMobileNav((prev) => !prev);
  }
  

  return (
    <>
      <nav className="border-gray-200 bg-grey">
        <div className="w-full flex flex-wrap justify-between md:gap-10 md:items-center md:justify-start mx-auto p-5 ">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <HSeperator />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">MiguelBBeats</span>
            <HSeperator />
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none " aria-controls="navbar-default" aria-expanded="false" onClick={toggleMobileNav}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {
                items.map((i, index) => 
                  <Item page={i.page} nav={i.nav} key={index} />
                )
              }
            </ul>
          </div>
          {
            isMobileNavOpen ? 
              <div className="md:hidden flex justify-center z-10 absolute w-full h-full top-24 left-0 rounded-md bg-grey">
                <ul className="flex flex-col items-center m-10 text-2xl">
                  {
                    items.map((im, index) => {
                      return (
                        <div className="mb-4">
                          <div onClick={toggleMobileNav}>
                            <Item page={im.page} nav={im.nav} key={index}/>
                          </div>
                          <div className="w-full h-[1px] bg-white"></div>
                        </div>
                      )
                    })
                  }
                </ul>
              </div>
            : null
          }
        </div>
      </nav>

    </>
  )
}

export default Navbar;