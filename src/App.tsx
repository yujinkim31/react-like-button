import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  const like반전 = () => setLike((현재like) => !현재like);
  let likeButton = <button onClick={like반전}>좋아요버튼</button>;
  if (like === true) {
    likeButton = <button onClick={like반전}>좋아요취소버튼</button>;
  }
  return (
    <div>
      <h1>좋아요버튼만들기</h1>
      {likeButton}
    </div>
  );

  {
    /* // <div>
    //   like === false ? {<button
    //     onClick={() => {
    //       setLike((like) => false);
    //     }}
    //   >
    //     좋아요버튼
    //   </button>} : {<button
    //     onClick={() => {
    //       setLike((like) => true);
    //     }}
    //   >
    //     좋아요취소버튼
    //   </button>}
      

    //   <button>싫어요버튼</button>
    // </div> */
  }
}

export default App;
