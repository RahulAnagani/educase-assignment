import { Link } from "react-router-dom";

const LandingPage=()=>{
    return (<>
       <div className="flex justify-center w-[100dvw] h-[100dvh] p-2 items-center">
            <div className="w-full md:w-1/2 lg:w-1/4  h-full rounded shadow-xl 
            bg-gradient-to-br from-gray-300/30 via-gray-200/50  to-gray-400/30 
            backdrop-blur-md border border-gray-400/50">
                <div className="cover w-full h-[60%] "></div>
                <div className="options w-full h-[40%] ">
                        <div className="h-[50%] w-full p-2 py-10  flex flex-col justify-around ">
                            <h1 className="font-bold text-3xl m-2">Welcome to POPX</h1>
                            <p className="text-gray-500 text-xl m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="h-[50%] w-full flex justify-center gap-2 items-center flex-col">
                            <Link to={"/signup"} className="flex justify-center items-center font-bold cursor-pointer hover:bg-[#6e25ffc5] text-white p-3 rounded-lg bg-[#6C25FF] w-[75%]">Create Account</Link >
                            <Link to={"/login"} className="flex justify-center items-center font-bold cursor-pointer hover:bg-[#b699fa] text-gray-800 p-3 rounded-lg bg-[#CEBAFB] w-[75%]">Already Registered? Login</Link >
                        </div>
                </div>
            </div>
       </div>
    </>)
}
export default LandingPage;