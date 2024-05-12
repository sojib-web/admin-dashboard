import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

const Mycontext = createContext();
function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSiderbarAndHeader, setIsHideSiderbarAndHeader] = useState(false);

  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {
    // document.body.classList.remove("light");
    // document.body.classList.remove("dark");
    // document.body.classList.add(!themeMode);
    // localStorage.setItem("themeMode", !themeMode);
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSiderbarAndHeader,
    setIsHideSiderbarAndHeader,
    themeMode,
    setThemeMode,
  };

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        {isHideSiderbarAndHeader !== true && <Header />}

        <div className="main d-flex">
          {isHideSiderbarAndHeader !== true && (
            <div
              className={`sidebarWrapper ${
                isToggleSidebar === true ? "toggle" : ""
              }`}
            >
              <Sidebar />
            </div>
          )}

          <div
            className={`content ${isHideSiderbarAndHeader === true && "full"} ${
              isToggleSidebar === true ? "toggle" : ""
            }`}
          >
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />
              <Route path="/signUp" exact={true} element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { Mycontext };
