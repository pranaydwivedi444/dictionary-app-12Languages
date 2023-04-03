import React from "react";
import Card from "../UI/card/card.component";
import "./Defination.styles.css";

function Defination({ meaning }) {
  console.log(meaning);
  if (!meaning) return <p>SERVER ISSUE</p>;
  return (
    <div className="defination__container">
      {meaning.data.map((words) => {
        return (
          <>
            <Card word={words} />{" "}
          </>
        );
      })}
    </div>
  );
}

export default Defination;
