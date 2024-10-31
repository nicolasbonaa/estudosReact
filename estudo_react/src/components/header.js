import logo from "../assets/Pinterest-Logo.wine.png"

export function Header(){
    return(
        <header className="w-full h-[100vh]">
            <div className="flex items-center justify-between ">
                <div className="flex space-x-2">
                    <div className="">
                        <img src={logo} width={150} height={150}></img>
                    </div>
                <div className="flex space-x-6 mt-[29px]">
                    <p className="sm:mt-2 font-semibold md:text-base" >Hoje</p>
                    <p className="sm:mt-2 font-semibold md:text-base" >Explorar</p>
                </div>    
                </div>
                <div className="flex m-5 space-x-6">
                        <p className="sm:mt-2 font-semibold md:text-base">Sobre</p>
                        <p className="sm:mt-2 font-semibold md:text-base">Business</p>
                        <p className="sm:mt-2 font-semibold md:text-base">Blog</p>
                        <button className="bg-red-500 w-[100px] h-10 rounded-full text-white font-semibold">Entrar</button>
                        <button className="bg-gray-200 w-[120px] h-10 rounded-full text-black font-semibold">Criar Conta</button>
                </div>
            </div>    
        </header>
    );
}