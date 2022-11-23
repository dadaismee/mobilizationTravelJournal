import React from "react"
import './App.css'
import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import data from "./data"

function App() {
  const places = data.map(place => {
    return <Card 
              key={place.id}
              place={place}
            />
  })
  
  return (
    <div className="App">
      <Navbar />
      <div className="App__cards-container">
        {places}
      </div>
      <Footer />
    </div>
  )
}

export default App
