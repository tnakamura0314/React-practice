//本来34行目の第二引数のnumで警告が出るが、今回無視したいので下記の1行で警告を消してる
/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";

//コンポーネント化（Reactのコンポーネントを作成する場合、ファイルの拡張子をjsxにする！！）
const App = () => {
  // console.log("最初");

  // State [num(動的なStateの変数), setNum(Stateを更新する関数)]  useState(初期値を設定)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // イベントの関数化
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffectは１回だけ走らせたい処理や処理の関心を分離する時に使う
  //最初の１回だけ走らせたいや処理の関心を指定したい変数を第二引数に！（num）
  //またuseEffectの中で使用している関数（faceShowFlag）も通常は第二引数に記述するが、
  //今回numだけ干渉させたいから書かない！そのため、１行目で警告を消してる！
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //下記の1行の場合、37行目だけ警告を消すことができるが、あまり使わない！
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      {/* 外側の{}はjs書くよの波括弧、内側の{}はjsのオブジェクトの波括弧 */}
      {/* cssのプロパティの記述は文字列で囲わないと怒られる 
    　　　　　　　　また、直接cssを書き込む方法と、関数としてcssを作り、適用できる方法の2パターンあり。*/}
      <h1 style={{ color: "red" }}>こんにちは！</h1>

      {/* Propsの使用　　pタグごととかにstyleを各々書いてくと煩雑だからPropsでまとめる
       ※ color="blue" と　お元気ですか？（children）　とかがProps*/}
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>

      {/* イベントはキャメルケースで変数宣言（onClick） */}
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>

      <p>{num}</p>

      {/* faceShowFlagがtrueの時に&&の右辺を表示する */}
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

//他のファイルでも使えるように公開
export default App;

// コンポーネントの補足
// コンポーネントの命名規則について
// １点補足として、コンポーネント名は必ず先頭を大文字から初めるようにしてください。

// [正しい例]
// App
// SomeComponent

// [エラーとなる例]
// app
// someComponent

// [エラーにはならないが推奨されない例]
// Some_component
// Some_Component

// 先頭が大文字で始まり、単語の区切りを大文字とする変数名の付け方を「パスカルケース」と呼びます。
// Reactのコンポーネントはこのパスカルケースで命名しましょう！
