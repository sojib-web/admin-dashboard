import "./Login.css";
import logo from "../../assets/images/bacola-logo.png";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../App";
import LoginBanner from "../../assets/images/banner sign.webp";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [inputIndx, setInputIndex] = useState(null);
  const [isShowPassord, setisShowPassord] = useState(false);
  const context = useContext(Mycontext);

  useEffect(() => {
    context.setIsHideSiderbarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  return (
    <>
      <img src={LoginBanner} alt="" className="loginBanner" />
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={logo} alt="" width={"130px"} />
            <h5 className="font-weight-bold pt-3">Login to Bacola</h5>
          </div>
          <div className="wrapper mt-3 card border ">
            <form>
              <div
                className={`form-group position-relative ${
                  inputIndx === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail size={20} color="#6c757d" />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter your email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                  autoFocus
                ></input>
              </div>

              <div
                className={`form-group  position-relative ${
                  inputIndx === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <RiLockPasswordFill size={20} color="#6c757d" />
                </span>
                <input
                  type={`${isShowPassord === true ? "text" : "password"}`}
                  className="form-control"
                  placeholder="enter your password"
                  onFocus={() => focusInput(1)}
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
              <div className="form-group">
                <Button className="btn-blue textSize btn-lg w-100">
                  Sign In
                </Button>
              </div>
              <div className="form-group text-center mb-0">
                <Link to={`/forgot-password`} className="link">
                  FORGOT PASSWORD
                </Link>
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
          </div>

          <div className="wrapper mt-3 card border footer p-3">
            <span className="text-center ">
              Dont't have an account?
              <Link className="link-color ml-2" to={`/signUp`}>
                Register
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
