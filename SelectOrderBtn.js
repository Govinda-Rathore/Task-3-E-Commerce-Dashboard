import { useState } from "react";


function SelectOrderBtn({type}){
    const[bgCol,setbgCol]=useState("white");
    const[txtCol,settxtCol]=useState("black");
    
    function Selected(){
        if(bgCol!=="white" ){
            setbgCol("white");
            settxtCol("black");
        }
        else{
            setbgCol("#4880FF");
            settxtCol("white");
        }
    }

    return(
        <div className="w-[147px] h-[34px] relative top-[72px] left-[24px] mb-3">
                <div className="w-[147px] h-[34px] border-[0.6px] border-[rgba(151,151,151,1)] rounded-s-full rounded-r-full text-[14px] leading-[19.1px] text-[#202224] pt-1" onClick={Selected} style={{backgroundColor:bgCol, color:txtCol}}>{type}</div>
        </div>
    )
}

export default SelectOrderBtn;
