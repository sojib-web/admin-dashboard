import React, { useContext, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/bacola-logo.png";
import Button from "@mui/material/Button";
import { RiMenuFold2Fill } from "react-icons/ri";
import SearchBox from "../SearchBox/SearchBox";
import { MdLightMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import userLogo from "../../assets/images/images.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { FaShieldHalved } from "react-icons/fa6";
import Divider from "@mui/material/Divider";
import { Mycontext } from "../../App";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpneNotificationDrop, setisOpneNotificationDrop] = useState(false);

  const openMyAcc = Boolean(anchorEl);
  const openNotification = Boolean(isOpneNotificationDrop);

  const handleOpenAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpenNotificationsDrop = () => {
    setisOpneNotificationDrop(true);
  };

  const handleCloseNotificationsDrop = () => {
    setisOpneNotificationDrop(false);
  };

  const context = useContext(Mycontext);
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/*logo */}
            <div className="col-sm-2 part1">
              <Link to={"/"}>
                <img src={logo} alt="" className="logo" />
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 ">
              <Button
                className="rounded-circle mr-3"
                onClick={() =>
                  context.setIsToggleSidebar(!context.isToggleSidebar)
                }
              >
                {/* <RiMenuFold2Fill /> */}
                {context.isToggleSidebar === false ? (
                  <RiMenuFold2Fill />
                ) : (
                  <MenuIcon />
                )}
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center part3 justify-content-end ">
              <Button
                className="rounded-circle mr-3"
                onClick={() => context.setThemeMode(!context.themeMode)}
              >
                <MdLightMode />
              </Button>

              <Button className="rounded-circle mr-3">
                {" "}
                <FaShoppingCart />{" "}
              </Button>
              <Button className="rounded-circle mr-3">
                {" "}
                <MdEmail />
              </Button>

              <div className="dropdownWrapper position-relative">
                <Button
                  className="rounded-circle mr-3"
                  onClick={handleOpenNotificationsDrop}
                >
                  {" "}
                  <FaBell />
                </Button>
              </div>

              <Menu
                anchorEl={isOpneNotificationDrop}
                className="notifications  dropDown_list"
                id="notifications"
                open={openNotification}
                onClose={handleCloseNotificationsDrop}
                onClick={handleCloseNotificationsDrop}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
              >
                <div className="head pl-3 pb-0">
                  <h5>Order (12)</h5>
                </div>
                <Divider className="mb-1" />
                <div className="scroll">
                  <MenuItem onClick={handleCloseAccDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImag">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="" />
                          </span>
                        </div>
                      </div>
                      <div className="DropdownInfo">
                        <h4>
                          <span>
                            <b>Hasibul</b>
                            add to this favorite list
                            <b> Leather belt steve madden </b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few second ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseAccDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImag">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="" />
                          </span>
                        </div>
                      </div>
                      <div className="DropdownInfo">
                        <h4>
                          <span>
                            <b>Hasibul</b>
                            add to this favorite list
                            <b> Leather belt steve madden </b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few second ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <Divider />
                  <MenuItem onClick={handleCloseAccDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImag">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="" />
                          </span>
                        </div>
                      </div>
                      <div className="DropdownInfo">
                        <h4>
                          <span>
                            <b>Hasibul</b>
                            add to this favorite list
                            <b> Leather belt steve madden </b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few second ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <Divider />
                  <MenuItem onClick={handleCloseAccDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImag">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="" />
                          </span>
                        </div>
                      </div>
                      <div className="DropdownInfo">
                        <h4>
                          <span>
                            <b>Hasibul</b>
                            add to this favorite list
                            <b> Leather belt steve madden </b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few second ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <Divider />
                  <MenuItem onClick={handleCloseAccDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImag">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="" />
                          </span>
                        </div>
                      </div>
                      <div className="DropdownInfo">
                        <h4>
                          <span>
                            <b>Hasibul</b>
                            add to this favorite list
                            <b> Leather belt steve madden </b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few second ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <Divider />
                  <MenuItem onClick={handleCloseAccDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImag">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="" />
                          </span>
                        </div>
                      </div>
                      <div className="DropdownInfo">
                        <h4>
                          <span>
                            <b>Hasibul</b>
                            add to this favorite list
                            <b> Leather belt steve madden </b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few second ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <Divider />
                  <MenuItem onClick={handleCloseAccDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImag">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="" />
                          </span>
                        </div>
                      </div>
                      <div className="DropdownInfo">
                        <h4>
                          <span>
                            <b>Hasibul</b>
                            add to this favorite list
                            <b> Leather belt steve madden </b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few second ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <Divider />
                  <MenuItem onClick={handleCloseAccDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImag">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="" />
                          </span>
                        </div>
                      </div>
                      <div className="DropdownInfo">
                        <h4>
                          <span>
                            <b>Hasibul</b>
                            add to this favorite list
                            <b> Leather belt steve madden </b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few second ago</p>
                      </div>
                    </div>
                  </MenuItem>
                </div>
                <div className="pl-3  pr-3 pb-2 pt-3 w-100">
                  <Button className="btn-blue w-100">
                    View all notifications
                  </Button>
                </div>
              </Menu>

              {context.isLogin !== true ? (
                <Link to={"/login"}>
                  <Button className="btn-blue btn-lg btn-round">Sign In</Button>
                </Link>
              ) : (
                <div className="myAccWrapper">
                  <Button
                    className="myAcc d-flex align-items-center"
                    onClick={handleOpenAccDrop}
                  >
                    <div className="userImag">
                      <span className="rounded-circle">
                        <img src={userLogo} alt="" />
                      </span>
                    </div>
                    <div className="userInfo">
                      <h4>Sojib ALi</h4>
                      <p className="m-0">@gmailcom</p>
                    </div>
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMyAcc}
                    onClose={handleCloseAccDrop}
                    onClick={handleCloseAccDrop}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleCloseAccDrop}>
                      <ListItemIcon>
                        <RiAccountPinCircleFill />
                      </ListItemIcon>
                      My account
                    </MenuItem>
                    <MenuItem onClick={handleCloseAccDrop}>
                      <ListItemIcon>
                        <FaShieldHalved />
                      </ListItemIcon>
                      Reset Password
                    </MenuItem>

                    <MenuItem onClick={handleCloseAccDrop}>
                      <ListItemIcon>
                        <LuLogOut />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
