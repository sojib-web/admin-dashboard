import React from "react";
import "./Dashboard.css";
import DashboardBox from "./Components/DashboardBox/DashboardBox"
import { FaCircleUser } from "react-icons/fa6";
import { ImCart } from "react-icons/im";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
const Dashboard = () => {
  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={['#11998e', '#38ef7d']} icon={<FaCircleUser />} />
              <DashboardBox color={['#6a11cb', '#2575fc']} icon={<ImCart />} />
              <DashboardBox color={['#f7971e', '#ffd200']} icon={<IoBagHandleSharp />} />
              <DashboardBox color={['#ff6e7f', '#bfe9ff']} icon={<IoStarSharp />} />
            </div>
          </div>
          <div className="col-md-3 pl-0">
            <div className="box">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
