import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [like, setLike] = useState(false);
  const 클릭시_실행함수 = () => setLike((prev) => !prev);

  const 좋아요또는취소버튼 = like ? (
    <button onClick={클릭시_실행함수}>좋아요취소</button>
  ) : (
    <button onClick={클릭시_실행함수}>좋아요</button>
  );

  return (
    <div>
      <h1>{좋아요또는취소버튼}</h1>
    </div>
  );
}

export default App;
