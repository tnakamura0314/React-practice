import React from "react";

export const ColorfulMessage = (props) => {
  // console.log("カラフル");
  // 分割代入でprops.colorと指定したものをcolorだけで呼び出せるようにしている
  const { color, children } = props;

  const contentStyle = {
    //color: colorのようにjsの変数が当てはめるものと一致している場合、colorだけでもOK！
    color: color,
    fontSize: "18px"
  };

  // props.childrenとすることで、<p>元気です！</p>の中身が取得できる！
  return <p style={contentStyle}>{children}</p>;
};

//3行目の変数宣言のところにexportとつけるやり方の2パターンあり
// App.jsでimportする時に、関数名を{}ブラケットで囲うかが異なる。
//下記の場合、{}で囲う必要なし！
// export default ColorfulMessage;
