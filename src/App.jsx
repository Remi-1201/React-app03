import React, { useEffect, useState } from "react";
import "./styles.css";

export const App = () => {
  // 2- todoText=変数名, setTodoText=関数を更新する
  const [todoText, setTodoText] = useState(" ");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);
  const [completeTodos, setCompleteTodos] = useState(["ccc"]);

  // 2- 入力値によるtodoText変数の変化を反映する関数を定義
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 2- when clicking "Add" button
  const onClickAdd = () => {
    // 2- do nothing if the input is blank
    if (todoText === "") return;
    // 2- define new array for values to be appended orderly ([...])
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // 2- Undo the input
    setTodoText("");
  };

  // 3- when clicking "Delete" button
  const onClickDelete = (index) => {
    // 3- incompleteTodosからの要素をcopy
    const newTodos = [...incompleteTodos];
    // 3- indexから1の要素を削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 4- when clicking "Finished" button
  const onClickComplete = (index) => {
    // 4- incompleteTodosからの要素をcopy
    const newIncompleTodos = [...incompleteTodos];
    // 4- indexから1の要素を処理
    newIncompleTodos.splice(index, 1);
    // 4- create new Finished list
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // 4- change
    setIncompleteTodos(newIncompleTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        {/* 2- inputに対してStateで持っているtodoText変数,
         onChangeTodoText変数を設定 */}
        <input
          placeholder="Type things ..."
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">Unfinished</p>
        <ul>
          {/* 1- rendering const incompleteTodos
           - (todo)= useStateの引数 */}
          {incompleteTodos.map((todo, index) => {
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
