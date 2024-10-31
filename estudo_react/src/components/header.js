import logo from "../assets/Pinterest-Logo.wine-removebg-preview.png"

export function Header(){
    return(
        <header className="w-full flex flex-col items-start sm:flex sm:flex-row sm:items-center justify-between">
                <div className="flex flex-col sm:flex sm:flex-row items-center gap-4">
                    <img src={logo} width={150} height={150} alt="Logo pinterest" />
                    <p className="font-semibold md:text-base">Hoje</p>
                    <p className="font-semibold md:text-base">Explorar</p>    
                </div>
                <div className="flex flex-col sm:flex sm:flex-row items-center gap-4">
                    <p className="font-semibold md:text-base">Sobre</p>
                    <p className="font-semibold md:text-base">Business</p>
                    <p className="font-semibold md:text-base">Blog</p>
                    <button className="bg-red-500 w-[100px] h-10 rounded-full text-white font-semibold">
                        Entrar
                    </button>
                    <button className="bg-gray-200 w-[120px] h-10 rounded-full text-black font-semibold">
                        Criar Conta
                    </button>
                 </div>    
        </header>
    );
}