/* eslint react-hooks/exhaustive-deps: off
 */

import React, { useEffect, useState } from "react";
import { ColofulMessage } from "./components/ColofulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwithShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //関心の分離
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwithShowFlag}>on/off</button>
      <p> {num} </p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
