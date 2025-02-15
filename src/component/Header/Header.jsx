import style from "./Header.module.css";
export default function Header() {
  return (
    <>
      <div className={style.header}>
        <img
          className={style.titleImg}
          src="/image/Trollface.png"
          alt="troll face"
        />
        <h1 className={style.title}>Meme Generator</h1>
      </div>
    </>
  );
}
