'use client'
import styles from "../styles/search.module.css"
import { useState } from "react";
import axios from "axios";

export default function Search({getSearchResults}){
  const [query, setQuery] = useState('');

  const handleSearch = async(e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_IXjpvNyYLAGvB1C0zuX7RYaRvSaD5ipAddress=${query}`
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