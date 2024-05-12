import "./SignUp.css";
import logo from "../../assets/images/bacola-logo.png";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../App";
import LoginBanner from "../../assets/images/121.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { FaShieldVirus } from "react-icons/fa";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IoHome } from "react-icons/io5";
const SignUp = () => {
  const [inputIndx, setInputIndex] = useState(null);
  const [isShowPassord, setisShowPassord] = useState(false);
  const [isShowConfirmPassord, setisShowConfirmPassord] = useState(false);

  const context = useContext(Mycontext);

  useEffect(() => {
    context.setIsHideSiderbarAndHeader(true);
    window.scrollTo(0, 0);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  return (
    <>
      <img src={LoginBanner} alt="" className="loginBanner" />
      <section className="loginSection SignSection">
        <div className="row">
          <div className="col-md-7 d-flex align-items-center flex-column justify-content-center part1">
            <h1>
              BEST UX/UI FASHION{" "}
              <span className="text-sky">ECOMMERCE DASHBOARD</span> & ADMIN
              PANEL
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsuny web
              sites still in their infancy. Various versions have evolved over
              the years,
            </p>
            <div className="w-100 mt-4">
              <Link to={`/`}>
                <Button className="btn-blue btn-lg btn-big">
                  <IoHome /> &nbsp; Go To Home
                </Button>
              </Link>
            </div>
          </div>

          <div className="col-md-4 pr-0">
            <div className="loginBox">
              <div className="logo text-center">
                <img src={logo} alt="" width={"130px"} />
                <h5 className="font-weight-bold ">Regisster a new account</h5>
              </div>
              <div className="wrapper mt-3 card border ">
                <form>
                  <div
                    className={`form-group position-relative ${
                      inputIndx === 0 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <FaUserCircle size={20} color="#6c757d" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter your name"
                      onFocus={() => focusInput(0)}
                      onBlur={() => setInputIndex(null)}
                      autoFocus
                    ></input>
                  </div>

                  <div
                    className={`form-group position-relative ${
                      inputIndx === 1 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <MdEmail size={20} color="#6c757d" />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="enter your email"
                      onFocus={() => focusInput(1)}
                      onBlur={() => setInputIndex(null)}
                    ></input>
                  </div>

                  <div
                    className={`form-group  position-relative ${
                      inputIndx === 2 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <RiLockPasswordFill size={20} color="#6c757d" />
                    </span>
                    <input
                      type={`${isShowPassord === true ? "text" : "password"}`}
                      className="form-control"
                      placeholder="enter your password"
                      onFocus={() => focusInput(2)}
                      onBlur={() => setInputIndex(null)}
                    ></input>
                    <span
                      className="toggleShowPassword"
                      onClick={() => setisShowPassord(!isShowPassord)}
                    >
                      {isShowPassord === true ? (
                        <FaEye size={20} color="#6c757d" />
                      ) : (
                        <IoEyeOff size={20} color="#6c757d" />
                      )}
                    </span>
                  </div>

                  <div
                    className={`form-group  position-relative ${
                      inputIndx === 3 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <FaShieldVirus size={20} color="#6c757d" />
                    </span>
                    <input
                      type={`${
                        isShowConfirmPassord === true ? "text" : "password"
                      }`}
                      className="form-control"
                      placeholder="confirm your password"
                      onFocus={() => focusInput(3)}
                      onBlur={() => setisShowConfirmPassord(null)}
                    ></input>
                    <span
                      className="toggleShowPassword"
                      onClick={() =>
                        setisShowConfirmPassord(!isShowConfirmPassord)
                      }
                    >
                      {isShowConfirmPassord === true ? (
                        <FaEye size={20} color="#6c757d" />
                      ) : (
                        <IoEyeOff size={20} color="#6c757d" />
                      )}
                    </span>
                  </div>

                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to the trems & Conditions"
                  />
                  <div className="form-group">
                    <Button className="btn-blue textSize btn-lg w-100">
                      Sign Up
                    </Button>
                  </div>
                  <div className="form-group text-center mb-0">
                    {/* <Link to={`/forgot-password`} className="link">
                      FORGOT PASSWORD
                    </Link> */}
                    <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                      <span className="line"></span>
                      <span className="txt">Or</span>
                      <span className="line"></span>
                    </div>

                    <Button
                      variant="outlined"
                      className=" btn-lg w-100  loginWithGoogle"
                    >
                      <FcGoogle className="IconGoogle" />
                      &nbsp; Sign In with Google
                    </Button>
                  </div>
                </form>
                <span className="text-center d-block mt-3 footer  ">
                  Dont't have an account?
                  <Link className="link-color ml-2" to={`/login`}>
                    Sign In
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
