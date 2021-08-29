import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleReClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Reversed Text", "success");
  };

  const handleCopy = () => {
    console.log("Copy Text Demo");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  };

  const handleClear = () => {
    console.log("Clearing Text");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleExtra =()=>{
    console.log("Removing Additional Spaces");
    let newText=text.split(/[ ]+ /);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here2");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#2c2c2c",
        }}
      >
        <h1
        /* className={`text-${props.mode === "dark" ? "light" : "dark"}`}
          onClick={props.titleMode} */
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "#2c2c2c",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleReClick}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtra}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#2c2c2c",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(' ').filter(function(n) { return n !== '' }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
