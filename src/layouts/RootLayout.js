import { NavLink, Outlet } from "react-router-dom";
import LightOff from "../imgs/bulb_off_noBack.png";
import "./root-layout.css";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <div className="bulb">
        <img className="light" src={LightOff} alt="Light Image" />        
        <NavLink className="switch light-logo-on" to="main">Turn On
        </NavLink>
        <NavLink className="switch light-logo-off" to="/">Turn Off
        </NavLink>
      </div>
      <div className="space"> </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

