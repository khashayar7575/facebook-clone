import styles from "./index.module.css";
function HeaderOption({ Icon, className }) {
  return (
    <div className={`${styles.option} ${className}`}>
      {Icon && <Icon fontSize="large" />}
    </div>
  );
}

export default HeaderOption;
