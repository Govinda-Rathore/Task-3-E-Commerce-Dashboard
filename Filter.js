import {NavLink} from 'react-router-dom';
import logo from './logo.svg';



function Filter(props){

    const filterName=props.filter;
    const svg=props.icon;
    return(
        <div>
            <NavLink to="/orderList" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <img src={logo}></img>
              {filterName}
            </NavLink>
        </div>
    )
}


export default Filter;