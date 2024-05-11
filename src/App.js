import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import { createContext, useState } from "react";
import Login from "./Pages/Login/Login";

const Mycontext = createContext();
function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false)
  const [isHideSiderbarAndHeader, setIsHideSiderbarAndHeader] = useState(false)

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSiderbarAndHeader,
    setIsHideSiderbarAndHeader
  };

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        {
          isHideSiderbarAndHeader !== true && <Header />}


        <div className="main d-flex">
          {
            isHideSiderbarAndHeader !== true &&
            <div
              className={`sidebarWrapper ${isToggleSidebar === true ? "toggle" : ""
                }`}
            >
              <Sidebar />
            </div>
          }


          <div
            className={`content ${isHideSiderbarAndHeader === true && 'full'} ${isToggleSidebar === true ? "toggle" : ""}`}
          >
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />
            </Routes>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { Mycontext };
