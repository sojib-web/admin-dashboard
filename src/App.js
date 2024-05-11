import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import { createContext, useState } from "react";

const Mycontext = createContext();
function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
  };

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        <Header />

        <div className="main d-flex">
          <div
            className={`sidebarWrapper ${
              isToggleSidebar === true ? "toggle" : ""
            }`}
          >
            <Sidebar />
          </div>

          <div
            className={`content ${isToggleSidebar === true ? "toggle" : ""}`}
          >
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { Mycontext };
