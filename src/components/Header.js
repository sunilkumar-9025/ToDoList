import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header_logo">
        <HighlightIcon fontSize="large" />
        ToDoList
      </h1>
    </header>
  );
};

export default Header;
