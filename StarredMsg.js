import { useState } from "react";


function StarredMsg({name,info,time}){

    
    return(
        <div className="w-[834px] h-[42px] mt-[20px] relative top-[103px] left-[0px] flex border-b-[0.3px] border-[#e0e0e0]">
            <input type="checkbox" className="size-[16px] relative left-[16px]"></input>
            <input type="checkbox"  className="appearance-none "></input>
            <div className="absolute left-[60px] fill-none" > 
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#FFD56D" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51719 1.31697L11.8966 6.03091L16.4761 6.48459C16.6987 6.50309 16.8902 6.6494 16.9666 6.85931C17.043 7.06923 16.9903 7.30441 16.8316 7.46165L13.0628 11.1971L14.4601 16.273C14.5185 16.4929 14.4425 16.7266 14.2659 16.8701C14.0892 17.0136 13.8449 17.0401 13.6416 16.9379L8.99879 14.6389L4.36237 16.935C4.15908 17.0373 3.91474 17.0107 3.73813 16.8673C3.56152 16.7238 3.48549 16.4901 3.54389 16.2701L4.94121 11.1943L1.1695 7.45881C1.01084 7.30156 0.958138 7.06639 1.03453 6.85647C1.11092 6.64655 1.30244 6.50025 1.52505 6.48175L6.10459 6.02806L8.4804 1.31697C8.58002 1.1224 8.7802 1 8.99879 1C9.21739 1 9.41757 1.1224 9.51719 1.31697Z" stroke="#B3B3B3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </div>
            
            <p className="h-[19px] absolute left-[100px] text-left text-[14px] leading-[19.1px] text-[#202224] font-bold">{name}</p>
            <p className="h-[19px] absolute left-[330px]  text-[14px] leading-[19.1px] text-[#202224]">{info}</p>
            <p className="h-[19px] absolute right-[20px] text-[14px] leading-[19.1px] text-[#202224] opacity-70" >{time}</p>
        </div>
    )
}

export default StarredMsg;