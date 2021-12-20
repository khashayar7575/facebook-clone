import styles from "./index.module.css";
function SidebarItem({ Icon, label }) {
  return (
    <div className={styles.container}>
      {Icon && <Icon />} <span>{label}</span>
    </div>
  );
}

export default SidebarItem;
