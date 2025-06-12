import { Link } from "react-router-dom";
const SignupPage=()=>{
    return <>
        <div className="flex justify-center w-[100dvw] h-[100dvh] p-2 items-center">
            <div className="w-full sm:w-[75%] md:w-[50%] lg:w-[30%]  h-full rounded shadow-xl 
            bg-gradient-to-br from-gray-300/30 via-gray-200/50  to-gray-400/30 
            backdrop-blur-md border border-gray-400/50">
                <div className="w-full relative h-full flex py-10 px-10 flex-col">
                    <h1 className="font-bold mr-40 text-3xl">Create your popX account</h1>
                    <p className="text-xl mt-3 text-gray-500 mr-30">Lorem ipsum dolor sit amet consectetur adipisicing elit  </p>
                        <form action="" className="w-full" onSubmit={(e)=>{
                            e.preventDefault();
                        }}>
                    <div className="flex w-full  h-[100%] mt-10 items-center justify-center gap-5 flex-col">
                        <div className="relative w-full ">
                        <input required type="text" className="border px-5 border-gray-300 p-2 py-3 rounded-lg w-[100%]  focus:outline-gray-400/50 " placeholder="Enter full name"></input>
                        <label className="absolute  left-2 bottom-[80%] font-normal text-sm text-[#6a25ff] bg-[#F1F2F4]">Full Name*</label>
                        </div>
                        <div className="relative w-full ">
                        <input required type="text" onChange={(e)=>{if(isNaN(Number(e.target.value))){e.target.value=e.target.value.slice(0,-1)}}} className="border px-5 border-gray-300 p-2 py-3 rounded-lg w-[100%] focus:outline-1 focus:outline-gray-400/50 " placeholder="Enter phone number"></input>
                        <label className="absolute  left-2 bottom-[80%] font-normal text-sm text-[#6a25ff] bg-[#F1F2F4]">Phone number*</label>
                        </div>
                        <div className="relative w-full ">
                        <input required type="email" className="border px-5 border-gray-300 p-2 py-3 rounded-lg w-[100%]  focus:outline-gray-400/50 " placeholder="Enter email"></input>
                        <label className="absolute  left-2 bottom-[80%] font-normal text-sm text-[#6a25ff] bg-[#F1F2F4]">Email address*</label>
                        </div>
                        <div className="relative w-full ">
                        <input required type="password" className="border border-gray-300 px-5 p-2 py-3 rounded-lg w-[100%] focus:outline-1 focus:outline-gray-400/50" placeholder="Enter password"></input>
                        <label className="absolute  left-2 bottom-[80%] font-normal text-sm text-[#6a25ff] bg-[#F1F2F4]">Password</label>
                        </div>
                        <div className="relative w-full ">
                        <input required type="text" className="border px-5 border-gray-300 p-2 py-3 rounded-lg w-[100%]   focus:outline-gray-400/50 " placeholder="Enter Company name"></input>
                        <label className="absolute  left-2 bottom-[80%] font-normal text-sm text-[#6a25ff] bg-[#F1F2F4]">Company Name*</label>
                        </div>
                    </div>
                        </form>
                        <Link  to={"/profile"} className="absolute bottom-5 flex items-center justify-center required  bg-[#6C25FF] hover:bg-[#6e25ffc4] w-[80%] p-3 rounded-lg text-white font-bold cursor-pointer">Login</Link>
                </div>
            </div>
       </div>
    </>
}
export default SignupPage