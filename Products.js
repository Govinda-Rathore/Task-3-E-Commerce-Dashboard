import React from "react";
import image from './Images/product-hero-img.png';
import ProdCard from "./ProdCard";

function Products(){
    return(
        <div className="w-[1440px] ">
            <div className="w-[1202px] h-[1070px] bg-[#F5F6FA] absolute left-[239px] ">
            </div>
            <h1 className="w-[132px] h-[44px] absolute top-[100px] left-[270px] text-[32px] leading-[43.65px] font-semibold text-[#202224] ">Products</h1>
               
            <div className="w-[1101px] h-[346px] absolute top-[127px] left-[299px] ">
                <img src={image} className="-scale-[1.1]"></img>
                <div className="w-[130px] h-[30px] absolute top-[97px] left-[98px] text-white ">September 12-22</div>
                <h2 className="w-[413px] h-[96px] absolute top-[127px] left-[100px] text-[37px] leading-[48px] text-white font-bold text-left">Enjoy free home delivery in this summer</h2>
                <p className="w-[381px] h-[30px] absolute top-[235px] left-[94px] text-white ">Designer Dresses - Pick from trendy Designer Dress.</p>
                <button className="w-[156px] h-[44px] absolute top-[290px] left-[100px] bg-[#FF8743] rounded-xl text-white hover:bg-[#FF7743] ">Get Started</button>
            </div>

            <div className="flex gap-[12px] ">
                <ProdCard></ProdCard>;
                <ProdCard></ProdCard>;
                <ProdCard></ProdCard>;
            </div>

        </div>
    )
}

export default Products;