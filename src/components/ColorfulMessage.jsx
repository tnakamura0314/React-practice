import React from "react";

const ColorfulMessage = (props) => {
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

export default ColorfulMessage;
