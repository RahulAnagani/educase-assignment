import { Link } from "react-router-dom";
const Profile=()=>{
    return <>
        <div className="flex justify-center w-[100dvw] h-[100dvh] p-2 items-center">
            <div className="w-full sm:w-[75%] md:w-[50%] lg:w-[30%] h-full rounded shadow-xl 
            bg-gradient-to-br from-gray-300/30 via-gray-200/50  to-gray-400/30 
            backdrop-blur-md border border-gray-400/50 ">
                <div className="w-full h-[10%] bg-white shadow-lg flex items-center justify-start p-5 rounded rounded-b-none">
                    <h1 className="font-normal text-xl">Account Settings</h1>
                </div>
                    <div className="w-full h-[30%] ">
                        <div className="w-full flex h-[50%]">
                            <div className="w-[30%] flex relative items-center justify-center h-full">
                                <div className="w-full h-full flex items-center justify-center">
                                <img src="/profile.jpg" className="w-[60%] h-[60%] rounded-full object-cover"></img>
                                <img src="/camera.svg" className="absolute rounded-full w-8 h-8 cursor-pointer right-5 top-[60%]"></img>
                                </div>
                            </div>
                            <div className="w-[70%] h-full flex flex-col p-5 pt-10">
                                <h1 className="font-normal text-xl">Marry Doe</h1>
                                <h1 className="text-gray-600">marry@gmail.com</h1>
                            </div>
                        </div>
                        <div className="h-[50%] flex items-center justify-center p-5 text-gray-800">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia expedita corrupti sequi laborum quam esse veniam cum nisi id assumenda!</p>
                        </div>
                    </div>
                    <div className="w-full h-[55%] border  border-2 border-r-0 border-l-0 border-dashed border-gray-300"></div>
            </div>
       </div>
    </>
}
export default Profile;