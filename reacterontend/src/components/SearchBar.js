import React from "react";
import { useState } from "react";
import {FaSearch} from "react-icons/fa";

export const SearchBar = () => {
    const [input, setInput] = useState("");
    
    return (
        <div className="bg-[#28241D] border-1 border-yellow-300 rounded text-white inline-flex items-center">
        <FaSearch className="m-2"/>
            <input
            className={"input-field bg-[#28241D] rounded focus:outline-none"}    
            placeholder="Search"
            value={input}
            onChange={(e) => {setInput(e.target.value)}}
            />
        </div>
    )
}