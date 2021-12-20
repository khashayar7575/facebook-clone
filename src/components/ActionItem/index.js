import styles from "./index.module.css";
function ActionItem({ Icon, label, color = "green" }) {
  return (
    <div className={styles.action}>
      {Icon && <Icon style={{ color: color }} />} <span>{label}</span>
    </div>
  );
}

export default ActionItem;
