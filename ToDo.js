import data from "./toDoData";
import ToDoItem from "./ToDoItem";
import React,{ useState } from "react";

function ToDo(){
    console.log("TODO");
    const [listItems, setListItems]= useState(data);
    const [addtask,setaddtask]= useState("0");
    const [h,seth]=useState("0");


    function addTask(){
        if(addtask!=="0"){
            setaddtask("0");
            seth(0);
        }
        else {setaddtask("1"); seth(93);}
    }

    function removeitem(id){
        const newItems=listItems.filter(listItem => listItem.id !== id);
        setListItems(newItems);
    }
    return(
        <div className="w-[1440px] h-[1070px] overflow-y-hidden flex" >
            <div className="w-[1202px] h-[1070px] bg-[#F5F6FA] absolute left-[239px] ">
            </div>
            <h1 className="w-[152px] h-[44px] absolute top-[100px] left-[270px] text-[32px] leading-[43.65px] font-semibold text-[#202224] ">To-Do List</h1>
            
            <button className="w-[147px] h-[48px] absolute top-[100px] left-[1263px] text-[14px] leading-[27px] text-[white] bg-[#4379EE] rounded-md hover:bg-[#4359EE] " onClick={addTask}>Add New Task</button>

            <div className="flex flex-col gap-8">
                <div className="w-[1140px] relative top-[201px] left-[270px] bg-white flex rounded-xl border-[0.6px] border-[#D5D5D5] hover:bg-gray-100" style={{scale:addtask, height:h}} >
                    <input type="text" className="w-[435px] h-[40px] absolute top-[30px] left-[30px] bg-[#f5f6fa] border-[#d5d5d5] border-[0.6px] rounded-md pl-4 " placeholder="Write Your task name here" ></input>
                </div>
                    {
                        listItems.map((item) => {
                            return <ToDoItem {...item} removeitem={removeitem}></ToDoItem>
                        })
                    }
                </div>
        </div>

    )
}

export default ToDo;