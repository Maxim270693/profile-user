import React from "react";
import { Header } from "./feature/Header";
import { Footer } from "./feature/Footer";
import { Register } from "./feature/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
