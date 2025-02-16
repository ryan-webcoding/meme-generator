import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import InputBox from "./component/Input-box/Input-box";
import OpenImageFromLocalButton from "./component/open-image-from-local-button/open-image-from-local-button";
import RequestNewImageButton from "./component/Request-new-image-button/Request-new-image-button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <InputBox />
      <RequestNewImageButton />
      <OpenImageFromLocalButton />
    </>
  );
}

export default App;
