
export default function WorkSection(){
    return (
        <div  className=" grid grid-cols-1 gap-10  " >
            <div className=" flex items-center " >
                <span>
                    <img src="/Project.gif" alt="" className=" w-[60px] " />
                    <img src="/" alt="" />
                </span>
                <p className=" dark:text-[#ffffff]  font-black text-4xl text-[#111111] " >Proyectos</p>
            </div>
            
            <div className=" space-y-3 mb-4 bg-[#56e356]  bg-opacity-75 rounded-[1rem]  text-center flex w-full flex-col  items-center " >
            <figure>
                <img src="WorldRanks.jpg" alt="imagen de pagina de paises" className=" rounded-[1rem]" />
            </figure>
            <div className=" flex justify-between w-full px-4 " >
               <h2 className=" text-[#ffffff] text-3xl font-black " >World Rank</h2>
               <span className=" flex " >
                 <img 
                 src="/icons8-nextjs-48.png" 
                 alt="" 
                 className=" w-9 "
                 />
                 <img 
                 src="/icons8-tailwindcss-48.png" 
                 alt=""
                 className=" w-9 "
                  />
                </span>
            </div>
            <div className="flex space-x-4 w-full pl-4
             text-[#111111] pb-4 " >
            <button className=" hover:bg-[#ffffff]  flex items-center space-x-2 px-3 py-2 border border-[#ffffff] rounded-xl " >
                <img src="/github.png" alt="icono de github"
                className=" w-[25px] " />
                <p>Code</p>
            </button>
            <button className=" hover:bg-[#ffffff]  flex items-center space-x-2 px-3 py-2 border border-[#ffffff] rounded-xl " >
                <img src="/enlace.png" alt="icono de github"
                className=" w-[20px] " />
                <p>Preview</p>
            </button>
            </div>
            
            </div>
            <div className=" space-y-3 mb-4 bg-[#db3030] bg-opacity-75  rounded-[1rem]  text-center flex w-full flex-col  items-center " >
            <figure>
                <img src="Catwiki.jpg" alt="imagen de pagina de paises" className=" rounded-[1rem]" />
            </figure>
            <div className="flex justify-between w-full px-4 " >
            <h2 className=" text-[#ffffff] text-3xl font-black " >Cat Wiki</h2>
            <span className=" flex " >
                 <img 
                 src="/icons8-angularjs-50.png" 
                 alt="" 
                 className=" w-9 "
                 />
            </span>
            </div>
            <div className="flex space-x-4 w-full pl-4
             text-[#111111] pb-4 " >
            <button className=" hover:bg-[#ffffff]  flex items-center space-x-2 px-3 py-2 border border-[#ffffff] rounded-xl " >
                <img src="/github.png" alt="icono de github"
                className=" w-[25px] " />
                <p>Code</p>
            </button>
            <button className=" hover:bg-[#ffffff]  flex items-center space-x-2 px-3 py-2 border border-[#ffffff] rounded-xl " >
                <img src="/enlace.png" alt="icono de github"
                className=" w-[20px] " />
                <p>Preview</p>
            </button>
            </div>
            </div>
            <div className=" space-y-3 mb-4 bg-[#56e356] bg-opacity-75  rounded-[1rem]  text-center flex w-full flex-col  items-center " >
            <figure>
                <img src="Traductor.jpg" alt="imagen de pagina de paises" className="rounded-[1rem]" />
            </figure>
            <div className="flex justify-between w-full  px-4  " >
            <h2 className=" text-[#ffffff] text-3xl font-black " >Traductor</h2>
            <span className=" flex " >
                 <img 
                 src="/icons8-nextjs-48.png" 
                 alt="" 
                 className=" w-9 "
                 />
                 <img 
                 src="/icons8-tailwindcss-48.png" 
                 alt=""
                 className=" w-9 "
                  />
            </span>
            </div>
            <div className="flex space-x-4 w-full pl-4
             text-[#111111]  pb-4" >
            <button className=" hover:bg-[#ffffff]  flex items-center space-x-2 px-3 py-2 border border-[#ffffff] rounded-xl " >
                <img src="/github.png" alt="icono de github"
                className=" w-[25px] " />
                <p>Code</p>
            </button>
            <button className=" hover:bg-[#ffffff]  flex items-center space-x-2 px-3 py-2 border border-[#ffffff] rounded-xl " >
                <img src="/enlace.png" alt="icono de github"
                className=" w-[20px] " />
                <p>Preview</p>
            </button>
            </div>
            </div>
        </div>
    )
}