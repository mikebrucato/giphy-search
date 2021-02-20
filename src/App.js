import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [search, setSearch] = useState("")
  
  return (
    <div className="App">
     <form>
       <input
        placeholder="search giphy"
        type="text"
        value="" //search
        onChange="" // handleSearchChange
       />
       <input
        type="submit"
        value="submit"
        onclick="" // handleSubmit
       />
     </form>
     // giphys searched
    </div>
  );
}

