import React from "react";
import "./topbar.css";
import {NotificationsNone, Language, Settings, } from "@material-ui/icons";

export default function Topbar() {
  return (
       <div className="topbar">
          <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">lambaadmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBage">2</span>
                </div>
                <div className="topRight">
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBage">2</span>
                </div>
                </div>
                <div className="topRight">
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src= "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 " alt= " "  className="topAvtar"/>
                </div>
            </div>
          </div>
       </div>
   )
}
