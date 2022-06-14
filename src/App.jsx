import React, { useEffect, useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);
  const [completeTodos, setCompleteTodos] = useState(["aaa", "bbb"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="Type things ..." />
        <button>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">Unfinished</p>
        <ul>
          {/* 1- rendering const incompleteTodos
           - (todo)= useStateの引数 */}
          {incompleteTodos.map((todo) => {
            return (
              // 1- need to set [key={todo}]
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>Finished</button>
                <button>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">Finished</p>
        <ul>
          {/* 1- rendering const completeTodos */}
          {completeTodos.map((todo) => {
            return (
              // 1- need to set [key={todo}]
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>Move back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
