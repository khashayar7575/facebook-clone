import { Avatar } from "@material-ui/core";
import {
  Flag as FlagIcon,
  SupervisorAccount as SupervisorAccountIcon,
  Message as MessageIcon,
  Storefront as StorefrontIcon,
  VideoLibrary as VideoLibraryIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";
import SidebarItem from "./SideabarItem";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../../store/auth/authSlice";
function Sidebar() {
  const authUser = useSelector(selectAuthUser);
  return (
    <div className={styles.container}>
      <div className={styles.userInfoContainer}>
        <Avatar src={authUser?.photoURL} />
        <h4>{authUser?.displayName}</h4>
      </div>
      <SidebarItem Icon={FlagIcon} label="Pages" />
      <SidebarItem Icon={SupervisorAccountIcon} label="Friends" />
      <SidebarItem Icon={MessageIcon} label="Messenger" />
      <SidebarItem Icon={StorefrontIcon} label="Marketplace" />
      <SidebarItem Icon={VideoLibraryIcon} label="Videos" />
      <SidebarItem Icon={ExpandMoreIcon} label="More" />
    </div>
  );
}

export default Sidebar;
