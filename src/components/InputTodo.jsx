import React from "react";

// 6- Add props to export to App.jsx
export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <div className="input-area">
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
