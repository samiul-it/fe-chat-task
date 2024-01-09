import React from "react";
import CardBody from "../CardBody/CardBody";

const HomePage = () => {
  return (
    <div>
      <div className="card w-96 bg-[#f2f4f7] h-[800px]  rounded-none m-2 overflow-auto">
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex items-center ">
              <div
                style={{
                  borderTopLeftRadius: "50%",
                  borderBottomLeftRadius: "50%",
                }}
                className="w-[30px] h-[30px]  bg-[#c7101d]"
              ></div>
              <div className="ml-2 text-lg font-semibold"> Incomplete</div>
            </div>
            <div className="p-2 bg-[#e9eef3]">0</div>
          </div>

          {/* Card Body  */}

          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
