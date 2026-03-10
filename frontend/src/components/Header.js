import React from "react";
import { Briefcase } from "lucide-react";
import logo from "../assets/logo.png";

function Header({ openModal }) {

    return (<div className="flex items-center justify-between border-b px-8 py-4 bg-white">


        {/* Logo + Title */}
        <div className="flex items-center gap-3">

            <img
                src={logo}
                alt="Job Tracker Logo"
                className="w-20 h-15 object-contain"
            />

            <h1 className="text-xl font-semibold">
                Job Application Tracker
            </h1>

        </div>

        {/* Add Job Button */}
        <button
            onClick={openModal}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
            + Add Job
        </button>

    </div>


    );
}

export default Header;
