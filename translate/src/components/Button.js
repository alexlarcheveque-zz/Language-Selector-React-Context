import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  langChange(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  colorChange(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.langChange(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.colorChange(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
