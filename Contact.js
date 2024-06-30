import ContactCard from "./ContactCard";
import data from './contactData';
import { useState } from "react";


function Contact(){
    const [contacts, setContact]= useState(data);

    return(
        <div className="w-[1440px] h-[1070px] overflow-y-hidden">
            <div className="w-[1202px] h-[1070px] bg-[#F5F6FA] absolute left-[239px] ">
            </div>
            <h1 className="w-[132px] h-[44px] absolute top-[100px] left-[270px] text-[32px] leading-[43.65px] font-semibold text-[#202224] ">Contact</h1>
            <button className="w-[147px] h-[48px] absolute top-[100px] left-[1263px] text-[14px] leading-[27px] text-[white] bg-[#4379EE] rounded-md hover:bg-[#4359EE] " >Add New Contact</button>

            <div>
            {
                        contacts.map((contact) => {
                            return <ContactCard {...contact} ></ContactCard>
                        })
                    }
            </div>

        </div>

    )
}

export default Contact;