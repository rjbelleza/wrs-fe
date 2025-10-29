import { ChevronLeft, ChevronDown, Bell } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { capitalizeFirst } from "@/utils/helpers";

const Header = () => {
    const [openDropDown, setOpenDropDown] = useState();

    const { user } = useAuth();

    const dropDownBaseClass = "hover:cursor-pointer hover:bg-gray-400 transition-all";

    return (
        <div className="relative w-full h-15 bg-blue-950">
            {/* SideMenu Toggle */}
            <button type="button" className="absolute w-fit h-fit top-4 -left-4 bg-white rounded-full hover:cursor-pointer border border-gray-400 p-1">
                <ChevronLeft width={17} height={17} />
            </button>
            <div className="flex items-center justify-between w-full h-full text-white text-sm px-10">
                <p>
                    Logged in as: 
                    <span className="text-green-300 ml-1">
                        {capitalizeFirst(user.role)}
                    </span>
                </p>
                <div className="flex gap-10">
                    <button className="hover:cursor-pointer">
                        <Bell width={20} />
                    </button>
                    <div className="relative">
                        <button onClick={() => setOpenDropDown(!openDropDown)} className="hover:cursor-pointer">
                            <p className="flex items-center gap-3">
                                <div className="h-2 w-2 bg-green-300 rounded-full"></div>
                                {capitalizeFirst(user.firstname) + " " + capitalizeFirst(user.lastname)}
                                <span>
                                    <ChevronDown width={15} />
                                </span>
                            </p>
                        </button>
                        {openDropDown && (
                            <div className="absolute left-0 -bottom-22 w-full h-fit text-center text-black bg-gray-200 shadow-md shadow-gray-300 border border-gray-400 rounded-sm">
                                <p className={`${dropDownBaseClass} rounded-t-sm pt-3 pb-2`}>Settings</p>
                                <p className={`${dropDownBaseClass} rounded-b-sm pb-3 pt-2`}>Logout</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
