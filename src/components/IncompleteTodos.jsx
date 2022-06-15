import React from "react";

export const IncompleteTodos = (props) => {
  // 6-  propsの中身を取り出す
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Unfinished</p>
      <ul>
        {/* 1- rendering const incompleteTodos
          - (todo)= useStateの引数 */}
        {/* 6- incompleteTodos=> todos */}
        {todos.map((todo, index) => {
          return (
            // 1- need to set [key={todo}]
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>Finished</button>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
