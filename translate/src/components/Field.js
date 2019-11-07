import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  //static contextType adds the property to the class itself. Allows us to reference the context file.
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "Naam";

    return (
      <div className="ui field">
        <label> {text} </label>
        <input />
      </div>
    );
  }
}

export default Field;
