import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./components/app/app";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/yalantis-test-task/"
        element={<Navigate to="/yalantis-test-task/employees/" />}
      />
      <Route path="/yalantis-test-task/employees/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
