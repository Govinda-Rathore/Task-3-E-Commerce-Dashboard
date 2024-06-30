

function Card({id, name, qty, info,image,perc,color}){
    return(
        <div className="card w-[262px] h-[161px] relative top-[171px] left-[31px] gap-[10px] bg-white rounded-xl hover:scale-105">
            <img src={image} className="w-[60px] h-[60px] absolute top-[20px] left-[180px]"></img>
            <h4 className="w-[100px] h-[22px] absolute top-[20px] left-[10px] text-[16px] text-[#202224] opacity-70 text-left">{name}</h4>
            <h3 className="w-[96px] h-[38px] absolute top-[60px] left-[10px] text-[28px] tracking-[1px] text-[#202224] font-semibold text-left">{qty}</h3>
            <span className="text-[#00B69B] absolute top-[120px] left-[10px] " >{perc}</span>
            <p className="w-[200px] h-[22px] text-[16px] absolute top-[120px] left-[50px] text-left">{info}</p>
        </div>
    );
}

export default Card;