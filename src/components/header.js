import { GoChevronRight, GoChevronLeft,GoHome, GoSearch, GoArchive, GoBell, GoPerson } from "react-icons/go";
import { GrGroup } from "react-icons/gr";

export function Header(){
    return(
        <header className="w-full"> 
            <div className="flex flex-row items-center justify-between bg-defaultBlack h-24">
                <div className="flex flex-row justify-between items-center ml-3">
                    <GoChevronLeft size={30} className="text-white" />
                    <GoChevronRight size={30} className="text-white"/>
                </div>

                    <div className="flex flex-row justify-between items-center gap-6">
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex flex-row items-center justify-center">
                            <GoHome size={35} className="text-white"/>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-12 bg-gray-700 w-[520px] m-8 p-3 rounded-3xl">
                            <div className="flex flex-row gap-3 ">
                                <GoSearch size={25} className="text-white mt-[2px]"/>
                                <p className="text-white text-lg">O que você quer ouvir?</p>
                            </div>
                            <div className="flex flex-row mr-2 gap-3">
                                <p className="text-3xl text-white">
                                    |
                                </p>
                                <GoArchive size={25} className="text-white mt-[6px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-8 mr-8">
                        <GoBell size={30} className="text-white"/>
                        <GrGroup size={30} className="text-white"/>
                        <GoPerson size={30} className="text-white"/>
                    </div>
            </div>
        </header>
    );
}