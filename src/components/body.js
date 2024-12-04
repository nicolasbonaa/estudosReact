import { LuLibrary } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import React from "react";
export function Body(){
    return(
        <div className="w-full h-[100vh] flex flex-row justify-between items-start p-6">
            <div className="bg-gray-800 w-1/4 h-full p-3 text-white rounded-lg m-4">
                <div className="flex flex-row justify-between items-center mt-6">
                    <div className="flex flex-row gap-4">
                        <LuLibrary size={30}/>
                        <p className="text-lg font-semibold">Sua Biblioteca</p>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <IoAdd size={25} className="text-white "/>
                        <FaArrowRight size={18}/>
                    </div>
                </div>

                <div className="flex flex-row items-start mt-8 gap-4 font-semibold">
                    <div className="bg-DefaultGray w-24 h-8 flex items-center justify-center rounded-2xl">
                        <p>Playlists</p>
                    </div>
                    <div className="bg-DefaultGray w-24 h-8 flex items-center justify-center rounded-2xl"> 
                        <p>Álbuns</p>
                    </div>


                </div>
                <div className="flex flex-row items-center justify-between mt-6">
                        <GoSearch size={20} className="mt-[8px]"/>
                    <div className="flex flex-row items-center gap-3">
                        <p>Recentes</p>
                        <IoIosMenu size={25}/>
                    </div>
                </div>

                <div className="flex flex-row items-start mt-10 gap-4">
                    <img src="https://github.com/nicolasbonaa.png" className="w-16 rounded-xl"/>
                    <div className="flex flex-col gap-3">
                        <p className="text-lg font-semibold">Playlist do Dog louco</p>
                        <p className="text-[14px]">Álbum - Preciso Lavar a Louça</p>
                    </div>
                </div>
                <div className="flex flex-row items-start mt-10 gap-4">
                    <img src="https://github.com/nicolasbonaa.png" className="w-16 rounded-xl"/>
                    <div className="flex flex-col gap-3">
                        <p className="text-lg font-semibold">Playlist do Dog louco</p>
                        <p className="text-[14px]">Álbum - Preciso Lavar a Louça</p>
                    </div>
                </div>
                <div className="flex flex-row items-start mt-10 gap-4">
                    <img src="https://github.com/nicolasbonaa.png" className="w-16 rounded-xl"/>
                    <div className="flex flex-col gap-3">
                        <p className="text-lg font-semibold">Playlist do Dog louco</p>
                        <p className="text-[14px]">Álbum - Preciso Lavar a Louça</p>
                    </div>
                </div>
                <div className="flex flex-row items-start mt-10 gap-4">
                    <img src="https://github.com/nicolasbonaa.png" className="w-16 rounded-xl"/>
                    <div className="flex flex-col gap-3">
                        <p className="text-lg font-semibold text-green-400">Playlist do Dog louco</p>
                        <p className="text-[14px]">Álbum - Preciso Lavar a Louça</p>
                    </div>
                </div>
                <div className="flex flex-row items-start mt-10 gap-4">
                    <img src="https://github.com/nicolasbonaa.png" className="w-16 rounded-xl"/>
                    <div className="flex flex-col gap-3">
                        <p className="text-lg font-semibold">Playlist do Dog louco</p>
                        <p className="text-[14px]">Álbum - Preciso Lavar a Louça</p>
                    </div>
                </div>

                
            </div>
            <div className="bg-gray-800 w-full h-full p-3 text-white rounded-lg m-4">
                <div className="p-4 mx-8">
                    <img src="https://github.com/nicolasbonaa.png" className="w-full h-60 rounded-xl"/>
                </div>
                <div className="flex flex-row items-center gap-4 mt-6">
                    <div className="bg-DefaultGray w-20 h-8 flex flex-row items-center justify-center rounded-full">
                       <p className="font-semibold">Tudo</p>
                    </div>
                    <div className="bg-DefaultGray w-20 h-8 flex flex-row items-center justify-center rounded-full">
                       <p className="font-semibold">Música</p>
                    </div>
                    <div className="bg-DefaultGray w-20 h-8 flex flex-row items-center justify-center rounded-full">
                      <p className="font-semibold">Podcasts</p>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-between">
                    <div className="h-20 w-[320px] flex flex-row items-center justify-start bg-gray-900 mt-5 gap-4 rounded-xl">
                        <img src="https://github.com/nicolasbonaa.png" className="w-20 rounded-xl rounded-tr-none rounded-br-none"/>
                        <div className="flex flex-col items-start gap-4">
                            <p className="font-semibold">Playlist do Dog louco</p>
                            <p>Álbum - Preciso lavar a louça</p>
                        </div>
                    </div>
                    <div className="h-20 w-[320px] flex flex-row items-center justify-start bg-gray-900 mt-5 gap-4 rounded-xl">
                        <img src="https://github.com/nicolasbonaa.png" className="w-20 rounded-xl rounded-tr-none rounded-br-none"/>
                        <div className="flex flex-col items-start gap-4">
                            <p className="font-semibold">Playlist do Dog louco</p>
                            <p>Álbum - Preciso lavar a louça</p>
                        </div>
                    </div>
                    <div className="h-20 w-[320px] flex flex-row items-center justify-start bg-gray-900 mt-5 gap-4 rounded-xl">
                        <img src="https://github.com/nicolasbonaa.png" className="w-20 rounded-xl rounded-tr-none rounded-br-none"/>
                        <div className="flex flex-col items-start gap-4">
                            <p className="font-semibold">Playlist do Dog louco</p>
                            <p>Álbum - Preciso lavar a louça</p>
                        </div>
                    </div>
                    <div className="h-20 w-[320px] flex flex-row items-center justify-start bg-gray-900 mt-5 gap-4 rounded-xl">
                        <img src="https://github.com/nicolasbonaa.png" className="w-20 rounded-xl rounded-tr-none rounded-br-none"/>
                        <div className="flex flex-col items-start gap-4">
                            <p className="font-semibold">Playlist do Dog louco</p>
                            <p>Álbum - Preciso lavar a louça</p>
                        </div>
                    </div>
                    <div className="h-20 w-[320px] flex flex-row items-center justify-start bg-gray-900 mt-5 gap-4 rounded-xl">
                        <img src="https://github.com/nicolasbonaa.png" className="w-20 rounded-xl rounded-tr-none rounded-br-none"/>
                        <div className="flex flex-col items-start gap-4">
                            <p className="font-semibold">Playlist do Dog louco</p>
                            <p>Álbum - Preciso lavar a louça</p>
                        </div>
                    </div>
                    <div className="h-20 w-[320px] flex flex-row items-center justify-start bg-gray-900 mt-5 gap-4 rounded-xl">
                        <img src="https://github.com/nicolasbonaa.png" className="w-20 rounded-xl rounded-tr-none rounded-br-none"/>
                        <div className="flex flex-col items-start gap-4">
                            <p className="font-semibold">Playlist do Dog louco</p>
                            <p>Álbum - Preciso lavar a louça</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-green-500 w-1/4">
            <div className="flex flex-row justify-center items-center w-40">
                    <LuLibrary />
                    <p>Sua Biblioteca</p>
                    <IoAdd />
                    <FaArrowRight />
                </div>

                <div>
                    <p>Playlists</p>
                    <p>Álbuns</p>
                </div>
                <div>
                    <GoSearch />
                    <p>Recentes</p>
                    <IoIosMenu />
                </div>
            </div>
        </div>
    )

}