// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removebodyclasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
  };
  var toggleMode = (cls) => {
    removebodyclasses();
    document.body.classList.add("bg-" + cls);
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.title = "My-app Dark mode";
      showAlert("Dark mode has been enabled", "success");
      // setBtnText("Dark mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "My-app Light mode";
      // setBtnText("Light mode");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Alert alert={alert} />

        <Navbar
          first="Home"
          second="About"
          third="Contact Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <About mode={mode} />
        <TextForm
                heading="Play with Words"
                // showAlert={showAlert}
                mode={mode}
              />
        {/* <Routes>
          <Route
            path="/TextForm"
            element={
              <TextForm
                heading="Play with Words"
                // showAlert={showAlert}
                mode={mode}
              />
            }
          />
          <Route path="/About" element={<About mode={mode} />} />
        </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
