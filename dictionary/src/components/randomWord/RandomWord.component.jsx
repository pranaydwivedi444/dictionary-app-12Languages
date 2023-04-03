import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import axios from "axios";

function RandomWord() {
  const [randomWord, setRandomWord] = useState("");
  const randomWordAPI = async () => {
    try {
      const newWord = await fetch("https://random-word-api.herokuapp.com/word");
      const newWordJson = await newWord.json();
      console.log(newWordJson);
      const wordStatus = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${newWordJson}`
      );
      setRandomWord(wordStatus.data);
      console.log(randomWord);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    randomWordAPI();
  }, []);

  if (!randomWord) {
    return null;
  }

  return (
    <div className="randomWord__container">
      <div className="randomWord_card">
        <Card sx={{ minWidth: "15rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              {randomWord?.[0]?.word}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {randomWord?.[0]?.meanings?.[0]?.partOfSpeech}
            </Typography>
            <Typography variant="body2">
              {randomWord?.[0]?.meanings?.[0]?.definitions?.[0]?.definition}
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default React.memo(RandomWord);
