import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchForm from "./ResearchForm";
import CardList from "./CardList";
import  "../styles/Engine.css"

const Engine = () => {
    const [cards, setCards] = useState([]); 
  
    const handleSearch = (formData) => {

        axios
          .post("http://localhost:5000/api/cases/search", formData)
          .then((response) => {
            setCards(response.data); 
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
  
    return (
      <div className="engine">
        <Navbar />
        <h1>Commercial Legal Search Engine</h1>
        <SearchForm onSearch={handleSearch} />
        {cards.length > 0 && <CardList cards={cards} />}
      </div>
    );
  };
  

export default Engine;