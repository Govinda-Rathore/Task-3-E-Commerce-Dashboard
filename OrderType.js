import { useState } from "react";
import SelectOrderBtn from './SelectOrderBtn';
import orderTypeData from './selectOrderTypeData';



function OrderType(props){
    const op=props.op;
    const[orderTypeBtn,setOrderTypeBtn]=useState(orderTypeData);
    

    return(
        <div className="w-[521px] h-[358px] absolute top-[226px] left-[470px] bg-white shadow-[0px_13px_61px_0px_rgba(169,169,169,0.37)] rounded-[30px]" style={{scale:op}}>
            <h2 className="w-[148px] h-[25px] absolute top-[24px] left-[24px] text-[18px] font-semibold leading-[24.55px]">Select Order Type</h2>
            <div className="grid grid-cols-3 mr-6">
                {
                    orderTypeBtn.map((typeBtn) => {
                        return <SelectOrderBtn {...typeBtn}></SelectOrderBtn>
                    })
                }
            </div>
            <div className="w-[521px] h-[1px] absolute top-[220px] bg-[#979797] "></div>
            <p className="w-[228px] h-[19px] absolute top-[230px] left-[24px] text-[14px] leading-[19.1px] text-[#434343] opacity-60">*You can choose multiple Order type</p>
            <button className="w-[129px] h-[36px] absolute left-[194px] bottom-[24px] bg-[#4880FF] hover:bg-[#4860FF] text-white rounded-md text-[12px] font-bold leading-[16.37px]">Apply Now</button>
        </div>
    )
}

export default OrderType;