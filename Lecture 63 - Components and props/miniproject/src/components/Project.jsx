import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
function Project() {
  const [tab, setTab] = useState("Home");
    return ( 
        <>
          <nav className="navBar">
            <button onClick={() => setTab("Home")}>Home</button>
            <button onClick={() => setTab("About")}>About</button>
            <button onClick={() => setTab("Contact")}>Contact</button>
            {
              tab === "Home" ? (
                <Home/>
              ) : tab === "About" ? (
                <About/>
              ) : (
                <Contact/>
              )
            }
          </nav>
        </>
     );
}

export default Project;