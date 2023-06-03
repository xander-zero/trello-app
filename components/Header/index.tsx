"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

export function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center px-5 py-3 bg-gray-500/10 rounded-b-2xl">
        <div
          className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] 
          rounded-md filter blur-3xl opacity-50 -z-50
        "
        />
        <Image
          src="https://download.logo.wine/logo/Trello/Trello-Logo.wine.png"
          alt="Trello Logo"
          width={150}
          height={50}
          className="w-25 md:w-24 pb-5 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none"
            />
            <button hidden>Search</button>
          </form>
          <Avatar name="Mahmoud Ansari" round size="40" color="#0055D1" />
        </div>
      </div>
      <div className="flex items-center justify-center py-2 px-5 md:py-5">
        <p className="flex items-center text-sm p-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </header>
  );
}
