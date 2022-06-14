import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="Type things ..." />
        <button>Add</button>
      </div>

      <div>
        <p>Unfinished</p>
        <ul>
          <div>
            <li>aaa</li>
            <button>Finished</button>
            <button>Delete</button>
          </div>
          <div>
            <li>bbb</li>
            <button>Finished</button>
            <button>Delete</button>
          </div>
        </ul>
      </div>

      <div>
        <p>Finished</p>
        <ul>
          <div>
            <li>ccc</li>
            <button>Move back</button>
          </div>
          <div>
            <li>ddd</li>
            <button>Move back</button>
          </div>
        </ul>
      </div>
    </>
  );
};
