import Card from "../../../components/Card"
import Img1 from "../../../assets/images/card1img.webp"
import Img2 from "../../../assets/images/card2img.webp"
import Img3 from "../../../assets/images/card3img.webp"
import Img4 from "../../../assets/images/card4img.webp"
import Img5 from "../../../assets/images/card5img.webp"
import Img6 from "../../../assets/images/card6img.webp"
import Img7 from "../../../assets/images/card7img.webp"
import Img8 from "../../../assets/images/card8img.webp"
import Img9 from "../../../assets/images/card9img.webp"
import Img10 from "../../../assets/images/card10img.webp"
import Img11 from "../../../assets/images/card11img.webp"
import Img12 from "../../../assets/images/card12img.webp"
import Category from "../../../components/category"
import { useContext, useEffect } from "react"
import { ContextApi } from "../../../helper/ContextApi"



let Cards=[{
  cardimg:Img1,
  cardTitle:"Cabin in Latvia",
  Description:"Dream Gateway awaits you here",
  Price:100 ,
  Location:"AW Aruba",
},
{
  cardimg:Img2,
  cardTitle:"Cabin in Norway",
  Description:"Lonely Place",
  Price:100,
  Location:"No Norway",
},
{
  cardimg:Img3,
  cardTitle:"Cabin in Latvia",
  Description:"Dream Gateway awaits you here",
  Price:100,
  Location:"AW Aruba",
},
{
  cardimg:Img4,
  cardTitle:"Cabin in Latvia",
  Description:"Dream Gateway awaits you here",
  Price:100,
  Location:"AW Aruba",
},
{
  cardimg:Img5,
  cardTitle:"Cabin in Latvia",
  Description:"Dream Gateway awaits you here",
  Price:100,
  Location:"AW Aruba",
},
{
  cardimg:Img6,
  cardTitle:"Cabin in Latvia",
  Description:"Dream Gateway awaits you here",
  Price:100,
  Location:" ES Spain",
},
{
  cardimg:Img7,
  cardTitle:"Villa",
  Description:"Dream Gateway awaits you here",
  Price:100,
  Location:"AL Albania",
},
{
  cardimg:Img8,
  cardTitle:"Cabin in Latvia",
  Description:"Dream Gateway awaits you here",
  Price:100,
  Location:"AW Aruba",
},
{
  cardimg:Img9,
  cardTitle:"Kalam",
  Description:"Dream Gateway awaits you here",
  Price:100,
  Location:"IN India",
},
{
  cardimg:Img10,
  cardTitle:"Cabin in China",
  Description:"Dream Gateway awaits you here",
  Price:100,
  Location:"CN China",
},
{
  cardimg:Img11,
  cardTitle:"Cabin in Latvia",
  Description:"Dream Gateway awaits you here",
  Price:100,
  Location:"AW Aruba", 
},
{
  cardimg:Img12,
  cardTitle:"Cabin in Latvia",
  Description:"Dream Gateway awaits you here",
  Price:100,
  Location:"AW Aruba",
},


]
const Home = () => {
  let {Searchvalue,QuoteAPI,APIdata}=useContext(ContextApi)
  useEffect(()=>{
    QuoteAPI()
  },[])

  return (
    <div>

      <Category />
   <div className="flex flex-col items-center justify-center text-center mt-1 px-5 ">
    <q className="text-orange-500 text-lg font-semibold">{APIdata?.quote}</q>
    <p className="text-xl text-black-8 ">{APIdata?.author}</p>
    </div>  

<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-4  ">

  {Cards.filter((v,k)=>{return v.cardTitle.toLowerCase().includes(Searchvalue.toLowerCase())}).map((v,k)=>{
    return(
      <div key={k}><Card cardimg={v.cardimg} cardTitle={v.cardTitle} Description={v.Description} Price={v.Price} Location={v.Location}/></div>
    )
  })}
</div>
    </div>
    
  )
}

export default Home