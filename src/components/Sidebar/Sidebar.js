import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div>
        <a href="http://#">Profile</a>
      </div>
      <div>
        <a href="http://#">Messages</a>
      </div>
      <div>
        <a href="http://#">News</a>
      </div>
      <div>
        <a href="http://#">Photos</a>
      </div>
      <div>
        <a href="http://#">Music</a>
      </div>
      <div>
        <a href="http://#"> Video</a>
      </div>
    </nav>
  );
};

export default Sidebar;
