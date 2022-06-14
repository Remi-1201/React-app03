import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Type things ..." />
        <button>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">Unfinished</p>
        <ul>
          <div className="list-row">
            <li>aaa</li>
            <button>Finished</button>
            <button>Delete</button>
          </div>
          <div className="list-row">
            <li>bbb</li>
            <button>Finished</button>
            <button>Delete</button>
          </div>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">Finished</p>
        <ul>
          <div className="list-row">
            <li>ccc</li>
            <button>Move back</button>
          </div>
          <div className="list-row">
            <li>ddd</li>
            <button>Move back</button>
          </div>
        </ul>
      </div>
    </>
  );
};
