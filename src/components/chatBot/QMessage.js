import styles from "./QMessage.module.css";

function frompeople({children}) {
  return(
    <div className={styles.frompeopleContainer}>
      <div className={styles.frompeopleTextContainer}>
        <span>{children}</span>
      </div>
    </div>
  );
}

export default frompeople;