import React from "react";
import { IoIosSearch } from "react-icons/io";

function Search() {
  return (
    <div className="bg-lightbg text-lg text-white flex items-center rounded-lg border border-[#333d4c] box-content">
      <span className="mx-3">All categories</span>
      <input type="text" className="bg-lightbg border-y border-y-[#333d4c]" />
      <div className="">
        <IoIosSearch className="size-7 mx-2" />
      </div>
    </div>
  );
}

export default Search;
