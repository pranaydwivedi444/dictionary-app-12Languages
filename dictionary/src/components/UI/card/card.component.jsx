import React from "react";

import "./card.styles.css";
function Card(props) {
  const { word } = props;
  console.log(
    word.meanings.map((el) => el.definitions.map((def) => def.definition))
  );
  if (!word) return <p>Sorry Nothing Found</p>;
  //   return <p>hie</p>;
  return (
    <div className="card__container">
      {word.meanings.map((el) => (
        <div>
          <p>
            Meaning :{" "}
            <strong>
              {el.definitions.map((def) => (
                <>
                  {" "}
                  {def.definition} <hr />{" "}
                </>
              ))}
            </strong>
          </p>

          {el.synonyms.length > 0 && el.antonyms.length > 0 && (
            <p>
              synonyms:{" "}
              {el.synonyms.map((syn) => `${syn}`.padEnd(syn.length + 2, " "))}
              <br />
              antonyms:{" "}
              {el.antonyms.map((ant) => `${ant}`.padEnd(ant.length + 2, " "))}
            </p>
          )}
        </div>
      ))}
      <em>Pronunciation:</em>
      {word?.phonetics[0]?.text && (
        <blockquote>{`${word.phonetics[0].text}`} </blockquote>
      )}
      {word?.phonetics[0]?.audio && (
        <audio src={word.phonetics[0].audio} controls>
          🎤📣🎧 Your Browser Doesn't support Audio
        </audio>
      )}
    </div>
  );
}

export default Card;
