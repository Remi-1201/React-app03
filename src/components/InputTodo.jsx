import React from "react";

// 7- Copy style from [styles.css]
const style = {
  // 7- background-color => backgroundColor
  // 7- [#e2ece9 ]=> ['#e2ece9'], [;]=>[,]
  backgroundColor: "#e2ece9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

// 6- Add props to export to App.jsx
export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    // 7- Add style={style} from [const style]
    // 7- Delete [className="input-area"]
    // 7- Delete [.input-area] in [styles.css]
    <div style={style}>
      {/* 2- inputに対してStateで持っているtodoText変数,
        onChangeTodoText変数を設定 */}
      <input
        placeholder="Type things ..."
        value={todoText}
        // 6- change {onChangeTodoText} to {onChange}
        onChange={onChange}
      />
      {/* 6- change {onClickAdd} to {onClick} */}
      <button onClick={onClick}>Add</button>
    </div>
  );
};
