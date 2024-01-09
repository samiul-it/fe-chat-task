import React from "react";
import { RiStackFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { ImAttachment } from "react-icons/im";
import { MdOutlineDateRange } from "react-icons/md";

const CardBody = () => {
  return (
    <div className="mt-2 card-content w-84 bg-[#ffffff] h-[120px]">
      <div className="mt-2 flex justify-between">
        <div className="flex items-center avatar ">
          <div className="w-6 rounded-full ">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <p className="ml-2 font-semibold text-[#444444]">Client Name</p>
        </div>
        <div className="flex items-center avatar">
          <div className="w-6 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <p className="ml-2 font-semibold text-[#444444] ">Sadik Istiak</p>
        </div>
      </div>
      <div className="mt-2 flex justify-between text-[#444444] ">
        <div className="flex items-center">
          <RiStackFill />
          <p className="text-sm">
            <span>Lorem, ipsum dolor sit amet conse... </span>
          </p>
        </div>
        <div className="flex items-center bg-[#e9eef3] ">
          <FaClipboardList />
          <p className="text-sm">
            <span>1/2 </span>
          </p>
        </div>
      </div>
      <div className="mt-2  ">
        <div className="flex justify-evenly items-center avatar ">
          <div className="w-6 rounded-full ">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <div className="w-6 ml-2 rounded-full ">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <div className="w-6 ml-2 bg-[#e9eef3] rounded-full ">
            <span className="text-sm">12+</span>
          </div>
          <div className="ml-2">
            <LuMessagesSquare />
          </div>
          <div className="w-6 ml-2  ">15</div>
          <div className="">
            <ImAttachment />
          </div>
          <div className="w-6 ml-2  ">25</div>
          <div className="">
            <MdOutlineDateRange />
          </div>
          <div className="mb-[-40px] ml-1 ">31-12-22</div>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
