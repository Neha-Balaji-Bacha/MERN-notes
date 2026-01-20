import { useState } from 'react'
// import About from './components/About'
// import Card from './components/Card'
// import Contact from './components/Contact'
// import Home from './components/Home'
import Project from './components/Project'
// import ParentCard from './components/ParentCard'
// import GrandParentCard from './s/GrandParentCard'
// import Child from './components/Child'
// import BrandPage from './components/handson/BrandPage'
// import ContactUs from './components/handson/ContactUs'

function App() {
  // const [tab, setTab] = useState("Home");
  return (
    <>
      {/* <button onClick={() => setTab("Home")}>Home</button>
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
      } */}
      <Project/>
       {/* <Card>
        <h2>Neha</h2>
        <p>I have completed B.tech</p>
       </Card> */}

     {/* <GrandParentCard name="Nikita"></GrandParentCard> */}
     {/* <BrandPage/> */}
     {/* <ContactUs/> */}
    </>
  )
}

export default App
