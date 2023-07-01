import React from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/data";
import {UilSignOutAlt} from "@iconscout/react-unicons";
import { useState ,useEffect} from "react";


const Sidebar = () => {

    const [active,setActive]=useState(1);

    const handleSelection = (id) =>{
        
        setActive(id)
    }

    //     const [activeItem, setActiveItem] = useState(null);
      
    //     useEffect(() => {
    //       // Retrieve the active item from localStorage on component mount
    //       const storedActiveItem = localStorage.getItem('activeItem');
    //       if (storedActiveItem) {
    //         setActiveItem(storedActiveItem);
    //       }
    //     }, []);
      
    //     // Rest of your component code

    //   const handleSelection = (id) => {
    //     setActiveItem(id);
    //     localStorage.setItem('activeItem', id); // Store the active item in localStorage
    //   };


  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* Menu */}
      <div className="menu">
        {SidebarData.map((ele) => {
          return (
            <div className= {`menu-Item ${ele.id === active ? 'active': " "}` } key={ele.id}  onClick={()=>{handleSelection(ele.id)}}>
              <ele.icon />
              <span>{ele.heading}</span>
            </div>
          );
        })}
        <div className="menu-Item">
            <UilSignOutAlt/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
