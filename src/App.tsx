import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [like, setLike] = useState(false); //like 값은 직접바꾸면안되고, 꼭 setLike를 통해서 바꿔준다
  const [dislike, setDislike] = useState(false); //dislike 값은 직접바꾸면안되고, 꼭 setDislike를 통해서 바꿔준다

  const 클릭시_실행함수 = () => {
    //여기는 좋아요 버튼을 클릭했을때 실행되는 코드들인데,
    //싫어요 누른 상태라면
    if (dislike === true) {
      //싫어요 안누른 상태로 바꿔줘야지
      setDislike(false);
    }
    setLike(!like);
  };
  const 클릭시_실행함수2 = () => {
    //여기는 싫어요 버튼을 클릭했을 때 실행되는 코드들인데,
    //좋아요 누른 상태라면
    if (like === true) {
      //좋아요 안누른상태로 바꿔줘야지
      setLike(false);
    }
    setDislike(!dislike);
  };

  const 좋아요또는취소버튼 = like ? (
    <button onClick={클릭시_실행함수}>좋아요취소</button>
  ) : (
    <button onClick={클릭시_실행함수}>좋아요</button>
  );

  const 싫어요또는취소버튼 = dislike ? (
    <button onClick={클릭시_실행함수2}>싫어요취소</button>
  ) : (
    <button onClick={클릭시_실행함수2}>싫어요</button>
  );

  //////////////////////////////////////////////////////////////
  //   const [like, setLike] = useState(false);
  // const [dislike, setDislike] = useState(false);

  // const 클릭시_실행함수 = () => setLike((prev) => !prev);
  // const 클릭시_실행함수2 = () => setDislike((prev) => !prev);

  //    const 좋아요또는취소버튼 = like !==dislike ? (<div>
  //     <button onClick={클릭시_실행함수}>좋아요취소</button>
  //     <button onClick={클릭시_실행함수2}>싫어요</button></div>
  //   ) : (
  //     <div>
  //     <button onClick={클릭시_실행함수}>좋아요</button>
  //     <button onClick={클릭시_실행함수2}>싫어요취소</button></div>
  //   ) ;
  // return (
  //   <div>
  //     <h1>{좋아요또는취소버튼}</h1>
  //     {/* <h1>{싫어요또는취소버튼}</h1> */}
  //   </div>
  // );
  ///////////////////////////////////////////////////////////////
  // const 싫어요또는취소버튼 = dislike ? (

  // );
  // if (좋아요또는취소버튼) dislike === !dislike;
  // else !좋아요또는취소버튼;
  // like === !like;

  return (
    <div>
      <h1>좋아요/싫어요버튼 구현</h1>
      {좋아요또는취소버튼}
      {싫어요또는취소버튼}
    </div>
  );
}

export default App;
