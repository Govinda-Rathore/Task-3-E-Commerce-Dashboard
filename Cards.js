import Card from './Card'


function Cards({cards}){
    return(
        <div className='flex gap-8 '>
            {
                cards.map((dash)=>{
                    return <Card {...dash}></Card>
                })
            }
        </div>
    );
}

export default Cards;
