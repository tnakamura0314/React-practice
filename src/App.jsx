import React from "react";

//コンポーネント化（Reactのコンポーネントを作成する場合、ファイルの拡張子をjsxにする！！）
const App = () => {
  // イベントの関数化
  const onClickButton = () => alert();

  // cssの関数化
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      {/* 外側の{}はjs書くよの波括弧、内側の{}はjsのオブジェクトの波括弧 */}
      {/* cssのプロパティの記述は''シングルクォーテーションで囲わないと怒られる 
    　　　　　　　　また、直接cssを書き込む方法と、関数としてcssを作り、適用できる方法の2パターンあり。*/}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>

      {/* イベントはキャメルケースで変数宣言（onClick） */}
      <button onClick={onClickButton}>ボタン</button>
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
