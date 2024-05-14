import "./Sidebar.css";
import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { BsFillBellFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IoLogOutSharp } from "react-icons/io5";
import { Mycontext } from "../../App";
const Sidebar = () => {
  const context = useContext(Mycontext);
  const [activeTab, setactivetab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const isOpenSubmenu = (index) => {
    setactivetab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(0)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/dashboard">Product List</Link>
                </li>
                <li>
                  <Link to="/product/details">Product View</Link>
                </li>
                <li>
                  <Link to="/product/upload">Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 2 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(2)}
              >
                <span className="icon">
                  <FaCartPlus />
                </span>
                Orders
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 3 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(3)}
              >
                <span className="icon">
                  <BiSolidMessageRoundedDetail />
                </span>
                Messages
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 4 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(4)}
              >
                <span className="icon">
                  <BsFillBellFill />
                </span>
                Notifucations
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
              <div
                className={`submenuWrapper ${
                  activeTab === 4 && isToggleSubmenu === true
                    ? "colapse"
                    : "colapsed"
                }`}
              >
                <ul className="submenu">
                  <li>
                    <Link to="#">Product Listss</Link>
                  </li>
                  <li>
                    <Link to="#">Product View</Link>
                  </li>
                  <li>
                    <Link to="#">Product Upload</Link>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 5 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(5)}
              >
                <span className="icon">
                  <IoSettings />
                </span>
                Settings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 6 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(6)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 7 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(7)}
              >
                <span className="icon">
                  <FaProductHunt />
                </span>
                Products
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 8 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(8)}
              >
                <span className="icon">
                  <FaCartPlus />
                </span>
                Orders
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 9 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(9)}
              >
                <span className="icon">
                  <BiSolidMessageRoundedDetail />
                </span>
                Messages
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 10 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(10)}
              >
                <span className="icon">
                  <BsFillBellFill />
                </span>
                Notifucations
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 11 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(11)}
              >
                <span className="icon">
                  <IoSettings />
                </span>
                Settings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 12 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(12)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button className="w-100">
                <span className="icon">
                  <FaCartPlus />
                </span>
                Orders
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button className="w-100">
                <span className="icon">
                  <BiSolidMessageRoundedDetail />
                </span>
                Messages
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button className="w-100">
                <span className="icon">
                  <BsFillBellFill />
                </span>
                Notifucations
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className="w-100">
                <span className="icon">
                  <IoSettings />
                </span>
                Settings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
        </ul>
        <div className="logOutWrapper">
          <div className="logOutBox">
            <Button variant="contained">
              <IoLogOutSharp />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
