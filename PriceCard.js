import React from "react";



function PriceCard(props){
    const name=props.name;
    const price=props.price;
    const c1=props.c1;
    const c2=props.c2

    return(
        <div className="w-[350px] h-[848px] relative top-[175px] left-[269px] bg-[white] flex flex-col items-center mr-11 rounded-2xl hover:scale-105">
            <p className="w-[54px] h-[30px] absolute top-[40px] text-center text-[22px] leading-[30px] text-[#202224] font-semibold flex justify-center">{name}</p>
            <p className="w-[114px] h-[22px] absolute top-[80px] text-[16px] opacity-80 text-[#212121] ">Monthly Charge</p>
            <p className="w-[150px] h-[63px] absolute top-[100px] text-[46px] text-[#4880FF] leading-[62.74px] font-bold ">{price}</p>
            <div className="w-[300px] h-[2px] absolute top-[210px] opacity-10 bg-[#212121]  "></div>
            <ul className="w-[255px] h-[349px] absolute top-[250px] text-[#212121] flex flex-col gap-8 text-[18px] leading-[24.55px] font-semibold opacity-90 ">
                <li style={{opacity:1}}>Free Setup</li>
                <li style={{opacity:1}}>Bandwidth Limit 10 GB</li>
                <li style={{opacity:1}}>20 User Connection</li>
                <li style={{opacity:c1}}>Analytics Report</li>
                <li style={{opacity:c1}}>Public API Access</li>
                <li style={{opacity:c2}}>Plugins Intregation</li>
                <li style={{opacity:c2}}>Custom Content Management</li>
            </ul>

            <div className="w-[300px] h-[2px] absolute top-[660px] bg-[#212121] opacity-10 "></div>

            <button className="w-[180px] h-[60px] absolute top-[700px] border-[2px] border-[#4880FF] rounded-s-full rounded-r-full text-[#4880FF] hover:bg-[#4880FF] hover:text-white ">Get Started</button>

            <span className="absolute bottom-6">Start Your 30 Day Free Trial</span>

        </div>
    )
}

export default PriceCard;