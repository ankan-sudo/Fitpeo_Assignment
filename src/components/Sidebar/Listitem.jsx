import React from "react";
import { BiSolidChevronRight } from "react-icons/bi";

export default function ListItem({ Icon, title, hidden, isActive }) {
  return (
    <div
      className={
        "flex h-fit px-2 py-2 my-4 text-base items-center cursor-pointer rounded-xl hover:outline hover:outline-2 gap-2 " +
        (isActive
          ? "bg-indigo-800 hover:outline-none"
          : "bg-transparent text-gray-300")
      }
    >
      {Icon}
      {!hidden && (
        <span className="ml-2 w-full flex items-center justify-between font-semibold gap-12 pr-2 ">
          {title}
          {!isActive && <BiSolidChevronRight />}
        </span>
      )}
    </div>
  );
}