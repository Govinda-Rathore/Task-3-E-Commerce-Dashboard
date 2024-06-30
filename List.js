import { useEffect, useState } from "react";




function List({id,name,address,date,type,status}){
    const[col,setCol]=useState("black");
    const[statusbg,setFilterBg]=useState("");

    function FilterHandler(){
        useEffect(()=>{
            if(status=="On Hold") {setCol("rgba(253, 154, 86, 1)"); setFilterBg("rgba(253, 154, 86, 0.2)");}

            else if(status=="Completed") {setCol("rgba(0, 182, 155, 1)"); setFilterBg("rgba(0, 182, 155, 0.2)");}

            else if(status=="In Transit") {setCol("rgba(186, 41, 255, 1)"); setFilterBg("rgba(186, 41, 255, 0.2)");}

            else if(status=="Processing") {setCol("rgba(98, 38, 239, 1)"); setFilterBg("rgba(98, 38, 239, 0.2)");}

            else if(status=="Rejected") {setCol("rgba(239, 56, 38, 1)"); setFilterBg("rgba(239, 56, 38, 0.2)");}


            else setCol("white");
                
        },[])
    } 

    return(
        <div className="h-[74px] flex relative border-t-[0.4px] border-[rgba(151, 151, 151, 0.6)] items-center">
            <p className="h-19px absolute left-[20px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">{id}</p>
            <p className="h-19px absolute left-[175px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">{name}</p>
            <p className="h-19px absolute left-[387px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">{address}</p>
            <p className="h-19px absolute left-[626px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">{date}</p>
            <p className="h-19px absolute left-[820px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">{type}</p>
            <div className="absolute right-[60px] w-[93px] h-[27px] rounded-md bg-white flex items-center " style={{backgroundColor:statusbg}} ><h3 className="w-[61px] h-[16px] text-[12px] relative left-4 bottom-[2px]" style={{color:col}}>{FilterHandler(status)}{status}</h3></div>
        </div>
    )
}

export default List;