// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Table, LayoutDashboard } from "lucide-react";

// function Sidebar() {

//     const location = useLocation();

//     const navItem = (path, icon, label) => {
//         const active = location.pathname === path;

//         return (
//             <Link
//                 to={path}
//                 className={`flex items - center gap - 3 p - 3 rounded - lg transition
//     ${active ? "bg-gray-300 text-gray-800" : "hover:bg-gray-100"} `}
//             >
//                 {icon}
//                 {label}
//             </Link>
//         );


//     };

//     return (


//         <div className="w-64 h-screen border-r p-6 flex flex-col">

//             <h1 className="text-xl font-bold mb-8">
//                 Job Tracker
//             </h1>

//             <nav className="flex flex-col gap-2">

//                 {navItem("/", <Table size={20} />, "Table View")}

//                 {navItem("/board", <LayoutDashboard size={20} />, "Board View")}

//             </nav>

//         </div>

//     );
// }

// export default Sidebar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Table, LayoutDashboard, ChevronLeft, ChevronRight } from "lucide-react";

function Sidebar() {

    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const navItem = (path, icon, label) => {
        const active = location.pathname === path;

        return (
            <Link
                to={path}
                className={`flex items-center gap-3 p-3 rounded-lg transition
            ${active ? "bg-gray-300 text-gray-800" : "hover:bg-gray-100"} `}
            >
                {icon}
                {!collapsed && <span>{label}</span>}
            </Link>
        );
    };

    return (

        <div
            className={`${collapsed ? "w-20" : "w-64"}
    h-screen border-r p-4 flex flex-col transition-all duration-300`}
        >

            {/* Header */}
            <div className="flex items-center justify-between mb-8">

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 rounded hover:bg-gray-100"
                >
                    {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>

            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">

                {navItem("/", <Table size={20} />, "Table View")}

                {navItem("/board", <LayoutDashboard size={20} />, "Board View")}

            </nav>

        </div>

    );


}

export default Sidebar;
