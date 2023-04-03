import { MenuItem, TextField } from "@mui/material";
import React from "react";
import categories from "../../data/data-lan";
import "./Header.styles.css";
import { debounce } from "lodash";

function Header({ word, setWord, category, setCategory }) {
  const wordHandler = debounce((value) => {
    setWord(value);
  }, 1000);
  return (
    <div>
      <h1 className="header__title">
        {word || "Aarth - The Dictionary || Find your word 📚"}
      </h1>
      <div className="header__input">
        <TextField
          id="standard-basic"
          label="Enter your word here"
          variant="standard"
          // value={word}
          onChange={(e) => wordHandler(e.target.value)}
          className="header__textField"
          sx={{
            margin: "0.5rem",
          }}
        />
        <TextField
          select
          defaultValue="English"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          label="Select Language"
          helperText="Please select your language"
          className="header__textField"
          sx={{
            margin: "0.5rem",
          }}
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
}

export default Header;
