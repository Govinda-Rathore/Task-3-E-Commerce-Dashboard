import React from "react";
import FavoriteCard from "./FavoriteCard";

function Favorites(){
    return(
        <div className="w-[1440px] h-[1070px] overflow-y-hidden">
            <div className="w-[1202px] h-[1070px] bg-[#F5F6FA] absolute left-[239px] ">
            </div>
            <h1 className="w-[132px] h-[44px] absolute top-[100px] left-[270px] text-[32px] leading-[43.65px] font-semibold text-[#202224] ">Favorites</h1>
               
            <div className="w-[1170px] grid grid-cols-3 gap-y-8 ">
                <FavoriteCard name="Apple Watch Series 4 " price="$120.00"></FavoriteCard>
                <FavoriteCard name="Air-Max-270" price="$60.00"></FavoriteCard>
                <FavoriteCard name="Minimal Chair Tool" price="$24.59"></FavoriteCard>
                <FavoriteCard name="Amazfit Vip" price="$78.35"></FavoriteCard>
                <FavoriteCard name="Gumbo Mouse" price="$32.42"></FavoriteCard>
                <FavoriteCard name="Camera Tripod" price="$50.00"></FavoriteCard>
            </div>
        </div>
    )
}

export default Favorites;