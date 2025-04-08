import { useContext } from "react"
import { FaBars, FaCampground, FaSun } from "react-icons/fa"
import { IoPersonCircle } from "react-icons/io5"
import { ContextApi } from "../helper/ContextApi"


const Navbar = () => {
  let { usertoggle,setusertoggle,setsearchvalue}=useContext(ContextApi)
  return (

    <nav className="flex items-center justify-between py-8 px-4 border-black/50 border-b flex-wrap">
        <div className=" bg-orange-400 text-white p-2  text-2xl rounded-lg"><span ><FaCampground /></span></div>
        <div className="w-[30%] hidden md:flex ">
          <input className="py-1.5 w-full px-2.5 border border-black/50 outline-orange-400 rounded-lg" type="text" placeholder="find a property..." onChange={(e)=>{setsearchvalue(e.target.value)}}/>
        </div>
        <div className="flex gap-2.5 items-center ">
          <span className="border border-black/50 text-2xl p-1.5 rounded-lg hover:bg-gray-200"><FaSun/></span>
          <div className="flex gap-3 text-2xl items-center border border-black/50 px-3 rounded-lg  py-1.5 hover:bg-gray-200 cursor-pointer" onClick={()=>{
            setusertoggle(!usertoggle)
          }}>
          <span><FaBars/></span>
          <span className="text-orange-400"><IoPersonCircle/></span>
            </div>
            </div>
      
        <div className="w-[100%] flex md:hidden mt-3">
          <input className="py-1.5 w-full px-2.5 border border-black/50 outline-orange-400 rounded-lg" type="text" placeholder="find a property..."  onChange={(e)=>{setsearchvalue(e.target.value)}}/>
        </div>
        
    </nav>
    
  )
}

export default Navbar