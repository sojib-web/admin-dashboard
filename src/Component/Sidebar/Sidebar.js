import "./Sidebar.css";
import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { BsFillBellFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Button className="w-100">
              <span className="icon">
                <MdDashboard />
              </span>
              Dashboard
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <FaCartPlus />
              </span>
              Orders
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <BiSolidMessageRoundedDetail />
              </span>
              Messages
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <BsFillBellFill />
              </span>
              Notifucations
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <IoSettings />
              </span>
              Settings
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <MdDashboard />
              </span>
              Dashboard
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <FaCartPlus />
              </span>
              Orders
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <BiSolidMessageRoundedDetail />
              </span>
              Messages
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <BsFillBellFill />
              </span>
              Notifucations
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <IoSettings />
              </span>
              Settings
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <MdDashboard />
              </span>
              Dashboard
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <FaCartPlus />
              </span>
              Orders
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <BiSolidMessageRoundedDetail />
              </span>
              Messages
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <BsFillBellFill />
              </span>
              Notifucations
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <IoSettings />
              </span>
              Settings
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
