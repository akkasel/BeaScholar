import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import homelogoSvg from "../img/homelogo.svg";
import miclogoSvg from "../img/miclogo.svg";
import personlogoSvg from "../img/personlogo.svg";
import documentlogoSvg from "../img/documentlogo.svg";


function SideBar() {
    return (
        <Sidebar backgroundColor="#CA3C4F" className="sidebar-container">
        <Menu
        menuItemStyles={{
            button: {
            // Styling for the active menu item
            "&.active": {
                backgroundColor: "#772F32", // Change this to the desired color
                color: "#FFFFFF", // Change this to the desired color
            },
            // Styling for the hover state
            "&:hover": {
                backgroundColor: "#772F32", // Dark red color
                color: "#FFFFFF", // White color
            },
            },
        }}
        >
        <MenuItem className="menu-item">
            <img
            src={homelogoSvg}
            alt="Icon"
            style={{
                marginTop: "5px",
                marginRight: "15px",
                width: "20px",
                height: "18px",
            }}
            />
            <Link className="link-menu-item" to="/home">
            Dashboard
            </Link>
        </MenuItem>
        <MenuItem className="menu-item">
            <img
            src={miclogoSvg}
            alt="Icon"
            style={{
                marginTop: "5px",
                marginRight: "15px",
                width: "20px",
                height: "18px",
            }}
            />
            <Link className="link-menu-item" to="/interview">
            Interview
            </Link>
        </MenuItem>
        <MenuItem className="menu-item">
            <img
            src={documentlogoSvg}
            alt="Icon"
            style={{
                marginTop: "5px",
                marginRight: "15px",
                width: "20px",
                height: "18px",
            }}
            />
            <Link className="link-menu-item" to="/document">
            Dokumen
            </Link>
        </MenuItem>
        <MenuItem className="menu-item">
            <img
            src={personlogoSvg}
            alt="Icon"
            style={{
                marginTop: "5px",
                marginRight: "15px",
                width: "20px",
                height: "18px",
            }}
            />
            <Link className="link-menu-item" to="/profile">
            Profile
            </Link>
        </MenuItem>
        </Menu>
        </Sidebar>
    )
}

export default SideBar;