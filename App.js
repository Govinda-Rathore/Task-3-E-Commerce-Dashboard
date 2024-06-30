import logo from './components/Images/Logo.png';
import notification_icon from './components/Images/Icon.png';
import flag from './components/Images/UK Flag.png';
import admin from './components/Images/man-438081_960_720.png';

import React, { useState } from "react";
import './App.css';
import {NavLink,Route,Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Favorites from './components/Favorites';
import Inbox from './components/Inbox';
import OrderList from './components/OrderList';
import ProductStock from './components/ProductStock';
import Pricing from './components/Pricing';
import Calender from './components/Calender';
import ToDo from './components/ToDo';
import Contact from './components/Contact';
import Invoice from './components/Invoice';
import Settings from './components/Settings';
import SubComponents from './components/SubComponents';


import { Components } from 'react';
// import Filter from './components/Filter';

function App() {
  const[notif,setnotif]=useState("0");
  const[account,setacc]=useState("0");
  const[lang,setlang]=useState("0");

  function openNotif(){
    if(notif!=="0" ){
     setnotif("0");
    }
    else setnotif("1");
 }
 function openAccount(){
    if(account!=="0" ){
      setacc("0");
    }
    else setacc("1");
  }
  function openLang(){
    if(lang!=="0" ){
      setlang("0");
    }
    else setlang("1");
  }
 
  return (
    <div className="App w-[1440px] h-[1070px]">
      <nav className="w-[240px] h-[1070px] absolute">
        <div>
          <img src={logo} className="w-[129px] h-[27px] relative top-[24px] left-[66px]"></img>
        </div>
        <br></br>
          <ul className='flex flex-col'>
            <li className='mt-4'>
              <NavLink to="/" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
              }>
              <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.15625 2.94922C4.78906 1.31641 6.73698 0.5 9 0.5C11.263 0.5 13.1966 1.31641 14.8008 2.94922C16.4336 4.55339 17.25 6.48698 17.25 8.75C17.25 11.013 16.4336 12.9609 14.8008 14.5938C13.1966 16.1979 11.263 17 9 17C6.73698 17 4.78906 16.1979 3.15625 14.5938C1.55208 12.9609 0.75 11.013 0.75 8.75C0.75 6.48698 1.55208 4.55339 3.15625 2.94922ZM13.8555 3.89453C12.5091 2.54818 10.8906 1.875 9 1.875C7.10938 1.875 5.49089 2.54818 4.14453 3.89453C2.79818 5.24089 2.125 6.85938 2.125 8.75C2.125 10.6406 2.79818 12.2591 4.14453 13.6055C5.49089 14.9518 7.10938 15.625 9 15.625C10.8906 15.625 12.5091 14.9518 13.8555 13.6055C15.2018 12.2591 15.875 10.6406 15.875 8.75C15.875 6.85938 15.2018 5.24089 13.8555 3.89453ZM8.48438 2.77734C8.6276 2.63411 8.79948 2.5625 9 2.5625C9.20052 2.5625 9.35807 2.63411 9.47266 2.77734C9.61589 2.89193 9.6875 3.04948 9.6875 3.25C9.6875 3.45052 9.61589 3.6224 9.47266 3.76562C9.35807 3.88021 9.20052 3.9375 9 3.9375C8.79948 3.9375 8.6276 3.88021 8.48438 3.76562C8.36979 3.6224 8.3125 3.45052 8.3125 3.25C8.3125 3.04948 8.36979 2.89193 8.48438 2.77734ZM4.61719 4.41016C4.76042 4.26693 4.91797 4.19531 5.08984 4.19531C5.29036 4.19531 5.46224 4.26693 5.60547 4.41016C5.7487 4.52474 5.82031 4.68229 5.82031 4.88281C5.82031 5.05469 5.7487 5.21224 5.60547 5.35547C5.46224 5.4987 5.29036 5.57031 5.08984 5.57031C4.91797 5.57031 4.76042 5.4987 4.61719 5.35547C4.5026 5.21224 4.44531 5.05469 4.44531 4.88281C4.44531 4.68229 4.5026 4.52474 4.61719 4.41016ZM12.3945 4.36719L13.3828 5.35547L10.332 8.40625C10.3607 8.52083 10.375 8.63542 10.375 8.75C10.375 9.1224 10.2318 9.45182 9.94531 9.73828C9.6875 9.99609 9.3724 10.125 9 10.125C8.6276 10.125 8.29818 9.99609 8.01172 9.73828C7.75391 9.45182 7.625 9.1224 7.625 8.75C7.625 8.3776 7.75391 8.0625 8.01172 7.80469C8.29818 7.51823 8.6276 7.375 9 7.375C9.11458 7.375 9.22917 7.38932 9.34375 7.41797L12.3945 4.36719ZM2.98438 8.27734C3.1276 8.13411 3.29948 8.0625 3.5 8.0625C3.70052 8.0625 3.85807 8.13411 3.97266 8.27734C4.11589 8.39193 4.1875 8.54948 4.1875 8.75C4.1875 8.95052 4.11589 9.1224 3.97266 9.26562C3.85807 9.38021 3.70052 9.4375 3.5 9.4375C3.29948 9.4375 3.1276 9.38021 2.98438 9.26562C2.86979 9.1224 2.8125 8.95052 2.8125 8.75C2.8125 8.54948 2.86979 8.39193 2.98438 8.27734ZM13.9844 8.27734C14.1276 8.13411 14.2995 8.0625 14.5 8.0625C14.7005 8.0625 14.8581 8.13411 14.9727 8.27734C15.1159 8.39193 15.1875 8.54948 15.1875 8.75C15.1875 8.95052 15.1159 9.1224 14.9727 9.26562C14.8581 9.38021 14.7005 9.4375 14.5 9.4375C14.2995 9.4375 14.1276 9.38021 13.9844 9.26562C13.8698 9.1224 13.8125 8.95052 13.8125 8.75C13.8125 8.54948 13.8698 8.39193 13.9844 8.27734ZM4.61719 12.1445C4.76042 12.0013 4.91797 11.9297 5.08984 11.9297C5.29036 11.9297 5.46224 12.0013 5.60547 12.1445C5.7487 12.2878 5.82031 12.4596 5.82031 12.6602C5.82031 12.832 5.7487 12.9896 5.60547 13.1328C5.46224 13.2474 5.29036 13.3047 5.08984 13.3047C4.91797 13.3047 4.76042 13.2474 4.61719 13.1328C4.5026 12.9896 4.44531 12.832 4.44531 12.6602C4.44531 12.4596 4.5026 12.2878 4.61719 12.1445ZM12.3945 12.1445C12.5378 12.0013 12.6953 11.9297 12.8672 11.9297C13.0677 11.9297 13.2253 12.0013 13.3398 12.1445C13.4831 12.2878 13.5547 12.4596 13.5547 12.6602C13.5547 12.832 13.4831 12.9896 13.3398 13.1328C13.2253 13.2474 13.0677 13.3047 12.8672 13.3047C12.6953 13.3047 12.5378 13.2474 12.3945 13.1328C12.2513 12.9896 12.1797 12.832 12.1797 12.6602C12.1797 12.4596 12.2513 12.2878 12.3945 12.1445Z" />
              </svg>

              Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.4375 0.1875H1.125H14.875H15.5625V0.875V14.625V15.3125H14.875H1.125H0.4375V14.625V0.875V0.1875ZM1.8125 1.5625V7.0625H7.3125V1.5625H1.8125ZM8.6875 1.5625V7.0625H14.1875V1.5625H8.6875ZM1.8125 8.4375V13.9375H7.3125V8.4375H1.8125ZM8.6875 8.4375V13.9375H14.1875V8.4375H8.6875Z" />
              </svg>
              Products</NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53125 0.1875C7.19271 0.1875 8.68229 0.860677 10 2.20703C11.3177 0.860677 12.8073 0.1875 14.4688 0.1875C15.901 0.1875 17.1185 0.703125 18.1211 1.73438C19.1237 2.73698 19.625 3.9401 19.625 5.34375C19.625 5.91667 19.4818 6.50391 19.1953 7.10547C18.9089 7.67839 18.6224 8.10807 18.3359 8.39453L17.9062 8.78125L10.5156 16.2578L10 16.7734L9.48438 16.2578L2.09375 8.78125C1.80729 8.52344 1.52083 8.19401 1.23438 7.79297C0.661458 6.93359 0.375 6.11719 0.375 5.34375C0.375 3.9401 0.876302 2.73698 1.87891 1.73438C2.88151 0.703125 4.09896 0.1875 5.53125 0.1875ZM5.53125 1.5625C4.5 1.5625 3.61198 1.9349 2.86719 2.67969C2.1224 3.42448 1.75 4.3125 1.75 5.34375C1.75 5.83073 1.95052 6.38932 2.35156 7.01953L3.03906 7.83594L10 14.7969L16.9609 7.83594C17.8203 6.89062 18.25 6.0599 18.25 5.34375C18.25 4.3125 17.8776 3.42448 17.1328 2.67969C16.388 1.9349 15.5 1.5625 14.4688 1.5625C13.8672 1.5625 13.237 1.73438 12.5781 2.07812C11.9193 2.39323 11.4036 2.72266 11.0312 3.06641L10.5156 3.53906L10 4.14062L9.48438 3.53906C9.34115 3.39583 9.14062 3.22396 8.88281 3.02344C8.65365 2.79427 8.18099 2.49349 7.46484 2.12109C6.77734 1.7487 6.13281 1.5625 5.53125 1.5625Z" />
              </svg>

              Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/inbox" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.375 0.1875H1.0625H13.4375H14.125V0.875V10.5V11.1875H13.4375H7.50781L4.24219 13.7656L3.125 14.7109V13.25V11.1875H1.0625H0.375V10.5V0.875V0.1875ZM1.75 1.5625V9.8125H3.8125H4.5V10.5V11.7891L6.82031 9.98438L6.99219 9.8125H7.25H12.75V1.5625H1.75ZM15.5 2.9375H19.625V13.9375H16.875V17.4609L12.4922 13.9375H6.13281L7.85156 12.5625H13.0078L15.5 14.5391V12.5625H18.25V4.3125H15.5V2.9375Z" />
              </svg>
              Inbox</NavLink>
            </li>
            {/* <Filter filter="Order List" ></Filter> */}
            <li>
              <NavLink to="/orderList" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.04688 0.359375L6.07812 1.39062L3.32812 4.14062L2.8125 4.57031L2.29688 4.14062L0.921875 2.76562L1.95312 1.73438L2.8125 2.63672L5.04688 0.359375ZM8.3125 1.5625H17.25V2.9375H8.3125V1.5625ZM5.04688 5.85938L6.07812 6.89062L3.32812 9.64062L2.8125 10.0703L2.29688 9.64062L0.921875 8.26562L1.95312 7.23438L2.8125 8.13672L5.04688 5.85938ZM8.3125 7.0625H17.25V8.4375H8.3125V7.0625ZM5.04688 11.3594L6.07812 12.3906L3.32812 15.1406L2.8125 15.5703L2.29688 15.1406L0.921875 13.7656L1.95312 12.7344L2.8125 13.6367L5.04688 11.3594ZM8.3125 12.5625H17.25V13.9375H8.3125V12.5625Z" />
              </svg>
              Order Lists</NavLink>
            </li>
            <li>
              <NavLink to="/productStock" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="15" height="17" viewBox="0 0 15 17" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.4375 0.5H1.125H13.5H14.1875V1.1875V16.3125V17H13.5H1.125H0.4375V16.3125V1.1875V0.5ZM1.8125 1.875V5.3125H12.8125V1.875H1.8125ZM1.8125 6.6875V10.8125H12.8125V6.6875H1.8125ZM1.8125 12.1875V15.625H12.8125V12.1875H1.8125Z" />
              </svg>

              Product Stock</NavLink>
            </li>
          </ul>

          <div className='w-[240px] h-[1px] absolute top-[397px] border-[0.6px] color-[#E0E0E0] '></div>
          <div className='w-[41px] h-[16px] absolute top-[414px] left-[40px] opacity-60 text-[12px] leading-[16.37px] tracking-[0.26px] '>PAGES</div>
          <ul className='flex flex-col'>
            <li className='mt-20'>
              <NavLink to="/pricing" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
              }>
              <svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.25 0.1875C7.16667 0.1875 8.02604 0.746094 8.82812 1.86328C8.82812 1.89193 8.88542 1.99219 9 2.16406C9.11458 1.99219 9.17188 1.89193 9.17188 1.86328C9.97396 0.746094 10.8333 0.1875 11.75 0.1875C12.3229 0.1875 12.8099 0.388021 13.2109 0.789062C13.612 1.1901 13.8125 1.67708 13.8125 2.25C13.8125 2.47917 13.7695 2.70833 13.6836 2.9375H16.5625H17.25V3.625V6.375V7.0625H16.5625V15.3125V16H15.875H2.125H1.4375V15.3125V7.0625H0.75V6.375V3.625V2.9375H1.4375H4.31641C4.23047 2.70833 4.1875 2.47917 4.1875 2.25C4.1875 1.67708 4.38802 1.1901 4.78906 0.789062C5.1901 0.388021 5.67708 0.1875 6.25 0.1875ZM6.25 1.5625C5.79167 1.5625 5.5625 1.79167 5.5625 2.25C5.5625 2.70833 5.79167 2.9375 6.25 2.9375H7.83984C7.8112 2.90885 7.78255 2.86589 7.75391 2.80859C7.72526 2.7513 7.69661 2.69401 7.66797 2.63672C7.15234 1.92057 6.67969 1.5625 6.25 1.5625ZM11.75 1.5625C11.3203 1.5625 10.8477 1.92057 10.332 2.63672C10.3034 2.69401 10.2747 2.73698 10.2461 2.76562C10.2461 2.76562 10.2318 2.79427 10.2031 2.85156C10.2031 2.88021 10.1888 2.90885 10.1602 2.9375H11.75C12.2083 2.9375 12.4375 2.70833 12.4375 2.25C12.4375 1.79167 12.2083 1.5625 11.75 1.5625ZM2.125 4.3125V5.6875H8.3125V5H9.6875V5.6875H15.875V4.3125H9H7.96875H2.125ZM2.8125 7.0625V14.625H8.3125V7.75H9.6875V14.625H15.1875V7.0625H2.8125Z"/>
              </svg>

              Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/calender" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="16" height="17" viewBox="0 0 16 17"  xmlns="http://www.w3.org/2000/svg">
              <path d="M3.1875 0.5H4.5625V1.1875H11.4375V0.5H12.8125V1.1875H14.875H15.5625V1.875V15.625V16.3125H14.875H1.125H0.4375V15.625V1.875V1.1875H1.125H3.1875V0.5ZM1.8125 2.5625V3.9375H14.1875V2.5625H12.8125V3.25H11.4375V2.5625H4.5625V3.25H3.1875V2.5625H1.8125ZM1.8125 5.3125V14.9375H14.1875V5.3125H1.8125ZM5.9375 6.6875H7.3125V8.0625H5.9375V6.6875ZM8.6875 6.6875H10.0625V8.0625H8.6875V6.6875ZM11.4375 6.6875H12.8125V8.0625H11.4375V6.6875ZM3.1875 9.4375H4.5625V10.8125H3.1875V9.4375ZM5.9375 9.4375H7.3125V10.8125H5.9375V9.4375ZM8.6875 9.4375H10.0625V10.8125H8.6875V9.4375ZM11.4375 9.4375H12.8125V10.8125H11.4375V9.4375ZM3.1875 12.1875H4.5625V13.5625H3.1875V12.1875ZM5.9375 12.1875H7.3125V13.5625H5.9375V12.1875ZM8.6875 12.1875H10.0625V13.5625H8.6875V12.1875Z" />
              </svg>

              Calender</NavLink>
            </li>
            <li>
              <NavLink to="/to-do" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="15" height="18" viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.50781 2.1875C5.88021 1.27083 6.48177 0.8125 7.3125 0.8125C8.14323 0.8125 8.74479 1.27083 9.11719 2.1875H10.75H11.4375H13.5H14.1875V2.875V17.3125V18H13.5H1.125H0.4375V17.3125V2.875V2.1875H1.125H3.1875H3.875H5.50781ZM7.78516 2.40234C7.67057 2.25911 7.51302 2.1875 7.3125 2.1875C7.11198 2.1875 6.9401 2.25911 6.79688 2.40234C6.68229 2.51693 6.625 2.67448 6.625 2.875V3.5625H5.9375H4.5625V4.9375H10.0625V3.5625H8.6875H8V2.875C8 2.67448 7.92839 2.51693 7.78516 2.40234ZM1.8125 3.5625V16.625H12.8125V3.5625H11.4375V5.625V6.3125H10.75H3.875H3.1875V5.625V3.5625H1.8125Z"/>
              </svg>

              To-Do</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="21" height="13" viewBox="0 0 21 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.57812 1.76562C3.38021 0.963542 4.35417 0.5625 5.5 0.5625C6.64583 0.5625 7.61979 0.963542 8.42188 1.76562C9.22396 2.56771 9.625 3.54167 9.625 4.6875C9.625 6.09115 9.05208 7.20833 7.90625 8.03906C8.96615 8.55469 9.76823 9.29948 10.3125 10.2734C10.8568 9.29948 11.6589 8.55469 12.7188 8.03906C11.5729 7.20833 11 6.09115 11 4.6875C11 3.54167 11.401 2.56771 12.2031 1.76562C13.0052 0.963542 13.9792 0.5625 15.125 0.5625C16.2708 0.5625 17.2448 0.963542 18.0469 1.76562C18.849 2.56771 19.25 3.54167 19.25 4.6875C19.25 6.09115 18.6771 7.20833 17.5312 8.03906C18.4766 8.4974 19.2214 9.17057 19.7656 10.0586C20.3385 10.918 20.625 11.8776 20.625 12.9375H19.25C19.25 11.7917 18.849 10.8177 18.0469 10.0156C17.2448 9.21354 16.2708 8.8125 15.125 8.8125C13.9792 8.8125 13.0052 9.21354 12.2031 10.0156C11.401 10.8177 11 11.7917 11 12.9375H9.625C9.625 11.7917 9.22396 10.8177 8.42188 10.0156C7.61979 9.21354 6.64583 8.8125 5.5 8.8125C4.35417 8.8125 3.38021 9.21354 2.57812 10.0156C1.77604 10.8177 1.375 11.7917 1.375 12.9375H0C0 11.8776 0.272135 10.918 0.816406 10.0586C1.38932 9.17057 2.14844 8.4974 3.09375 8.03906C1.94792 7.20833 1.375 6.09115 1.375 4.6875C1.375 3.54167 1.77604 2.56771 2.57812 1.76562ZM7.43359 2.75391C6.91797 2.20964 6.27344 1.9375 5.5 1.9375C4.72656 1.9375 4.06771 2.20964 3.52344 2.75391C3.00781 3.26953 2.75 3.91406 2.75 4.6875C2.75 5.46094 3.00781 6.11979 3.52344 6.66406C4.06771 7.17969 4.72656 7.4375 5.5 7.4375C6.27344 7.4375 6.91797 7.17969 7.43359 6.66406C7.97786 6.11979 8.25 5.46094 8.25 4.6875C8.25 3.91406 7.97786 3.26953 7.43359 2.75391ZM17.0586 2.75391C16.543 2.20964 15.8984 1.9375 15.125 1.9375C14.3516 1.9375 13.6927 2.20964 13.1484 2.75391C12.6328 3.26953 12.375 3.91406 12.375 4.6875C12.375 5.46094 12.6328 6.11979 13.1484 6.66406C13.6927 7.17969 14.3516 7.4375 15.125 7.4375C15.8984 7.4375 16.543 7.17969 17.0586 6.66406C17.6029 6.11979 17.875 5.46094 17.875 4.6875C17.875 3.91406 17.6029 3.26953 17.0586 2.75391Z"/>
              </svg>

              Contact</NavLink>
            </li>
            {/* <Filter filter="Order List" ></Filter> */}
            <li>
              <NavLink to="/invoice" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.207 0.015625L18.7227 2.9375H17.3047L17.0898 1.60547L9.3125 2.9375H1.14844L18.207 0.015625ZM0.375 3.625H1.0625H2.09375H18.9375H19.625V4.3125V13.9375V14.625H18.9375H1.0625H0.375V13.9375V5.34375V4.3125V3.625ZM3.76953 5C3.79818 5.14323 3.8125 5.25781 3.8125 5.34375C3.8125 5.83073 3.64062 6.24609 3.29688 6.58984C2.98177 6.90495 2.58073 7.0625 2.09375 7.0625C2.00781 7.0625 1.89323 7.04818 1.75 7.01953V11.2305C1.89323 11.2018 2.00781 11.1875 2.09375 11.1875C2.58073 11.1875 2.98177 11.3594 3.29688 11.7031C3.64062 12.0182 3.8125 12.4193 3.8125 12.9062C3.8125 12.9922 3.79818 13.1068 3.76953 13.25H16.2305C16.2018 13.1068 16.1875 12.9922 16.1875 12.9062C16.1875 12.4193 16.3451 12.0182 16.6602 11.7031C17.0039 11.3594 17.4193 11.1875 17.9062 11.1875C17.9922 11.1875 18.1068 11.2018 18.25 11.2305V7.01953C18.1068 7.04818 17.9922 7.0625 17.9062 7.0625C17.4193 7.0625 17.0039 6.90495 16.6602 6.58984C16.3451 6.24609 16.1875 5.83073 16.1875 5.34375C16.1875 5.25781 16.2018 5.14323 16.2305 5H3.76953ZM7.55078 6.71875C8.23828 6.03125 9.05469 5.6875 10 5.6875C10.9453 5.6875 11.7474 6.03125 12.4062 6.71875C13.0938 7.3776 13.4375 8.17969 13.4375 9.125C13.4375 10.0703 13.0938 10.8867 12.4062 11.5742C11.7474 12.2331 10.9453 12.5625 10 12.5625C9.05469 12.5625 8.23828 12.2331 7.55078 11.5742C6.89193 10.8867 6.5625 10.0703 6.5625 9.125C6.5625 8.17969 6.89193 7.3776 7.55078 6.71875ZM11.4609 7.66406C11.0599 7.26302 10.5729 7.0625 10 7.0625C9.42708 7.0625 8.9401 7.26302 8.53906 7.66406C8.13802 8.0651 7.9375 8.55208 7.9375 9.125C7.9375 9.69792 8.13802 10.1849 8.53906 10.5859C8.9401 10.987 9.42708 11.1875 10 11.1875C10.5729 11.1875 11.0599 10.987 11.4609 10.5859C11.862 10.1849 12.0625 9.69792 12.0625 9.125C12.0625 8.55208 11.862 8.0651 11.4609 7.66406Z" />
              </svg>

              Invoice</NavLink>
            </li>
            <li>
              <NavLink to="/ui-element" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4375 0.5H13.125H17.25H17.9375V1.1875V16.3125V17H17.25H13.125H12.4375V16.3125V1.1875V0.5ZM13.8125 1.875V15.625H16.5625V1.875H13.8125ZM0.0625 4.625H0.75H4.875H5.5625V5.3125V16.3125V17H4.875H0.75H0.0625V16.3125V5.3125V4.625ZM1.4375 6V15.625H4.1875V6H1.4375ZM6.25 8.75H6.9375H11.0625H11.75V9.4375V16.3125V17H11.0625H6.9375H6.25V16.3125V9.4375V8.75ZM7.625 10.125V15.625H10.375V10.125H7.625Z" />
              </svg>

              UI Element</NavLink>
            </li>
            <li>
              <NavLink to="/team" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="15" height="16" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.91797 1.60547C4.86328 0.660156 5.99479 0.1875 7.3125 0.1875C8.63021 0.1875 9.76172 0.660156 10.707 1.60547C11.6523 2.55078 12.125 3.68229 12.125 5C12.125 5.80208 11.9245 6.5612 11.5234 7.27734C11.151 7.99349 10.6354 8.56641 9.97656 8.99609C11.237 9.54036 12.2539 10.3854 13.0273 11.5312C13.8008 12.6484 14.1875 13.9089 14.1875 15.3125H12.8125C12.8125 13.7943 12.2682 12.5052 11.1797 11.4453C10.1198 10.3568 8.83073 9.8125 7.3125 9.8125C5.79427 9.8125 4.49089 10.3568 3.40234 11.4453C2.34245 12.5052 1.8125 13.7943 1.8125 15.3125H0.4375C0.4375 13.9089 0.824219 12.6484 1.59766 11.5312C2.37109 10.3854 3.38802 9.54036 4.64844 8.99609C3.98958 8.56641 3.45964 7.99349 3.05859 7.27734C2.6862 6.5612 2.5 5.80208 2.5 5C2.5 3.68229 2.97266 2.55078 3.91797 1.60547ZM9.71875 2.59375C9.0599 1.90625 8.25781 1.5625 7.3125 1.5625C6.36719 1.5625 5.55078 1.90625 4.86328 2.59375C4.20443 3.2526 3.875 4.05469 3.875 5C3.875 5.94531 4.20443 6.76172 4.86328 7.44922C5.55078 8.10807 6.36719 8.4375 7.3125 8.4375C8.25781 8.4375 9.0599 8.10807 9.71875 7.44922C10.4062 6.76172 10.75 5.94531 10.75 5C10.75 4.05469 10.4062 3.2526 9.71875 2.59375Z"/>
              </svg>

              Team</NavLink>
            </li>
            <li>
              <NavLink to="/table" className={({ isActive }) =>
                isActive ? "w-[192px] h-[50px] left-[24px] bg-[#4880FF] text-white py-[16px] pl-[16px] gap-4 ml-6 border-rad-[4px] rounded-[6px] text-[14px] font-semibold leading-[19.1px] fill-white flex " : "bg-white py-[16px] fill-black px-[54px] text-[14px] pl-[16px] gap-4 ml-6 font-semibold leading-[19.1px] flex"
            }>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.4375 0.1875H1.125H14.875H15.5625V0.875V14.625V15.3125H14.875H1.125H0.4375V14.625V0.875V0.1875ZM1.8125 1.5625V5H5.25V1.5625H1.8125ZM6.625 1.5625V5H9.375V1.5625H6.625ZM10.75 1.5625V5H14.1875V1.5625H10.75ZM1.8125 6.375V9.125H5.25V6.375H1.8125ZM6.625 6.375V9.125H9.375V6.375H6.625ZM10.75 6.375V9.125H14.1875V6.375H10.75ZM1.8125 10.5V13.9375H5.25V10.5H1.8125ZM6.625 10.5V13.9375H9.375V10.5H6.625ZM10.75 10.5V13.9375H14.1875V10.5H10.75Z" />
              </svg>

              Table</NavLink>
            </li>
          </ul>
      </nav>

      <div className='w-[1201px] h-[70px] z-10 flex absolute left-[239px] bg-white'>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='top-[23px] absolute left-[30px]'>
          <g opacity="0.898019">
          <path d="M3.75 6.5625H20.25V7.9375H3.75V6.5625ZM3.75 12.0625H20.25V13.4375H3.75V12.0625ZM3.75 17.5625H20.25V18.9375H3.75V17.5625Z" fill="#202224"/>
          </g>
        </svg>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-[94px] top-[28px] z-10'>
            <g opacity="0.5">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69355 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3756 2.7619 8.2221 1.48942 5.49227 2.64957C2.76243 3.80972 1.48995 6.96318 2.6501 9.69302C3.81025 12.4229 6.96372 13.6953 9.69355 12.5352Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.3902 11.3896L15.5556 15.5555" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        <input type='text' className='absolute flex w-[388px] h-[38px] top-[16px] left-[78px] border-[0.6px] text-[#a0a0a0] bg-[#F5F6FA] rounded-r-full rounded-s-full pl-10 pt-1' placeholder='Search'>
        </input>
        <img src={notification_icon} className='w-[29px] h-[30.5px] absolute top-[19px] left-[796px] ' onClick={openNotif}></img>
        <div className='w-[123.08px] h-[27px] absolute top-[22px] left-[851px] flex'>
          <img src={flag}></img>
          <div className='flex absolute left-16 top-1 font-semibold text-[14px] leading-[19.1px] text-[#646464] gap-3'>
            English
            <div className='rotate-180' onClick={openLang}>^</div>
          </div>
        </div>
        <div className='w-[169px] h-[44px] absolute top-[13px] left-[1001px] flex gap-4 ml-3'>
            <img src={admin} className='w-[44px] h-[44px]'></img>
            <div>
              <h3 className='w-[61px] h-[19px] relative top-[2px]  font-bold text-[14px] leading-[19.1px]'>XYZ</h3>
              <span className='w-[37px] h-[16px] text-[#565656] font-semibold text-[12px] leading-[16.37px] relative left-1'>Admin</span>
            </div>
            <div className='w-[18px] h-[18px] rotate-180 border-[0.2px] border-[#b0b0b0] rounded-full relative top-[10px] ' onClick={openAccount}>
              ^
            </div>
        </div>
        <SubComponents notif={notif} account={account} lan={lang}></SubComponents>
      </div>

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/inbox/*' element={<Inbox/>}/>
        <Route path='/orderList' element={<OrderList/>}/>
        <Route path='/productStock' element={<ProductStock/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/to-do' element={<ToDo/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
      </Routes>
    </div>
  );
}

export default App;