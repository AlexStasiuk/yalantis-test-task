import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./components/app/app";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Navigate to="/employees/" />} />
      <Route path="/employees/" element={<App />} />
      <Route
        path="/yalantis-test-task/"
        element={<Navigate to="/employees/" />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
