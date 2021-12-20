import { Avatar } from "@material-ui/core";
import styles from "./index.module.css";
function Story({ imageSrc, profilePictureSrc, text }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <Avatar className={styles.avatar} src={profilePictureSrc} />
      <h4>{text}</h4>
    </div>
  );
}

export default Story;
