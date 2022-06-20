import React from "react";
import "./sidebar.css";

import {
  AccountTree,
  LineStyle,
  CompareArrows,
  NotificationsActive,
  Folder,
  AccountCircle,
  BarChart,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Folder className="sidebarIcon" />
              Provider's data
            </li>
            <li className="sidebarListItem">
              <AccountTree className="sidebarIcon" />
              Ontologies
            </li>
            <li className="sidebarListItem">
              <CompareArrows className="sidebarIcon" />
              Mappings
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Statistics</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Statistics
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">System</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NotificationsActive />
              Notifications
            </li>
            <li className="sidebarListItem">
              <AccountCircle />
              Account
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
