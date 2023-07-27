import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Switch } from "@mui/material";
import "./styles.css";
export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <div className="menu-button">
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon style={{ color: "var(--white)" }} />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <a href="/">
            <p className="links">Home</p>
          </a>
          <a href="/compare">
            <p className="links">Compare</p>
          </a>
          <a href="/dashboard">
            <p className="links">Dashboard</p>
          </a>
          
        </div>
      </Drawer>
    </div>
  );
}
