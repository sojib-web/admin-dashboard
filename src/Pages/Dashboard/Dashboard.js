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
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { MdRemoveRedEye } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import { MdAutoDelete } from "react-icons/md";

import ImgProduct from "../../assets/images/12.jpg"
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
  const [ShowBy, setShowBy] = useState('');
  const [ShowByCat, setShowByCat] = useState('');
  const [ShowByBrand, setShowByBrand] = useState('');
  const [ShowBySearch, setShowBySearch] = useState('');
  const [anchorEl1, setAnchorEl1] = useState(null)
  const open = Boolean(anchorEl1);
  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEl1(null);
  };


  const handleChange = (event) => {
    setShowBy(event.target.value);
  };

  const handleChangeCat = (event) => {
    setShowByCat(event.target.value);
  };

  const handleChangeCatBrand = (event) => {
    setShowByBrand(event.target.value);
  };
  const handleChangesetShowBySearch = (event) => {
    setShowBySearch(event.target.value);
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

          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4 className="texts">Show By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={ShowBy}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4 className="texts">Category By </h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={ShowByCat}
                  onChange={handleChangeCat}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>


            <div className="col-md-3">
              <h4 className="texts">Brand By </h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={ShowByBrand}
                  onChange={handleChangeCatBrand}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>


            <div className="col-md-3">
              <h4 className="texts">Brand By </h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={ShowBySearch}
                  onChange={handleChangesetShowBySearch}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>Id/Name/Category/Brand</em>
                  </MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="table-responsive mt-3">
              <table className="table table-bordered t-aling">
                <thead className="thead-dark">
                  <tr>
                    <th>UID</th>
                    <th>PRODUCT</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th>PRICE</th>
                    <th>STOCK</th>
                    <th>RATING</th>
                    <th>ORDER</th>
                    <th>SELES</th>
                    <th>ACTION</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>rhuiort</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="info">
                          <div className="imgWrapper">
                            <div className="img w-100">
                              <img src={ImgProduct} alt="" />
                            </div>
                          </div>
                          <h6>means that your application is trying to import a module</h6>

                          <p> If you're sure the module name and installation</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>ricman</td>
                    <td><del className="oldPrice">$045</del>
                      <span className="NewPrice text-danger">$045</span></td>
                    <td>35.(23)</td>
                    <td>300</td>
                    <td>$45k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button className="secondary" color="secondary"><MdRemoveRedEye /></Button>
                        <Button className="success" color="success"><BsPencilFill /></Button>
                        <Button className="error" color="error"><MdAutoDelete /></Button>
                      </div>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Dashboard;
