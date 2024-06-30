import PriceCard from "./PriceCard";

function Pricing(){
    return(
        
        <div className="w-[1440px] h-[1070px] overflow-y-hidden flex">
            <div className="w-[1202px] h-[1070px] bg-[#F5F6FA] absolute left-[239px] ">
            </div>
            <h1 className="w-[132px] h-[44px] absolute top-[100px] left-[270px] text-[32px] leading-[43.65px] font-semibold text-[#202224] ">Pricing</h1>
           

           <PriceCard name="Basic" price="$14.99" c1="0.3" c2="0.3"></PriceCard>
           <PriceCard name="Standard" price="$49.99" c1="1" c2="0.3"></PriceCard>
           <PriceCard name="Premium" price="$89.99" c1="1" c2="1"></PriceCard>
        </div>

    )
}

export default Pricing;