import "./Dictionary.styles.css";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Header from "../Header/Header.component";
import axios from "axios";
import RandomWord from "../randomWord/RandomWord.component";
import Defination from "../Defination/Defination.component";

function Dictionary() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [wordMeaning, setMeaning] = useState(null);
  const fetchDictonaryMeaning = async () => {
    try {
      const wordStatus = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeaning(wordStatus);
      console.log(wordStatus, category, word);
    } catch (error) {
      console.log(error);
      setMeaning(null); // Set meaning to null to display SERVER ISSUE message
    }
  };

  useEffect(() => {
    if (word == " ") return;
    fetchDictonaryMeaning();
  }, [word, category]);
  return (
    <div className="main__container">
      <Container maxWidth="md">
        <Header
          setWord={setWord}
          word={word}
          category={category}
          setCategory={setCategory}
        />
        {!word && <RandomWord />}
        {wordMeaning && <Defination meaning={wordMeaning} />}
      </Container>
    </div>
  );
}

export default Dictionary;
