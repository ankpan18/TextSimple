import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c2c2c";
      showAlert("Dark Mode has been enabled", "success");
      document.title="TextSimple- Dark Mode";

      // setInterval(() => {
      //   document.title="Enter Password";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Your Card Details";
      // }, 2500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title="TextSimple- Light Mode";

    }
  };


  /* My attempt
   const titleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }; */

  return (
    <>
    {/* <Router> */}
      <Navbar title="Fastify" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch> */}
        {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm
          showAlert={showAlert}
          heading="Enter the text to Analyze Below"
          mode={mode} />           
          {/* </Route>
        </Switch> */}
      </div>
        {/* </Router> */}
    </>
  );
}

export default App;
