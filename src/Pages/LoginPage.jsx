import { Link } from "react-router-dom"

const LoginPage=()=>{
    return <>
        <div className="flex justify-center w-[100dvw] h-[100dvh] p-2 items-center">
            <div className="w-full sm:w-[75%] md:w-[50%] lg:w-[30%]  h-full rounded shadow-xl 
            bg-gradient-to-br from-gray-300/30 via-gray-200/50  to-gray-400/30 
            backdrop-blur-md border border-gray-400/50">
                <div className="w-full h-full flex py-10 px-10 flex-col">
                    <h1 className="font-bold mr-40 text-3xl">Signin to your PopX account</h1>
                    <p className="text-xl mt-3 text-gray-500 mr-30">Lorem ipsum dolor sit amet consectetur adipisicing elit  </p>
                        <form action="" className="w-full" onSubmit={(e)=>{
                            e.preventDefault();
                        }}>
                    <div className="flex w-full  mt-10 items-center justify-center gap-5 flex-col">
                        <div className="relative w-full ">
                        <input required type="email" className="border border-gray-300 p-2 py-3 rounded-lg w-[100%]  focus:outline-gray-400/50 placeholder:pl-3" placeholder="Enter email address"></input>
                        <label className="absolute  left-2 bottom-[80%] font-normal text-sm text-[#6a25ff] bg-[#F1F2F4]">Email Address</label>
                        </div>
                        <div className="relative w-full ">
                        <input required type="password" className="border border-gray-300 p-2 py-3 rounded-lg w-[100%] focus:outline-1 focus:outline-gray-400/50 placeholder:pl-3" placeholder="Enter password"></input>
                        <label className="absolute  left-2 bottom-[80%] font-normal text-sm text-[#6a25ff] bg-[#F1F2F4]">Password</label>
                        </div>
                        <Link to={"/profile"} className="bg-[#CBCBCB] flex items-center justify-center hover:bg-[#999898] w-[100%] p-3 rounded-lg text-white font-bold cursor-pointer">Login</Link>
                    </div>
                        </form>
                </div>
            </div>
       </div>
    </>
}
export default LoginPage