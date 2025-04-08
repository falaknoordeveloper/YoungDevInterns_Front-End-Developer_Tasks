import { createContext, useState } from "react";
export const ContextApi=createContext();
export const ContextProvider=({children})=>{
    let [usertoggle,setusertoggle]=useState(false);

    let [Searchvalue,setsearchvalue]=useState("");
    let [APIdata,setAPIdata]=useState(null);
    let QuoteAPI=async()=>{try {
        let response=await fetch ("https://api.api-ninjas.com/v1/quotes",{
            headers:{ 'X-Api-Key':"JvQ7xTLFjkOaZELt84OgYA==Y1oxjRRHexdzY1GL"},
            contentType: 'application/json',

        })
        let result =await response.json()
        console.log(result);
        setAPIdata(result[0])


    } catch (error) {
        console.log(error);
    }}
    return <ContextApi.Provider value={{ usertoggle,setusertoggle,Searchvalue,setsearchvalue,QuoteAPI,APIdata}}>
       {children}
    </ContextApi.Provider>
}
