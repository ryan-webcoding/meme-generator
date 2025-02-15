import styles from "./Input-box.module.css";
export default function InputBox() {
  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.topTextContainer}>
          <h2 className={styles.topText}>Top Text</h2>
          <input className={styles.inputBox} type="text" />
        </div>
        <div className={styles.bottomTextContainer}>
          <h2 className={styles.bottomText}>Bottom Text</h2>
          <input className={styles.inputBox} type="text" />
        </div>
      </div>
    </>
  );
}
