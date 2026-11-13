
import React, { useState } from "react";
import BootScreen from "./components/BootScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  const [booted, setBooted] = useState(
    sessionStorage.getItem("portfolioBooted") === "true"
  );

  const handleBootComplete = () => {
    sessionStorage.setItem("portfolioBooted", "true");
    setBooted(true);
  };

  return (
    <>
      {!booted && (
        <BootScreen onComplete={handleBootComplete} />
      )}
      <Navbar />
      <main>
        {/* Your portfolio sections will go here */}
        <Hero />

        <div className="container" style={{ paddingTop: "100px" }}>
          <h1 className="section-heading">
            Welcome to <span>Yogyashri's Portfolio</span>
          </h1>
        </div>
      </main>
    </>
  );
}

export default App;
