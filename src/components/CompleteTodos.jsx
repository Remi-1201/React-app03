import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">Finished</p>
      <ul>
        {/* 1- rendering const completeTodos */}
        {/* 6- completeTodos=> todos */}
        {todos.map((todo, index) => {
          return (
            // 1- need to set [key={todo}]
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>Back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
