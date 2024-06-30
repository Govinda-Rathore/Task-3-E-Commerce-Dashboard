import React, { useState } from "react";import List from "./List";
import listData from './listData';
import OrderType from "./OrderType";
import OrderStatus from "./OrderStatus";

function OrderList(){
    const [lists, setlist]= useState(listData);
    const [opacType,setOpacType]=useState("0");
    const [opacStatus,setOpacStatus]=useState("0");

    function date(){
        <input type="date" className="absolute"></input>
    }

    function orderType(){
       if(opacType!=="0"){
        setOpacType("0");
       }
       else setOpacType("1");
    }

    function orderStatus(){
        if(opacStatus!=="0"){
            setOpacStatus("0");
       }
       else setOpacStatus("1");
    }

    return(
        <div className="w-[1440px] h-[1070px] overflow-y-hidden">
            <div className="w-[1202px] h-[1070px] bg-[#F5F6FA] absolute left-[239px] ">
            </div>
            <h1 className="w-[182px] h-[44px] absolute top-[100px] left-[270px] text-[32px] leading-[43.65px] font-semibold text-[#202224] ">Order Lists</h1>
             
            <div className="w-[818px] h-[70px] absolute top-[167px] left-[270px] rounded-xl border-[0.6px] border-[rgba(213, 213, 213, 1)] bg-white flex items-center">
                <div className="h-[70px] absolute left-[20px] pr-6 flex border-r-[0.3px] border-[rgba(151, 151, 151, .6882)] text-[#202224] gap-2 items-center">
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.75C16.3848 9.75 20.75 7.73528 20.75 5.25C20.75 2.76472 16.3848 0.75 11 0.75C5.61522 0.75 1.25 2.76472 1.25 5.25C1.25 7.73528 5.61522 9.75 11 9.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.25 5.25C1.25253 9.76548 4.35614 13.688 8.75 14.729V21C8.75 22.2426 9.75736 23.25 11 23.25C12.2426 23.25 13.25 22.2426 13.25 21V14.729C17.6439 13.688 20.7475 9.76548 20.75 5.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="h-[70px] absolute left-[93px] pr-6 flex border-r-[0.3px] border-[rgba(151, 151, 151, .6882)] text-[#202224] gap-2 items-center">Filter By</div>
                <div className="h-[70px] absolute left-[200px] pr-6 flex border-r-[0.3px] border-[rgba(151, 151, 151, .6882)] text-[#202224] gap-2 items-center" onClick={date}>Date 
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.415 8.71L12 13.295L16.585 8.71L18 10.125L12 16.125L6 10.125L7.415 8.71Z" fill="black"/>
                    </svg>
                </div>
                <div className="h-[70px] absolute left-[326px] pr-6 flex border-r-[0.3px] border-[rgba(151, 151, 151, .6882)] text-[#202224] gap-2 items-center" onClick={orderType}>Order Type
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.415 8.71L12 13.295L16.585 8.71L18 10.125L12 16.125L6 10.125L7.415 8.71Z" fill="black"/>
                    </svg>
                </div>
                <div className="h-[70px] absolute left-[500px] pr-6 flex border-r-[0.3px] border-[rgba(151, 151, 151, .6882)] text-[#202224] gap-2 items-center" onClick={orderStatus}>Order Status
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.415 8.71L12 13.295L16.585 8.71L18 10.125L12 16.125L6 10.125L7.415 8.71Z" fill="black"/>
                    </svg>
                </div>
                <div className="h-[19px] absolute right-[20px] pr-6 flex text-[#EA0234] gap-2 items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3.75V0.75L5.25 4.5L9 8.25V5.25C11.4825 5.25 13.5 7.2675 13.5 9.75C13.5 12.2325 11.4825 14.25 9 14.25C6.5175 14.25 4.5 12.2325 4.5 9.75H3C3 13.065 5.685 15.75 9 15.75C12.315 15.75 15 13.065 15 9.75C15 6.435 12.315 3.75 9 3.75Z" fill="#EA0234"/>
                    </svg>
                    Reset Filter
                </div>
            </div>

            <div className="w-[1141px] h-[733px] absolute top-[261px] left-[269px] bg-white rounded-xl border-[0.3px] border-[rgba(185, 185, 185, )] ">
                <div className="relative top-4">
                    <p className="h-19px font-bold absolute left-[20px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">ID</p>
                    <p className="h-19px font-bold absolute left-[175px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">NAME</p>
                    <p className="h-19px font-bold absolute left-[387px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">ADDRESS</p>
                    <p className="h-19px font-bold absolute left-[626px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">DATE</p>
                    <p className="h-19px font-bold absolute left-[820px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">TYPE</p>
                    <p className="h-19px font-bold absolute right-[90px] text-[14px] leading-[19.1px] text-[rgba(32, 34, 36, 0.9)] ">STATUS</p>
                </div>

                <div className="relative top-[50px]">
                    {
                        lists.map((list) => {
                            return <List {...list}></List>
                        })
                    }
                </div>

            </div>

            <p className="w-[129px] h-[19px] absolute top-[1020px] left-[269px] opacity-60 text-[rgba(32, 34, 36, 1)] text-[14px] leading-[19.1px] ">Showing 1-09 of 78</p>
            <div className="absolute top-[1014px] left-[1324px] ">
                <svg width="86" height="32" viewBox="0 0 86 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.3" y="1.3" width="85.4" height="29.4" rx="7.7" fill="#FAFBFD" stroke="#D5D5D5" stroke-width="0.6"/>
                    <g opacity="0.6">
                    <path d="M25.41 20.4064L20.83 16L25.41 11.5936L24 10.24L18 16L24 21.76L25.41 20.4064Z" fill="#202224"/>
                    </g>
                    <g opacity="0.9">
                    <path d="M61.59 20.4064L66.17 16L61.59 11.5936L63 10.24L69 16L63 21.76L61.59 20.4064Z" fill="#202224"/>
                    </g>
                    <path opacity="0.700544" d="M43.5 31V1" stroke="#979797" stroke-width="0.4" stroke-linecap="square"/>
                </svg>
            </div>
            
            <OrderStatus op={opacStatus}></OrderStatus>
            <OrderType op={opacType}></OrderType>
           
        </div>
    )
}

export default OrderList;