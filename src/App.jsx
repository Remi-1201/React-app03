import React, { useState } from "react";
import "./styles.css";
// 6- add InputTodo component
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // 2- todoText=変数名, setTodoText=関数を更新する
  const [todoText, setTodoText] = useState(" ");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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
    // 3- Update useState
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
    // 4- Update useState
    setIncompleteTodos(newIncompleTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 5- When clicking "Back" button
  const onClickBack = (index) => {
    // 5- completeTodosからの要素をcopy
    const newCompleteTodos = [...completeTodos];
    // 5- indexから1の要素を処理
    newCompleteTodos.splice(index, 1);
    // 5- Add to "Unfinished" list
    const newIncompleTodos = [...incompleteTodos, completeTodos[index]];
    // 5- Update useState
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleTodos);
  };

  return (
    <>
      {/* 6- add InputTodo component -
      - todoText = InputTodo's value
      - todoText, onChange, onClick = props */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
