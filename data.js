import user_icon from './Images/Icon (4).png';
import order_icon from './Images/Icon (1).png';
import sales_icon from './Images/Icon (2).png';
import pending_icon from './Images/Icon (3).png';


const data=[
    {
        id:1,
        name:"Total User",
        qty:"40,689",
        perc:"8.5%",
        color:"#00B69B",
        info:"Up from yesterday",
        image: user_icon,
    },
    {
        id:2,
        name:"Total Order",
        qty:"10293",
        perc:"1.3% ",
        color:"#00B69B",
        info:"Up from past week",
        image: order_icon,
    },
    {
        id:3,
        name:"Total Sales",
        qty:"$89,000",
        perc:"4.3%",
        color:"#000000",
        info:"Down from yesterday",
        image: sales_icon,
    },
    {
        id:4,
        name:"Total Pending",
        qty:"2040",
        perc:"1.8% ",
        color:"#00B69B",
        info:"Up from yesterday",
        image: pending_icon,
    },
]

export default data;