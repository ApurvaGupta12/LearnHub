import React from "react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Option = () => {
  return (
        <ul className="p-4 shadow-lg rounded-lg space-y-2 bg-white">
          <li className="hover:bg-gray-100 p-2 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded">
            <Link to="/add-course">Add Course</Link>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded">
            <Link to="/view-courses">View Courses</Link>
          </li>
          <hr />
          <li className="hover:bg-gray-100 p-2 rounded">
            <Link to="/about">About</Link>
          </li>
          <hr />
          <li className="hover:bg-gray-100 p-2 rounded">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      );
    };
    
  

export default Option;
