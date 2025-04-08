import { FaRegHeart } from "react-icons/fa"



const Card = ({cardimg,cardTitle,Description,Price,Location}) => {
  return (
    <>
    {/* card head */}
    <div className="w-full relative ">
        <div className="w-full overflow-hidden rounded-md">
          <img src={cardimg} className="aspect-[4/5] object-cover w-full hover:scale-110 cursor-pointer duration-500"/> 
        </div>
        <div className="absolute right-6 top-2 rounded-md bg-gray-300 p-2 h-fit">
            <span className="text-xl   "><FaRegHeart/></span>
        </div>
    </div>
    {/* card body */}
    <div>
<h3>{cardTitle}</h3>
<p>{Description}</p>
<div className="flex gap-14 items-center ">
    <span>${Price} night</span>
    <span>{Location}</span>
</div>
    </div>
    </>
    
  )
}

export default Card