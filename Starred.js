import React, { useState } from "react";
import StarredMsg from "./StarredMsg";
import msgData from "./msgData";


function Starred(){
    const [msgs, setMsg]= useState(msgData)
    return(
        console.log('stared'),
        <div >
           <div className="w-[834px] h-[840px] absolute top-[167px] left-[576px] bg-white rounded-xl border-[0.3px] border-[rgba(185,185,185,0.5)]">
            <div className='absolute flex w-[332px] h-[40px] top-[20px] left-[20px] border-[0.6px] text-[#a0a0a0] bg-[#F5F6FA] rounded-r-full rounded-s-full pl-10 pt-1'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-[14px] top-[8px]'>
                    <g opacity="0.5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69355 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3756 2.7619 8.2221 1.48942 5.49227 2.64957C2.76243 3.80972 1.48995 6.96318 2.6501 9.69302C3.81025 12.4229 6.96372 13.6953 9.69355 12.5352Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.3902 11.3896L15.5556 15.5555" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
                Search mail
            </div>

            <div className="w-[131px] h-[40px] absolute top-[20px] right-[20px] bg-[#fafbfd] border-[0.6px] border-[#d5d5d5] rounded-xl flex align-middle justify-center justify-evenly pt-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2222 0H1.76889C0.786667 0 0.00888889 0.795556 0.00888889 1.77778L0 14.2222C0 15.2044 0.786667 16 1.76889 16H14.2222C15.2044 16 16 15.2044 16 14.2222V1.77778C16 0.795556 15.2044 0 14.2222 0ZM14.2222 10.6667H10.6667C10.6667 12.1378 9.47111 13.3333 8 13.3333C6.52889 13.3333 5.33333 12.1378 5.33333 10.6667H1.76889V1.77778H14.2222V10.6667ZM9.77778 6.22222H11.5556L8 9.77778L4.44444 6.22222H6.22222V3.55556H9.77778V6.22222Z" fill="#202224"/>
                </svg>
                
                <div className="w-[1px] h-[40px] border-r-[0.4px] relative top-[-13px]"></div>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM7.2 12V7.2H8.8V12H7.2ZM7.2 4V5.6H8.8V4H7.2Z" fill="#202224"/>
                </svg>

                <div className="w-[1px] h-[40px] border-r-[0.4px] relative top-[-13px]"></div>

                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33333 0.888889H12.4444V2.66667H0V0.888889H3.11111L4 0H8.44444L9.33333 0.888889ZM2.66667 16C1.68889 16 0.888889 15.2 0.888889 14.2222V3.55556H11.5556V14.2222C11.5556 15.2 10.7556 16 9.77778 16H2.66667Z" fill="black"/>
                </svg>

                        {/* <Msg msg={msg}></Msg> */}
            </div>
                <div>
                    {
                        msgs.map((msg) => {
                            return <StarredMsg {...msg}></StarredMsg>
                        })
                    }
                </div>
        </div>
        </div>
    )
}

export default Starred;