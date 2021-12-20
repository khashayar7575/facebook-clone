import { Avatar } from "@material-ui/core";
import {
  ThumbUp as ThumbUpIcon,
  Share as ShareIcon,
  Comment as CommentIcon,
} from "@material-ui/icons";
import ActionItem from "../../../../ActionItem";
import styles from "./index.module.css";
function Post({ profilePicSrc, imageSrc, username, timestamp, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Avatar src={profilePicSrc} className={styles.avatar} />
        <div className={styles.headerInfo}>
          <h3>{username}</h3>
          <p>{timestamp?.toDate()?.toString()}</p>
        </div>
      </div>
      <div className={styles.main}>{text}</div>
      <div className={styles.options}>
        <ActionItem label="Like" Icon={ThumbUpIcon} color="gray" />
        <ActionItem label="Comment" Icon={CommentIcon} color="gray" />
        <ActionItem label="Share" Icon={ShareIcon} color="gray" />
      </div>
    </div>
  );
}

export default Post;
