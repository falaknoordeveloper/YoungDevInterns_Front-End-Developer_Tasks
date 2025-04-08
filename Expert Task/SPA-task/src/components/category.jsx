import React from 'react'
import { GiMushroomHouse } from 'react-icons/gi'
import { LuContainer } from 'react-icons/lu'
import { MdCabin } from 'react-icons/md'
import { PiLighthouseBold, PiVan, PiWarehouse, } from 'react-icons/pi'
import { TbBuildingCottage, TbCaravan, TbTent } from 'react-icons/tb'


let CategoryNav=[{
    icon:<MdCabin/>,
    title:"Cabin",

},{
    icon:<PiVan />,
    title:"AirStream",
 
},
{
    icon:<TbTent />,
    title:"Tent",
 
},
{
    icon:<PiWarehouse />,
    title:"Warehouse",
 
},
{
    icon:<TbBuildingCottage />,
    title:"Cottage",
 
},
{
    icon:<GiMushroomHouse />,
    title:"Magic",
 
},
{
    icon:<LuContainer />,
    title:"Conatiner",
 
},
{
    icon:<TbCaravan />,
    title:"Caravan",
 
},
{
    icon:<PiLighthouseBold />,
    title:"Magic",
 
}]
const Category = () => {
  return (
    <div className='flex items-center gap-5 justify-center flex-wrap '>
        {CategoryNav.map((v,k)=>{
return(
    <div key={k} className='text-lg hover:text-orange-400 cursor-pointer p-4 text-center grid place-items-center' >
<span className='text-3xl'>
    {v.icon}
</span>
<h2>
    {v.title}
</h2>
    </div>
) 
        })}
    </div>
  )
}

export default Category