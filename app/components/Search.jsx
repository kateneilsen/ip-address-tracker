'use client'
import styles from "../styles/search.module.css"
import { useState } from "react";
import axios from "axios";

export default function Search({getSearchResults}){
  const [query, setQuery] = useState('');

  const handleSearch = async(e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=da125f6470624dbbb8456f149765f748&ip=${query}`
    );
    getSearchResults(response.data);
  }

    return (
        <section className={styles.top}>
        <h1>IP Address Tracker</h1>
        <div className={styles.search}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for any IP address or domain"
          />
          <button onClick={handleSearch}>
            <img src="../images/icon-arrow.svg" alt="arrow right" />
          </button>
        </div>
      </section>
    
    );
  };