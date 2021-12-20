import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { useSelector } from "react-redux";

import {
  Home as HomeIcon,
  Search as SearchIcon,
  Flag as FlagIcon,
  SubscriptionsOutlined as SubscriptionsOutlinedIcon,
  StorefrontOutlined as StorefrontOutlinedIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
  Add as AddIcon,
  ExpandMore as ExpandMoreIcon,
  Forum as ForumIcon,
  NotificationsActive as NotificationsActiveIcon,
} from "@material-ui/icons";
import { auth as firebaseAuth } from "../../firebase/firebase";
import { selectAuthUser } from "../../store/auth/authSlice";
import HeaderOption from "./HeaderOption";

import styles from "./index.module.css";
import React from "react";
function Header() {
  const authUser = useSelector(selectAuthUser);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    firebaseAuth.signOut();
  };
  return (
    <div className={styles.container}>
      <div className={styles.headerLeft}>
        <img
          className={styles.logo}
          src="/images/logo.png"
          alt="Facebook logo"
        />
        <div className={styles.searchContainer}>
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className={styles.headerCenter}>
        <div className={styles.options}>
          <HeaderOption Icon={HomeIcon} />
          <HeaderOption Icon={FlagIcon} />
          <HeaderOption Icon={SubscriptionsOutlinedIcon} />
          <HeaderOption Icon={StorefrontOutlinedIcon} />
          <HeaderOption Icon={SupervisedUserCircleIcon} />
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.userInfo}>
          <Avatar src={authUser?.photoURL} />
          <span>{authUser?.displayName}</span>
        </div>
        <div className={styles.headerRightActionsList}>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon onClick={handleClick} />
          </IconButton>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem disabled onClick={handleClose}>
            Profile
          </MenuItem>
          <MenuItem disabled onClick={handleClose}>
            My account
          </MenuItem>
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
