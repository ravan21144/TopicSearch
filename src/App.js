import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TopicSearch from "./Components/TopicSearch";

const App = () => {
  <Routes>
    <Route element={<TopicSearch/>} path="/"></Route>
  </Routes>
};

export default App;
