import React from "react";
import styles from "./Alert.module.css";

const Alert = ({ type, text }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.alert} ${
          type === "danger" ? styles.darkRed : styles.darkBlue
        }`}
        role="alert"
      >
        <p
          className={`${styles.title} ${
            type === "danger" ? styles.red : styles.blue
          }`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
