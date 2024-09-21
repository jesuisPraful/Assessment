// AvatarWithStatus.js

import React from "react";
import styles from "./Avatar.module.css";

const AvatarWithStatus = ({ statusColor, grouping, indashBoard }) => {
  return (
    <>
    {indashBoard ? ( <div className={styles.avatarContainer}>
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1675876811959-ae0358cbf0e7?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="MG"
            className={styles.avatar}
          />
          <span
            className={styles.status}
            style={{ backgroundColor: statusColor }}
          />
        </div>):(<div></div>)}

    
      {/* {grouping !== undefined && grouping !== "user" ? (
        <div className={styles.avatarContainer}>
          <img
            src={
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-caFI7LjxM-erobG_E-_OF-u1iIIUAvM3vqq3pqZIAZ2XQKoV"
            }
            alt="MG"
            className={styles.avatar}
          />
          <span
            className={styles.status}
            style={{ backgroundColor: statusColor }}
          />
        </div>
      ) : (
        <div></div>
      )} */}

      {/* <div className={styles.avatarContainer}>
        <img
          src={
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-caFI7LjxM-erobG_E-_OF-u1iIIUAvM3vqq3pqZIAZ2XQKoV"
          }
          alt="MG"
          className={styles.avatar}
        />
        <span
          className={styles.status}
          style={{ backgroundColor: statusColor }}
        />
      </div> */}
    </>
  );
};

export default AvatarWithStatus;
