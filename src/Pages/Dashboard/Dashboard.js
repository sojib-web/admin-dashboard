import React, { useState } from "react";
import "./Dashboard.css";
import DashboardBox from "./Components/DashboardBox/DashboardBox"
import { FaCircleUser } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { ImCart } from "react-icons/im";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { IoIosTimer } from "react-icons/io";
import { Chart } from "react-google-charts";


export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};
const Dashboard = () => {

  const [anchorEl1, setAnchorEl1] = useState(null)
  const open = Boolean(anchorEl1);
  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEl1(null);
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={['#11998e', '#38ef7d']} icon={<FaCircleUser />}
                grow={true} />
              <DashboardBox color={['#6a11cb', '#2575fc']} icon={<ImCart />} />
              <DashboardBox color={['#f7971e', '#ffd200']} icon={<IoBagHandleSharp />} />
              <DashboardBox color={['#ff6e7f', '#bfe9ff']} icon={<IoStarSharp />} />
            </div>
          </div>
          <div className="col-md-3 pl-0">
            <div className="box graphBox">
              <div className='d-flex align-items-center w-100 bottomEle'>
                <h6 className='text-white mb-0 mt-0'>Total Seles</h6>
                <div className='ml-auto'>
                  <Button className='ml-auto toggleIcon' onClick={handleClick}><HiDotsVertical /></Button>

                  <Menu
                    className='dropDownMenus'
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl1}
                    open={open}
                    onClose={handleCloses}
                    PaperProps={{
                      style: {

                        width: '20ch',
                      },
                    }}
                  >

                    <MenuItem onClick={handleCloses}>
                      <div className='IconText'>                            <IoIosTimer className='mr-3 Timer' />
                        <span className='align-items-center'>Last</span></div>
                    </MenuItem>
                    <MenuItem onClick={handleCloses}>
                      <div className='IconText'>                            <IoIosTimer className='mr-3 Timer' />
                        <span className='align-items-center'>Last Day</span></div>
                    </MenuItem>
                    <MenuItem onClick={handleCloses}>
                      <div className='IconText'>                            <IoIosTimer className='mr-3 Timer' />
                        <span className='align-items-center'>Last Day</span></div>
                    </MenuItem>
                    <MenuItem onClick={handleCloses}>
                      <div className='IconText'>                            <IoIosTimer className='mr-3 Timer' />
                        <span className='align-items-center'>Last Day</span></div>

                    </MenuItem>

                  </Menu>
                </div>
              </div>

              <h3 className="text-white font-weight-bold">$3359</h3>
              <p>834230 in last month</p>
              <Chart
                chartType="AreaChart"
                width="100%"
                height="290px"
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling products</h3>

          <div className="row">
            <div className="col">
              <h4>SHOW BY</h4>
            </div>
            <div className="col">
              <h4>SHOW BY</h4>
            </div>
            <div className="col">
              <h4>SHOW BY</h4>
            </div>
            <div className="col">
              <h4>SHOW BY</h4>
            </div>
            <div className="col">
              <h4>SHOW BY</h4>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Dashboard;
